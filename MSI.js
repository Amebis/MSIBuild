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
