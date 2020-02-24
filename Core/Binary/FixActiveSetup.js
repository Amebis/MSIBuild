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
 * Fixes Active Setup component to allow graceful uninstall
 *
 * This is a deffered execution action. CustomActionData property should be a semicolon delimited
 * list of product IDs that require this fix to be uninstalled successfuly.
 */

var data = Session.Property("CustomActionData").split(";");
if (data) {
	var wsh = new ActiveXObject("WScript.Shell");

	for (var i in data) {
		var regPath = "HKLM\\Software\\Microsoft\\Active Setup\\Installed Components\\" + data[i] + "\\";
		wsh.RegWrite(regPath + "StubPath", "\"%SystemRoot%\\system32\\msiexec.exe\" /fu \"" + data[i] + "\" /qn", "REG_EXPAND_SZ");
	}
}
