﻿/*
    Copyright 1991-2018 Amebis
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
/*@if (! @__MSI_JS__) @*/
/*@set @__MSI_JS__ = true @*/

var
	msiOpenDatabaseModeReadOnly     = 0,  // Opens a database read-only, no persistent changes.
	msiOpenDatabaseModeTransact     = 1,  // Opens a database read/write in transaction mode.
	msiOpenDatabaseModeDirect       = 2,  // Opens a database direct read/write without transaction.
	msiOpenDatabaseModeCreate       = 3,  // Creates a new database, transact mode read/write.
	msiOpenDatabaseModeCreateDirect = 4,  // Creates a new database, direct mode read/write.
	msiOpenDatabaseModeListScript   = 5,  // Opens a database to view advertise script files, such as the files generated by the CreateAdvertiseScript method.
	msiOpenDatabaseModePatchFile    = 32; // Adds this flag to indicate a patch file.

var
	msiViewModifyInsert         = 1,
	msiViewModifyUpdate         = 2,
	msiViewModifyAssign         = 3,
	msiViewModifyReplace        = 4,
	msiViewModifyDelete         = 6;

var
	msiUILevelNoChange     = 0   // Does not change UI level.
	msiUILevelDefault      = 1   // Uses default UI level.
	msiUILevelNone         = 2   // Silent installation.
	msiUILevelBasic        = 3   // Simple progress and error handling.
	msiUILevelReduced      = 4   // Authored UI and wizard dialog boxes suppressed.
	msiUILevelFull         = 5   // Authored UI with wizards, progress, and errors.
	msiUILevelHideCancel   = 32  // If combined with the msiUILevelBasic value, the installer shows progress dialog boxes but does not display a Cancel button on the dialog box to prevent users from canceling the installation.
	msiUILevelProgressOnly = 64  // If combined with the msiUILevelBasic value, the installer displays progress dialog boxes but does not display any modal dialog boxes or error dialog boxes.
	msiUILevelEndDialog    = 128 // If combined with any above value, the installer displays a modal dialog box at the end of a successful installation or if there has been an error. No dialog box is displayed if the user cancels.

var
	msiRunModeAdmin            = 0,  // Administrative mode install, else product install.
	msiRunModeAdvertise        = 1,  // Advertise mode of install.
	msiRunModeMaintenance      = 2,  // Maintenance mode database loaded.
	msiRunModeRollbackEnabled  = 3,  // Rollback is enabled.
	msiRunModeLogEnabled       = 4,  // Log file is active.
	msiRunModeOperations       = 5,  // Executing or spooling operations.
	msiRunModeRebootAtEnd      = 6,  // Reboot is needed (settable).
	msiRunModeRebootNow        = 7,  // Reboot is needed to continue installation (settable).
	msiRunModeCabinet          = 8,  // Installing files from cabinets and files using Media table.
	msiRunModeSourceShortNames = 9,  // Source files use only short file names.
	msiRunModeTargetShortNames = 10, // Target files are to use only short file names.
	msiRunModeWindows9x        = 12, // Operating system is Windows 98/95.
	msiRunModeZawEnabled       = 13, // Operating system supports advertising of products.
	msiRunModeScheduled        = 16, // Deferred custom action called from install script execution.
	msiRunModeRollback         = 17, // Deferred custom action called from rollback execution script.
	msiRunModeCommit           = 18; // Deferred custom action called from commit execution script.

var
	msidbFileAttributesReadOnly      = 0x000001, // Read-Only
	msidbFileAttributesHidden        = 0x000002, // Hidden
	msidbFileAttributesSystem        = 0x000004, // System
	msidbFileAttributesVital         = 0x000200, // The file is vital for the accurate operation of the component to which it belongs. If the installation of a file with the msidbFileAttributesVital attribute fails, the installation stops and is rolled back. In this case, the Installer displays a dialog box without an Ignore button.
	                                             // If this attribute is not set, and the installation of the file fails, the Installer displays a dialog box with an Ignore button. In this case, the user can choose to ignore the failure to install the file and continue.
	msidbFileAttributesChecksum      = 0x000400, // The file contains a valid checksum. A checksum is required to repair a file that has become corrupted.
	msidbFileAttributesPatchAdded    = 0x001000, // This bit must only be added by a patch and if the file is being added by the patch.
	msidbFileAttributesNoncompressed = 0x002000, // The file's source type is uncompressed. If set, ignore the Word Count Summary Property. If neither msidbFileAttributesNoncompressed or msidbFileAttributesCompressed are set, the compression state of the file is specified by the Word Count Summary Property. Do not set both msidbFileAttributesNoncompressed and msidbFileAttributesCompressed.
	msidbFileAttributesCompressed    = 0x004000; // The file's source type is compressed. If set, ignore the Word Count Summary Property. If neither msidbFileAttributesNoncompressed or msidbFileAttributesCompressed are set, the compression state of the file is specified by the Word Count Summary Property. Do not set both msidbFileAttributesNoncompressed and msidbFileAttributesCompressed.

var
	msiDoActionStatusNoAction = 0, // Action not executed.
	msiDoActionStatusSuccess  = 1, // Action completed successfully.
	msiDoActionStatusUserExit = 2, // Premature termination by user.
	msiDoActionStatusFailure  = 3, // Unrecoverable error. Returned if there is an error during parsing or execution of the Jscript or VBScript.
	msiDoActionStatusSuspend  = 4, // Suspended sequence to be resumed later.
	msiDoActionStatusFinished = 5; // Skip remaining actions. Not an error.

var
	msiTransformValidationNone           =    0, // No validation done.
	msiTransformValidationLanguage       =    1, // Default language must match base database.
	msiTransformValidationProduct        =    2, // Product must match base database.
	msiTransformValidationMajorVer       =    8, // Checks major version only.
	msiTransformValidationMinorVer       =   16, // Checks major and minor version only.
	msiTransformValidationUpdateVer      =   32, // Checks major, minor, and update versions.
	msiTransformValidationLess           =   64, // Applied version < base version
	msiTransformValidationLessOrEqual    =  128, // Applied version <= base version
	msiTransformValidationEqual          =  256, // Applied version = base version
	msiTransformValidationGreaterOrEqual =  512, // Applied version >= base version
	msiTransformValidationGreater        = 1024, // Applied version > base version
	msiTransformValidationUpgradeCode    = 2048; // Validates that the transform is the appropriate UpgradeCode.

var
	msiTransformErrorNone                   =  0, // None of the following conditions.
	msiTransformErrorAddExistingRow         =  1, // Adds a row that already exists.
	msiTransformErrorDeleteNonExistingRow   =  2, // Deletes a row that does not exist.
	msiTransformErrorAddExistingTable       =  4, // Adds a table that already exists.
	msiTransformErrorDeleteNonExistingTable =  8, // Deletes a table that does not exist.
	msiTransformErrorUpdateNonExistingRow   = 16, // Updates a row that does not exist.
	msiTransformErrorChangeCodepage         = 32; // Transform and database code pages do not match and neither code page is neutral.

var
	PID_DICTIONARY   = 0,  // Special format, not support by SummaryInfo object
	PID_CODEPAGE     = 1,  // VT_I2
	PID_TITLE        = 2,  // VT_LPSTR
	PID_SUBJECT      = 3,  // VT_LPSTR
	PID_AUTHOR       = 4,  // VT_LPSTR
	PID_KEYWORDS     = 5,  // VT_LPSTR
	PID_COMMENTS     = 6,  // VT_LPSTR
	PID_TEMPLATE     = 7,  // VT_LPSTR
	PID_LASTAUTHOR   = 8,  // VT_LPSTR
	PID_REVNUMBER    = 9,  // VT_LPSTR
	PID_EDITTIME     = 10, // VT_FILETIME
	PID_LASTPRINTED  = 11, // VT_FILETIME
	PID_CREATE_DTM   = 12, // VT_FILETIME
	PID_LASTSAVE_DTM = 13, // VT_FILETIME
	PID_PAGECOUNT    = 14, // VT_I4
	PID_WORDCOUNT    = 15, // VT_I4
	PID_CHARCOUNT    = 16, // VT_I4
	PID_THUMBNAIL    = 17, // VT_CF (not supported)
	PID_APPNAME      = 18, // VT_LPSTR
	PID_SECURITY     = 19; // VT_I4


function MSIGetFiles(installer, msi_path, source_path)
{
	// Create an install session and execute actions in order to perform directory resolution.
	var
		database   = installer.OpenDatabase(msi_path, msiOpenDatabaseModeReadOnly),
		session    = installer.OpenPackage(database, 1),
		shortNames = session.Mode(msiRunModeSourceShortNames),
		stat,
		view,
		d = new Array();

	if (source_path)
		session.Property("OriginalDatabase") = source_path;

	stat = session.DoAction("CostInitialize");
	if (stat != 1)
		throw new Error("Error calling CostInitialize() (code " + stat + ").");

	// Join File table to Component table in order to find directories.
	view = database.OpenView("SELECT File,FileName,Directory_,File.Attributes FROM File,Component WHERE Component_=Component ORDER BY Directory_");
	view.Execute();

	// Fetch each file and request the source path, then verify the source path.
	for (;;) {
		var
			record = view.Fetch();
		if (!record) break;

		var
			fileKey    = record.StringData(1),
			fileName   = record.StringData(2),
			folder     = record.StringData(3),
			attributes = record.IntegerData(4);

		if ((attributes & msidbFileAttributesNoncompressed) == 0) {
			var
				delim = (new String(fileName)).split("|");
			if (delim.length > 1)
				fileName = shortNames ? delim[0] : delim[1];
			sourcePath = session.SourcePath(folder) + fileName;
			if (!(fileKey in d))
				d[fileKey] = sourcePath;
			else if (installer.FileAttributes(sourcePath) == -1)
				throw new Error("File \"" + sourcePath + "\" not found.");
		}
	}
	view.Close();

	// Commit database. The Commit method flushes all buffers.
	database.Commit();

	return d;
}


function MSIMergeFiles(files, d)
{
	for (fileKey in d) {
		if (!(fileKey in files))
			files[fileKey] = d[fileKey];
		else if (files[fileKey] != d[fileKey])
			throw new Error("Files \"" + files[fileKey] + "\" and \"" + d[fileKey] + "\" are using the same key \"" + fileKey + "\".");
	}
}

/*@end @*/

// SIG // Begin signature block
// SIG // MIIXmAYJKoZIhvcNAQcCoIIXiTCCF4UCAQExCzAJBgUr
// SIG // DgMCGgUAMGcGCisGAQQBgjcCAQSgWTBXMDIGCisGAQQB
// SIG // gjcCAR4wJAIBAQQQEODJBs441BGiowAQS9NQkAIBAAIB
// SIG // AAIBAAIBAAIBADAhMAkGBSsOAwIaBQAEFBV/gp9d0mkn
// SIG // /VeHjQ8vG8WlzktAoIISyDCCA+4wggNXoAMCAQICEH6T
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
// SIG // DQEJBDEWBBRrjkklR8d8JyTflf0Ys6nPxviuejANBgkq
// SIG // hkiG9w0BAQEFAASCAQBlMt0YHEmcdh9AVemf9XTcYATq
// SIG // wHWqg/GwNrVoDahx/eyccuRFOEUYxt98VNRwKBemhCEY
// SIG // gBR9+zlSYiw8ARI+Tjbxd190InkDisUehAlInchPbnPG
// SIG // +gES2HoJIaOzxBlsL8Z1cg9OR9yVRXVZJNXa/dxQRPEw
// SIG // 9EQ9NE0X6SeStJWfib5RSCEC6FzKE8HWhDMT5A9QuRgg
// SIG // DmAjlSDA0cvcU/xeCZBIWf9/9bCeWGutpA2/pUdwSBb+
// SIG // tHz/O+j6U6uqoC4127CNhVCzBJEGr2+yibtXI2TIEIul
// SIG // 9Xc7Lj39EuuGdJ1u8poA04X0NacJsQTbf/yiQtlNTlpB
// SIG // 6LA+o3g+oYICCzCCAgcGCSqGSIb3DQEJBjGCAfgwggH0
// SIG // AgEBMHIwXjELMAkGA1UEBhMCVVMxHTAbBgNVBAoTFFN5
// SIG // bWFudGVjIENvcnBvcmF0aW9uMTAwLgYDVQQDEydTeW1h
// SIG // bnRlYyBUaW1lIFN0YW1waW5nIFNlcnZpY2VzIENBIC0g
// SIG // RzICEA7P9DjI/r81bgTYapgbGlAwCQYFKw4DAhoFAKBd
// SIG // MBgGCSqGSIb3DQEJAzELBgkqhkiG9w0BBwEwHAYJKoZI
// SIG // hvcNAQkFMQ8XDTE4MDkwNzIxNTMzNVowIwYJKoZIhvcN
// SIG // AQkEMRYEFAs7xsFGh7TbHUVBemBuFmJdb9PFMA0GCSqG
// SIG // SIb3DQEBAQUABIIBAG9+igwB01suAcCnYT3YwCoLEFIM
// SIG // oi0zx+jfZQVXQKzrk691VjEZNouVzXCfNqQNyH2Mjn5I
// SIG // jyQBdas1QTBIlYDpGVQY6uoJ0cZ+d9IR9zbsEpUROG1Y
// SIG // JkSZY4Co0be/3bWo8J7nrMA+RqAz7WAjP3nrB4blm10C
// SIG // GEg7sWQOU9ISsGeAX+IHUqdWDvE5lZ/fxI2CLtFdwKbG
// SIG // p2Xtl2yrwzZtLDsVtCLpsAP+1+Bi0pom/7LSCdF248tt
// SIG // BC82ZqkxL5qZ2kLRP5Hx4KvYBV7pOQ/vkWnCG1HJg523
// SIG // 2lUY2voOtQAGeCEVxSs5Ouozqr/318PE7cNoqWQDqzCM
// SIG // juvpc1o=
// SIG // End signature block
