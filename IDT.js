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
/*@if (! @_escapeIDT_JS__) @*/
/*@set @_escapeIDT_JS__ = true @*/

var escapeIDT_stat = null;
function escapeIDT(str)
{
	if (!escapeIDT_stat) {
		escapeIDT_stat = {
			"re_tab": new RegExp("\t", "g")
		};
	}

	if (str == null) return null;
	switch (typeof(str)) {
		case "string":    break;
		case "undefined": return null;
		default:          try { str = str.toString(); } catch (err) { return null; }
	}

	return str.replace(escapeIDT_stat.re_tab, "\u0010");
}


var unescapeIDT_stat = null;
function unescapeIDT(str)
{
	if (!unescapeIDT_stat) {
		unescapeIDT_stat = {
			"re_tab": new RegExp("\u0010", "g")
		};
	}

	if (str == null) return null;
	switch (typeof(str)) {
		case "string":    break;
		case "undefined": return null;
		default:          try { str = str.toString(); } catch (err) { return null; }
	}

	return str.replace(unescapeIDT_stat.re_tab, "\t");
}


function IDT(path)
{
	// Open IDT file.
	var
		dat = new ActiveXObject("ADODB.Stream");

	dat.Open();
	try {
		// IDT is text file, uses MSDOS line breaks and Windows 1252 header.
		dat.Type = adTypeText;
		dat.LineSeparator = adCRLF;
		dat.Charset = "windows-1252";

		// Load file.
		dat.LoadFromFile(path);

		var parseRow = function(row) {
			for (var col in row)
				row[col] = CRLF2LF(unescapeIDT(row[col]));
			return row;
		}

		// Parse column names.
		this.columns = parseRow(dat.ReadText(adReadLine).split("\t"));
		
		// Parse column types.
		this.types = parseRow(dat.ReadText(adReadLine).split("\t"));
		
		// Parse meta info
		var line = parseRow(dat.ReadText(adReadLine).split("\t")), i = 0;
		this.codepage = parseInt(line[i], 10);
		if (isNaN(this.codepage)) this.codepage = 0; else i++;
		this.table = line[i++];
		this.key = line.slice(i);
		for (var i in this.key) {
			for (var j in this.columns) {
				if (this.key[i] == this.columns[j]) {
					this.key[i] = j;
					break;
				}
			}
		}

		// Rewind and reconfigure code page.
		dat.Position = 0;
		dat.Charset = CodePageToId(this.codepage);

		// Skip header.
		dat.SkipLine();
		dat.SkipLine();
		dat.SkipLine();

		// Parse data and build associative array.
		this.data = new Array();
		this.linenum = new Array();
		var linenum = 4;
		while (!dat.EOS) {
			line = parseRow(dat.ReadText(adReadLine).split("\t"));
			var key = new Array();
			for (var i in this.key)
				key.push(line[this.key[i]]);
			this.data[key] = line;
			this.linenum[key] = linenum++;
		}
	} finally {
		dat.Close();
	}
}


IDT.prototype.isLocalizable = function(col)
{
	// Test against predefined list of columns.
	switch (this.table.toLowerCase()) {
		case "actiontext":
			switch (this.columns[col].toLowerCase()) {
				case "description":
				case "template"   : return true;
			}
			break;

		case "control":
			switch (this.columns[col].toLowerCase()) {
				case "text":
				case "help": return true;
			}
			break;

		case "controlevent":
			switch (this.columns[col].toLowerCase()) {
				case "argument": return true;
			}
			break;

		case "customaction":
			switch (this.columns[col].toLowerCase()) {
				case "target": return true;
			}
			break;

		case "dialog":
			switch (this.columns[col].toLowerCase()) {
				case "title": return true;
			}
			break;

		case "directory":
			switch (this.columns[col].toLowerCase()) {
				case "defaultdir": return true;
			}
			break;

		case "error":
			switch (this.columns[col].toLowerCase()) {
				case "message": return true;
			}
			break;

		case "feature":
			switch (this.columns[col].toLowerCase()) {
				case "title"      :
				case "description": return true;
			}
			break;

		case "file":
			switch (this.columns[col].toLowerCase()) {
				case "filename":
				case "language": return true;
			}
			break;

		case "launchcondition":
			switch (this.columns[col].toLowerCase()) {
				case "description": return true;
			}
			break;

		case "media":
			switch (this.columns[col].toLowerCase()) {
				case "diskprompt": return true;
			}
			break;

		case "progid":
			switch (this.columns[col].toLowerCase()) {
				case "description": return true;
			}
			break;

		case "property":
			switch (this.columns[col].toLowerCase()) {
				case "value": return true;
			}
			break;

		case "publishcomponent":
			switch (this.columns[col].toLowerCase()) {
				case "appdata": return true;
			}
			break;

		case "radiobutton":
			switch (this.columns[col].toLowerCase()) {
				case "text":
				case "help": return true;
			}
			break;

		case "registry":
			switch (this.columns[col].toLowerCase()) {
				case "value": return true;
			}
			break;

		case "scheduledtask":
			switch (this.columns[col].toLowerCase()) {
				case "displayname":
				case "description": return true;
			}
			break;

		case "serviceinstall":
			switch (this.columns[col].toLowerCase()) {
				case "displayname":
				case "description": return true;
			}
			break;

		case "shortcut":
			switch (this.columns[col].toLowerCase()) {
				case "name"       :
				case "description": return true;
			}
			break;

		case "uitext":
			switch (this.columns[col].toLowerCase()) {
				case "text": return true;
			}
			break;

		case "verb":
			switch (this.columns[col].toLowerCase()) {
				case "command" :
				case "argument": return true;
			}
			break;

		case "wlanprofile":
			switch (this.columns[col].toLowerCase()) {
				case "name": return true;
			}
			break;
    }

	// Is this column localizable according to its type?
	return this.types[col].charAt(0).toLowerCase() == "l";
}

IDT.prototype.save = function(path)
{
	// Build output IDT file in memory.
	var dat = WScript.CreateObject("ADODB.Stream");
	dat.Open();
	try {
		// IDT is text file, uses MSDOS line breaks, and specific encoding (optional).
		dat.Type = adTypeText;
		dat.LineSeparator = adCRLF;
		if ("codepage" in this)
			dat.Charset = CodePageToId(this.codepage);

		var buildRow_stat = null;
		var buildRow = function(row) {
			if (!buildRow_stat) {
				buildRow_stat = {
					"re_lf":  new RegExp("\n", "g"),
					"re_cr":  new RegExp("\r", "g")
				};
			}

			for (var col in row) {
				if (row[col].match(buildRow_stat.re_lf) || row[col].match(buildRow_stat.re_cr))
					throw new Error("Cell \"" + row[col] + "\" contains line breaks. IDT cells cannot contain CR, nor LF.");
				row[col] = escapeIDT(LF2CRLF(row[col]));
			}
			return row;
		}

		// Write header.
		dat.WriteText(buildRow(this.columns).join("\t"), adWriteLine);
		dat.WriteText(buildRow(this.types  ).join("\t"), adWriteLine);
		var meta = new Array();
		if ("codepage" in this)
			meta.push(this.codepage.toString(10));
		meta.push(this.table);
		for (var key in this.key)
			meta.push(this.columns[this.key[key]]);
		dat.WriteText(buildRow(meta).join("\t"), adWriteLine);

		// Save data.
		for (var key in this.data)
			dat.WriteText(buildRow(this.data[key]).join("\t"), adWriteLine);

		// Save to file.
		dat.SaveToFile(path, adSaveCreateOverWrite);
	} finally {
		dat.Close();
	}
}

/*@end @*/
