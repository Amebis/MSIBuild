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
// SIG // MIIWuwYJKoZIhvcNAQcCoIIWrDCCFqgCAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // kMMxMz1Ef3Ep3DW9uQLGluhMziYbqAt1jqmtSruYId2g
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
// SIG // Q++6Z2H/fUnguzB9XIDj5hY5S6cxggqqMIIKpgIBATCB
// SIG // kjB9MQswCQYDVQQGEwJHQjEbMBkGA1UECBMSR3JlYXRl
// SIG // ciBNYW5jaGVzdGVyMRAwDgYDVQQHEwdTYWxmb3JkMRow
// SIG // GAYDVQQKExFDT01PRE8gQ0EgTGltaXRlZDEjMCEGA1UE
// SIG // AxMaQ09NT0RPIFJTQSBDb2RlIFNpZ25pbmcgQ0ECEQCC
// SIG // ZAVjmCBqzdVwckWbjxuSMA0GCWCGSAFlAwQCAQUAoHww
// SIG // EAYKKwYBBAGCNwIBDDECMAAwGQYJKoZIhvcNAQkDMQwG
// SIG // CisGAQQBgjcCAQQwHAYKKwYBBAGCNwIBCzEOMAwGCisG
// SIG // AQQBgjcCARUwLwYJKoZIhvcNAQkEMSIEIK2hWUgvD9rV
// SIG // bhKYGB6Q+evJNZd3bj/8Zxir+menwUUrMA0GCSqGSIb3
// SIG // DQEBAQUABIIBAMN6iO1euWhgV5eutx/0PxElNc1PUo79
// SIG // Ul/OWrNviMOkjDl5xPKznhhOghjZ5/I2BqmYWZ80U9im
// SIG // fqpNHyVpE5BVuIrVXytIIdzr7EmZ5OfjUjDJZKI/RV4D
// SIG // uz6qUwzCLncguR/Ielw1E2Mc6pvXV34Ku6si5pSr8kLI
// SIG // 2SbUUUDDv6jeZ0wxRsWTle9j/2ESoTdcuvJueaZ4iGyl
// SIG // xnDpXwRx8G+ERlOU8+lbnceqtD4uKf1bG3Qexso04hrA
// SIG // 51Yvf7Q79l7uUEN978Se9Kna/ZgE9spGI+Ah351zasT0
// SIG // Wp3w7BhH+R02q5l66VBwC0pkcqzMEulipG6sL7HvOCD9
// SIG // 3NihgghqMIIIZgYKKwYBBAGCNwMDATGCCFYwgghSBgkq
// SIG // hkiG9w0BBwKggghDMIIIPwIBAzEPMA0GCWCGSAFlAwQC
// SIG // AQUAMIIBDgYLKoZIhvcNAQkQAQSggf4EgfswgfgCAQEG
// SIG // CisGAQQBsjECAQEwMTANBglghkgBZQMEAgEFAAQgXFjA
// SIG // TYko6yEcxDIXslOR/w2X2DUqAiBx9/tIBMAZrCACFFs5
// SIG // Dqa2fwvq/1InjBGgY7lxuzyVGA8yMDE4MTEyMjEwMDU1
// SIG // NlqggYykgYkwgYYxCzAJBgNVBAYTAkdCMRswGQYDVQQI
// SIG // ExJHcmVhdGVyIE1hbmNoZXN0ZXIxEDAOBgNVBAcTB1Nh
// SIG // bGZvcmQxGjAYBgNVBAoTEUNPTU9ETyBDQSBMaW1pdGVk
// SIG // MSwwKgYDVQQDEyNDT01PRE8gU0hBLTI1NiBUaW1lIFN0
// SIG // YW1waW5nIFNpZ25lcqCCBKAwggScMIIDhKADAgECAhBO
// SIG // sIePzCQ1NrLYyfe/OVV3MA0GCSqGSIb3DQEBCwUAMIGV
// SIG // MQswCQYDVQQGEwJVUzELMAkGA1UECBMCVVQxFzAVBgNV
// SIG // BAcTDlNhbHQgTGFrZSBDaXR5MR4wHAYDVQQKExVUaGUg
// SIG // VVNFUlRSVVNUIE5ldHdvcmsxITAfBgNVBAsTGGh0dHA6
// SIG // Ly93d3cudXNlcnRydXN0LmNvbTEdMBsGA1UEAxMUVVRO
// SIG // LVVTRVJGaXJzdC1PYmplY3QwHhcNMTUxMjMxMDAwMDAw
// SIG // WhcNMTkwNzA5MTg0MDM2WjCBhjELMAkGA1UEBhMCR0Ix
// SIG // GzAZBgNVBAgTEkdyZWF0ZXIgTWFuY2hlc3RlcjEQMA4G
// SIG // A1UEBxMHU2FsZm9yZDEaMBgGA1UEChMRQ09NT0RPIENB
// SIG // IExpbWl0ZWQxLDAqBgNVBAMTI0NPTU9ETyBTSEEtMjU2
// SIG // IFRpbWUgU3RhbXBpbmcgU2lnbmVyMIIBIjANBgkqhkiG
// SIG // 9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzrx0t3CAT17zP5iq
// SIG // LsvUEgEjNWkLIrzm/QlsKOQTEqy7ui3l1d0i7nO2LPjS
// SIG // pHHnSSV4qyW3kBCgm4t3Jt1A6kGj/YjNcqaJO1BXHHol
// SIG // JCICUUA1Z4oxaQ3lOXNJOZuVAYVS8isUiZpOBKS8QK45
// SIG // pt1AAuA6df49fVWUW/FOJHzIuFgZysDavlgTmuYc59HB
// SIG // O/Bdj0kIIZ7Q877W1GZPXHI2e8OC05gIlK+rRE8YxxTa
// SIG // FrEeMg4SOMC1PHbsdVAAIAQRGe3G/99O/giBJzFPcXRu
// SIG // AwxwJ4FVappDkqR/2/0/xRceQbvO6Kd/jJX5/X/4YYiJ
// SIG // AD7/CwHb/dW1pOSREQIDAQABo4H0MIHxMB8GA1UdIwQY
// SIG // MBaAFNrtZHQUnBQ8q92Zqb1bKE2LPMnYMB0GA1UdDgQW
// SIG // BBR9v5HXp2xaR2ZEe5DUjpByQY8XwjAOBgNVHQ8BAf8E
// SIG // BAMCBsAwDAYDVR0TAQH/BAIwADAWBgNVHSUBAf8EDDAK
// SIG // BggrBgEFBQcDCDBCBgNVHR8EOzA5MDegNaAzhjFodHRw
// SIG // Oi8vY3JsLnVzZXJ0cnVzdC5jb20vVVROLVVTRVJGaXJz
// SIG // dC1PYmplY3QuY3JsMDUGCCsGAQUFBwEBBCkwJzAlBggr
// SIG // BgEFBQcwAYYZaHR0cDovL29jc3AudXNlcnRydXN0LmNv
// SIG // bTANBgkqhkiG9w0BAQsFAAOCAQEAULD131+tM9zDU1hY
// SIG // vMITdXsgHVTKuj9QP7qK9GsJY8BbXYvWdRpzvYv/R/EV
// SIG // 3FEWIxky5m6STdHGLloeiEIUyXLl1whQimr1ZEBWriTj
// SIG // YZcVQvAsSK6D5jU8i1vCj66OzDRSNOD7/sr9sSRo0aQR
// SIG // IxAG/bLCJCfH1+lKHI8/Ps/t63V5bI5f9yG2UOYloc1m
// SIG // lBJsv9uzrofYaANyIALCftqU83IHPFfoVSTnBaAdxIEB
// SIG // gksfPw+dM5vwT8yd1oWBz8vn/Urpkrj3DXJzLel3+W+P
// SIG // KHo+Hr0IhtyNHhFf91u7h3bGnkxUYdBn25OE2jGHA5Ln
// SIG // n+Ppz1pWyGjgUkmUXDGCAnEwggJtAgEBMIGqMIGVMQsw
// SIG // CQYDVQQGEwJVUzELMAkGA1UECBMCVVQxFzAVBgNVBAcT
// SIG // DlNhbHQgTGFrZSBDaXR5MR4wHAYDVQQKExVUaGUgVVNF
// SIG // UlRSVVNUIE5ldHdvcmsxITAfBgNVBAsTGGh0dHA6Ly93
// SIG // d3cudXNlcnRydXN0LmNvbTEdMBsGA1UEAxMUVVROLVVT
// SIG // RVJGaXJzdC1PYmplY3QCEE6wh4/MJDU2stjJ9785VXcw
// SIG // DQYJYIZIAWUDBAIBBQCggZgwGgYJKoZIhvcNAQkDMQ0G
// SIG // CyqGSIb3DQEJEAEEMBwGCSqGSIb3DQEJBTEPFw0xODEx
// SIG // MjIxMDA1NTZaMCsGCyqGSIb3DQEJEAIMMRwwGjAYMBYE
// SIG // FDZSfU+iamj560WW8dmauywOp236MC8GCSqGSIb3DQEJ
// SIG // BDEiBCA/IFBbYdDtFY07qVNIgj23YA69JuOdw+bX3OOa
// SIG // E9BSgzANBgkqhkiG9w0BAQEFAASCAQAPOp5DglKxgDBU
// SIG // Q8y7mnMpz9e9qlfTievUzDNtNwlm/TowKLJpDCjpajVV
// SIG // GOOYNMbKCEGVUQm60IJ1JO/UxSvIvqyX4xX+NiMR+mbh
// SIG // jGMRU3Q+Z8Sdwv1z63yC3EWUoLrJi+odfxEe8rixc+yi
// SIG // ksJAnIu9+6/hwlN9Sb0D9xYBzLHUYeOq9wUFkbWyOTMY
// SIG // LdyDYL61FDFnPe0mUy8NUVCy9QGzw5NeGNgNwkX6uzLC
// SIG // kSqbE3a9gTIJExQqSwtbb+CBrEf3SnOzqmyGDiueTts+
// SIG // hWnswCJ8xHP3hSrebpsEx1jI1xjasbFyCysrp04w6oDB
// SIG // hYaGOyna8VLy+J55igOe
// SIG // End signature block
