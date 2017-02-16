"use strict";
const FS   = require("fs");
const Path = require("path");

module.exports = function (source)
{
	//let expression = /class +(\w+)/;

 //   let matches = expression.exec(source)
 //   let name    = matches != null ? matches[1] : null;

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