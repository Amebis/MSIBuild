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
/*@if (! @_escapeIDT_JS__) @*/
/*@set @_escapeIDT_JS__ = true @*/

var escapeIDT_stat = null;
function escapeIDT(str)
{
	if (!escapeIDT_stat) {
		escapeIDT_stat = {
			"re_tab": new RegExp("\t", "g")
		};
	}

	if (str == null) return null;
	switch (typeof(str)) {
		case "string":    break;
		case "undefined": return null;
		default:          try { str = str.toString(); } catch (err) { return null; }
	}

	return str.replace(escapeIDT_stat.re_tab, "\u0010");
}


var unescapeIDT_stat = null;
function unescapeIDT(str)
{
	if (!unescapeIDT_stat) {
		unescapeIDT_stat = {
			"re_tab": new RegExp("\u0010", "g")
		};
	}

	if (str == null) return null;
	switch (typeof(str)) {
		case "string":    break;
		case "undefined": return null;
		default:          try { str = str.toString(); } catch (err) { return null; }
	}

	return str.replace(unescapeIDT_stat.re_tab, "\t");
}


function IDT(path)
{
	// Open IDT file.
	var
		dat = new ActiveXObject("ADODB.Stream");

	dat.Open();
	try {
		// IDT is text file, uses MSDOS line breaks and Windows 1252 header.
		dat.Type = adTypeText;
		dat.LineSeparator = adCRLF;
		dat.Charset = "windows-1252";

		// Load file.
		dat.LoadFromFile(path);

		var parseRow = function(row) {
			for (var col in row)
				row[col] = CRLF2LF(unescapeIDT(row[col]));
			return row;
		}

		// Parse column names.
		this.columns = parseRow(dat.ReadText(adReadLine).split("\t"));
		
		// Parse column types.
		this.types = parseRow(dat.ReadText(adReadLine).split("\t"));
		
		// Parse meta info
		var line = parseRow(dat.ReadText(adReadLine).split("\t")), i = 0;
		this.codepage = parseInt(line[i], 10);
		if (isNaN(this.codepage)) this.codepage = 1252; else i++;
		this.table = line[i++];
		this.key = line.slice(i);
		for (var i in this.key) {
			for (var j in this.columns) {
				if (this.key[i] == this.columns[j]) {
					this.key[i] = j;
					break;
				}
			}
		}

		// Rewind and reconfigure code page.
		dat.Position = 0;
		dat.Charset = CodePageToId(this.codepage);

		// Skip header.
		dat.SkipLine();
		dat.SkipLine();
		dat.SkipLine();

		// Parse data and build associative array.
		this.data = new Array();
		this.linenum = new Array();
		var linenum = 4;
		while (!dat.EOS) {
			line = parseRow(dat.ReadText(adReadLine).split("\t"));
			var key = new Array();
			for (var i in this.key)
				key.push(line[this.key[i]]);
			this.data[key] = line;
			this.linenum[key] = linenum++;
		}
	} finally {
		dat.Close();
	}
}


IDT.prototype.isLocalizable = function(col)
{
	// Test against predefined list of columns.
	switch (this.table.toLowerCase()) {
		case "actiontext":
			switch (this.columns[col].toLowerCase()) {
				case "description":
				case "template"   : return true;
			}
			break;

		case "control":
			switch (this.columns[col].toLowerCase()) {
				case "text":
				case "help": return true;
			}
			break;

		case "controlevent":
			switch (this.columns[col].toLowerCase()) {
				case "argument": return true;
			}
			break;

		case "customaction":
			switch (this.columns[col].toLowerCase()) {
				case "target": return true;
			}
			break;

		case "dialog":
			switch (this.columns[col].toLowerCase()) {
				case "title": return true;
			}
			break;

		case "directory":
			switch (this.columns[col].toLowerCase()) {
				case "defaultdir": return true;
			}
			break;

		case "error":
			switch (this.columns[col].toLowerCase()) {
				case "message": return true;
			}
			break;

		case "feature":
			switch (this.columns[col].toLowerCase()) {
				case "title"      :
				case "description": return true;
			}
			break;

		case "file":
			switch (this.columns[col].toLowerCase()) {
				case "filename":
				case "language": return true;
			}
			break;

		case "launchcondition":
			switch (this.columns[col].toLowerCase()) {
				case "description": return true;
			}
			break;

		case "media":
			switch (this.columns[col].toLowerCase()) {
				case "diskprompt": return true;
			}
			break;

		case "progid":
			switch (this.columns[col].toLowerCase()) {
				case "description": return true;
			}
			break;

		case "property":
			switch (this.columns[col].toLowerCase()) {
				case "value": return true;
			}
			break;

		case "publishcomponent":
			switch (this.columns[col].toLowerCase()) {
				case "appdata": return true;
			}
			break;

		case "radiobutton":
			switch (this.columns[col].toLowerCase()) {
				case "text":
				case "help": return true;
			}
			break;

		case "registry":
			switch (this.columns[col].toLowerCase()) {
				case "value": return true;
			}
			break;

		case "scheduledtask":
			switch (this.columns[col].toLowerCase()) {
				case "displayname":
				case "description": return true;
			}
			break;

		case "serviceinstall":
			switch (this.columns[col].toLowerCase()) {
				case "displayname":
				case "description": return true;
			}
			break;

		case "shortcut":
			switch (this.columns[col].toLowerCase()) {
				case "name"       :
				case "description": return true;
			}
			break;

		case "uitext":
			switch (this.columns[col].toLowerCase()) {
				case "text": return true;
			}
			break;

		case "verb":
			switch (this.columns[col].toLowerCase()) {
				case "command" :
				case "argument": return true;
			}
			break;

		case "wlanprofile":
			switch (this.columns[col].toLowerCase()) {
				case "name": return true;
			}
			break;
    }

	// Is this column localizable according to its type?
	return this.types[col].charAt(0).toLowerCase() == "l";
}

IDT.prototype.save = function(path)
{
	// Build output IDT file in memory.
	var dat = WScript.CreateObject("ADODB.Stream");
	dat.Open();
	try {
		// IDT is text file, uses MSDOS line breaks, and specific encoding (optional).
		dat.Type = adTypeText;
		dat.LineSeparator = adCRLF;
		if ("codepage" in this)
			dat.Charset = CodePageToId(this.codepage);

		var buildRow_stat = null;
		var buildRow = function(row) {
			if (!buildRow_stat) {
				buildRow_stat = {
					"re_lf":  new RegExp("\n", "g"),
					"re_cr":  new RegExp("\r", "g")
				};
			}

			for (var col in row) {
				if (row[col].match(buildRow_stat.re_lf) || row[col].match(buildRow_stat.re_cr))
					throw new Error("Cell \"" + row[col] + "\" contains line breaks. IDT cells cannot contain CR, nor LF.");
				row[col] = escapeIDT(LF2CRLF(row[col]));
			}
			return row;
		}

		// Write header.
		dat.WriteText(buildRow(this.columns).join("\t"), adWriteLine);
		dat.WriteText(buildRow(this.types  ).join("\t"), adWriteLine);
		var meta = new Array();
		if (WScript.Arguments.Named.Exists("CP"))
			meta.push(WScript.Arguments.Named("CP"));
		meta.push(this.table);
		for (var key in this.key)
			meta.push(this.columns[this.key[key]]);
		dat.WriteText(buildRow(meta).join("\t"), adWriteLine);

		// Save data.
		for (var key in this.data)
			dat.WriteText(buildRow(this.data[key]).join("\t"), adWriteLine);

		// Save to file.
		dat.SaveToFile(path, adSaveCreateOverWrite);
	} finally {
		dat.Close();
	}
}

/*@end @*/

// SIG // Begin signature block
// SIG // MIIbHwYJKoZIhvcNAQcCoIIbEDCCGwwCAQExCzAJBgUr
// SIG // DgMCGgUAMGcGCisGAQQBgjcCAQSgWTBXMDIGCisGAQQB
// SIG // gjcCAR4wJAIBAQQQEODJBs441BGiowAQS9NQkAIBAAIB
// SIG // AAIBAAIBAAIBADAhMAkGBSsOAwIaBQAEFF9HQNI4pSFJ
// SIG // yytrONuMhXaHCWxsoIIKLzCCBM4wggO2oAMCAQICEDB6
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
// SIG // FTAjBgkqhkiG9w0BCQQxFgQUAjmDS/AJYaRZU8nCeQtl
// SIG // F8KAS/swDQYJKoZIhvcNAQEBBQAEggEARHI6MciKDR7y
// SIG // s+ujKut3xkctQGnJP5pDtva+zHs3aypCUS211LlXyKi7
// SIG // ZdUrjjzubZwKx8Ox0ETzDomUXMsSayfJFNYqnRnSP4G/
// SIG // TaWoF/A4Lb69LapM0P+mZdfmiGFaZTd6AmvCXKhofzXi
// SIG // 4kCWfPNb6g3pN0OwEW6yPz6RdD8HmlWfbTphYheFkehQ
// SIG // 0pmWWGoNCK6OBfcPhjUqgpdrAncAq3tslT2GU99ZsBip
// SIG // CvfOYvIosXiJyaP1ykj9mKYKq1ohiamdWQoSI65IqJG8
// SIG // I9ytss/lYrxbYYxFlU9KIv7bR03ocoZaVtvndUOc+7LB
// SIG // 5wRF5KQFEM21hMJMRxaFQKGCDiswgg4nBgorBgEEAYI3
// SIG // AwMBMYIOFzCCDhMGCSqGSIb3DQEHAqCCDgQwgg4AAgED
// SIG // MQ0wCwYJYIZIAWUDBAIBMIH+BgsqhkiG9w0BCRABBKCB
// SIG // 7gSB6zCB6AIBAQYLYIZIAYb4RQEHFwMwITAJBgUrDgMC
// SIG // GgUABBRPinhEjjaw6X1y3nlrJt9E/hvn+gIUYJRtJw3G
// SIG // X9BiwTBhdOcyVBcZSrUYDzIwMTcxMjIyMDczNzEwWjAD
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
// SIG // CRABBDAcBgkqhkiG9w0BCQUxDxcNMTcxMjIyMDczNzEw
// SIG // WjAvBgkqhkiG9w0BCQQxIgQgihcVEDjLxbYhncj0lovK
// SIG // 1I3MSqdzfd57XtH35GLmg4gwNwYLKoZIhvcNAQkQAi8x
// SIG // KDAmMCQwIgQgz3rBetBH7NX9w2giAxsS1O8Hi28rTF5r
// SIG // pB+P8s9LrWcwCwYJKoZIhvcNAQEBBIIBAE8bHPVYABuJ
// SIG // uvXpK5ZkzX0/6LPr3i2zo+xWs/YyuMW8sz++cJ25wC3T
// SIG // VUucP3wKAdi8gUL15N5gqiUcHJKYMdXaBksDwTZ7lc97
// SIG // JTYfW4DiANCb3kO7/bMWmKmtF++nGG9mIjcwajEehwSh
// SIG // 9tDS5d9fvHnJckZs84FrQnm4PPg1ype0uUIW6TIpDld+
// SIG // WWo7yL2Hp3ufQ7tajBbdRfnsY26zm+XtOwHRLSh9iBXv
// SIG // rh/Y4Fn5QmsBB1wFxIT/LjTCV2kJXJWcI9kYaoBV4BKm
// SIG // Q980AlCmYuxfjHKVGhsRBqMj75lmyAArqL2f4Gqku2H2
// SIG // gOKXVZs7RbJ5/pu/H0LdtI0=
// SIG // End signature block
