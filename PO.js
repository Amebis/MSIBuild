/*
    Copyright 1991-2017 Amebis
    Copyright 2016 GÉANT

    This file is part of MSIBuild.

    MSIBuild is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    MSIBuild is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with MSIBuild. If not, see <http://www.gnu.org/licenses/>.
*/

/*@cc_on @*/
/*@if (! @_escapePO_JS__) @*/
/*@set @_escapePO_JS__ = true @*/


var escapePO_stat = null;
function escapePO(str)
{
	if (!escapePO_stat) {
		escapePO_stat = {
			"re_bslash": new RegExp("\\\\", "g"),
			"re_bs":     new RegExp("\b",   "g"),
			"re_ff":     new RegExp("\f",   "g"),
			"re_lf":     new RegExp("\n",   "g"),
			"re_cr":     new RegExp("\r",   "g"),
			"re_tab":    new RegExp("\t",   "g"),
			"re_quot":   new RegExp("\"",   "g")
		};
	}

	if (str == null) return null;
	switch (typeof(str)) {
		case "string":    break;
		case "undefined": return null;
		default:          try { str = str.toString(); } catch (err) { return null; }
	}

	return str.replace(escapePO_stat.re_bslash, "\\\\").replace(escapePO_stat.re_bs, "\\b").replace(escapePO_stat.re_ff, "\\f").replace(escapePO_stat.re_lf, "\\n").replace(escapePO_stat.re_cr, "\\r").replace(escapePO_stat.re_tab, "\\t").replace(escapePO_stat.re_quot, "\\\"");
}


var unescapePO_stat = null;
function unescapePO(str)
{
	if (!unescapePO_stat) {
		unescapePO_stat = {
			"re_esc": new RegExp("\\\\(.)", "g"),
			"fn_esc": function($0, $1) {
				switch ($1) {
					case "\\": return "\\";
					case "b" : return "\b";
					case "f" : return "\f";
					case "n" : return "\n";
					case "r" : return "\r";
					case "t" : return "\t";
					case "\'": return "\'";
					case "\"": return "\"";
					default  : return $0;
				}
			}
		};
	}

	if (str == null) return null;
	switch (typeof(str)) {
		case "string":    break;
		case "undefined": return null;
		default:          try { str = str.toString(); } catch (err) { return null; }
	}

	return str.replace(unescapePO_stat.re_esc, unescapePO_stat.fn_esc);
}


function POCatalog()
{
	this.charset = "utf-8";
	this.data = new Array();

	if (arguments.length) {
		var
			path = arguments[0];

		// Open file.
		var dat = new ActiveXObject("ADODB.Stream");
		dat.Open();
		try {
			// PO catalogue is text file, uses Unix line breaks and UTF-8.
			dat.Type = adTypeText;
			dat.LineSeparator = adLF;
			dat.Charset = this.charset;

			// Load file.
			dat.LoadFromFile(path);

			// Prepare regular expressions for catalogue parsing.
			var regexp = {
				"fuzzy":   new RegExp("^\\s*#,\\s*fuzzy", "i"),
				"comment": new RegExp("^\\s*#", ""),
				"record":  new RegExp("^\\s*(\\w*)\\s*\"(.*)\"\\s*$", "")
			};

			var getNext = function() {
				var
					id = null,
					rec = new Array();

				while (!dat.EOS) {
					var
						s = Trim(dat.ReadText(adReadLine)),
						m;

					// The line is empty => end of record.
					if (s == "" && "msgid" in rec)
						break;

					// The record is marked as "fuzzy".
					if (s.search(regexp.fuzzy) != -1) {
						rec["fuzzy"] = true;
						continue;
					}

					// Concatenate comments.
					if (s.search(regexp.comment) != -1) {
						if ("#" in rec)
							rec["#"] += s + "\n";
						else
							rec["#"]  = s + "\n";
						continue;
					}

					m = s.match(regexp.record);
					if (m) {
						// Record found.
						if (m[1] != "")
							id = new String(m[1]);
						if (id in rec)
							rec[id] += new String(m[2]);
						else
							rec[id]  = new String(m[2]);
						continue;
					}
				}

				// Unescape messages now that they are concatenated.
				for (id in rec)
					rec[id] = unescapePO(rec[id]);
				return "msgid" in rec ? rec : null;
			}

			// Read header record.
			var rec = getNext();
			if (rec == null)
				return;
			if (rec.msgid == "") {
				// Parse charset.
				m = rec.msgstr.match(new RegExp("^\\s*Content-Type\\s*:\\s*([-\\w]+/[-\\w]+)\\s*(;\\s*charset\\s*=\\s*([-\\w]+))?$", "im"));
				if (m && m.length >= 4) {
					this.charset = m[3];

					// Rewind and reconfigure code page.
					dat.Position = 0;
					dat.Charset = this.charset;

					// Re-read header.
					rec = getNext();
				}
			}

			// Load header and all the records.
			this.push(rec.msgid, rec.msgstr, rec.fuzzy, "#" in rec ? rec["#"] : null);
			while ((rec = getNext()) != null)
				this.push(rec.msgid, rec.msgstr, rec.fuzzy, "#" in rec ? rec["#"] : null);
		} finally {
			dat.Close();
		}
	}
}


POCatalog.prototype.push = function(key, trans, fuzzy, comment)
{
	var rec = {
		"msgstr" : trans,
		"fuzzy"  : fuzzy ? true : false
	};
	if (comment)
		rec["#"] = comment;

	this.data[key] = rec;
}


POCatalog.prototype.search = function(key)
{
	return (key in this.data) ? this.data[key] : null;
}


POCatalog.prototype.translate = function(key)
{
	if (!(key in this.data)) {
		// No translation found.
		return key;
	}

	var rec = this.data[key];
	if (rec.msgstr == "" || rec.fuzzy) {
		// Translation is blank (untranslated) or fuzzy.
		return key;
	}

	return rec.msgstr;
}


POCatalog.prototype.save = function(path)
{
	// Open PO file in memory.
	var dat = new ActiveXObject("ADODB.Stream");
	dat.Open();
	try {
		// PO is text file, uses Unix line breaks and given encoding.
		dat.Type = adTypeText;
		dat.LineSeparator = adLF;
		dat.Charset = this.charset;

		var writeRec = function(key, rec) {
			if (rec.fuzzy)
				dat.WriteText("#, fuzzy", adWriteLine);

			if ("#" in rec)
				dat.WriteText(rec["#"], adWriteLine);

			dat.WriteText("msgid \""  + escapePO(key       ) + "\"", adWriteLine);
			dat.WriteText("msgstr \"" + escapePO(rec.msgstr) + "\"", adWriteLine);
			dat.WriteText("", adWriteLine);
		}

		// Write header first.
		if ("" in this.data)
			writeRec("", this.data[""]);

		// Write records, skip header.
		for (var key in this.data) {
			if (key == "") continue;
			writeRec(key, this.data[key]);
		}

		if (this.charset.toLowerCase() == "utf-8") {
			// Write to file without UTF-8 BOM.
			var dat_nobom = new ActiveXObject("ADODB.Stream");
			dat_nobom.Type = adTypeBinary;
			dat_nobom.Mode = adModeReadWrite;
			dat_nobom.Open();
			try {
				// Skip BOM (first three bytes) and copy the rest.
				dat.Position = 3;
				dat.CopyTo(dat_nobom);

				dat_nobom.SaveToFile(path, adSaveCreateOverWrite);
			} finally {
				dat_nobom.Close();
			}
		} else {
			dat.SaveToFile(path, adSaveCreateOverWrite);
		}
	} finally {
		dat.Close();
	}
}
/*@end @*/

// SIG // Begin signature block
// SIG // MIIbHwYJKoZIhvcNAQcCoIIbEDCCGwwCAQExCzAJBgUr
// SIG // DgMCGgUAMGcGCisGAQQBgjcCAQSgWTBXMDIGCisGAQQB
// SIG // gjcCAR4wJAIBAQQQEODJBs441BGiowAQS9NQkAIBAAIB
// SIG // AAIBAAIBAAIBADAhMAkGBSsOAwIaBQAEFEQ81oNKYh/L
// SIG // gqNVhoufx1PGZuv8oIIKLzCCBM4wggO2oAMCAQICEDB6
// SIG // NnqqPmiBpvlPCMs7OWQwDQYJKoZIhvcNAQELBQAwfzEL
// SIG // MAkGA1UEBhMCVVMxHTAbBgNVBAoTFFN5bWFudGVjIENv
// SIG // cnBvcmF0aW9uMR8wHQYDVQQLExZTeW1hbnRlYyBUcnVz
// SIG // dCBOZXR3b3JrMTAwLgYDVQQDEydTeW1hbnRlYyBDbGFz
// SIG // cyAzIFNIQTI1NiBDb2RlIFNpZ25pbmcgQ0EwHhcNMTUx
// SIG // MDA5MDAwMDAwWhcNMTgxMTA3MjM1OTU5WjBhMQswCQYD
// SIG // VQQGEwJTSTERMA8GA1UECBMIU2xvdmVuaWExDzANBgNV
// SIG // BAcTBkthbW5pazEWMBQGA1UEChQNQW1lYmlzIGQuby5v
// SIG // LjEWMBQGA1UEAxQNQW1lYmlzIGQuby5vLjCCASIwDQYJ
// SIG // KoZIhvcNAQEBBQADggEPADCCAQoCggEBAJfy6Bdwx2kq
// SIG // yGhtaYAZgcA8pWLe7EbyLqBHRq/8jIVfUX1CH7fsbEz1
// SIG // UDgIq74BvilG3BNyjJxh/lbiu2Pr2M0ad3WEy4p0kM9T
// SIG // SmABC8k3Vc5pmJlNy1++uMpNwAbUmbGcD6Igsvk1xPWb
// SIG // ApLoAdnO0KfTfzvRI40A0cGZVGt5y6GPemN6jT8JAp9O
// SIG // KaWIqj3iF00c/FwS7ODZf2w/cMphLjUle+b86GyewVGE
// SIG // MEVO5ZjS9ksEWBDWn9A6XYshSwbDWnx4xmIl0B4DcWVA
// SIG // aY+zqEQzQbzEGC/izPDq44RiCtbhi+QqgQ/6fNXm3hbA
// SIG // GVcYPYa4J5D1UMO+1NC2cPMCAwEAAaOCAWIwggFeMAkG
// SIG // A1UdEwQCMAAwDgYDVR0PAQH/BAQDAgeAMCsGA1UdHwQk
// SIG // MCIwIKAeoByGGmh0dHA6Ly9zdi5zeW1jYi5jb20vc3Yu
// SIG // Y3JsMGYGA1UdIARfMF0wWwYLYIZIAYb4RQEHFwMwTDAj
// SIG // BggrBgEFBQcCARYXaHR0cHM6Ly9kLnN5bWNiLmNvbS9j
// SIG // cHMwJQYIKwYBBQUHAgIwGQwXaHR0cHM6Ly9kLnN5bWNi
// SIG // LmNvbS9ycGEwEwYDVR0lBAwwCgYIKwYBBQUHAwMwVwYI
// SIG // KwYBBQUHAQEESzBJMB8GCCsGAQUFBzABhhNodHRwOi8v
// SIG // c3Yuc3ltY2QuY29tMCYGCCsGAQUFBzAChhpodHRwOi8v
// SIG // c3Yuc3ltY2IuY29tL3N2LmNydDAfBgNVHSMEGDAWgBSW
// SIG // O1PweTOXr32D7y4rzMq3hh5yZjAdBgNVHQ4EFgQU9we9
// SIG // loCaLXTEfww9PSfd1JAKn8wwDQYJKoZIhvcNAQELBQAD
// SIG // ggEBAIpxL0AvtcrbShLKgI7dmLn6WJbpdzkB9e2Cm1Mu
// SIG // AAIiogLFF1n07l0VXZE+gqxGHB8ji2h33t+o1R8PLyyI
// SIG // kdnMhHAd78HsqyZzabfmWuCP12TKBv77wiZkpbTo/Av+
// SIG // z0SlpJRoMpzzXhyPPtHdby80bSu+4RXlewiDCH56aGE4
// SIG // SSk0i8Xa9JJ/ozPKLX3Szdmg6J58XtDH/tq5K1/ABSCB
// SIG // z6SF2Y9l9lRJpGXchSDYCPipSVUGP0WPQRTDNobSwCJD
// SIG // XAz9UFcxWo4Rh8o/gvlLWUH+T3HhmLSRzXqt3JuqJo5x
// SIG // H8s4vPzcGBZZFob8yRB98KD6ioFK2pjRRSw9FucwggVZ
// SIG // MIIEQaADAgECAhA9eNf5dklgsmF99PAeyoYqMA0GCSqG
// SIG // SIb3DQEBCwUAMIHKMQswCQYDVQQGEwJVUzEXMBUGA1UE
// SIG // ChMOVmVyaVNpZ24sIEluYy4xHzAdBgNVBAsTFlZlcmlT
// SIG // aWduIFRydXN0IE5ldHdvcmsxOjA4BgNVBAsTMShjKSAy
// SIG // MDA2IFZlcmlTaWduLCBJbmMuIC0gRm9yIGF1dGhvcml6
// SIG // ZWQgdXNlIG9ubHkxRTBDBgNVBAMTPFZlcmlTaWduIENs
// SIG // YXNzIDMgUHVibGljIFByaW1hcnkgQ2VydGlmaWNhdGlv
// SIG // biBBdXRob3JpdHkgLSBHNTAeFw0xMzEyMTAwMDAwMDBa
// SIG // Fw0yMzEyMDkyMzU5NTlaMH8xCzAJBgNVBAYTAlVTMR0w
// SIG // GwYDVQQKExRTeW1hbnRlYyBDb3Jwb3JhdGlvbjEfMB0G
// SIG // A1UECxMWU3ltYW50ZWMgVHJ1c3QgTmV0d29yazEwMC4G
// SIG // A1UEAxMnU3ltYW50ZWMgQ2xhc3MgMyBTSEEyNTYgQ29k
// SIG // ZSBTaWduaW5nIENBMIIBIjANBgkqhkiG9w0BAQEFAAOC
// SIG // AQ8AMIIBCgKCAQEAl4MeABavLLHSCMTXaJNRYB5x9uJH
// SIG // tNtYTSNiarS/WhtR96MNGHdou9g2qy8hUNqe8+dfJ04L
// SIG // wpfICXCTqdpcDU6kDZGgtOwUzpFyVC7Oo9tE6VIbP0E8
// SIG // ykrkqsDoOatTzCHQzM9/m+bCzFhqghXuPTbPHMWXBySO
// SIG // 8Xu+MS09bty1mUKfS2GVXxxw7hd924vlYYl4x2gbrxF4
// SIG // GpiuxFVHU9mzMtahDkZAxZeSitFTp5lbhTVX0+qTYmEg
// SIG // CscwdyQRTWKDtrp7aIIx7mXK3/nVjbI13Iwrb2pyXGCE
// SIG // nPIMlF7AVlIASMzT+KV93i/XE+Q4qITVRrgThsIbnepa
// SIG // ON2b2wIDAQABo4IBgzCCAX8wLwYIKwYBBQUHAQEEIzAh
// SIG // MB8GCCsGAQUFBzABhhNodHRwOi8vczIuc3ltY2IuY29t
// SIG // MBIGA1UdEwEB/wQIMAYBAf8CAQAwbAYDVR0gBGUwYzBh
// SIG // BgtghkgBhvhFAQcXAzBSMCYGCCsGAQUFBwIBFhpodHRw
// SIG // Oi8vd3d3LnN5bWF1dGguY29tL2NwczAoBggrBgEFBQcC
// SIG // AjAcGhpodHRwOi8vd3d3LnN5bWF1dGguY29tL3JwYTAw
// SIG // BgNVHR8EKTAnMCWgI6Ahhh9odHRwOi8vczEuc3ltY2Iu
// SIG // Y29tL3BjYTMtZzUuY3JsMB0GA1UdJQQWMBQGCCsGAQUF
// SIG // BwMCBggrBgEFBQcDAzAOBgNVHQ8BAf8EBAMCAQYwKQYD
// SIG // VR0RBCIwIKQeMBwxGjAYBgNVBAMTEVN5bWFudGVjUEtJ
// SIG // LTEtNTY3MB0GA1UdDgQWBBSWO1PweTOXr32D7y4rzMq3
// SIG // hh5yZjAfBgNVHSMEGDAWgBR/02Wnwt3su/AwCfNDOfoC
// SIG // rzMxMzANBgkqhkiG9w0BAQsFAAOCAQEAE4UaHmmpN/eg
// SIG // vaSvfh1hU/6djF4MpnUeeBcj3f3sGgNVOftxlcdlWqeO
// SIG // MNJEWmHbcG/aIQXCLnO6SfHRk/5dyc1eA+CJnj90Htf3
// SIG // OIup1s+7NS8zWKiSVtHITTuC5nmEFvwosLFH8x2iPu6H
// SIG // 2aZ/pFalP62ELinefLyoqqM9BAHqupOiDlAiKRdMh+Q6
// SIG // EV/WpCWJmwVrL7TJAUwnewusGQUioGAVP9rJ+01Mj/ty
// SIG // Z3f9J5THujUOiEn+jf0or0oSvQ2zlwXeRAwV+jYrA9zB
// SIG // UAHxoRFdFOXivSdLVL4rhF4PpsN0BQrvl8OJIrEfd/O9
// SIG // zUPU8UypP7WLhK9k8tAUITGCEFwwghBYAgEBMIGTMH8x
// SIG // CzAJBgNVBAYTAlVTMR0wGwYDVQQKExRTeW1hbnRlYyBD
// SIG // b3Jwb3JhdGlvbjEfMB0GA1UECxMWU3ltYW50ZWMgVHJ1
// SIG // c3QgTmV0d29yazEwMC4GA1UEAxMnU3ltYW50ZWMgQ2xh
// SIG // c3MgMyBTSEEyNTYgQ29kZSBTaWduaW5nIENBAhAwejZ6
// SIG // qj5ogab5TwjLOzlkMAkGBSsOAwIaBQCgcDAQBgorBgEE
// SIG // AYI3AgEMMQIwADAZBgkqhkiG9w0BCQMxDAYKKwYBBAGC
// SIG // NwIBBDAcBgorBgEEAYI3AgELMQ4wDAYKKwYBBAGCNwIB
// SIG // FTAjBgkqhkiG9w0BCQQxFgQUqAbXLLtJWOFGjFXpDCLg
// SIG // JGLGNugwDQYJKoZIhvcNAQEBBQAEggEAek5ZzSwKKX3l
// SIG // UB7K8aVFvWfKwFNQhNRzjxX6emBxvLQiaWzf1OFHKAhX
// SIG // 3p1+KfGXcovcfAq8hXwRW+qOrjJc4rP8WZ00DL9A4nIA
// SIG // 9s2yAbl0bwlF0Ks0vnjBg3EUV+C6CagrQtQTDa0yArvO
// SIG // UGb7eLq6Ew7os12y8P/HU7rMtldF+N00t+SZfwGhvNFG
// SIG // qXhq4JMulaJ4jPKrZmeheugcwduqq2/crx1TkASozz5i
// SIG // oERkUNB7yPTHiWMJHh4GxSIdmi9p8XNQH00NwQkKHYdf
// SIG // jicf2Z7Gku51BzWW1CvoU3pKbq09Sz5JAul+7K3RAxVC
// SIG // NrisCuxEPg3sWNYKhoXTC6GCDiswgg4nBgorBgEEAYI3
// SIG // AwMBMYIOFzCCDhMGCSqGSIb3DQEHAqCCDgQwgg4AAgED
// SIG // MQ0wCwYJYIZIAWUDBAIBMIH+BgsqhkiG9w0BCRABBKCB
// SIG // 7gSB6zCB6AIBAQYLYIZIAYb4RQEHFwMwITAJBgUrDgMC
// SIG // GgUABBSRqxEkJnJrxrL/P90grmXE8pBn0QIUZVTMiRBC
// SIG // 9o2x9JFhjCUgnpDJf0MYDzIwMTcxMjIyMDczODIyWjAD
// SIG // AgEeoIGGpIGDMIGAMQswCQYDVQQGEwJVUzEdMBsGA1UE
// SIG // ChMUU3ltYW50ZWMgQ29ycG9yYXRpb24xHzAdBgNVBAsT
// SIG // FlN5bWFudGVjIFRydXN0IE5ldHdvcmsxMTAvBgNVBAMT
// SIG // KFN5bWFudGVjIFNIQTI1NiBUaW1lU3RhbXBpbmcgU2ln
// SIG // bmVyIC0gRzKgggqLMIIFODCCBCCgAwIBAgIQewWx1Elo
// SIG // UUT3yYnSnBmdEjANBgkqhkiG9w0BAQsFADCBvTELMAkG
// SIG // A1UEBhMCVVMxFzAVBgNVBAoTDlZlcmlTaWduLCBJbmMu
// SIG // MR8wHQYDVQQLExZWZXJpU2lnbiBUcnVzdCBOZXR3b3Jr
// SIG // MTowOAYDVQQLEzEoYykgMjAwOCBWZXJpU2lnbiwgSW5j
// SIG // LiAtIEZvciBhdXRob3JpemVkIHVzZSBvbmx5MTgwNgYD
// SIG // VQQDEy9WZXJpU2lnbiBVbml2ZXJzYWwgUm9vdCBDZXJ0
// SIG // aWZpY2F0aW9uIEF1dGhvcml0eTAeFw0xNjAxMTIwMDAw
// SIG // MDBaFw0zMTAxMTEyMzU5NTlaMHcxCzAJBgNVBAYTAlVT
// SIG // MR0wGwYDVQQKExRTeW1hbnRlYyBDb3Jwb3JhdGlvbjEf
// SIG // MB0GA1UECxMWU3ltYW50ZWMgVHJ1c3QgTmV0d29yazEo
// SIG // MCYGA1UEAxMfU3ltYW50ZWMgU0hBMjU2IFRpbWVTdGFt
// SIG // cGluZyBDQTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCC
// SIG // AQoCggEBALtZnVlVT52Mcl0agaLrVfOwAa08cawyjwVr
// SIG // hponADKXak3JZBRLKbvC2Sm5Luxjs+HPPwtWkPhiG37r
// SIG // pgfi3n9ebUA41JEG50F8eRzLy60bv9iVkfPw7mz4rZY5
// SIG // Ln/BJ7h4OcWEpe3tr4eOzo3HberSmLU6Hx45ncP0mqj0
// SIG // hOHE0XxxxgYptD/kgw0mw3sIPk35CrczSf/KO9T1sptL
// SIG // 4YiZGvXA6TMU1t/HgNuR7v68kldyd/TNqMz+CfWTN76V
// SIG // iGrF3PSxS9TO6AmRX7WEeTWKeKwZMo8jwTJBG1kOqT6x
// SIG // zPnWK++32OTVHW0ROpL2k8mc40juu1MO1DaXhnjFoTcC
// SIG // AwEAAaOCAXcwggFzMA4GA1UdDwEB/wQEAwIBBjASBgNV
// SIG // HRMBAf8ECDAGAQH/AgEAMGYGA1UdIARfMF0wWwYLYIZI
// SIG // AYb4RQEHFwMwTDAjBggrBgEFBQcCARYXaHR0cHM6Ly9k
// SIG // LnN5bWNiLmNvbS9jcHMwJQYIKwYBBQUHAgIwGRoXaHR0
// SIG // cHM6Ly9kLnN5bWNiLmNvbS9ycGEwLgYIKwYBBQUHAQEE
// SIG // IjAgMB4GCCsGAQUFBzABhhJodHRwOi8vcy5zeW1jZC5j
// SIG // b20wNgYDVR0fBC8wLTAroCmgJ4YlaHR0cDovL3Muc3lt
// SIG // Y2IuY29tL3VuaXZlcnNhbC1yb290LmNybDATBgNVHSUE
// SIG // DDAKBggrBgEFBQcDCDAoBgNVHREEITAfpB0wGzEZMBcG
// SIG // A1UEAxMQVGltZVN0YW1wLTIwNDgtMzAdBgNVHQ4EFgQU
// SIG // r2PWyqNOhXLgp7xB8ymiOH+AdWIwHwYDVR0jBBgwFoAU
// SIG // tnf6aUhHn1MS1cLqBzJ2B9GXBxkwDQYJKoZIhvcNAQEL
// SIG // BQADggEBAHXqsC3VNBlcMkX+DuHUT6Z4wW/X6t3cT/Oh
// SIG // yIGI96ePFeZAKa3mXfSi2VZkhHEwKt0eYRdmIFYGmBmN
// SIG // XXHy+Je8Cf0ckUfJ4uiNA/vMkC/WCmxOM+zWtJPITJBj
// SIG // SDlAIcTd1m6JmDy1mJfoqQa3CcmPU1dBkC/hHk1O3MoQ
// SIG // eGxCbvC2xfhhXFL1TvZrjfdKer7zzf0D19n2A6gP41P3
// SIG // CnXsxnUuqmaFBJm3+AZX4cYO9uiv2uybGB+queM6AL/O
// SIG // ipTLAduexzi7D1Kr0eOUA2AKTaD+J20UMvw/l0Dhv5mJ
// SIG // 2+Q5FL3a5NPD6itas5VYVQR9x5rsIwONhSrS/66pYYEw
// SIG // ggVLMIIEM6ADAgECAhBUWPKq10HWRLyEqXugllLmMA0G
// SIG // CSqGSIb3DQEBCwUAMHcxCzAJBgNVBAYTAlVTMR0wGwYD
// SIG // VQQKExRTeW1hbnRlYyBDb3Jwb3JhdGlvbjEfMB0GA1UE
// SIG // CxMWU3ltYW50ZWMgVHJ1c3QgTmV0d29yazEoMCYGA1UE
// SIG // AxMfU3ltYW50ZWMgU0hBMjU2IFRpbWVTdGFtcGluZyBD
// SIG // QTAeFw0xNzAxMDIwMDAwMDBaFw0yODA0MDEyMzU5NTla
// SIG // MIGAMQswCQYDVQQGEwJVUzEdMBsGA1UEChMUU3ltYW50
// SIG // ZWMgQ29ycG9yYXRpb24xHzAdBgNVBAsTFlN5bWFudGVj
// SIG // IFRydXN0IE5ldHdvcmsxMTAvBgNVBAMTKFN5bWFudGVj
// SIG // IFNIQTI1NiBUaW1lU3RhbXBpbmcgU2lnbmVyIC0gRzIw
// SIG // ggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCZ
// SIG // 8/zYBAkDhvnXXKaTwEJ86nxjz10A4o7zwJDfjyn1GOqU
// SIG // t5Ll17Cgc4Ho6QqbSnwB/52PpDmnDupF9CIMOnDtOUWL
// SIG // 5MUbXPBFaEYkBWN2mxz8nmwqsVblin9Sca7yNdVGIwYc
// SIG // z0gtHbTNuNl2I44c/z6/uwZcaQemZQ74Xq59Lu1NrjXv
// SIG // ydcAQv0olQ6fXXJCCbzD2kTS7cxHhOT8yi2sWL6u967Z
// SIG // RA0It8J31hpDcNFuA95SksQQCHHZuiJV8h+87ZudO+Je
// SIG // HUyD/5cPewvnVYNO0g3rvtfsrm5HuZ/fpdZRvARV7f8n
// SIG // cEzJ7SpLE+GxuUwPyQHuVWVfaQJ4Zss/AgMBAAGjggHH
// SIG // MIIBwzAMBgNVHRMBAf8EAjAAMGYGA1UdIARfMF0wWwYL
// SIG // YIZIAYb4RQEHFwMwTDAjBggrBgEFBQcCARYXaHR0cHM6
// SIG // Ly9kLnN5bWNiLmNvbS9jcHMwJQYIKwYBBQUHAgIwGRoX
// SIG // aHR0cHM6Ly9kLnN5bWNiLmNvbS9ycGEwQAYDVR0fBDkw
// SIG // NzA1oDOgMYYvaHR0cDovL3RzLWNybC53cy5zeW1hbnRl
// SIG // Yy5jb20vc2hhMjU2LXRzcy1jYS5jcmwwFgYDVR0lAQH/
// SIG // BAwwCgYIKwYBBQUHAwgwDgYDVR0PAQH/BAQDAgeAMHcG
// SIG // CCsGAQUFBwEBBGswaTAqBggrBgEFBQcwAYYeaHR0cDov
// SIG // L3RzLW9jc3Aud3Muc3ltYW50ZWMuY29tMDsGCCsGAQUF
// SIG // BzAChi9odHRwOi8vdHMtYWlhLndzLnN5bWFudGVjLmNv
// SIG // bS9zaGEyNTYtdHNzLWNhLmNlcjAoBgNVHREEITAfpB0w
// SIG // GzEZMBcGA1UEAxMQVGltZVN0YW1wLTIwNDgtNTAdBgNV
// SIG // HQ4EFgQUCbXB/pZylylDmsngArqu+P0vuvYwHwYDVR0j
// SIG // BBgwFoAUr2PWyqNOhXLgp7xB8ymiOH+AdWIwDQYJKoZI
// SIG // hvcNAQELBQADggEBABezCojpXFpeIGs7ChWybMWpijKH
// SIG // 07H0HFOuhb4/m//XvLeUhbTHUn6U6L3tYbLUp5nkw8mT
// SIG // wTU9C+hoCl1WmL2xIjvRRHrXv/BtUTKK1SPfOAE39uJT
// SIG // K3orEY+3TWx6MwMbfGsJlBe75NtY1CETZefs0SXKLHWa
// SIG // nH/8ybsqaKvEfbTPo8lsp9nEAJyJCneR9E2i+zE7hm72
// SIG // 5h9QA4abv8tCq+Z2m3JaEQGKxu+lb5Xn3a665iJl8BhZ
// SIG // GxHJzYC32JdHH0II+KxxH7BGU7PUstWjq1B1SBIXgq3P
// SIG // 4EFPMn7NlRy/kYoIPaSnZwKW3yRMpdBBwIJgo4oXMkvT
// SIG // vM+ktIwxggJaMIICVgIBATCBizB3MQswCQYDVQQGEwJV
// SIG // UzEdMBsGA1UEChMUU3ltYW50ZWMgQ29ycG9yYXRpb24x
// SIG // HzAdBgNVBAsTFlN5bWFudGVjIFRydXN0IE5ldHdvcmsx
// SIG // KDAmBgNVBAMTH1N5bWFudGVjIFNIQTI1NiBUaW1lU3Rh
// SIG // bXBpbmcgQ0ECEFRY8qrXQdZEvISpe6CWUuYwCwYJYIZI
// SIG // AWUDBAIBoIGkMBoGCSqGSIb3DQEJAzENBgsqhkiG9w0B
// SIG // CRABBDAcBgkqhkiG9w0BCQUxDxcNMTcxMjIyMDczODIy
// SIG // WjAvBgkqhkiG9w0BCQQxIgQgogjtTycQ1Ys9WvCPiP8H
// SIG // VfNP+kNm8oqDT/IwNr9xyvIwNwYLKoZIhvcNAQkQAi8x
// SIG // KDAmMCQwIgQgz3rBetBH7NX9w2giAxsS1O8Hi28rTF5r
// SIG // pB+P8s9LrWcwCwYJKoZIhvcNAQEBBIIBAIWt7/6PWxwG
// SIG // iBAeoMObjUmmx2RpPeEOmFmftLXWPWtUybkrIVrLm2YY
// SIG // vYZKESoZscMPdMXnupwJMAIUuiSFtO4sdWtDSd4vU5te
// SIG // 5QyI8EjLvizaC81il1llUyJ+cWcO0TlkX11ZoTC3H8R7
// SIG // dxpVeHPa6/6LgZ65Voy14w9Z9qwtsBqYsmqdQbf1oCoR
// SIG // EEJLN9I1Q53stsNgEV5gwKXcmpnSjDV/ODlB/m4VLAVA
// SIG // lcJt5PTPt0uD9asyevbuSwrbRlyGJ0F3S/u12cSHaDDD
// SIG // BHoIxctszXlWz82X5XJ+9nm7eSbF/vjyJXNObRXbw+dI
// SIG // 1rNvNd0QzRUSo7ZlyZugUl4=
// SIG // End signature block
