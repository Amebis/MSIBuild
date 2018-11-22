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
 * Evaluates Active Setup component state and prepares instructions for
 * PublishActiveSetup deferred action.
 */

var
	productCode = Session.Property("ProductCode"),
	version;

// Read the current component version from registry. Default to "0".
try {
	var wsh = new ActiveXObject("WScript.Shell");
	version = new String(wsh.RegRead("HKLM\\Software\\Microsoft\\Active Setup\\Installed Components\\" + productCode + "\\" + "Version"));
	if (!version || version.length == 0)
		throw new Error("Active Setup component version not found.");
} catch (err) {
	version = "0";
}

// Increment the last version component.
var v = version.split(",").slice(0, 4);
v[v.length - 1] = (parseInt(v[v.length - 1], 10) + 1).toString();
version = v.join(",");

// Save the data for deferred action.
Session.Property("PublishActiveSetup") =
	(Session.EvaluateCondition("REMOVE=\"ALL\"") == 1/*msiEvaluateConditionTrue*/ ?
		["uninstall", productCode] :
		["install", productCode, Session.Property("ProductName"), version]
	).join("\t");

// SIG // Begin signature block
// SIG // MIIWvAYJKoZIhvcNAQcCoIIWrTCCFqkCAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // SWSLF8o2K03U8TaA037RPgFhLQkNjuHVIcHTrIoDM/qg
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
// SIG // AQQBgjcCARUwLwYJKoZIhvcNAQkEMSIEIAGEfbPfd2yc
// SIG // q3KoaecnqjhrsowXUEfnN+cl+I7EsAaNMA0GCSqGSIb3
// SIG // DQEBAQUABIIBAJ11ijk6V39NHEwz2/OqbpyVJSmHZptq
// SIG // W8bnRMxEpumdNxcuvi8fSjRXHYhC3OBJdyqM0YoQjoYU
// SIG // X7iMyJwMvk5F9on+J0wtL1fnQwHvQG95E/e4VEsKv0Sq
// SIG // aow0QeXY+mm/5MH209cCH0XjnanKVa87eSWIY/eLV7KD
// SIG // g7HE66e9rZiX/oCyPrUte1DA6c0/+acQzV/2+ag/zolc
// SIG // S9gKVI1ar3nd/nRrhVUxyCwKAkMCFhi1KLV1MoojIISN
// SIG // ABHDpxcJnMklp+5CxklfdawvX0gp0C4Xw8jPs1v/RoEh
// SIG // fTt/w08eraaWoNeW9Ir9cTbnySI6sxOM4IVT1AcZDvYN
// SIG // L/KhgghrMIIIZwYKKwYBBAGCNwMDATGCCFcwgghTBgkq
// SIG // hkiG9w0BBwKggghEMIIIQAIBAzEPMA0GCWCGSAFlAwQC
// SIG // AQUAMIIBDwYLKoZIhvcNAQkQAQSggf8EgfwwgfkCAQEG
// SIG // CisGAQQBsjECAQEwMTANBglghkgBZQMEAgEFAAQgW5U2
// SIG // mdsb1u5q2cHxPwFhkAx4uboqBfTFJgBfzAbPTCgCFQCU
// SIG // 8P2BcdBMZS1Bqft8ZCMqgIX36hgPMjAxODExMjIxMDA1
// SIG // NTJaoIGMpIGJMIGGMQswCQYDVQQGEwJHQjEbMBkGA1UE
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
// SIG // MTIyMTAwNTUyWjArBgsqhkiG9w0BCRACDDEcMBowGDAW
// SIG // BBQ2Un1Pompo+etFlvHZmrssDqdt+jAvBgkqhkiG9w0B
// SIG // CQQxIgQgoGqHEqN/motOUgOkwPZQlfWe2oj8nQmpXQxW
// SIG // IYWsXa4wDQYJKoZIhvcNAQEBBQAEggEAEmHw6kbuV6E3
// SIG // d0TRW9eKaIH013Skne/SK4e4dprOkGsDgEdjnW9xof18
// SIG // 978puHM6vkr54jkMTMC5RfYXgvwmvKAjFd6zMTrmhp0n
// SIG // 52lTWov7xGFCR/3aXfStCrRFKYW6INc5laLIs1IK+8G6
// SIG // VBN4tTjh1bCAuZeMD9xuhzbCZ7NtacJn5gBEY51T+6T4
// SIG // 5dMsw2U4iFQ9RoeOg+T0KfmeJtfIQrJ93/dPSEZDkkq2
// SIG // BU7PiUi17WT4u2YU7EJZzjTGjRn+bRz7oTdMaM1mkUzZ
// SIG // o8WpXRZz9m6yRxOgG7aCVQZl4MH/eaowQs7ninN0B5TE
// SIG // zxoXoQdxQCCuwVKExwo1BQ==
// SIG // End signature block
