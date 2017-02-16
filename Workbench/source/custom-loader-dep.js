"use strict";
const FS     = require("fs");
const Path   = require("path");
const XRegExp = require("xregexp");

module.exports = function (source)
{
	//let pattern = XRegExp("(?:class (?<name1>\\w+))|(?:var (?:(?<name2>\\w+) = class)|(?:(?<name3>\\w+) = \\(function \\((?:_super)?\\)(?:[^\\n]\\n?)+?function \\1(?:[^\\n]\\n?)+?return \\1))");
 //   //let pattern = XRegExp("(?<class>class +)(?<name>\w+)(?<misc>[^{]*)(?<brackets>(?:({[^{}]*}))|({[^{]*(?&brackets)[^}]*}))+(?<endfile>.*)");
    
 //   let matches = XRegExp.exec(source, pattern);
 //   let name    = matches["name1"] || matches["name2"] || matches["name3"];

 //   if (name)
 //   {
 //       source =
 //       `${source}

	//	// implicit binding
 //       ${name}.prototype.template =
	//		new DOMParser()
	//			.parseFromString(require("${Path.join(this.context, "index.html").replace(/\\/g, "\\\\")}"), "text/html")
	//			.querySelector("template");
 //       `;
 //   }
	return source;
}