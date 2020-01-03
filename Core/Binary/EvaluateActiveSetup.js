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
