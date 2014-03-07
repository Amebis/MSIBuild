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
// SIG // MIIZWwYJKoZIhvcNAQcCoIIZTDCCGUgCAQExDjAMBggq
// SIG // hkiG9w0CBQUAMGYGCisGAQQBgjcCAQSgWDBWMDIGCisG
// SIG // AQQBgjcCAR4wJAIBAQQQEODJBs441BGiowAQS9NQkAIB
// SIG // AAIBAAIBAAIBAAIBADAgMAwGCCqGSIb3DQIFBQAEEALd
// SIG // LYTGOb8H7qJx35f1XoigghQlMIID7jCCA1egAwIBAgIQ
// SIG // fpPr+3zGTlnqS5p31Ab8OzANBgkqhkiG9w0BAQUFADCB
// SIG // izELMAkGA1UEBhMCWkExFTATBgNVBAgTDFdlc3Rlcm4g
// SIG // Q2FwZTEUMBIGA1UEBxMLRHVyYmFudmlsbGUxDzANBgNV
// SIG // BAoTBlRoYXd0ZTEdMBsGA1UECxMUVGhhd3RlIENlcnRp
// SIG // ZmljYXRpb24xHzAdBgNVBAMTFlRoYXd0ZSBUaW1lc3Rh
// SIG // bXBpbmcgQ0EwHhcNMTIxMjIxMDAwMDAwWhcNMjAxMjMw
// SIG // MjM1OTU5WjBeMQswCQYDVQQGEwJVUzEdMBsGA1UEChMU
// SIG // U3ltYW50ZWMgQ29ycG9yYXRpb24xMDAuBgNVBAMTJ1N5
// SIG // bWFudGVjIFRpbWUgU3RhbXBpbmcgU2VydmljZXMgQ0Eg
// SIG // LSBHMjCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoC
// SIG // ggEBALGss0lUS5ccEgrYJXmRIlcqb9y4JsRDc2vCvy5Q
// SIG // WvsUwnaOQwElQ7Sh4kX06Ld7w3TMIte0lAAC903tv7S3
// SIG // RCRrzV9FO9FEzkMScxeCi2m0K8uZHqxyGyZNcR+xMd37
// SIG // UWECU6aq9UksBXhFpS+JzueZ5/6M4lc/PcaS3Er4ezPk
// SIG // eQr78HWIQZz/xQNRmarXbJ+TaYdlKYOFwmAUxMjJOxTa
// SIG // wIHwHw103pIiq8r3+3R8J+b3Sht/p8OeLa6K6qbmqicW
// SIG // fWH3mHERvOJQoUvlXfrlDqcsn6plINPYlujIfKVOSET/
// SIG // GeJEB5IL12iEgF1qeGRFzWBGflTBE3zFefHJwXECAwEA
// SIG // AaOB+jCB9zAdBgNVHQ4EFgQUX5r1blzMzHSa1N197z/b
// SIG // 7EyALt0wMgYIKwYBBQUHAQEEJjAkMCIGCCsGAQUFBzAB
// SIG // hhZodHRwOi8vb2NzcC50aGF3dGUuY29tMBIGA1UdEwEB
// SIG // /wQIMAYBAf8CAQAwPwYDVR0fBDgwNjA0oDKgMIYuaHR0
// SIG // cDovL2NybC50aGF3dGUuY29tL1RoYXd0ZVRpbWVzdGFt
// SIG // cGluZ0NBLmNybDATBgNVHSUEDDAKBggrBgEFBQcDCDAO
// SIG // BgNVHQ8BAf8EBAMCAQYwKAYDVR0RBCEwH6QdMBsxGTAX
// SIG // BgNVBAMTEFRpbWVTdGFtcC0yMDQ4LTEwDQYJKoZIhvcN
// SIG // AQEFBQADgYEAAwmbj3nvf1kwqu9otfrjCR27T4IGXTdf
// SIG // plKfFo3qHJIJRG71betYfDDo+WmNI3MLEm9Hqa45Efgq
// SIG // sZuwGsOO61mWAK3ODE2y0DGmCFwqevzieh1XTKhlGOl5
// SIG // QGIllm7HxzdqgyEIjkHq3dlXPx13SYcqFgZepjhqIhKj
// SIG // URmDfrYwggSjMIIDi6ADAgECAhAOz/Q4yP6/NW4E2GqY
// SIG // GxpQMA0GCSqGSIb3DQEBBQUAMF4xCzAJBgNVBAYTAlVT
// SIG // MR0wGwYDVQQKExRTeW1hbnRlYyBDb3Jwb3JhdGlvbjEw
// SIG // MC4GA1UEAxMnU3ltYW50ZWMgVGltZSBTdGFtcGluZyBT
// SIG // ZXJ2aWNlcyBDQSAtIEcyMB4XDTEyMTAxODAwMDAwMFoX
// SIG // DTIwMTIyOTIzNTk1OVowYjELMAkGA1UEBhMCVVMxHTAb
// SIG // BgNVBAoTFFN5bWFudGVjIENvcnBvcmF0aW9uMTQwMgYD
// SIG // VQQDEytTeW1hbnRlYyBUaW1lIFN0YW1waW5nIFNlcnZp
// SIG // Y2VzIFNpZ25lciAtIEc0MIIBIjANBgkqhkiG9w0BAQEF
// SIG // AAOCAQ8AMIIBCgKCAQEAomMLOUS4uyOnREm7Dv+h8GEK
// SIG // U5OwmNutLA9KxW7/hjxTVQ8VzgQ/K/2plpbZvmF5C1vJ
// SIG // TIZ25eBDSyKV7sIrQ8Gf2Gi0jkBP7oU4uRHFI/JkWPAV
// SIG // Mm9OV6GuiKQC1yoezUvh3WPVF4kyW7BemVqonShQDhfu
// SIG // ltthO0VRHc8SVguSR/yrrvZmPUescHLnkudfzRC5xINk
// SIG // lBm9JYDh6NIipdC6Anqhd5NbZcPuF3S8QYYq3AhMjJKM
// SIG // kS2ed0QfaNaodHfbDlsyi1aLM73ZY8hJnTrFxeozC9Lx
// SIG // oxv0i77Zs1eLO94Ep3oisiSuLsdwxb5OgyYI+wu9qU+Z
// SIG // COEQKHKqzQIDAQABo4IBVzCCAVMwDAYDVR0TAQH/BAIw
// SIG // ADAWBgNVHSUBAf8EDDAKBggrBgEFBQcDCDAOBgNVHQ8B
// SIG // Af8EBAMCB4AwcwYIKwYBBQUHAQEEZzBlMCoGCCsGAQUF
// SIG // BzABhh5odHRwOi8vdHMtb2NzcC53cy5zeW1hbnRlYy5j
// SIG // b20wNwYIKwYBBQUHMAKGK2h0dHA6Ly90cy1haWEud3Mu
// SIG // c3ltYW50ZWMuY29tL3Rzcy1jYS1nMi5jZXIwPAYDVR0f
// SIG // BDUwMzAxoC+gLYYraHR0cDovL3RzLWNybC53cy5zeW1h
// SIG // bnRlYy5jb20vdHNzLWNhLWcyLmNybDAoBgNVHREEITAf
// SIG // pB0wGzEZMBcGA1UEAxMQVGltZVN0YW1wLTIwNDgtMjAd
// SIG // BgNVHQ4EFgQURsZpow5KFB7VTNpSYxc/Xja8DeYwHwYD
// SIG // VR0jBBgwFoAUX5r1blzMzHSa1N197z/b7EyALt0wDQYJ
// SIG // KoZIhvcNAQEFBQADggEBAHg7tJEqAEzwj2IwN3ijhCcH
// SIG // bxiy3iXcoNSUA6qGTiWfmkADHN3O43nLIWgG2rYytG2/
// SIG // 9CwmYzPkSWRtDebDZw73BaQ1bHyJFsbpst+y6d0gxnEP
// SIG // zZV03LZc3r03H0N45ni1zSgEIKOq8UvEiCmRDoDREfzd
// SIG // XHZuT14ORUZBbg2w6jiasTraCXEQ/Bx5tIB7rGn0/Zy2
// SIG // DBYr8X9bCT2bW+IWyhOBbQAuOA2oKY8s4bL0WqkBrxWc
// SIG // LC9JG9siu8P+eJRRw4axgohd8D20UaF5Mysue7ncIAkT
// SIG // cetqGVvP6KUwVyyJST+5z3/Jvz4iaGNTmr1pdKzFHTx/
// SIG // kuDDvBzYBHUwggV6MIIEYqADAgECAhBAh4tnZ5CllwQo
// SIG // npQDAhobMA0GCSqGSIb3DQEBBQUAMIG0MQswCQYDVQQG
// SIG // EwJVUzEXMBUGA1UEChMOVmVyaVNpZ24sIEluYy4xHzAd
// SIG // BgNVBAsTFlZlcmlTaWduIFRydXN0IE5ldHdvcmsxOzA5
// SIG // BgNVBAsTMlRlcm1zIG9mIHVzZSBhdCBodHRwczovL3d3
// SIG // dy52ZXJpc2lnbi5jb20vcnBhIChjKTEwMS4wLAYDVQQD
// SIG // EyVWZXJpU2lnbiBDbGFzcyAzIENvZGUgU2lnbmluZyAy
// SIG // MDEwIENBMB4XDTEyMDkyNjAwMDAwMFoXDTE1MTAxMTIz
// SIG // NTk1OVowgb0xCzAJBgNVBAYTAlNJMREwDwYDVQQIEwhT
// SIG // bG92ZW5pYTEPMA0GA1UEBxMGS2FtbmlrMRYwFAYDVQQK
// SIG // FA1BbWViaXMgZC5vLm8uMT4wPAYDVQQLEzVEaWdpdGFs
// SIG // IElEIENsYXNzIDMgLSBNaWNyb3NvZnQgU29mdHdhcmUg
// SIG // VmFsaWRhdGlvbiB2MjEaMBgGA1UECxQRcHJvZ3JhbXNr
// SIG // YSBvcHJlbWExFjAUBgNVBAMUDUFtZWJpcyBkLm8uby4w
// SIG // ggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQD1
// SIG // BkVDOxxbnXL8SuZvvb6CRZQnoTF85LVQe80Bx59Z0Wbj
// SIG // JVfCqLxNFP4/lzNf5SMpuHvt3TQLE4NArut0tvz4SArJ
// SIG // sVP9tV9PbLxEy0R0bSojzhlLCHY85rMPQ/KIdv1c5E3b
// SIG // IofKSouI77pwm9leN82kap/8vGRdUm/LFp6Y3VdNH3Wi
// SIG // GFz3ts3IYI/Qzw80pFnoevm4qVnKvtAtihgCRoQ1h1ce
// SIG // s5yXkKYEAgvno2Bzy8iUsXaUs+YNh/Wpas+knJd+Pune
// SIG // JR8B7C0SlsLkV+EJp4fCCDjU1/GFFYJcQFN7AsdAm2lK
// SIG // jaSbC/lDVm5YwNSM964dncX+h8GglMTjAgMBAAGjggF7
// SIG // MIIBdzAJBgNVHRMEAjAAMA4GA1UdDwEB/wQEAwIHgDBA
// SIG // BgNVHR8EOTA3MDWgM6Axhi9odHRwOi8vY3NjMy0yMDEw
// SIG // LWNybC52ZXJpc2lnbi5jb20vQ1NDMy0yMDEwLmNybDBE
// SIG // BgNVHSAEPTA7MDkGC2CGSAGG+EUBBxcDMCowKAYIKwYB
// SIG // BQUHAgEWHGh0dHBzOi8vd3d3LnZlcmlzaWduLmNvbS9y
// SIG // cGEwEwYDVR0lBAwwCgYIKwYBBQUHAwMwcQYIKwYBBQUH
// SIG // AQEEZTBjMCQGCCsGAQUFBzABhhhodHRwOi8vb2NzcC52
// SIG // ZXJpc2lnbi5jb20wOwYIKwYBBQUHMAKGL2h0dHA6Ly9j
// SIG // c2MzLTIwMTAtYWlhLnZlcmlzaWduLmNvbS9DU0MzLTIw
// SIG // MTAuY2VyMB8GA1UdIwQYMBaAFM+Zqep7JvRLyY6P1/AF
// SIG // Ju/j0qedMBEGCWCGSAGG+EIBAQQEAwIEEDAWBgorBgEE
// SIG // AYI3AgEbBAgwBgEBAAEB/zANBgkqhkiG9w0BAQUFAAOC
// SIG // AQEA4w69Fkalsa4uIgBqqnbavZYA7PGKcul7Q7+kkKYG
// SIG // hTSUr8Sz8nJzhj3RDK++GhJUqhnaExDZjo3uhKSEeMqj
// SIG // +fxYhDA29qpm7gmk70iAfVaR+olaelVxpUY8DS4eG4OE
// SIG // 972AfpnojccLkYvuxz7PifSTPLV/cDIP4OKFCEPQn+L+
// SIG // yAWIRoWbDCUkcy/pvjGYREx9/TnTLXmTzvlx1Gl4W9KM
// SIG // eSghRtjZt8+We+FZ3/h6J2RPcpjkumbhypQ7bTXrqnYK
// SIG // PF+L2QQa4M9gRiJf3iFCaNbBl8hjF1h0P1/6BVzI+mIy
// SIG // ymqflDAoc56fB6KwboHBezgfmrjlIvHWgn09RDCCBgow
// SIG // ggTyoAMCAQICEFIA5aolVvwahu2WydRLM8cwDQYJKoZI
// SIG // hvcNAQEFBQAwgcoxCzAJBgNVBAYTAlVTMRcwFQYDVQQK
// SIG // Ew5WZXJpU2lnbiwgSW5jLjEfMB0GA1UECxMWVmVyaVNp
// SIG // Z24gVHJ1c3QgTmV0d29yazE6MDgGA1UECxMxKGMpIDIw
// SIG // MDYgVmVyaVNpZ24sIEluYy4gLSBGb3IgYXV0aG9yaXpl
// SIG // ZCB1c2Ugb25seTFFMEMGA1UEAxM8VmVyaVNpZ24gQ2xh
// SIG // c3MgMyBQdWJsaWMgUHJpbWFyeSBDZXJ0aWZpY2F0aW9u
// SIG // IEF1dGhvcml0eSAtIEc1MB4XDTEwMDIwODAwMDAwMFoX
// SIG // DTIwMDIwNzIzNTk1OVowgbQxCzAJBgNVBAYTAlVTMRcw
// SIG // FQYDVQQKEw5WZXJpU2lnbiwgSW5jLjEfMB0GA1UECxMW
// SIG // VmVyaVNpZ24gVHJ1c3QgTmV0d29yazE7MDkGA1UECxMy
// SIG // VGVybXMgb2YgdXNlIGF0IGh0dHBzOi8vd3d3LnZlcmlz
// SIG // aWduLmNvbS9ycGEgKGMpMTAxLjAsBgNVBAMTJVZlcmlT
// SIG // aWduIENsYXNzIDMgQ29kZSBTaWduaW5nIDIwMTAgQ0Ew
// SIG // ggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQD1
// SIG // I0tepdeKuzLp1Ff37+THJn6tGZj+qJ19lPY2axDXdYEw
// SIG // fwRof8srdR7NHQiM32mUpzejnHuA4Jnh7jdNX847FO6G
// SIG // 1ND1JzW8JQs4p4xjnRejCKWrsPvNamKCTNUh2hvZ8eOE
// SIG // O4oqT4VbkAFPyad2EH8nA3y+rn59wd35BbwbSJxp58Ck
// SIG // PDxBAD7fluXF5JRx1lUBxwAmSkA8taEmqQynbYCOkCV7
// SIG // z78/HOsvlvrlh3fGtVayejtUMFMb32I0/x7R9FqTKIXl
// SIG // TBdOflv9pJOZf9/N76R17+8V9kfn+Bly2C40Gqa0p0x+
// SIG // vbtPDD1X8TDWpjaO1oB21xkupc1+NC2JAgMBAAGjggH+
// SIG // MIIB+jASBgNVHRMBAf8ECDAGAQH/AgEAMHAGA1UdIARp
// SIG // MGcwZQYLYIZIAYb4RQEHFwMwVjAoBggrBgEFBQcCARYc
// SIG // aHR0cHM6Ly93d3cudmVyaXNpZ24uY29tL2NwczAqBggr
// SIG // BgEFBQcCAjAeGhxodHRwczovL3d3dy52ZXJpc2lnbi5j
// SIG // b20vcnBhMA4GA1UdDwEB/wQEAwIBBjBtBggrBgEFBQcB
// SIG // DARhMF+hXaBbMFkwVzBVFglpbWFnZS9naWYwITAfMAcG
// SIG // BSsOAwIaBBSP5dMahqyNjmvDz4Bq1EgYLHsZLjAlFiNo
// SIG // dHRwOi8vbG9nby52ZXJpc2lnbi5jb20vdnNsb2dvLmdp
// SIG // ZjA0BgNVHR8ELTArMCmgJ6AlhiNodHRwOi8vY3JsLnZl
// SIG // cmlzaWduLmNvbS9wY2EzLWc1LmNybDA0BggrBgEFBQcB
// SIG // AQQoMCYwJAYIKwYBBQUHMAGGGGh0dHA6Ly9vY3NwLnZl
// SIG // cmlzaWduLmNvbTAdBgNVHSUEFjAUBggrBgEFBQcDAgYI
// SIG // KwYBBQUHAwMwKAYDVR0RBCEwH6QdMBsxGTAXBgNVBAMT
// SIG // EFZlcmlTaWduTVBLSS0yLTgwHQYDVR0OBBYEFM+Zqep7
// SIG // JvRLyY6P1/AFJu/j0qedMB8GA1UdIwQYMBaAFH/TZafC
// SIG // 3ey78DAJ80M5+gKvMzEzMA0GCSqGSIb3DQEBBQUAA4IB
// SIG // AQBWIuY0pMRhy0i5Aa1WqGQP2YyRxLvMDOWteqAif99H
// SIG // OEotbNF/cRp87HCpsfBP5A8MU/oVXv50mEkkhYEmHJEU
// SIG // R7BMY4y7oTTUxkXoDYUmcwPQqYxkbdxxkuZFBWAVWVE5
// SIG // /FgUa/7UpO15awgMQXLnNyIGCb4j6T9Emh7pYZ3MsZBc
// SIG // /D3SjaxCPWU21LQ9QCiPmxDPIybMSyDLkB9djEw0yjzY
// SIG // 5TfWb6UgvTTrJtmuDefFmvehtCGRM2+G6Fi7JXx0Dlj+
// SIG // dRtjP84xfJuPG5aexVN2hFucrZH6rO2Tul3IIVPCglNj
// SIG // rxINUIcRGz1UUpaKLJw9khoImgUux5OlSJHTMYIEoDCC
// SIG // BJwCAQEwgckwgbQxCzAJBgNVBAYTAlVTMRcwFQYDVQQK
// SIG // Ew5WZXJpU2lnbiwgSW5jLjEfMB0GA1UECxMWVmVyaVNp
// SIG // Z24gVHJ1c3QgTmV0d29yazE7MDkGA1UECxMyVGVybXMg
// SIG // b2YgdXNlIGF0IGh0dHBzOi8vd3d3LnZlcmlzaWduLmNv
// SIG // bS9ycGEgKGMpMTAxLjAsBgNVBAMTJVZlcmlTaWduIENs
// SIG // YXNzIDMgQ29kZSBTaWduaW5nIDIwMTAgQ0ECEECHi2dn
// SIG // kKWXBCielAMCGhswDAYIKoZIhvcNAgUFAKCBmjAZBgkq
// SIG // hkiG9w0BCQMxDAYKKwYBBAGCNwIBBDAcBgorBgEEAYI3
// SIG // AgELMQ4wDAYKKwYBBAGCNwIBFTAfBgkqhkiG9w0BCQQx
// SIG // EgQQO7epESNg/1GNXC4itG3PlTA+BgorBgEEAYI3AgEM
// SIG // MTAwLqAUgBIAUwB0AHIAaQBuAGcALgBqAHOhFoAUaHR0
// SIG // cDovL3d3dy5hbWViaXMuc2kwDQYJKoZIhvcNAQEBBQAE
// SIG // ggEAO6q9Vll6B/GYRu04vTfsah/ki4ToaMyy4j0WNcVO
// SIG // J0MH8U1vMqfO5TfMC2UYcCP4owNhrdN34kDHPlxNlUxb
// SIG // QShEPIl2cKBDIBgEv08oMWnJjrWiiWuQswvoDwhVK/oY
// SIG // kOfpZuJxqg9Raep3zM/CRJYxgB13tgW+zjgsa2OKBIQK
// SIG // pw16yH37a8KdGB2O0bOHFUMjTPrtXElrn7fAixdrmILP
// SIG // wWS8pkHsbe/z+EHuQ4AJAeHJ6ZK53a3tClVd8JxmwmW5
// SIG // gABfMwzWYScehErYKJI0gEFFJ9SL9QBYymnZI1cpfakL
// SIG // VpSsgF1GKUJ0pgAwwPQRPtOhmu5tTg5HiqIl16GCAgsw
// SIG // ggIHBgkqhkiG9w0BCQYxggH4MIIB9AIBATByMF4xCzAJ
// SIG // BgNVBAYTAlVTMR0wGwYDVQQKExRTeW1hbnRlYyBDb3Jw
// SIG // b3JhdGlvbjEwMC4GA1UEAxMnU3ltYW50ZWMgVGltZSBT
// SIG // dGFtcGluZyBTZXJ2aWNlcyBDQSAtIEcyAhAOz/Q4yP6/
// SIG // NW4E2GqYGxpQMAkGBSsOAwIaBQCgXTAYBgkqhkiG9w0B
// SIG // CQMxCwYJKoZIhvcNAQcBMBwGCSqGSIb3DQEJBTEPFw0x
// SIG // NDAzMDcxMjEyMTVaMCMGCSqGSIb3DQEJBDEWBBRCD2q/
// SIG // p4TXu1IF2LDm4F/ZqAgXEjANBgkqhkiG9w0BAQEFAASC
// SIG // AQBL9w/qB4Or0XMITI+e3VzJvxvy6Ypzg3xdbDvGAoCf
// SIG // lDsav0Up0BOt3mAd6mU9Rb8CbL/TSErX/LbbGKJhGgn7
// SIG // /dNX3B7gHX2G8qexALuE417XVOfOQtw8pqbG7aPmQ4Lk
// SIG // VSGlgb+5/yhu9YtrUJ/Z7ohnGdXreMahM3aOtCr+Ya6R
// SIG // Z951iY5o9JuN98/VYqmTFS6+R8FYH8Y5rnYi7EOtbLbj
// SIG // EQ5/T7eO295HvhIyTuf/1YcpQleeFO+eUKsQ31iXp3vA
// SIG // fu7b6bd4gxxasoAtipawDtfSsUv49J38GE7sNqK1PVfx
// SIG // /E0MGLmKamQ2nW6n6ykg4W+xJ38ZnWZZmOF+
// SIG // End signature block
