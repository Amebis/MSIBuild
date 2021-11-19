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


var _MSI_stat = null;
function _MSI(str)
{
	if (!_MSI_stat) {
		_MSI_stat = {
			"re_nonid":      new RegExp("[^a-zA-Z0-9_\\.]", "g"),
			"re_noninitial": new RegExp("^([^a-zA-Z_])", "g")
		};
	}

	if (str == null) return null;
	switch (typeof(str)) {
		case "string":    break;
		case "undefined": return null;
		default:          try { str = str.toString(); } catch (err) { return null; }
	}

	return str.replace(_MSI_stat.re_nonid, "_").replace(_MSI_stat.re_noninitial, "_\\1");
}


var LF2CRLF_stat = null;
function LF2CRLF(str)
{
	if (!LF2CRLF_stat) {
		LF2CRLF_stat = {
			"re_lf": new RegExp("\n", "g")
		};
	}

	if (str == null) return null;
	switch (typeof(str)) {
		case "string":    break;
		case "undefined": return null;
		default:          try { str = str.toString(); } catch (err) { return null; }
	}

	return str.replace(LF2CRLF_stat.re_lf, "\r\n");
}


var CRLF2LF_stat = null;
function CRLF2LF(str)
{
	if (!CRLF2LF_stat) {
		CRLF2LF_stat = {
			"re_crlf": new RegExp("\r\n", "g")
		};
	}

	if (str == null) return null;
	switch (typeof(str)) {
		case "string":    break;
		case "undefined": return null;
		default:          try { str = str.toString(); } catch (err) { return null; }
	}

	return str.replace(CRLF2LF_stat.re_crlf, "\n");
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


function CodePageToId(codepage)
{
	switch (codepage) {
		case 0: {
			var wsh = new ActiveXObject("WScript.Shell");
			return CodePageToId(parseInt(wsh.RegRead("HKLM\\SYSTEM\\CurrentControlSet\\Control\\Nls\\CodePage\\ACP"), 10));
		}
		case 932  : return "shift-jis";
		case 936  : return "gb2312";
		case 949  : return "euc-kr";
		case 950  : return "big5";
		case 874  :
		case 1250 :
		case 1251 :
		case 1252 :
		case 1253 :
		case 1254 :
		case 1255 :
		case 1256 :
		case 1257 :
		case 1258 : return "windows-" + codepage.toString(10);
		case 65001: return "utf-8";
		default   : throw new Error("Unsupported code page.");
	}
}

/*@end @*/
