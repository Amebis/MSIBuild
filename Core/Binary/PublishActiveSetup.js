/*
 *  MSIBuild — MSI packaging
 *
 *  Copyright (C) 2018-2020 Amebis <info@amebis.si>
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
