/*
 *  MSIBuild — MSI packaging
 *
 *  Copyright (C) 2018 Amebis <info@amebis.si>
 *
 *  This program is free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License version 2
 *  as published by the Free Software Foundation.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License along
 *  with this program; if not, write to the Free Software Foundation, Inc.,
 *  51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */

 
/**
 * Publishes Active Setup component
 * 
 * This is a deffered execution action. CustomActionData property should be
 * one of:
 * 
 * "install\t<product code>\t<product name>\t<Action Setup component version>"
 *    Installs Active Setup component
 * 
 * "uninstall\t<product code>"
 *    Marks Active Setup component as uninstalled
 */

var data = Session.Property("CustomActionData").split("\t");
if (data && data.length >= 2) {
	var
		wsh = new ActiveXObject("WScript.Shell"),
		regPath = "HKLM\\Software\\Microsoft\\Active Setup\\Installed Components\\" + data[1] + "\\";

	switch (data[0].toLowerCase()) {
		case "install":
			if (data.length >= 4) {
				// Register component.
				wsh.RegWrite(regPath,             data[2], "REG_SZ");
				wsh.RegWrite(regPath + "Version", data[3], "REG_SZ");

				// Mark component as installed.
				wsh.RegWrite(regPath + "IsInstalled", 1, "REG_DWORD");
				wsh.RegWrite(regPath + "DontAsk"    , 2, "REG_DWORD");

				// Set action to execute on user logon.
				wsh.RegWrite(regPath + "StubPath", "\"%SystemRoot%\\system32\\msiexec.exe\" /fu \"" + data[1] + "\" /qn", "REG_EXPAND_SZ");
			}
			break;

		case "uninstall":
			// Mark component as uninstalled.
			wsh.RegWrite(regPath + "IsInstalled", 0, "REG_DWORD");

			// We should have set the StubPath to execute cleanup. Unfortunately, when
			// the StubPath gets executed, the MSI package is gone already. So, a
			// `msiexec /x [ProductCode] /qn` is not possible any more.
			wsh.RegDelete(regPath + "StubPath");
			break;
	}
}

// SIG // Begin signature block
// SIG // MIIWvAYJKoZIhvcNAQcCoIIWrTCCFqkCAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // Qi9+9yJcVsC2G6qWqsJZUNPauR9SC1GK5YnxOzqhq/ug
// SIG // ggtpMIIFgTCCBGmgAwIBAgIRAIJkBWOYIGrN1XByRZuP
// SIG // G5IwDQYJKoZIhvcNAQELBQAwfTELMAkGA1UEBhMCR0Ix
// SIG // GzAZBgNVBAgTEkdyZWF0ZXIgTWFuY2hlc3RlcjEQMA4G
// SIG // A1UEBxMHU2FsZm9yZDEaMBgGA1UEChMRQ09NT0RPIENB
// SIG // IExpbWl0ZWQxIzAhBgNVBAMTGkNPTU9ETyBSU0EgQ29k
// SIG // ZSBTaWduaW5nIENBMB4XDTE4MTAyNjAwMDAwMFoXDTIx
// SIG // MTAyNTIzNTk1OVowgcUxCzAJBgNVBAYTAlNJMQ0wCwYD
// SIG // VQQRDAQxMjQxMS4wLAYDVQQIDCVvc3JlZG5qZXNsb3Zl
// SIG // bnNrYSBzdGF0aXN0acSNbmEgcmVnaWphMQ8wDQYDVQQH
// SIG // DAZLYW1uaWsxEzARBgNVBAkMCkJha292bmlrIDMxITAf
// SIG // BgNVBAoMGEFtZWJpcywgZC4gby4gby4sIEthbW5pazEL
// SIG // MAkGA1UECwwCSVQxITAfBgNVBAMMGEFtZWJpcywgZC4g
// SIG // by4gby4sIEthbW5pazCCASIwDQYJKoZIhvcNAQEBBQAD
// SIG // ggEPADCCAQoCggEBAOqmu7kFr+eAEMaVAMNDlSJPy+HV
// SIG // H+KIcXEWX05g4s0n9Wlv8MMa4+993z1015PBQhrg/EfE
// SIG // FSDirsRtxAnPSwutaPpDSoSNXjqa3FZ7WnQTMoAfWCYM
// SIG // BGMDSWWy1kHbRlZxEI0cFBHYzD8urFWs0tkJYP95/8+I
// SIG // u6T0k1E/kmTjxzSoDdjmoYg3mByXgA3WIdHSA5ZMxl2H
// SIG // PGHEwf6fgP0XjJNtJvpijC+uSzDbLsUjyPMQ5l6sVle/
// SIG // wSG2c/Pes0CeSEKkOEiVrNtwlqkrzFFYQL+PFsJmYGjE
// SIG // t59eAE+HdZ5ixcJc8Ik5/3bDVjRsawCdolXYEJvX6jKc
// SIG // f1FoolECAwEAAaOCAbEwggGtMB8GA1UdIwQYMBaAFCmR
// SIG // YP+KTfrr+aZquM/55ku9Sc4SMB0GA1UdDgQWBBQz+iAh
// SIG // 3Quagkwkmp5SESo3YAcRVTAOBgNVHQ8BAf8EBAMCB4Aw
// SIG // DAYDVR0TAQH/BAIwADATBgNVHSUEDDAKBggrBgEFBQcD
// SIG // AzARBglghkgBhvhCAQEEBAMCBBAwRgYDVR0gBD8wPTA7
// SIG // BgwrBgEEAbIxAQIBAwIwKzApBggrBgEFBQcCARYdaHR0
// SIG // cHM6Ly9zZWN1cmUuY29tb2RvLm5ldC9DUFMwQwYDVR0f
// SIG // BDwwOjA4oDagNIYyaHR0cDovL2NybC5jb21vZG9jYS5j
// SIG // b20vQ09NT0RPUlNBQ29kZVNpZ25pbmdDQS5jcmwwdAYI
// SIG // KwYBBQUHAQEEaDBmMD4GCCsGAQUFBzAChjJodHRwOi8v
// SIG // Y3J0LmNvbW9kb2NhLmNvbS9DT01PRE9SU0FDb2RlU2ln
// SIG // bmluZ0NBLmNydDAkBggrBgEFBQcwAYYYaHR0cDovL29j
// SIG // c3AuY29tb2RvY2EuY29tMCIGA1UdEQQbMBmBF3BldGVy
// SIG // LmhvbG96YW5AYW1lYmlzLnNpMA0GCSqGSIb3DQEBCwUA
// SIG // A4IBAQBc4zOMSKyNHzbHvj49pahnrnezTSbesEDKd0Dx
// SIG // l0KpKMURAzkFU8nbqV5zD8y/zBuMANYA9aHQLQ6DqTur
// SIG // 52sw4DfE5lKAFXZBY5eVp4lLTVflGPjmLb4ANT65rsUw
// SIG // qfsC7rSJtwInHtRulebXtVBlo1PlPDQrF64Oj9wGUq50
// SIG // 5XwnVXrXoDrMPD+jH8zX3sEBJ+mEQfu7qBcZw9LQLLVa
// SIG // 1KbcE1GOEuFxQXd6gfp2syngEBpWLu+qajeRgmhAcJ6v
// SIG // lwdAeCJNN2C9w1PdEjjMyIw/+QRKv6jppfbRp5H86l+9
// SIG // XCr62cqAwdhPy2t0Ix7rNRTwJiUG3RV+XfmCljF1MIIF
// SIG // 4DCCA8igAwIBAgIQLnyHzA6TSlL+lP0ct800rzANBgkq
// SIG // hkiG9w0BAQwFADCBhTELMAkGA1UEBhMCR0IxGzAZBgNV
// SIG // BAgTEkdyZWF0ZXIgTWFuY2hlc3RlcjEQMA4GA1UEBxMH
// SIG // U2FsZm9yZDEaMBgGA1UEChMRQ09NT0RPIENBIExpbWl0
// SIG // ZWQxKzApBgNVBAMTIkNPTU9ETyBSU0EgQ2VydGlmaWNh
// SIG // dGlvbiBBdXRob3JpdHkwHhcNMTMwNTA5MDAwMDAwWhcN
// SIG // MjgwNTA4MjM1OTU5WjB9MQswCQYDVQQGEwJHQjEbMBkG
// SIG // A1UECBMSR3JlYXRlciBNYW5jaGVzdGVyMRAwDgYDVQQH
// SIG // EwdTYWxmb3JkMRowGAYDVQQKExFDT01PRE8gQ0EgTGlt
// SIG // aXRlZDEjMCEGA1UEAxMaQ09NT0RPIFJTQSBDb2RlIFNp
// SIG // Z25pbmcgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAw
// SIG // ggEKAoIBAQCmmJBjd5E0f4rR3elnMRHrzB79MR2zuWJX
// SIG // P5O8W+OfHiQyESdrvFGRp8+eniWzX4GoGA8dHiAwDvth
// SIG // e4YJs+P9omidHCydv3Lj5HWg5TUjjsmK7hoMZMfYQqF7
// SIG // tVIDSzqwjiNLS2PgIpQ3e9V5kAoUGFEs5v7BEvAcP2Fh
// SIG // Coyi3PbDMKrNKBh1SMF5WgjNu4xVjPfUdpA6M0ZQc5hc
// SIG // 9IVKaw+A3V7Wvf2pL8Al9fl4141fEMJEVTyQPDFGy3Cu
// SIG // B6kK46/BAW+QGiPiXzjbxghdR7ODQfAuADcUuRKqeZJS
// SIG // zYcPe9hiKaR+ML0btYxytEjy4+gh+V5MYnmLAgaff9UL
// SIG // AgMBAAGjggFRMIIBTTAfBgNVHSMEGDAWgBS7r34CPfqm
// SIG // 8TyEjq3uOJjs2TIy1DAdBgNVHQ4EFgQUKZFg/4pN+uv5
// SIG // pmq4z/nmS71JzhIwDgYDVR0PAQH/BAQDAgGGMBIGA1Ud
// SIG // EwEB/wQIMAYBAf8CAQAwEwYDVR0lBAwwCgYIKwYBBQUH
// SIG // AwMwEQYDVR0gBAowCDAGBgRVHSAAMEwGA1UdHwRFMEMw
// SIG // QaA/oD2GO2h0dHA6Ly9jcmwuY29tb2RvY2EuY29tL0NP
// SIG // TU9ET1JTQUNlcnRpZmljYXRpb25BdXRob3JpdHkuY3Js
// SIG // MHEGCCsGAQUFBwEBBGUwYzA7BggrBgEFBQcwAoYvaHR0
// SIG // cDovL2NydC5jb21vZG9jYS5jb20vQ09NT0RPUlNBQWRk
// SIG // VHJ1c3RDQS5jcnQwJAYIKwYBBQUHMAGGGGh0dHA6Ly9v
// SIG // Y3NwLmNvbW9kb2NhLmNvbTANBgkqhkiG9w0BAQwFAAOC
// SIG // AgEAAj8COcPu+Mo7id4MbU2x8U6ST6/COCwEzMVjEasJ
// SIG // Y6+rotcCP8xvGcM91hoIlP8l2KmIpysQGuCbsQciGlEc
// SIG // OtTh6Qm/5iR0rx57FjFuI+9UUS1SAuJ1CAVM8bdR4VEA
// SIG // xof2bO4QRHZXavHfWGshqknUfDdOvf+2dVRAGDZXZxHN
// SIG // TwLk/vPa/HUX2+y392UJI0kfQ1eD6n4gd2HITfK7ZU2o
// SIG // 94VFB696aSdlkClAi997OlE5jKgfcHmtbUIgos8MbAOM
// SIG // TM1zB5TnWo46BLqioXwfy2M6FafUFRunUkcyqfS/ZEfR
// SIG // qh9TTjIwc8Jvt3iCnVz/RrtrIh2IC/gbqjSm/Iz13X9l
// SIG // jIwxVzHQNuxHoc/Li6jvHBhYxQZ3ykubUa9MCEp6j+Kj
// SIG // UuKOjswm5LLY5TjCqO3GgZw1a6lYYUoKl7RLQrZVnb6Z
// SIG // 53BtWfhtKgx/GWBfDJqIbDCsUgmQFhv/K53b0CDKieoo
// SIG // fjKOGd97SDMe12X4rsn4gxSTdn1k0I7OvjV9/3IxTZ+e
// SIG // vR5sL6iPDAZQ+4wns3bJ9ObXwzTijIchhmH+v1V04SF3
// SIG // AwpobLvkyanmz1kl63zsRQ55ZmjoIs2475iFTZYRPAmK
// SIG // 0H+8KCgT+2rKVI2SXM3CZZgGns5IW9S1N5NGQXwH3c/6
// SIG // Q++6Z2H/fUnguzB9XIDj5hY5S6cxggqrMIIKpwIBATCB
// SIG // kjB9MQswCQYDVQQGEwJHQjEbMBkGA1UECBMSR3JlYXRl
// SIG // ciBNYW5jaGVzdGVyMRAwDgYDVQQHEwdTYWxmb3JkMRow
// SIG // GAYDVQQKExFDT01PRE8gQ0EgTGltaXRlZDEjMCEGA1UE
// SIG // AxMaQ09NT0RPIFJTQSBDb2RlIFNpZ25pbmcgQ0ECEQCC
// SIG // ZAVjmCBqzdVwckWbjxuSMA0GCWCGSAFlAwQCAQUAoHww
// SIG // EAYKKwYBBAGCNwIBDDECMAAwGQYJKoZIhvcNAQkDMQwG
// SIG // CisGAQQBgjcCAQQwHAYKKwYBBAGCNwIBCzEOMAwGCisG
// SIG // AQQBgjcCARUwLwYJKoZIhvcNAQkEMSIEIAjNaloaL/xM
// SIG // B0UyKoXYq0egvakd4tV5PYbfbxxFOMcXMA0GCSqGSIb3
// SIG // DQEBAQUABIIBAA9IQVEMX8G91PwyenSfXE3Ib4N/sGGJ
// SIG // zJ3H6oAwPLXBnZeOKtagG5OZtZ2LMeAtU5E62HEgtWQQ
// SIG // YdHVH+lITGbsS73KRp24k5MzC2TfNzGobGX33X4p4zot
// SIG // W4n2AJ/yjS3dVrpRiJjwfsrNl3fM3CvH/TawgTopqdWp
// SIG // 4rRfPcMguzimYwseoXO9P2lg4lQvImvO1XR6HCXXbbuF
// SIG // xuLcfKhgdLnsb2WicwDnDSCA4JxdIPfwGKUkb71LxmQ/
// SIG // uYEHnWk54kdiWCnriQKUIMgaAhBUlktlZOJPl6LhFhZi
// SIG // kx4Ve37WQXC7CqPBnnHcRKK0s+fXhCgvvdkcj1X049Ut
// SIG // 69KhgghrMIIIZwYKKwYBBAGCNwMDATGCCFcwgghTBgkq
// SIG // hkiG9w0BBwKggghEMIIIQAIBAzEPMA0GCWCGSAFlAwQC
// SIG // AQUAMIIBDwYLKoZIhvcNAQkQAQSggf8EgfwwgfkCAQEG
// SIG // CisGAQQBsjECAQEwMTANBglghkgBZQMEAgEFAAQgSqjE
// SIG // oaABn8z8cBD1ly5UDN5KXb2gJpBNzNMg0ur0PJYCFQD7
// SIG // DGbnRGSjao94Kd4SSbl9ocX3ChgPMjAxODExMjIwOTE3
// SIG // MjZaoIGMpIGJMIGGMQswCQYDVQQGEwJHQjEbMBkGA1UE
// SIG // CBMSR3JlYXRlciBNYW5jaGVzdGVyMRAwDgYDVQQHEwdT
// SIG // YWxmb3JkMRowGAYDVQQKExFDT01PRE8gQ0EgTGltaXRl
// SIG // ZDEsMCoGA1UEAxMjQ09NT0RPIFNIQS0yNTYgVGltZSBT
// SIG // dGFtcGluZyBTaWduZXKgggSgMIIEnDCCA4SgAwIBAgIQ
// SIG // TrCHj8wkNTay2Mn3vzlVdzANBgkqhkiG9w0BAQsFADCB
// SIG // lTELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAlVUMRcwFQYD
// SIG // VQQHEw5TYWx0IExha2UgQ2l0eTEeMBwGA1UEChMVVGhl
// SIG // IFVTRVJUUlVTVCBOZXR3b3JrMSEwHwYDVQQLExhodHRw
// SIG // Oi8vd3d3LnVzZXJ0cnVzdC5jb20xHTAbBgNVBAMTFFVU
// SIG // Ti1VU0VSRmlyc3QtT2JqZWN0MB4XDTE1MTIzMTAwMDAw
// SIG // MFoXDTE5MDcwOTE4NDAzNlowgYYxCzAJBgNVBAYTAkdC
// SIG // MRswGQYDVQQIExJHcmVhdGVyIE1hbmNoZXN0ZXIxEDAO
// SIG // BgNVBAcTB1NhbGZvcmQxGjAYBgNVBAoTEUNPTU9ETyBD
// SIG // QSBMaW1pdGVkMSwwKgYDVQQDEyNDT01PRE8gU0hBLTI1
// SIG // NiBUaW1lIFN0YW1waW5nIFNpZ25lcjCCASIwDQYJKoZI
// SIG // hvcNAQEBBQADggEPADCCAQoCggEBAM68dLdwgE9e8z+Y
// SIG // qi7L1BIBIzVpCyK85v0JbCjkExKsu7ot5dXdIu5ztiz4
// SIG // 0qRx50kleKslt5AQoJuLdybdQOpBo/2IzXKmiTtQVxx6
// SIG // JSQiAlFANWeKMWkN5TlzSTmblQGFUvIrFImaTgSkvECu
// SIG // OabdQALgOnX+PX1VlFvxTiR8yLhYGcrA2r5YE5rmHOfR
// SIG // wTvwXY9JCCGe0PO+1tRmT1xyNnvDgtOYCJSvq0RPGMcU
// SIG // 2haxHjIOEjjAtTx27HVQACAEERntxv/fTv4IgScxT3F0
// SIG // bgMMcCeBVWqaQ5Kkf9v9P8UXHkG7zuinf4yV+f1/+GGI
// SIG // iQA+/wsB2/3VtaTkkRECAwEAAaOB9DCB8TAfBgNVHSME
// SIG // GDAWgBTa7WR0FJwUPKvdmam9WyhNizzJ2DAdBgNVHQ4E
// SIG // FgQUfb+R16dsWkdmRHuQ1I6QckGPF8IwDgYDVR0PAQH/
// SIG // BAQDAgbAMAwGA1UdEwEB/wQCMAAwFgYDVR0lAQH/BAww
// SIG // CgYIKwYBBQUHAwgwQgYDVR0fBDswOTA3oDWgM4YxaHR0
// SIG // cDovL2NybC51c2VydHJ1c3QuY29tL1VUTi1VU0VSRmly
// SIG // c3QtT2JqZWN0LmNybDA1BggrBgEFBQcBAQQpMCcwJQYI
// SIG // KwYBBQUHMAGGGWh0dHA6Ly9vY3NwLnVzZXJ0cnVzdC5j
// SIG // b20wDQYJKoZIhvcNAQELBQADggEBAFCw9d9frTPcw1NY
// SIG // WLzCE3V7IB1Uyro/UD+6ivRrCWPAW12L1nUac72L/0fx
// SIG // FdxRFiMZMuZukk3Rxi5aHohCFMly5dcIUIpq9WRAVq4k
// SIG // 42GXFULwLEiug+Y1PItbwo+ujsw0UjTg+/7K/bEkaNGk
// SIG // ESMQBv2ywiQnx9fpShyPPz7P7et1eWyOX/chtlDmJaHN
// SIG // ZpQSbL/bs66H2GgDciACwn7alPNyBzxX6FUk5wWgHcSB
// SIG // AYJLHz8PnTOb8E/MndaFgc/L5/1K6ZK49w1ycy3pd/lv
// SIG // jyh6Ph69CIbcjR4RX/dbu4d2xp5MVGHQZ9uThNoxhwOS
// SIG // 55/j6c9aVsho4FJJlFwxggJxMIICbQIBATCBqjCBlTEL
// SIG // MAkGA1UEBhMCVVMxCzAJBgNVBAgTAlVUMRcwFQYDVQQH
// SIG // Ew5TYWx0IExha2UgQ2l0eTEeMBwGA1UEChMVVGhlIFVT
// SIG // RVJUUlVTVCBOZXR3b3JrMSEwHwYDVQQLExhodHRwOi8v
// SIG // d3d3LnVzZXJ0cnVzdC5jb20xHTAbBgNVBAMTFFVUTi1V
// SIG // U0VSRmlyc3QtT2JqZWN0AhBOsIePzCQ1NrLYyfe/OVV3
// SIG // MA0GCWCGSAFlAwQCAQUAoIGYMBoGCSqGSIb3DQEJAzEN
// SIG // BgsqhkiG9w0BCRABBDAcBgkqhkiG9w0BCQUxDxcNMTgx
// SIG // MTIyMDkxNzI2WjArBgsqhkiG9w0BCRACDDEcMBowGDAW
// SIG // BBQ2Un1Pompo+etFlvHZmrssDqdt+jAvBgkqhkiG9w0B
// SIG // CQQxIgQgc9ROfOXHnwYMTogXYqZ2HmJTAZAMdS1YfFck
// SIG // SNYjwFUwDQYJKoZIhvcNAQEBBQAEggEAEJ7SnnXSLupt
// SIG // pDgy+6tgNvGsgbWR8Vnwtvjdam0a2FJCh8XvMOEnLpdp
// SIG // RzvNospGYa4kLlDfxI54OkPEo98u68V4d96z+4fCME/O
// SIG // kfRlSe0Y1uut7GHi0mdzTUjKbjDTeRq8OUknj/Rj3uRe
// SIG // yObso2iLS4FjBi8YUtSTdKKTqwOHlhMHMUHUZ5Kyem1l
// SIG // nTa2SbHNOvhSKOXkCL/DB8CHdUkYZid4xTq39+2Glum0
// SIG // E8JbeM1dJIFONIYaIKONCL/FCD5IZsSjyom36O0VrubG
// SIG // eI1PUr0+bvlD/iDP0X9T1gJGk9CbMPBlFF7ZZhcQP7mE
// SIG // VmmmG6JNOE6eJ5EHi9GNwA==
// SIG // End signature block
