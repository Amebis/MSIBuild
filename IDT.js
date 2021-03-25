/*
    Copyright © 1991-2021 Amebis
    Copyright © 2016 GÉANT

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
// SIG // MIIXmAYJKoZIhvcNAQcCoIIXiTCCF4UCAQExCzAJBgUr
// SIG // DgMCGgUAMGcGCisGAQQBgjcCAQSgWTBXMDIGCisGAQQB
// SIG // gjcCAR4wJAIBAQQQEODJBs441BGiowAQS9NQkAIBAAIB
// SIG // AAIBAAIBAAIBADAhMAkGBSsOAwIaBQAEFHRSvCdTbLy2
// SIG // xg4B8cXp5L5Ew69uoIISyDCCA+4wggNXoAMCAQICEH6T
// SIG // 6/t8xk5Z6kuad9QG/DswDQYJKoZIhvcNAQEFBQAwgYsx
// SIG // CzAJBgNVBAYTAlpBMRUwEwYDVQQIEwxXZXN0ZXJuIENh
// SIG // cGUxFDASBgNVBAcTC0R1cmJhbnZpbGxlMQ8wDQYDVQQK
// SIG // EwZUaGF3dGUxHTAbBgNVBAsTFFRoYXd0ZSBDZXJ0aWZp
// SIG // Y2F0aW9uMR8wHQYDVQQDExZUaGF3dGUgVGltZXN0YW1w
// SIG // aW5nIENBMB4XDTEyMTIyMTAwMDAwMFoXDTIwMTIzMDIz
// SIG // NTk1OVowXjELMAkGA1UEBhMCVVMxHTAbBgNVBAoTFFN5
// SIG // bWFudGVjIENvcnBvcmF0aW9uMTAwLgYDVQQDEydTeW1h
// SIG // bnRlYyBUaW1lIFN0YW1waW5nIFNlcnZpY2VzIENBIC0g
// SIG // RzIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIB
// SIG // AQCxrLNJVEuXHBIK2CV5kSJXKm/cuCbEQ3Nrwr8uUFr7
// SIG // FMJ2jkMBJUO0oeJF9Oi3e8N0zCLXtJQAAvdN7b+0t0Qk
// SIG // a81fRTvRRM5DEnMXgotptCvLmR6schsmTXEfsTHd+1Fh
// SIG // AlOmqvVJLAV4RaUvic7nmef+jOJXPz3GktxK+Hsz5HkK
// SIG // +/B1iEGc/8UDUZmq12yfk2mHZSmDhcJgFMTIyTsU2sCB
// SIG // 8B8NdN6SIqvK9/t0fCfm90obf6fDni2uiuqm5qonFn1h
// SIG // 95hxEbziUKFL5V365Q6nLJ+qZSDT2JboyHylTkhE/xni
// SIG // RAeSC9dohIBdanhkRc1gRn5UwRN8xXnxycFxAgMBAAGj
// SIG // gfowgfcwHQYDVR0OBBYEFF+a9W5czMx0mtTdfe8/2+xM
// SIG // gC7dMDIGCCsGAQUFBwEBBCYwJDAiBggrBgEFBQcwAYYW
// SIG // aHR0cDovL29jc3AudGhhd3RlLmNvbTASBgNVHRMBAf8E
// SIG // CDAGAQH/AgEAMD8GA1UdHwQ4MDYwNKAyoDCGLmh0dHA6
// SIG // Ly9jcmwudGhhd3RlLmNvbS9UaGF3dGVUaW1lc3RhbXBp
// SIG // bmdDQS5jcmwwEwYDVR0lBAwwCgYIKwYBBQUHAwgwDgYD
// SIG // VR0PAQH/BAQDAgEGMCgGA1UdEQQhMB+kHTAbMRkwFwYD
// SIG // VQQDExBUaW1lU3RhbXAtMjA0OC0xMA0GCSqGSIb3DQEB
// SIG // BQUAA4GBAAMJm495739ZMKrvaLX64wkdu0+CBl03X6ZS
// SIG // nxaN6hySCURu9W3rWHww6PlpjSNzCxJvR6muORH4KrGb
// SIG // sBrDjutZlgCtzgxNstAxpghcKnr84nodV0yoZRjpeUBi
// SIG // JZZux8c3aoMhCI5B6t3ZVz8dd0mHKhYGXqY4aiISo1EZ
// SIG // g362MIIEozCCA4ugAwIBAgIQDs/0OMj+vzVuBNhqmBsa
// SIG // UDANBgkqhkiG9w0BAQUFADBeMQswCQYDVQQGEwJVUzEd
// SIG // MBsGA1UEChMUU3ltYW50ZWMgQ29ycG9yYXRpb24xMDAu
// SIG // BgNVBAMTJ1N5bWFudGVjIFRpbWUgU3RhbXBpbmcgU2Vy
// SIG // dmljZXMgQ0EgLSBHMjAeFw0xMjEwMTgwMDAwMDBaFw0y
// SIG // MDEyMjkyMzU5NTlaMGIxCzAJBgNVBAYTAlVTMR0wGwYD
// SIG // VQQKExRTeW1hbnRlYyBDb3Jwb3JhdGlvbjE0MDIGA1UE
// SIG // AxMrU3ltYW50ZWMgVGltZSBTdGFtcGluZyBTZXJ2aWNl
// SIG // cyBTaWduZXIgLSBHNDCCASIwDQYJKoZIhvcNAQEBBQAD
// SIG // ggEPADCCAQoCggEBAKJjCzlEuLsjp0RJuw7/ofBhClOT
// SIG // sJjbrSwPSsVu/4Y8U1UPFc4EPyv9qZaW2b5heQtbyUyG
// SIG // duXgQ0sile7CK0PBn9hotI5AT+6FOLkRxSPyZFjwFTJv
// SIG // TlehroikAtcqHs1L4d1j1ReJMluwXplaqJ0oUA4X7pbb
// SIG // YTtFUR3PElYLkkf8q672Zj1HrHBy55LnX80QucSDZJQZ
// SIG // vSWA4ejSIqXQugJ6oXeTW2XD7hd0vEGGKtwITIySjJEt
// SIG // nndEH2jWqHR32w5bMotWizO92WPISZ06xcXqMwvS8aMb
// SIG // 9Iu+2bNXizveBKd6IrIkri7HcMW+ToMmCPsLvalPmQjh
// SIG // EChyqs0CAwEAAaOCAVcwggFTMAwGA1UdEwEB/wQCMAAw
// SIG // FgYDVR0lAQH/BAwwCgYIKwYBBQUHAwgwDgYDVR0PAQH/
// SIG // BAQDAgeAMHMGCCsGAQUFBwEBBGcwZTAqBggrBgEFBQcw
// SIG // AYYeaHR0cDovL3RzLW9jc3Aud3Muc3ltYW50ZWMuY29t
// SIG // MDcGCCsGAQUFBzAChitodHRwOi8vdHMtYWlhLndzLnN5
// SIG // bWFudGVjLmNvbS90c3MtY2EtZzIuY2VyMDwGA1UdHwQ1
// SIG // MDMwMaAvoC2GK2h0dHA6Ly90cy1jcmwud3Muc3ltYW50
// SIG // ZWMuY29tL3Rzcy1jYS1nMi5jcmwwKAYDVR0RBCEwH6Qd
// SIG // MBsxGTAXBgNVBAMTEFRpbWVTdGFtcC0yMDQ4LTIwHQYD
// SIG // VR0OBBYEFEbGaaMOShQe1UzaUmMXP142vA3mMB8GA1Ud
// SIG // IwQYMBaAFF+a9W5czMx0mtTdfe8/2+xMgC7dMA0GCSqG
// SIG // SIb3DQEBBQUAA4IBAQB4O7SRKgBM8I9iMDd4o4QnB28Y
// SIG // st4l3KDUlAOqhk4ln5pAAxzdzuN5yyFoBtq2MrRtv/Qs
// SIG // JmMz5ElkbQ3mw2cO9wWkNWx8iRbG6bLfsundIMZxD82V
// SIG // dNy2XN69Nx9DeOZ4tc0oBCCjqvFLxIgpkQ6A0RH83Vx2
// SIG // bk9eDkVGQW4NsOo4mrE62glxEPwcebSAe6xp9P2ctgwW
// SIG // K/F/Wwk9m1viFsoTgW0ALjgNqCmPLOGy9FqpAa8VnCwv
// SIG // SRvbIrvD/niUUcOGsYKIXfA9tFGheTMrLnu53CAJE3Hr
// SIG // ahlbz+ilMFcsiUk/uc9/yb8+ImhjU5q9aXSsxR08f5Lg
// SIG // w7wc2AR1MIIEzjCCA7agAwIBAgIQMHo2eqo+aIGm+U8I
// SIG // yzs5ZDANBgkqhkiG9w0BAQsFADB/MQswCQYDVQQGEwJV
// SIG // UzEdMBsGA1UEChMUU3ltYW50ZWMgQ29ycG9yYXRpb24x
// SIG // HzAdBgNVBAsTFlN5bWFudGVjIFRydXN0IE5ldHdvcmsx
// SIG // MDAuBgNVBAMTJ1N5bWFudGVjIENsYXNzIDMgU0hBMjU2
// SIG // IENvZGUgU2lnbmluZyBDQTAeFw0xNTEwMDkwMDAwMDBa
// SIG // Fw0xODExMDcyMzU5NTlaMGExCzAJBgNVBAYTAlNJMREw
// SIG // DwYDVQQIEwhTbG92ZW5pYTEPMA0GA1UEBxMGS2Ftbmlr
// SIG // MRYwFAYDVQQKFA1BbWViaXMgZC5vLm8uMRYwFAYDVQQD
// SIG // FA1BbWViaXMgZC5vLm8uMIIBIjANBgkqhkiG9w0BAQEF
// SIG // AAOCAQ8AMIIBCgKCAQEAl/LoF3DHaSrIaG1pgBmBwDyl
// SIG // Yt7sRvIuoEdGr/yMhV9RfUIft+xsTPVQOAirvgG+KUbc
// SIG // E3KMnGH+VuK7Y+vYzRp3dYTLinSQz1NKYAELyTdVzmmY
// SIG // mU3LX764yk3ABtSZsZwPoiCy+TXE9ZsCkugB2c7Qp9N/
// SIG // O9EjjQDRwZlUa3nLoY96Y3qNPwkCn04ppYiqPeIXTRz8
// SIG // XBLs4Nl/bD9wymEuNSV75vzobJ7BUYQwRU7lmNL2SwRY
// SIG // ENaf0DpdiyFLBsNafHjGYiXQHgNxZUBpj7OoRDNBvMQY
// SIG // L+LM8OrjhGIK1uGL5CqBD/p81ebeFsAZVxg9hrgnkPVQ
// SIG // w77U0LZw8wIDAQABo4IBYjCCAV4wCQYDVR0TBAIwADAO
// SIG // BgNVHQ8BAf8EBAMCB4AwKwYDVR0fBCQwIjAgoB6gHIYa
// SIG // aHR0cDovL3N2LnN5bWNiLmNvbS9zdi5jcmwwZgYDVR0g
// SIG // BF8wXTBbBgtghkgBhvhFAQcXAzBMMCMGCCsGAQUFBwIB
// SIG // FhdodHRwczovL2Quc3ltY2IuY29tL2NwczAlBggrBgEF
// SIG // BQcCAjAZDBdodHRwczovL2Quc3ltY2IuY29tL3JwYTAT
// SIG // BgNVHSUEDDAKBggrBgEFBQcDAzBXBggrBgEFBQcBAQRL
// SIG // MEkwHwYIKwYBBQUHMAGGE2h0dHA6Ly9zdi5zeW1jZC5j
// SIG // b20wJgYIKwYBBQUHMAKGGmh0dHA6Ly9zdi5zeW1jYi5j
// SIG // b20vc3YuY3J0MB8GA1UdIwQYMBaAFJY7U/B5M5evfYPv
// SIG // LivMyreGHnJmMB0GA1UdDgQWBBT3B72WgJotdMR/DD09
// SIG // J93UkAqfzDANBgkqhkiG9w0BAQsFAAOCAQEAinEvQC+1
// SIG // yttKEsqAjt2YufpYlul3OQH17YKbUy4AAiKiAsUXWfTu
// SIG // XRVdkT6CrEYcHyOLaHfe36jVHw8vLIiR2cyEcB3vweyr
// SIG // JnNpt+Za4I/XZMoG/vvCJmSltOj8C/7PRKWklGgynPNe
// SIG // HI8+0d1vLzRtK77hFeV7CIMIfnpoYThJKTSLxdr0kn+j
// SIG // M8otfdLN2aDonnxe0Mf+2rkrX8AFIIHPpIXZj2X2VEmk
// SIG // ZdyFINgI+KlJVQY/RY9BFMM2htLAIkNcDP1QVzFajhGH
// SIG // yj+C+UtZQf5PceGYtJHNeq3cm6omjnEfyzi8/NwYFlkW
// SIG // hvzJEH3woPqKgUramNFFLD0W5zCCBVkwggRBoAMCAQIC
// SIG // ED141/l2SWCyYX308B7KhiowDQYJKoZIhvcNAQELBQAw
// SIG // gcoxCzAJBgNVBAYTAlVTMRcwFQYDVQQKEw5WZXJpU2ln
// SIG // biwgSW5jLjEfMB0GA1UECxMWVmVyaVNpZ24gVHJ1c3Qg
// SIG // TmV0d29yazE6MDgGA1UECxMxKGMpIDIwMDYgVmVyaVNp
// SIG // Z24sIEluYy4gLSBGb3IgYXV0aG9yaXplZCB1c2Ugb25s
// SIG // eTFFMEMGA1UEAxM8VmVyaVNpZ24gQ2xhc3MgMyBQdWJs
// SIG // aWMgUHJpbWFyeSBDZXJ0aWZpY2F0aW9uIEF1dGhvcml0
// SIG // eSAtIEc1MB4XDTEzMTIxMDAwMDAwMFoXDTIzMTIwOTIz
// SIG // NTk1OVowfzELMAkGA1UEBhMCVVMxHTAbBgNVBAoTFFN5
// SIG // bWFudGVjIENvcnBvcmF0aW9uMR8wHQYDVQQLExZTeW1h
// SIG // bnRlYyBUcnVzdCBOZXR3b3JrMTAwLgYDVQQDEydTeW1h
// SIG // bnRlYyBDbGFzcyAzIFNIQTI1NiBDb2RlIFNpZ25pbmcg
// SIG // Q0EwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIB
// SIG // AQCXgx4AFq8ssdIIxNdok1FgHnH24ke021hNI2JqtL9a
// SIG // G1H3ow0Yd2i72DarLyFQ2p7z518nTgvCl8gJcJOp2lwN
// SIG // TqQNkaC07BTOkXJULs6j20TpUhs/QTzKSuSqwOg5q1PM
// SIG // IdDMz3+b5sLMWGqCFe49Ns8cxZcHJI7xe74xLT1u3LWZ
// SIG // Qp9LYZVfHHDuF33bi+VhiXjHaBuvEXgamK7EVUdT2bMy
// SIG // 1qEORkDFl5KK0VOnmVuFNVfT6pNiYSAKxzB3JBFNYoO2
// SIG // untogjHuZcrf+dWNsjXcjCtvanJcYISc8gyUXsBWUgBI
// SIG // zNP4pX3eL9cT5DiohNVGuBOGwhud6lo43ZvbAgMBAAGj
// SIG // ggGDMIIBfzAvBggrBgEFBQcBAQQjMCEwHwYIKwYBBQUH
// SIG // MAGGE2h0dHA6Ly9zMi5zeW1jYi5jb20wEgYDVR0TAQH/
// SIG // BAgwBgEB/wIBADBsBgNVHSAEZTBjMGEGC2CGSAGG+EUB
// SIG // BxcDMFIwJgYIKwYBBQUHAgEWGmh0dHA6Ly93d3cuc3lt
// SIG // YXV0aC5jb20vY3BzMCgGCCsGAQUFBwICMBwaGmh0dHA6
// SIG // Ly93d3cuc3ltYXV0aC5jb20vcnBhMDAGA1UdHwQpMCcw
// SIG // JaAjoCGGH2h0dHA6Ly9zMS5zeW1jYi5jb20vcGNhMy1n
// SIG // NS5jcmwwHQYDVR0lBBYwFAYIKwYBBQUHAwIGCCsGAQUF
// SIG // BwMDMA4GA1UdDwEB/wQEAwIBBjApBgNVHREEIjAgpB4w
// SIG // HDEaMBgGA1UEAxMRU3ltYW50ZWNQS0ktMS01NjcwHQYD
// SIG // VR0OBBYEFJY7U/B5M5evfYPvLivMyreGHnJmMB8GA1Ud
// SIG // IwQYMBaAFH/TZafC3ey78DAJ80M5+gKvMzEzMA0GCSqG
// SIG // SIb3DQEBCwUAA4IBAQAThRoeaak396C9pK9+HWFT/p2M
// SIG // XgymdR54FyPd/ewaA1U5+3GVx2Vap44w0kRaYdtwb9oh
// SIG // BcIuc7pJ8dGT/l3JzV4D4ImeP3Qe1/c4i6nWz7s1LzNY
// SIG // qJJW0chNO4LmeYQW/CiwsUfzHaI+7ofZpn+kVqU/rYQu
// SIG // Kd58vKiqoz0EAeq6k6IOUCIpF0yH5DoRX9akJYmbBWsv
// SIG // tMkBTCd7C6wZBSKgYBU/2sn7TUyP+3Jnd/0nlMe6NQ6I
// SIG // Sf6N/SivShK9DbOXBd5EDBX6NisD3MFQAfGhEV0U5eK9
// SIG // J0tUviuEXg+mw3QFCu+Xw4kisR93873NQ9TxTKk/tYuE
// SIG // r2Ty0BQhMYIEPDCCBDgCAQEwgZMwfzELMAkGA1UEBhMC
// SIG // VVMxHTAbBgNVBAoTFFN5bWFudGVjIENvcnBvcmF0aW9u
// SIG // MR8wHQYDVQQLExZTeW1hbnRlYyBUcnVzdCBOZXR3b3Jr
// SIG // MTAwLgYDVQQDEydTeW1hbnRlYyBDbGFzcyAzIFNIQTI1
// SIG // NiBDb2RlIFNpZ25pbmcgQ0ECEDB6NnqqPmiBpvlPCMs7
// SIG // OWQwCQYFKw4DAhoFAKBwMBAGCisGAQQBgjcCAQwxAjAA
// SIG // MBkGCSqGSIb3DQEJAzEMBgorBgEEAYI3AgEEMBwGCisG
// SIG // AQQBgjcCAQsxDjAMBgorBgEEAYI3AgEVMCMGCSqGSIb3
// SIG // DQEJBDEWBBSKaC4JFJrjz0oAG/feMSy5lHl0XDANBgkq
// SIG // hkiG9w0BAQEFAASCAQACkVEzU5Cqf0XBcc7eLGwsBIT0
// SIG // +PaIcw1dOvvZal1yIzGGPokcMshadl2WI5iuj6vHbSv2
// SIG // MIbek7LJjjCA8gPHkYOZEz2wHvXiQR7kcxZbudHqF6O9
// SIG // +IBxH11Y95xG1Ln5MXzTxU+1DWUtaOKAmrRr/Ueu8bXk
// SIG // djFqPgeXQoNuOt50UKMl0XeljJF2eWtGqBMx0cWwD/x6
// SIG // MYevoe8Vq/LPDiSOrVsupfOdtfhtuLjWrnt887vGI4YW
// SIG // ylkJeCmcVz2xdEnIHaOqM3Z7I952RQA8DstP/2ojEZI8
// SIG // cPQ644GumtceCGgPcnT8wFRMo7yUhpHlUiGlJnvrcAnk
// SIG // 606cWL+qoYICCzCCAgcGCSqGSIb3DQEJBjGCAfgwggH0
// SIG // AgEBMHIwXjELMAkGA1UEBhMCVVMxHTAbBgNVBAoTFFN5
// SIG // bWFudGVjIENvcnBvcmF0aW9uMTAwLgYDVQQDEydTeW1h
// SIG // bnRlYyBUaW1lIFN0YW1waW5nIFNlcnZpY2VzIENBIC0g
// SIG // RzICEA7P9DjI/r81bgTYapgbGlAwCQYFKw4DAhoFAKBd
// SIG // MBgGCSqGSIb3DQEJAzELBgkqhkiG9w0BBwEwHAYJKoZI
// SIG // hvcNAQkFMQ8XDTE4MDkwNzIxNTMzMVowIwYJKoZIhvcN
// SIG // AQkEMRYEFLB3/k5YCKjjH1uxJ0SVjipz+LQCMA0GCSqG
// SIG // SIb3DQEBAQUABIIBAHoOcybJsxjbtyjrTKYqnRxG16ss
// SIG // AaY+empRv4vTSFZLbHqTqcpJ8RNIBq3gYb8y349oOg+P
// SIG // 9Cf5X/TARfMcZsyPtDdYaMJJnm8/SBrQAzIWfNWyj9To
// SIG // m4pFfV4orjlGLGvbvGe0BBl5V1r+KTmdnPm4J5UE1cS9
// SIG // QOwapklsOffjdHNIowInyY/i4uB8tH2o2ozUQg+yIyKs
// SIG // aaJMN55gc6TTgdW6BRkxjeI1nmcOJpKTbvpT/S7TBtTe
// SIG // ic9+3bIfomqRjt/yLqfI02k9va0AAaLu9Jn/qrrdkbon
// SIG // A0dCS6imtf+n0yfQK3wBuA8mXy3xV0AyNO0nHWqAaS7i
// SIG // EzqEhnk=
// SIG // End signature block
