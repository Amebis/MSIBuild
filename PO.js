/*
    ​​​​SPDX-License-Identifier: GPL-3.0-or-later
    Copyright © 1991-2022 Amebis
    Copyright © 2016 GÉANT
*/

/*@cc_on @*/
/*@if (! @_escapePO_JS__) @*/
/*@set @_escapePO_JS__ = true @*/

var escapePO_stat = null;
function escapePO(str)
{
	if (!escapePO_stat) {
		escapePO_stat = {
			"re_bslash": new RegExp("\\\\", "g"),
			"re_bs":     new RegExp("\b",   "g"),
			"re_ff":     new RegExp("\f",   "g"),
			"re_lf":     new RegExp("\n",   "g"),
			"re_cr":     new RegExp("\r",   "g"),
			"re_tab":    new RegExp("\t",   "g"),
			"re_quot":   new RegExp("\"",   "g")
		};
	}

	if (str == null) return null;
	switch (typeof(str)) {
		case "string":    break;
		case "undefined": return null;
		default:          try { str = str.toString(); } catch (err) { return null; }
	}

	return str.replace(escapePO_stat.re_bslash, "\\\\").replace(escapePO_stat.re_bs, "\\b").replace(escapePO_stat.re_ff, "\\f").replace(escapePO_stat.re_lf, "\\n").replace(escapePO_stat.re_cr, "\\r").replace(escapePO_stat.re_tab, "\\t").replace(escapePO_stat.re_quot, "\\\"");
}


var unescapePO_stat = null;
function unescapePO(str)
{
	if (!unescapePO_stat) {
		unescapePO_stat = {
			"re_esc": new RegExp("\\\\(.)", "g"),
			"fn_esc": function($0, $1) {
				switch ($1) {
					case "\\": return "\\";
					case "b" : return "\b";
					case "f" : return "\f";
					case "n" : return "\n";
					case "r" : return "\r";
					case "t" : return "\t";
					case "\'": return "\'";
					case "\"": return "\"";
					default  : return $0;
				}
			}
		};
	}

	if (str == null) return null;
	switch (typeof(str)) {
		case "string":    break;
		case "undefined": return null;
		default:          try { str = str.toString(); } catch (err) { return null; }
	}

	return str.replace(unescapePO_stat.re_esc, unescapePO_stat.fn_esc);
}


function POCatalog()
{
	this.charset = "utf-8";
	this.data = new Array();

	if (arguments.length) {
		var
			path = arguments[0];

		// Open file.
		var dat = new ActiveXObject("ADODB.Stream");
		dat.Open();
		try {
			// PO catalogue is text file, uses Unix line breaks and UTF-8.
			dat.Type = adTypeText;
			dat.LineSeparator = adLF;
			dat.Charset = this.charset;

			// Load file.
			dat.LoadFromFile(path);

			// Prepare regular expressions for catalogue parsing.
			var regexp = {
				"fuzzy":   new RegExp("^\\s*#,\\s*fuzzy", "i"),
				"comment": new RegExp("^\\s*#", ""),
				"record":  new RegExp("^\\s*(\\w*)\\s*\"(.*)\"\\s*$", "")
			};

			var getNext = function() {
				var
					id = null,
					rec = new Array();

				while (!dat.EOS) {
					var
						s = Trim(dat.ReadText(adReadLine)),
						m;

					// The line is empty => end of record.
					if (s == "" && "msgid" in rec)
						break;

					// The record is marked as "fuzzy".
					if (s.search(regexp.fuzzy) != -1) {
						rec["fuzzy"] = true;
						continue;
					}

					// Concatenate comments.
					if (s.search(regexp.comment) != -1) {
						if ("#" in rec)
							rec["#"] += s + "\n";
						else
							rec["#"]  = s + "\n";
						continue;
					}

					m = s.match(regexp.record);
					if (m) {
						// Record found.
						if (m[1] != "")
							id = new String(m[1]);
						if (id in rec)
							rec[id] += new String(m[2]);
						else
							rec[id]  = new String(m[2]);
						continue;
					}
				}

				// Unescape messages now that they are concatenated.
				for (id in rec)
					rec[id] = unescapePO(rec[id]);
				return "msgid" in rec ? rec : null;
			}

			// Read header record.
			var rec = getNext();
			if (rec == null)
				return;
			if (rec.msgid == "") {
				// Parse charset.
				m = rec.msgstr.match(new RegExp("^\\s*Content-Type\\s*:\\s*([-\\w]+/[-\\w]+)\\s*(;\\s*charset\\s*=\\s*([-\\w]+))?$", "im"));
				if (m && m.length >= 4) {
					this.charset = m[3];

					// Rewind and reconfigure code page.
					dat.Position = 0;
					dat.Charset = this.charset;

					// Re-read header.
					rec = getNext();
				}
			}

			// Load header and all the records.
			this.push(rec.msgid, rec.msgstr, rec.fuzzy, "#" in rec ? rec["#"] : null);
			while ((rec = getNext()) != null)
				this.push(rec.msgid, rec.msgstr, rec.fuzzy, "#" in rec ? rec["#"] : null);
		} finally {
			dat.Close();
		}
	}
}


POCatalog.prototype.push = function(key, trans, fuzzy, comment)
{
	var rec = {
		"msgstr" : trans,
		"fuzzy"  : fuzzy ? true : false
	};
	if (comment)
		rec["#"] = comment;

	this.data[key] = rec;
}


POCatalog.prototype.search = function(key)
{
	return (key in this.data) ? this.data[key] : null;
}


POCatalog.prototype.translate = function(key)
{
	if (!(key in this.data)) {
		// No translation found.
		return key;
	}

	var rec = this.data[key];
	if (rec.msgstr == "" || rec.fuzzy) {
		// Translation is blank (untranslated) or fuzzy.
		return key;
	}

	return rec.msgstr;
}


POCatalog.prototype.save = function(path)
{
	// Open PO file in memory.
	var dat = new ActiveXObject("ADODB.Stream");
	dat.Open();
	try {
		// PO is text file, uses Unix line breaks and given encoding.
		dat.Type = adTypeText;
		dat.LineSeparator = adLF;
		dat.Charset = this.charset;

		var writeRec = function(key, rec) {
			if (rec.fuzzy)
				dat.WriteText("#, fuzzy", adWriteLine);

			if ("#" in rec)
				dat.WriteText(rec["#"], adWriteLine);

			dat.WriteText("msgid \""  + escapePO(key       ) + "\"", adWriteLine);
			dat.WriteText("msgstr \"" + escapePO(rec.msgstr) + "\"", adWriteLine);
			dat.WriteText("", adWriteLine);
		}

		// Write header first.
		if ("" in this.data)
			writeRec("", this.data[""]);

		// Write records, skip header.
		for (var key in this.data) {
			if (key == "") continue;
			writeRec(key, this.data[key]);
		}

		if (this.charset.toLowerCase() == "utf-8") {
			// Write to file without UTF-8 BOM.
			var dat_nobom = new ActiveXObject("ADODB.Stream");
			dat_nobom.Type = adTypeBinary;
			dat_nobom.Mode = adModeReadWrite;
			dat_nobom.Open();
			try {
				// Skip BOM (first three bytes) and copy the rest.
				dat.Position = 3;
				dat.CopyTo(dat_nobom);

				dat_nobom.SaveToFile(path, adSaveCreateOverWrite);
			} finally {
				dat_nobom.Close();
			}
		} else {
			dat.SaveToFile(path, adSaveCreateOverWrite);
		}
	} finally {
		dat.Close();
	}
}

/*@end @*/
