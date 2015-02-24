/*
    MSIBuild, Copyright (C) Amebis

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version 2 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

    See the GNU General Public License for more details, included in the file
    LICENSE.rtf which you should have received along with this program.

    If you did not receive a copy of the GNU General Public License,
    write to the Free Software Foundation, Inc., 675 Mass Ave,
    Cambridge, MA 02139, USA.

    Amebis can be contacted at http://www.amebis.si
*/

/*@cc_on @*/
/*@if (! @__STRING_JS__) @*/
/*@set @__STRING_JS__ = true @*/

var _S_stat = null;
function _S(str)
{
	if (!_S_stat) {
		_S_stat = {
			"re_apost": new RegExp("'", "g")
		};
	}

	if (str == null) return null;
	switch (typeof(str)) {
		case "string":    break;
		case "undefined": return null;
		default:          try { str = str.toString(); } catch (err) { return null; }
	}

	return str.replace(_S_stat.re_apost, "''");
}


var Trim_stat = null;
function Trim(str)
{
	if (!Trim_stat) {
		Trim_stat = {
			"re_lspace": new RegExp("\\s+$", "g"),
			"re_rspace": new RegExp("^\\s+", "g")
		};
	}

	if (str == null) return null;
	switch (typeof(str)) {
		case "string":    break;
		case "undefined": return null;
		default:          try { str = str.toString(); } catch (err) { return null; }
	}

	return str.replace(Trim_stat.re_lspace, "").replace(Trim_stat.re_rspace, "");
}


function Time2Str(date)
{
	var
		time = new Array(date.getHours(), date.getMinutes(), date.getSeconds()),
		i, str = "";

	for (i = 0; i < 3; i++) {
		if (i)            str += ":";
		if (time[i] < 10) str += "0";
		                  str += time[i];
	}

	return str;
}

/*@end @*/

// SIG // Begin signature block
// SIG // MIIZKwYJKoZIhvcNAQcCoIIZHDCCGRgCAQExCzAJBgUr
// SIG // DgMCGgUAMGcGCisGAQQBgjcCAQSgWTBXMDIGCisGAQQB
// SIG // gjcCAR4wJAIBAQQQEODJBs441BGiowAQS9NQkAIBAAIB
// SIG // AAIBAAIBAAIBADAhMAkGBSsOAwIaBQAEFAQK7Of3/KCp
// SIG // zfkDe5RBMpttDBuBoIIUJTCCA+4wggNXoAMCAQICEH6T
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
// SIG // w7wc2AR1MIIFejCCBGKgAwIBAgIQQIeLZ2eQpZcEKJ6U
// SIG // AwIaGzANBgkqhkiG9w0BAQUFADCBtDELMAkGA1UEBhMC
// SIG // VVMxFzAVBgNVBAoTDlZlcmlTaWduLCBJbmMuMR8wHQYD
// SIG // VQQLExZWZXJpU2lnbiBUcnVzdCBOZXR3b3JrMTswOQYD
// SIG // VQQLEzJUZXJtcyBvZiB1c2UgYXQgaHR0cHM6Ly93d3cu
// SIG // dmVyaXNpZ24uY29tL3JwYSAoYykxMDEuMCwGA1UEAxMl
// SIG // VmVyaVNpZ24gQ2xhc3MgMyBDb2RlIFNpZ25pbmcgMjAx
// SIG // MCBDQTAeFw0xMjA5MjYwMDAwMDBaFw0xNTEwMTEyMzU5
// SIG // NTlaMIG9MQswCQYDVQQGEwJTSTERMA8GA1UECBMIU2xv
// SIG // dmVuaWExDzANBgNVBAcTBkthbW5pazEWMBQGA1UEChQN
// SIG // QW1lYmlzIGQuby5vLjE+MDwGA1UECxM1RGlnaXRhbCBJ
// SIG // RCBDbGFzcyAzIC0gTWljcm9zb2Z0IFNvZnR3YXJlIFZh
// SIG // bGlkYXRpb24gdjIxGjAYBgNVBAsUEXByb2dyYW1za2Eg
// SIG // b3ByZW1hMRYwFAYDVQQDFA1BbWViaXMgZC5vLm8uMIIB
// SIG // IjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA9QZF
// SIG // QzscW51y/Ermb72+gkWUJ6ExfOS1UHvNAcefWdFm4yVX
// SIG // wqi8TRT+P5czX+UjKbh77d00CxODQK7rdLb8+EgKybFT
// SIG // /bVfT2y8RMtEdG0qI84ZSwh2POazD0PyiHb9XORN2yKH
// SIG // ykqLiO+6cJvZXjfNpGqf/LxkXVJvyxaemN1XTR91ohhc
// SIG // 97bNyGCP0M8PNKRZ6Hr5uKlZyr7QLYoYAkaENYdXHrOc
// SIG // l5CmBAIL56Ngc8vIlLF2lLPmDYf1qWrPpJyXfj7p3iUf
// SIG // AewtEpbC5FfhCaeHwgg41NfxhRWCXEBTewLHQJtpSo2k
// SIG // mwv5Q1ZuWMDUjPeuHZ3F/ofBoJTE4wIDAQABo4IBezCC
// SIG // AXcwCQYDVR0TBAIwADAOBgNVHQ8BAf8EBAMCB4AwQAYD
// SIG // VR0fBDkwNzA1oDOgMYYvaHR0cDovL2NzYzMtMjAxMC1j
// SIG // cmwudmVyaXNpZ24uY29tL0NTQzMtMjAxMC5jcmwwRAYD
// SIG // VR0gBD0wOzA5BgtghkgBhvhFAQcXAzAqMCgGCCsGAQUF
// SIG // BwIBFhxodHRwczovL3d3dy52ZXJpc2lnbi5jb20vcnBh
// SIG // MBMGA1UdJQQMMAoGCCsGAQUFBwMDMHEGCCsGAQUFBwEB
// SIG // BGUwYzAkBggrBgEFBQcwAYYYaHR0cDovL29jc3AudmVy
// SIG // aXNpZ24uY29tMDsGCCsGAQUFBzAChi9odHRwOi8vY3Nj
// SIG // My0yMDEwLWFpYS52ZXJpc2lnbi5jb20vQ1NDMy0yMDEw
// SIG // LmNlcjAfBgNVHSMEGDAWgBTPmanqeyb0S8mOj9fwBSbv
// SIG // 49KnnTARBglghkgBhvhCAQEEBAMCBBAwFgYKKwYBBAGC
// SIG // NwIBGwQIMAYBAQABAf8wDQYJKoZIhvcNAQEFBQADggEB
// SIG // AOMOvRZGpbGuLiIAaqp22r2WAOzxinLpe0O/pJCmBoU0
// SIG // lK/Es/Jyc4Y90QyvvhoSVKoZ2hMQ2Y6N7oSkhHjKo/n8
// SIG // WIQwNvaqZu4JpO9IgH1WkfqJWnpVcaVGPA0uHhuDhPe9
// SIG // gH6Z6I3HC5GL7sc+z4n0kzy1f3AyD+DihQhD0J/i/sgF
// SIG // iEaFmwwlJHMv6b4xmERMff050y15k875cdRpeFvSjHko
// SIG // IUbY2bfPlnvhWd/4eidkT3KY5Lpm4cqUO20166p2Cjxf
// SIG // i9kEGuDPYEYiX94hQmjWwZfIYxdYdD9f+gVcyPpiMspq
// SIG // n5QwKHOenweisG6BwXs4H5q45SLx1oJ9PUQwggYKMIIE
// SIG // 8qADAgECAhBSAOWqJVb8GobtlsnUSzPHMA0GCSqGSIb3
// SIG // DQEBBQUAMIHKMQswCQYDVQQGEwJVUzEXMBUGA1UEChMO
// SIG // VmVyaVNpZ24sIEluYy4xHzAdBgNVBAsTFlZlcmlTaWdu
// SIG // IFRydXN0IE5ldHdvcmsxOjA4BgNVBAsTMShjKSAyMDA2
// SIG // IFZlcmlTaWduLCBJbmMuIC0gRm9yIGF1dGhvcml6ZWQg
// SIG // dXNlIG9ubHkxRTBDBgNVBAMTPFZlcmlTaWduIENsYXNz
// SIG // IDMgUHVibGljIFByaW1hcnkgQ2VydGlmaWNhdGlvbiBB
// SIG // dXRob3JpdHkgLSBHNTAeFw0xMDAyMDgwMDAwMDBaFw0y
// SIG // MDAyMDcyMzU5NTlaMIG0MQswCQYDVQQGEwJVUzEXMBUG
// SIG // A1UEChMOVmVyaVNpZ24sIEluYy4xHzAdBgNVBAsTFlZl
// SIG // cmlTaWduIFRydXN0IE5ldHdvcmsxOzA5BgNVBAsTMlRl
// SIG // cm1zIG9mIHVzZSBhdCBodHRwczovL3d3dy52ZXJpc2ln
// SIG // bi5jb20vcnBhIChjKTEwMS4wLAYDVQQDEyVWZXJpU2ln
// SIG // biBDbGFzcyAzIENvZGUgU2lnbmluZyAyMDEwIENBMIIB
// SIG // IjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA9SNL
// SIG // XqXXirsy6dRX9+/kxyZ+rRmY/qidfZT2NmsQ13WBMH8E
// SIG // aH/LK3UezR0IjN9plKc3o5x7gOCZ4e43TV/OOxTuhtTQ
// SIG // 9Sc1vCULOKeMY50Xowilq7D7zWpigkzVIdob2fHjhDuK
// SIG // Kk+FW5ABT8mndhB/JwN8vq5+fcHd+QW8G0icaefApDw8
// SIG // QQA+35blxeSUcdZVAccAJkpAPLWhJqkMp22AjpAle8+/
// SIG // PxzrL5b65Yd3xrVWsno7VDBTG99iNP8e0fRakyiF5UwX
// SIG // Tn5b/aSTmX/fze+kde/vFfZH5/gZctguNBqmtKdMfr27
// SIG // Tww9V/Ew1qY2jtaAdtcZLqXNfjQtiQIDAQABo4IB/jCC
// SIG // AfowEgYDVR0TAQH/BAgwBgEB/wIBADBwBgNVHSAEaTBn
// SIG // MGUGC2CGSAGG+EUBBxcDMFYwKAYIKwYBBQUHAgEWHGh0
// SIG // dHBzOi8vd3d3LnZlcmlzaWduLmNvbS9jcHMwKgYIKwYB
// SIG // BQUHAgIwHhocaHR0cHM6Ly93d3cudmVyaXNpZ24uY29t
// SIG // L3JwYTAOBgNVHQ8BAf8EBAMCAQYwbQYIKwYBBQUHAQwE
// SIG // YTBfoV2gWzBZMFcwVRYJaW1hZ2UvZ2lmMCEwHzAHBgUr
// SIG // DgMCGgQUj+XTGoasjY5rw8+AatRIGCx7GS4wJRYjaHR0
// SIG // cDovL2xvZ28udmVyaXNpZ24uY29tL3ZzbG9nby5naWYw
// SIG // NAYDVR0fBC0wKzApoCegJYYjaHR0cDovL2NybC52ZXJp
// SIG // c2lnbi5jb20vcGNhMy1nNS5jcmwwNAYIKwYBBQUHAQEE
// SIG // KDAmMCQGCCsGAQUFBzABhhhodHRwOi8vb2NzcC52ZXJp
// SIG // c2lnbi5jb20wHQYDVR0lBBYwFAYIKwYBBQUHAwIGCCsG
// SIG // AQUFBwMDMCgGA1UdEQQhMB+kHTAbMRkwFwYDVQQDExBW
// SIG // ZXJpU2lnbk1QS0ktMi04MB0GA1UdDgQWBBTPmanqeyb0
// SIG // S8mOj9fwBSbv49KnnTAfBgNVHSMEGDAWgBR/02Wnwt3s
// SIG // u/AwCfNDOfoCrzMxMzANBgkqhkiG9w0BAQUFAAOCAQEA
// SIG // ViLmNKTEYctIuQGtVqhkD9mMkcS7zAzlrXqgIn/fRzhK
// SIG // LWzRf3EafOxwqbHwT+QPDFP6FV7+dJhJJIWBJhyRFEew
// SIG // TGOMu6E01MZF6A2FJnMD0KmMZG3ccZLmRQVgFVlROfxY
// SIG // FGv+1KTteWsIDEFy5zciBgm+I+k/RJoe6WGdzLGQXPw9
// SIG // 0o2sQj1lNtS0PUAoj5sQzyMmzEsgy5AfXYxMNMo82OU3
// SIG // 1m+lIL006ybZrg3nxZr3obQhkTNvhuhYuyV8dA5Y/nUb
// SIG // Yz/OMXybjxuWnsVTdoRbnK2R+qztk7pdyCFTwoJTY68S
// SIG // DVCHERs9VFKWiiycPZIaCJoFLseTpUiR0zGCBHIwggRu
// SIG // AgEBMIHJMIG0MQswCQYDVQQGEwJVUzEXMBUGA1UEChMO
// SIG // VmVyaVNpZ24sIEluYy4xHzAdBgNVBAsTFlZlcmlTaWdu
// SIG // IFRydXN0IE5ldHdvcmsxOzA5BgNVBAsTMlRlcm1zIG9m
// SIG // IHVzZSBhdCBodHRwczovL3d3dy52ZXJpc2lnbi5jb20v
// SIG // cnBhIChjKTEwMS4wLAYDVQQDEyVWZXJpU2lnbiBDbGFz
// SIG // cyAzIENvZGUgU2lnbmluZyAyMDEwIENBAhBAh4tnZ5Cl
// SIG // lwQonpQDAhobMAkGBSsOAwIaBQCgcDAQBgorBgEEAYI3
// SIG // AgEMMQIwADAZBgkqhkiG9w0BCQMxDAYKKwYBBAGCNwIB
// SIG // BDAcBgorBgEEAYI3AgELMQ4wDAYKKwYBBAGCNwIBFTAj
// SIG // BgkqhkiG9w0BCQQxFgQU37iZk/xA89F2g5KqWN2eI2Nj
// SIG // n7IwDQYJKoZIhvcNAQEBBQAEggEAvMUrkK9vyrxAyn4G
// SIG // EgdnZ/GfMd/qJw3Dfw3EPaCEmWIr1FNcZv725DXncKxr
// SIG // 7Wj1ZZgeuY8JNdgKxmq8j+awQH5l72Fc4BDcFRasJIP0
// SIG // 29Yi8aCYyYj1NWUPewubhtFnzUwbZT3Z55ax49Cmd5XW
// SIG // p6al/IXfKzw6Bp7fMXy/DlPw7SDOPFHPUgdSCqSeGhUH
// SIG // 6DSAS6GNVNB8xIy1dbjlxvj4CmA4Tu9ldVDPU3+VX1Cf
// SIG // SX/uFHOpeQT6KE+g+J51ry+yFdbOt3t8WvonwBK4prPg
// SIG // Ywgl7QIkd/qkcn1VCGlPbfOO8M6T8ZMr8F6rqv5rGm01
// SIG // 921mgm4M/yyVFQafIKGCAgswggIHBgkqhkiG9w0BCQYx
// SIG // ggH4MIIB9AIBATByMF4xCzAJBgNVBAYTAlVTMR0wGwYD
// SIG // VQQKExRTeW1hbnRlYyBDb3Jwb3JhdGlvbjEwMC4GA1UE
// SIG // AxMnU3ltYW50ZWMgVGltZSBTdGFtcGluZyBTZXJ2aWNl
// SIG // cyBDQSAtIEcyAhAOz/Q4yP6/NW4E2GqYGxpQMAkGBSsO
// SIG // AwIaBQCgXTAYBgkqhkiG9w0BCQMxCwYJKoZIhvcNAQcB
// SIG // MBwGCSqGSIb3DQEJBTEPFw0xNTAyMjQxMTE1NDNaMCMG
// SIG // CSqGSIb3DQEJBDEWBBQXaBvbUskC1HOjkKxrefoFof7y
// SIG // 7TANBgkqhkiG9w0BAQEFAASCAQB19/0zQ+xwwdG8RhgA
// SIG // 886dadhvkjFoCTxyX9t+Q6qSkPqnkVnKAFUQfu19B6Rk
// SIG // UOCO/5R+dzxReXpnANnNifYQvAJSMepxXmUKBqUnFq5A
// SIG // 8hLdb5YHwgsTrhNc2tGoXWYn5hlQZaVfhjQmZLmaVrjK
// SIG // 0z/b7seI5BSvwHjVVlnTZd7HgYBCXcL26pzoAU0TyDPF
// SIG // 7WCb2PUg3RS10N2dC6epgJQMFChm2ah0JPX9kjL7DS2x
// SIG // VDkmyYfRcFO0MeSa74BD+ogMRMubcuZwbAkpZGs/70Bc
// SIG // YPEd13TiQONE5z2IlhhaCeOk/AL2GaKzttJAEGFd254s
// SIG // xpsuETJADqX3AhAb
// SIG // End signature block
