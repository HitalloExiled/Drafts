webpackJsonp([0],{

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./decorators": 1,
	"./decorators.ts": 1,
	"./utils": 21,
	"./utils.ts": 21
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 11;


/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["dashedToCamel"] = dashedToCamel;
function dashedToCamel(value) {
    var parts = value.split("-");
    return parts.map(function (item, index) {
        if (index == 0) {
            item = item.toLowerCase();
        }
        else {
            var _a = item.split(""), firstLetter = _a[0], rest = _a.slice(1);
            item = firstLetter.toUpperCase() + rest.join("").toLowerCase();
        }
        return item;
    })
        .join("");
}


/***/ })

});
//# sourceMappingURL=0.js.map