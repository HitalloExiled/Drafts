(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = component;
/* harmony export (immutable) */ __webpack_exports__["a"] = view;
function component(name, template, style, options) {
    return (target) => {
        target.prototype.template = templateParse(template, style);
        ShadyCSS.prepareTemplate(target.prototype.template, name, options && options.extends);
        window.customElements.define(name, target, options);
    };
}
function view(name, template, style, options) {
    return (target) => {
        target.prototype.template = templateParse(template, style);
        ShadyCSS.prepareTemplate(target.prototype.template, name, options && options.extends);
        window.customElements.define(name, target, options);
    };
}
function templateParse(template, style) {
    let templateElement = new DOMParser()
        .parseFromString(template, "text/html")
        .querySelector("template");
    if (style) {
        let styleElement = document.createElement("style");
        styleElement.innerHTML = style;
        templateElement.content.appendChild(styleElement);
    }
    return templateElement;
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export __extends */
/* unused harmony export __assign */
/* unused harmony export __rest */
/* harmony export (immutable) */ __webpack_exports__["a"] = __decorate;
/* unused harmony export __param */
/* harmony export (immutable) */ __webpack_exports__["b"] = __metadata;
/* unused harmony export __awaiter */
/* unused harmony export __generator */
/* unused harmony export __exportStar */
/* unused harmony export __values */
/* unused harmony export __read */
/* unused harmony export __spread */
/* unused harmony export __asyncGenerator */
/* unused harmony export __asyncDelegator */
/* unused harmony export __asyncValues */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
};

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), q = [], c, i;
    return i = { next: verb("next"), "throw": verb("throw"), "return": verb("return") }, i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { return function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]), next(); }); }; }
    function next() { if (!c && q.length) resume((c = q.shift())[0], c[1]); }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(c[3], e); } }
    function step(r) { r.done ? settle(c[2], r) : r.value[0] === "yield" ? settle(c[2], { value: r.value[1], done: false }) : Promise.resolve(r.value[1]).then(r.value[0] === "delegate" ? delegate : fulfill, reject); }
    function delegate(r) { step(r.done ? r : { value: ["yield", r.value], done: false }); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { c = void 0, f(v), next(); }
};

function __asyncDelegator(o) {
    var i = { next: verb("next"), "throw": verb("throw", function (e) { throw e; }), "return": verb("return", function (v) { return { value: v, done: true }; }) };
    return o = __asyncValues(o), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { return function (v) { return { value: ["delegate", (o[n] || f).call(o, v)], done: false }; }; }
};

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator];
    return m ? m.call(o) : typeof __values === "function" ? __values(o) : o[Symbol.iterator]();
};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_surfacer_custom_element__ = __webpack_require__(3);

class View extends __WEBPACK_IMPORTED_MODULE_0_surfacer_custom_element__["a" /* default */] {
    constructor() {
        super(...arguments);
        this._isMasterView = false;
    }
    get fullName() {
        return this._isMasterView;
    }
}
/* harmony default export */ __webpack_exports__["a"] = (View);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class CustomElement extends HTMLElement {
    constructor() {
        super();
        this.applyTemplate();
    }
    get template() {
        return this._template;
    }
    set template(value) {
        this._template = value;
    }
    static get observedAttributes() {
        return this._observedAttributes;
    }
    applyTemplate() {
        ShadyCSS.styleElement(this);
        if (this._template)
            this.attachShadow({ mode: "open" }).appendChild(document.importNode(this._template.content, true));
    }
    /** Called when the element is created or upgraded */
    connectedCallback() { }
    /** Called when the element is inserted into a document, including into a shadow tree */
    disconnectedCallback() { }
    /**
     * Called when an attribute is changed, appended, removed, or replaced on the element.
     * Only called for observed attributes.
     */
    attributeChangedCallback(attributeName, oldValue, newValue, namespace) {
        if (attributeName in this)
            this[attributeName] = newValue;
        else if (attributeName in this.style)
            this.style[attributeName] = newValue;
    }
    /** Called when the element is adopted into a new document */
    adoptedCallback(oldDocument, newDocument) { }
}
CustomElement._observedAttributes = [];
/* harmony default export */ __webpack_exports__["a"] = (CustomElement);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/resources/c1bdd951d3c473f881c633f1800d4442.png";

/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template><img src=" + __webpack_require__(4) + "><layout-stack h><h1>Left</h1><h1>Middle</h1><h1>Right</h1></layout-stack><slot></slot></template>";

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(16);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_surfacer_custom_element__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_surfacer_core_decorators__ = __webpack_require__(0);



let Grid = class Grid extends __WEBPACK_IMPORTED_MODULE_1_surfacer_custom_element__["a" /* default */] {
    get rows() {
        return this._rows;
    }
    addRow(row) {
        this._rows.push(row);
    }
    removeRow(index) {
        this._rows.splice(index, 1);
    }
};
Grid = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_surfacer_core_decorators__["b" /* component */])("surface-layout-grid", __webpack_require__(19))
], Grid);
/* harmony default export */ __webpack_exports__["a"] = (Grid);


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_surfacer_custom_element__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_surfacer_core_decorators__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_html__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__index_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index_scss__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__index_scss__);





let Stack = class Stack extends __WEBPACK_IMPORTED_MODULE_1_surfacer_custom_element__["a" /* default */] {
    constructor() {
        super();
        __WEBPACK_IMPORTED_MODULE_1_surfacer_custom_element__["a" /* default */]._observedAttributes = ["orientation", "width", "height", "display"];
    }
    get orientation() {
        return this._orientation;
    }
    set orientation(value) {
        this._orientation = value;
    }
};
Stack = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_surfacer_core_decorators__["b" /* component */])("layout-stack", __WEBPACK_IMPORTED_MODULE_3__index_html___default.a, __WEBPACK_IMPORTED_MODULE_4__index_scss___default.a),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [])
], Stack);
/* unused harmony default export */ var _unused_webpack_default_export = (Stack);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libraries_webcomponents_js_webcomponents_lite_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libraries_webcomponents_js_webcomponents_lite_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_libraries_webcomponents_js_webcomponents_lite_js__);

//import "libraries/webcomponents.js/custom-elements-es5-adapter.js"; 


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ":host {\n  display: flex; }\n  :host([v]), :host([vertical]), :host([orientaion=\"vertical\"]) {\n    flex-direction: column;\n    height: 100%;\n    overflow: auto; }\n    :host([v])[reverse], :host([vertical])[reverse], :host([orientaion=\"vertical\"])[reverse] {\n      flex-direction: column-reverse; }\n  :host([h]), :host([horizontal]), :host([orientaion=\"horizontal\"]) {\n    flex-direction: row;\n    width: 100%;\n    overflow: auto; }\n    :host([h])[reverse], :host([horizontal])[reverse], :host([orientaion=\"horizontal\"])[reverse] {\n      flex-direction: row-reverse; }\n  :host > * {\n    margin: auto; }\n", ""]);

// exports


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "body {\n  background-color: red; }\n\nbody {\n  color: white;\n  background: url(" + __webpack_require__(4) + "); }\n\nh1 {\n  color: red; }\n", ""]);

// exports


/***/ }),
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, exports) {

module.exports = "<template id=surfacer-layout-grid><h1>Working!!!</h1><h1>Working!!!</h1><h1>Working!!!</h1><h1>Working!!!</h1></template>";

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "<template><slot></slot></template>";

/***/ }),
/* 21 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(15);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 23 */,
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dependencies__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_surfacer_layout_stack__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_surfacer_view__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_surfacer_core_decorators__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__index_html__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__index_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__index_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__index_scss__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_surfacer_data_grid__ = __webpack_require__(12);








let Home = class Home extends __WEBPACK_IMPORTED_MODULE_3_surfacer_view__["a" /* default */] {
    constructor() {
        super();
        if (this.shadowRoot)
            this.shadowRoot.appendChild(new __WEBPACK_IMPORTED_MODULE_7_surfacer_data_grid__["a" /* default */]());
    }
};
Home = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_surfacer_core_decorators__["a" /* view */])("view-home", __WEBPACK_IMPORTED_MODULE_5__index_html___default.a, __WEBPACK_IMPORTED_MODULE_6__index_scss___default.a),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [])
], Home);
/* harmony default export */ __webpack_exports__["default"] = (Home);


/***/ }),
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {
  /*
  
   Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  
   Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  
  Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  'use strict';
  var mb = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;
  (function () {
    function k() {
      var a = this;this.s = {};this.g = document.documentElement;var b = new va();b.rules = [];this.h = p.set(this.g, new p(b));this.i = !1;this.a = this.b = null;nb(function () {
        a.c();
      });
    }function J() {
      this.customStyles = [];this.enqueued = !1;
    }function ob() {}function ia(a) {
      this.cache = {};this.f = void 0 === a ? 100 : a;
    }function n() {}function p(a, b, c, d, e) {
      this.I = a || null;this.b = b || null;this.Aa = c || [];this.S = null;this.aa = e || "";this.a = this.G = this.K = null;
    }function v() {}function va() {
      this.end = this.start = 0;this.rules = this.parent = this.previous = null;this.cssText = this.parsedCssText = "";this.atRule = !1;this.type = 0;this.parsedSelector = this.selector = this.keyframesName = "";
    }function Tc(a) {
      function b(b, c) {
        Object.defineProperty(b, "innerHTML", { enumerable: c.enumerable, configurable: !0, get: c.get, set: function set(b) {
            var d = this,
                e = void 0;m(this) && (e = [], O(this, function (a) {
              a !== d && e.push(a);
            }));c.set.call(this, b);if (e) for (var f = 0; f < e.length; f++) {
              var g = e[f];1 === g.__CE_state && a.disconnectedCallback(g);
            }this.ownerDocument.__CE_hasRegistry ? a.c(this) : a.j(this);
            return b;
          } });
      }function c(b, c) {
        w(b, "insertAdjacentElement", function (b, d) {
          var e = m(d);b = c.call(this, b, d);e && a.a(d);m(b) && a.b(d);return b;
        });
      }pb ? w(Element.prototype, "attachShadow", function (a) {
        return this.__CE_shadowRoot = a = pb.call(this, a);
      }) : console.warn("Custom Elements: `Element#attachShadow` was not patched.");if (wa && wa.get) b(Element.prototype, wa);else if (xa && xa.get) b(HTMLElement.prototype, xa);else {
        var d = ya.call(document, "div");a.u(function (a) {
          b(a, { enumerable: !0, configurable: !0, get: function get() {
              return qb.call(this, !0).innerHTML;
            }, set: function set(a) {
              var b = "template" === this.localName ? this.content : this;for (d.innerHTML = a; 0 < b.childNodes.length;) {
                za.call(b, b.childNodes[0]);
              }for (; 0 < d.childNodes.length;) {
                ja.call(b, d.childNodes[0]);
              }
            } });
        });
      }w(Element.prototype, "setAttribute", function (b, c) {
        if (1 !== this.__CE_state) return rb.call(this, b, c);var d = Aa.call(this, b);rb.call(this, b, c);c = Aa.call(this, b);d !== c && a.attributeChangedCallback(this, b, d, c, null);
      });w(Element.prototype, "setAttributeNS", function (b, c, d) {
        if (1 !== this.__CE_state) return sb.call(this, b, c, d);var e = ka.call(this, b, c);sb.call(this, b, c, d);d = ka.call(this, b, c);e !== d && a.attributeChangedCallback(this, c, e, d, b);
      });w(Element.prototype, "removeAttribute", function (b) {
        if (1 !== this.__CE_state) return tb.call(this, b);var c = Aa.call(this, b);tb.call(this, b);null !== c && a.attributeChangedCallback(this, b, c, null, null);
      });w(Element.prototype, "removeAttributeNS", function (b, c) {
        if (1 !== this.__CE_state) return ub.call(this, b, c);var d = ka.call(this, b, c);ub.call(this, b, c);var e = ka.call(this, b, c);d !== e && a.attributeChangedCallback(this, c, d, e, b);
      });vb ? c(HTMLElement.prototype, vb) : wb ? c(Element.prototype, wb) : console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched.");xb(a, Element.prototype, { Ra: Uc, append: Vc });Wc(a, { ob: Xc, nb: Yc, yb: Zc, remove: $c });
    }function Wc(a, b) {
      var c = Element.prototype;c.before = function (c) {
        for (var d = [], f = 0; f < arguments.length; ++f) {
          d[f - 0] = arguments[f];
        }f = d.filter(function (a) {
          return a instanceof Node && m(a);
        });b.ob.apply(this, d);for (var g = 0; g < f.length; g++) {
          a.a(f[g]);
        }if (m(this)) for (f = 0; f < d.length; f++) {
          g = d[f], g instanceof Element && a.b(g);
        }
      };c.after = function (c) {
        for (var d = [], f = 0; f < arguments.length; ++f) {
          d[f - 0] = arguments[f];
        }f = d.filter(function (a) {
          return a instanceof Node && m(a);
        });b.nb.apply(this, d);for (var g = 0; g < f.length; g++) {
          a.a(f[g]);
        }if (m(this)) for (f = 0; f < d.length; f++) {
          g = d[f], g instanceof Element && a.b(g);
        }
      };c.replaceWith = function (c) {
        for (var d = [], f = 0; f < arguments.length; ++f) {
          d[f - 0] = arguments[f];
        }var f = d.filter(function (a) {
          return a instanceof Node && m(a);
        }),
            g = m(this);b.yb.apply(this, d);for (var h = 0; h < f.length; h++) {
          a.a(f[h]);
        }if (g) for (a.a(this), f = 0; f < d.length; f++) {
          g = d[f], g instanceof Element && a.b(g);
        }
      };c.remove = function () {
        var c = m(this);b.remove.call(this);c && a.a(this);
      };
    }function ad(a) {
      function b(b, d) {
        Object.defineProperty(b, "textContent", { enumerable: d.enumerable, configurable: !0, get: d.get, set: function set(b) {
            if (this.nodeType === Node.TEXT_NODE) d.set.call(this, b);else {
              var c = void 0;if (this.firstChild) {
                var e = this.childNodes,
                    h = e.length;if (0 < h && m(this)) for (var c = Array(h), l = 0; l < h; l++) {
                  c[l] = e[l];
                }
              }d.set.call(this, b);if (c) for (b = 0; b < c.length; b++) {
                a.a(c[b]);
              }
            }
          } });
      }
      w(Node.prototype, "insertBefore", function (b, d) {
        if (b instanceof DocumentFragment) {
          var c = Array.prototype.slice.apply(b.childNodes);b = yb.call(this, b, d);if (m(this)) for (d = 0; d < c.length; d++) {
            a.b(c[d]);
          }return b;
        }c = m(b);d = yb.call(this, b, d);c && a.a(b);m(this) && a.b(b);return d;
      });w(Node.prototype, "appendChild", function (b) {
        if (b instanceof DocumentFragment) {
          var c = Array.prototype.slice.apply(b.childNodes);b = ja.call(this, b);if (m(this)) for (var e = 0; e < c.length; e++) {
            a.b(c[e]);
          }return b;
        }c = m(b);e = ja.call(this, b);c && a.a(b);m(this) && a.b(b);return e;
      });w(Node.prototype, "cloneNode", function (b) {
        b = qb.call(this, b);this.ownerDocument.__CE_hasRegistry ? a.c(b) : a.j(b);return b;
      });w(Node.prototype, "removeChild", function (b) {
        var c = m(b),
            e = za.call(this, b);c && a.a(b);return e;
      });w(Node.prototype, "replaceChild", function (b, d) {
        if (b instanceof DocumentFragment) {
          var c = Array.prototype.slice.apply(b.childNodes);b = zb.call(this, b, d);if (m(this)) for (a.a(d), d = 0; d < c.length; d++) {
            a.b(c[d]);
          }return b;
        }var c = m(b),
            f = zb.call(this, b, d),
            g = m(this);g && a.a(d);c && a.a(b);g && a.b(b);return f;
      });Ba && Ba.get ? b(Node.prototype, Ba) : a.u(function (a) {
        b(a, { enumerable: !0, configurable: !0, get: function get() {
            for (var a = [], b = 0; b < this.childNodes.length; b++) {
              a.push(this.childNodes[b].textContent);
            }return a.join("");
          }, set: function set(a) {
            for (; this.firstChild;) {
              za.call(this, this.firstChild);
            }ja.call(this, document.createTextNode(a));
          } });
      });
    }function bd(a) {
      w(Document.prototype, "createElement", function (b) {
        if (this.__CE_hasRegistry) {
          var c = a.f(b);if (c) return new c.constructor();
        }b = ya.call(this, b);a.g(b);return b;
      });
      w(Document.prototype, "importNode", function (b, c) {
        b = cd.call(this, b, c);this.__CE_hasRegistry ? a.c(b) : a.j(b);return b;
      });w(Document.prototype, "createElementNS", function (b, c) {
        if (this.__CE_hasRegistry && (null === b || "http://www.w3.org/1999/xhtml" === b)) {
          var d = a.f(c);if (d) return new d.constructor();
        }b = dd.call(this, b, c);a.g(b);return b;
      });xb(a, Document.prototype, { Ra: ed, append: fd });
    }function xb(a, b, c) {
      b.prepend = function (b) {
        for (var d = [], f = 0; f < arguments.length; ++f) {
          d[f - 0] = arguments[f];
        }f = d.filter(function (a) {
          return a instanceof Node && m(a);
        });c.Ra.apply(this, d);for (var g = 0; g < f.length; g++) {
          a.a(f[g]);
        }if (m(this)) for (f = 0; f < d.length; f++) {
          g = d[f], g instanceof Element && a.b(g);
        }
      };b.append = function (b) {
        for (var d = [], f = 0; f < arguments.length; ++f) {
          d[f - 0] = arguments[f];
        }f = d.filter(function (a) {
          return a instanceof Node && m(a);
        });c.append.apply(this, d);for (var g = 0; g < f.length; g++) {
          a.a(f[g]);
        }if (m(this)) for (f = 0; f < d.length; f++) {
          g = d[f], g instanceof Element && a.b(g);
        }
      };
    }function gd(a) {
      window.HTMLElement = function () {
        function b() {
          var b = this.constructor,
              d = a.L(b);if (!d) throw Error("The custom element being constructed was not registered with `customElements`.");
          var e = d.constructionStack;if (!e.length) return e = ya.call(document, d.localName), Object.setPrototypeOf(e, b.prototype), e.__CE_state = 1, e.__CE_definition = d, a.g(e), e;var d = e.length - 1,
              f = e[d];if (f === Ab) throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");e[d] = Ab;Object.setPrototypeOf(f, b.prototype);a.g(f);return f;
        }b.prototype = hd.prototype;return b;
      }();
    }function r(a) {
      this.f = !1;this.a = a;this.h = new Map();this.g = function (a) {
        return a();
      };this.b = !1;this.c = [];this.j = new Ca(a, document);
    }function Bb() {
      var a = this;this.b = this.a = void 0;this.c = new Promise(function (b) {
        a.b = b;a.a && b(a.a);
      });
    }function Ca(a, b) {
      this.b = a;this.a = b;this.N = void 0;this.b.c(this.a);"loading" === this.a.readyState && (this.N = new MutationObserver(this.f.bind(this)), this.N.observe(this.a, { childList: !0, subtree: !0 }));
    }function A() {
      this.s = new Map();this.o = new Map();this.i = [];this.h = !1;
    }function t(a, b) {
      if (a !== Cb) throw new TypeError("Illegal constructor");a = document.createDocumentFragment();a.__proto__ = t.prototype;a.i(b);return a;
    }function x(a) {
      this.root = a;this.fa = "slot";
    }function U(a) {
      if (!a.__shady || void 0 === a.__shady.firstChild) {
        a.__shady = a.__shady || {};a.__shady.firstChild = Da(a);a.__shady.lastChild = Ea(a);Db(a);for (var b = a.__shady.childNodes = ba(a), c = 0, d; c < b.length && (d = b[c]); c++) {
          d.__shady = d.__shady || {}, d.__shady.parentNode = a, d.__shady.nextSibling = b[c + 1] || null, d.__shady.previousSibling = b[c - 1] || null, Eb(d);
        }
      }
    }function id(a) {
      var b = a && a.N;b && (b.ea.delete(a.gb), b.ea.size || (a.lb.__shady.Z = null));
    }function jd(a, b) {
      a.__shady = a.__shady || {};a.__shady.Z || (a.__shady.Z = new la());a.__shady.Z.ea.add(b);var c = a.__shady.Z;return { gb: b, N: c, lb: a, takeRecords: function takeRecords() {
          return c.takeRecords();
        } };
    }function la() {
      this.a = !1;this.addedNodes = [];this.removedNodes = [];this.ea = new Set();
    }function B(a) {
      return "ShadyRoot" === a.cb;
    }function V(a) {
      a = a.getRootNode();if (B(a)) return a;
    }function Fa(a, b) {
      if (a && b) for (var c = Object.getOwnPropertyNames(b), d = 0, e; d < c.length && (e = c[d]); d++) {
        var f = Object.getOwnPropertyDescriptor(b, e);f && Object.defineProperty(a, e, f);
      }
    }function Fb(a, b) {
      for (var c = [], d = 1; d < arguments.length; ++d) {
        c[d - 1] = arguments[d];
      }for (d = 0; d < c.length; d++) {
        Fa(a, c[d]);
      }return a;
    }function kd(a, b) {
      for (var c in b) {
        a[c] = b[c];
      }
    }function Gb(a) {
      Ga.push(a);Ha.textContent = Hb++;
    }function Ib(a) {
      Ia || (Ia = !0, Gb(Ja));ca.push(a);
    }function Ja() {
      Ia = !1;for (var a = !!ca.length; ca.length;) {
        ca.shift()();
      }return a;
    }function ld(a, b) {
      var c = b.getRootNode();return a.map(function (a) {
        var b = c === a.target.getRootNode();if (b && a.addedNodes) {
          if (b = Array.from(a.addedNodes).filter(function (a) {
            return c === a.getRootNode();
          }), b.length) return a = Object.create(a), Object.defineProperty(a, "addedNodes", { value: b, configurable: !0 }), a;
        } else if (b) return a;
      }).filter(function (a) {
        return a;
      });
    }function Jb(a) {
      switch (a) {case "&":
          return "&amp;";case "<":
          return "&lt;";case ">":
          return "&gt;";case '"':
          return "&quot;";case "\xA0":
          return "&nbsp;";}
    }function Kb(a) {
      for (var b = {}, c = 0; c < a.length; c++) {
        b[a[c]] = !0;
      }return b;
    }function Ka(a, b) {
      "template" === a.localName && (a = a.content);for (var c = "", d = b ? b(a) : a.childNodes, e = 0, f = d.length, g; e < f && (g = d[e]); e++) {
        var h;
        a: {
          var l;h = g;l = a;var R = b;switch (h.nodeType) {case Node.ELEMENT_NODE:
              for (var k = h.localName, K = "<" + k, m = h.attributes, n = 0; l = m[n]; n++) {
                K += " " + l.name + '="' + l.value.replace(md, Jb) + '"';
              }K += ">";h = nd[k] ? K : K + Ka(h, R) + "</" + k + ">";break a;case Node.TEXT_NODE:
              h = h.data;h = l && od[l.localName] ? h : h.replace(pd, Jb);break a;case Node.COMMENT_NODE:
              h = "\x3c!--" + h.data + "--\x3e";break a;default:
              throw window.console.error(h), Error("not implemented");}
        }c += h;
      }return c;
    }function P(a) {
      D.currentNode = a;return D.parentNode();
    }function Da(a) {
      D.currentNode = a;return D.firstChild();
    }function Ea(a) {
      D.currentNode = a;return D.lastChild();
    }function Lb(a) {
      D.currentNode = a;return D.previousSibling();
    }function Mb(a) {
      D.currentNode = a;return D.nextSibling();
    }function ba(a) {
      var b = [];D.currentNode = a;for (a = D.firstChild(); a;) {
        b.push(a), a = D.nextSibling();
      }return b;
    }function Nb(a) {
      E.currentNode = a;return E.parentNode();
    }function Ob(a) {
      E.currentNode = a;return E.firstChild();
    }function Pb(a) {
      E.currentNode = a;return E.lastChild();
    }function Qb(a) {
      E.currentNode = a;return E.previousSibling();
    }
    function Rb(a) {
      E.currentNode = a;return E.nextSibling();
    }function Sb(a) {
      var b = [];E.currentNode = a;for (a = E.firstChild(); a;) {
        b.push(a), a = E.nextSibling();
      }return b;
    }function Tb(a) {
      return Ka(a, function (a) {
        return ba(a);
      });
    }function Ub(a) {
      if (a.nodeType !== Node.ELEMENT_NODE) return a.nodeValue;a = document.createTreeWalker(a, NodeFilter.SHOW_TEXT, null, !1);for (var b = "", c; c = a.nextNode();) {
        b += c.nodeValue;
      }return b;
    }function L(a, b, c) {
      for (var d in b) {
        var e = Object.getOwnPropertyDescriptor(a, d);e && e.configurable || !e && c ? Object.defineProperty(a, d, b[d]) : c && console.warn("Could not define", d, "on", a);
      }
    }function Q(a) {
      L(a, Vb);L(a, La);L(a, Ma);
    }function Wb(a, b, c) {
      Eb(a);c = c || null;a.__shady = a.__shady || {};b.__shady = b.__shady || {};c && (c.__shady = c.__shady || {});a.__shady.previousSibling = c ? c.__shady.previousSibling : b.lastChild;var d = a.__shady.previousSibling;d && d.__shady && (d.__shady.nextSibling = a);(d = a.__shady.nextSibling = c) && d.__shady && (d.__shady.previousSibling = a);a.__shady.parentNode = b;c ? c === b.__shady.firstChild && (b.__shady.firstChild = a) : (b.__shady.lastChild = a, b.__shady.firstChild || (b.__shady.firstChild = a));b.__shady.childNodes = null;
    }function Xb(a) {
      var b = a.__shady && a.__shady.parentNode,
          c,
          d = V(a);if (b || d) {
        c = Yb(a);if (b) {
          a.__shady = a.__shady || {};b.__shady = b.__shady || {};a === b.__shady.firstChild && (b.__shady.firstChild = a.__shady.nextSibling);a === b.__shady.lastChild && (b.__shady.lastChild = a.__shady.previousSibling);var e = a.__shady.previousSibling,
              f = a.__shady.nextSibling;e && (e.__shady = e.__shady || {}, e.__shady.nextSibling = f);f && (f.__shady = f.__shady || {}, f.__shady.previousSibling = e);a.__shady.parentNode = a.__shady.previousSibling = a.__shady.nextSibling = void 0;void 0 !== b.__shady.childNodes && (b.__shady.childNodes = null);
        }if (e = d) {
          for (var g, e = d.sa(), f = 0; f < e.length; f++) {
            var h = e[f],
                l;a: {
              for (l = h; l;) {
                if (l == a) {
                  l = !0;break a;
                }l = l.parentNode;
              }l = void 0;
            }if (l) for (h = h.assignedNodes({ flatten: !0 }), l = 0; l < h.length; l++) {
              g = !0;var R = h[l],
                  k = P(R);k && W.call(k, R);
            }
          }e = g;
        }b = b && d && b.localName === d.D.fa;if (e || b) d.ca = !1, ma(d);
      }Na(a);return c;
    }function Oa(a, b, c) {
      if (a = a.__shady && a.__shady.Z) b && a.addedNodes.push(b), c && a.removedNodes.push(c), a.Ab();
    }function Pa(a) {
      if (a && a.nodeType) {
        a.__shady = a.__shady || {};var b = a.__shady.Ba;void 0 === b && (B(a) ? b = a : b = (b = a.parentNode) ? Pa(b) : a, document.documentElement.contains(a) && (a.__shady.Ba = b));return b;
      }
    }function Zb(a, b, c) {
      var d,
          e = c.D.fa;if (a.nodeType !== Node.DOCUMENT_FRAGMENT_NODE || a.__noInsertionPoint) a.localName === e && (U(b), U(a), d = !0);else for (var e = a.querySelectorAll(e), f = 0, g, h; f < e.length && (g = e[f]); f++) {
        h = g.parentNode, h === a && (h = b), h = Zb(g, h, c), d = d || h;
      }return d;
    }function $b(a) {
      return (a = a && a.__shady && a.__shady.root) && a.ya();
    }function Na(a) {
      if (a.__shady && void 0 !== a.__shady.Ba) for (var b = a.childNodes, c = 0, d = b.length, e; c < d && (e = b[c]); c++) {
        Na(e);
      }a.__shady = a.__shady || {};a.__shady.Ba = void 0;
    }function Yb(a) {
      a = a.parentNode;if ($b(a)) return ma(a.__shady.root), !0;
    }function ma(a) {
      a.ra = !0;a.update();
    }function ac(a, b) {
      "slot" === b ? Yb(a) : "slot" === a.localName && "name" === b && (a = V(a)) && a.update();
    }function bc(a, b, c) {
      var d = [];cc(a.childNodes, b, c, d);return d;
    }function cc(a, b, c, d) {
      for (var e = 0, f = a.length, g; e < f && (g = a[e]); e++) {
        var h;if (h = g.nodeType === Node.ELEMENT_NODE) {
          h = g;var l = b,
              R = c,
              k = d,
              K = l(h);K && k.push(h);R && R(K) ? h = K : (cc(h.childNodes, l, R, k), h = void 0);
        }if (h) break;
      }
    }function dc(a) {
      a = a.getRootNode();B(a) && a.Sa();
    }function ec(a, b, c) {
      if (c) {
        var d = c.__shady && c.__shady.parentNode;if (void 0 !== d && d !== a || void 0 === d && P(c) !== a) throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");
      }if (c === b) return b;b.nodeType !== Node.DOCUMENT_FRAGMENT_NODE && ((d = b.__shady && b.__shady.parentNode) ? (Oa(d, null, b), Xb(b)) : (b.parentNode && W.call(b.parentNode, b), Na(b)));var d = c,
          e = V(a),
          f;e && (b.__noInsertionPoint && !e.ra && (e.ca = !0), f = Zb(b, a, e)) && (e.ca = !1);if (a.__shady && void 0 !== a.__shady.firstChild) if (Db(a), a.__shady = a.__shady || {}, void 0 !== a.__shady.firstChild && (a.__shady.childNodes = null), b.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
        for (var g = b.childNodes, h = 0; h < g.length; h++) {
          Wb(g[h], a, d);
        }b.__shady = b.__shady || {};g = void 0 !== b.__shady.firstChild ? null : void 0;b.__shady.firstChild = b.__shady.lastChild = g;b.__shady.childNodes = g;
      } else Wb(b, a, d);var g = f,
          h = e && e.D.fa || "",
          l = b.nodeType === Node.DOCUMENT_FRAGMENT_NODE && !b.__noInsertionPoint && h && b.querySelector(h);f = l && l.parentNode.nodeType !== Node.DOCUMENT_FRAGMENT_NODE;((l = l || b.localName === h) || a.localName === h || g) && e && ma(e);(e = $b(a)) && ma(a.__shady && a.__shady.root);if (!(e || l && !f || a.__shady.root || d && B(d.parentNode) && d.parentNode.O)) {
        if (c && (d = V(c))) {
          var k;if (c.localName === d.D.fa) a: {
            d = c.assignedNodes({ flatten: !0 });e = Pa(c);f = 0;for (g = d.length; f < g && (k = d[f]); f++) {
              if (e.ga(c, k)) break a;
            }k = void 0;
          } else k = c;c = k;
        }k = B(a) ? a.host : a;c ? Qa.call(k, b, c) : fc.call(k, b);
      }Oa(a, b);return b;
    }function gc(a, b) {
      if (a.ownerDocument !== document) return Ra.call(document, a, b);var c = Ra.call(document, a, !1);if (b) {
        a = a.childNodes;b = 0;for (var d; b < a.length; b++) {
          d = gc(a[b], !0), c.appendChild(d);
        }
      }return c;
    }function Sa(a, b) {
      var c = [],
          d = a;for (a = a === window ? window : a.getRootNode(); d;) {
        c.push(d), d = d.assignedSlot ? d.assignedSlot : d.nodeType === Node.DOCUMENT_FRAGMENT_NODE && d.host && (b || d !== a) ? d.host : d.parentNode;
      }c[c.length - 1] === document && c.push(window);return c;
    }function hc(a, b) {
      if (!B) return a;a = Sa(a, !0);for (var c = 0, d, e, f, g; c < b.length; c++) {
        if (d = b[c], f = d === window ? window : d.getRootNode(), f !== e && (g = a.indexOf(f), e = f), !B(f) || -1 < g) return d;
      }
    }function Ta(a) {
      function b(b, d) {
        b = new a(b, d);b.oa = d && !!d.composed;return b;
      }kd(b, a);b.prototype = a.prototype;return b;
    }function ic(a, b, c) {
      if (c = b.C && b.C[a.type] && b.C[a.type][c]) for (var d = 0, e; (e = c[d]) && (e.call(b, a), !a.ab); d++) {}
    }function qd(a) {
      var b = a.composedPath(),
          c;Object.defineProperty(a, "currentTarget", { get: function get() {
          return c;
        }, configurable: !0 });for (var d = b.length - 1; 0 <= d; d--) {
        if (c = b[d], ic(a, c, "capture"), a.pa) return;
      }Object.defineProperty(a, "eventPhase", { value: Event.AT_TARGET });for (var e, d = 0; d < b.length; d++) {
        if (c = b[d], !d || c.shadowRoot && c.shadowRoot === e) if (ic(a, c, "bubble"), c !== window && (e = c.getRootNode()), a.pa) break;
      }
    }function jc(a, b, c, d, e, f) {
      var g = a.type,
          h = a.capture,
          l = a.once,
          k = a.passive;return b === a.node && c === g && d === h && e === l && f === k;
    }function rd() {
      for (var a in Ua) {
        window.addEventListener(a, function (a) {
          a.__target || (kc(a), qd(a));
        }, !0);
      }
    }function kc(a) {
      a.__target = a.target;a.Ha = a.relatedTarget;if (z.Y) {
        var b = lc,
            c = Object.getPrototypeOf(a);if (!c.hasOwnProperty("__patchProto")) {
          var d = Object.create(c);d.Fb = c;Fa(d, b);c.__patchProto = d;
        }a.__proto__ = c.__patchProto;
      } else Fa(a, lc);
    }function da(a, b) {
      return { index: a, $: [], da: b };
    }function sd(a, b, c, d) {
      var e = 0,
          f = 0,
          g = 0,
          h = 0,
          l = Math.min(b - e, d - f);if (0 == e && 0 == f) a: {
        for (g = 0; g < l; g++) {
          if (a[g] !== c[g]) break a;
        }g = l;
      }if (b == a.length && d == c.length) {
        for (var h = a.length, k = c.length, q = 0; q < l - g && td(a[--h], c[--k]);) {
          q++;
        }h = q;
      }e += g;f += g;b -= h;d -= h;if (!(b - e || d - f)) return [];if (e == b) {
        for (b = da(e, 0); f < d;) {
          b.$.push(c[f++]);
        }return [b];
      }if (f == d) return [da(e, b - e)];l = e;g = f;d = d - g + 1;h = b - l + 1;b = Array(d);for (k = 0; k < d; k++) {
        b[k] = Array(h), b[k][0] = k;
      }for (k = 0; k < h; k++) {
        b[0][k] = k;
      }for (k = 1; k < d; k++) {
        for (q = 1; q < h; q++) {
          if (a[l + q - 1] === c[g + k - 1]) b[k][q] = b[k - 1][q - 1];else {
            var K = b[k - 1][q] + 1,
                m = b[k][q - 1] + 1;b[k][q] = K < m ? K : m;
          }
        }
      }l = b.length - 1;g = b[0].length - 1;d = b[l][g];for (a = []; 0 < l || 0 < g;) {
        l ? g ? (h = b[l - 1][g - 1], k = b[l - 1][g], q = b[l][g - 1], K = k < q ? k < h ? k : h : q < h ? q : h, K == h ? (h == d ? a.push(0) : (a.push(1), d = h), l--, g--) : K == k ? (a.push(3), l--, d = k) : (a.push(2), g--, d = q)) : (a.push(3), l--) : (a.push(2), g--);
      }a.reverse();b = void 0;l = [];for (g = 0; g < a.length; g++) {
        switch (a[g]) {case 0:
            b && (l.push(b), b = void 0);e++;f++;break;case 1:
            b || (b = da(e, 0));b.da++;e++;b.$.push(c[f]);f++;break;case 2:
            b || (b = da(e, 0));b.da++;e++;break;case 3:
            b || (b = da(e, 0)), b.$.push(c[f]), f++;}
      }b && l.push(b);return l;
    }function td(a, b) {
      return a === b;
    }function mc(a) {
      dc(a);return a.__shady && a.__shady.assignedSlot || null;
    }
    function X(a, b) {
      for (var c = Object.getOwnPropertyNames(b), d = 0; d < c.length; d++) {
        var e = c[d],
            f = Object.getOwnPropertyDescriptor(b, e);f.value ? a[e] = f.value : Object.defineProperty(a, e, f);
      }
    }function nc(a) {
      var b = ud.has(a);a = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(a);return !b && a;
    }function m(a) {
      var b = a.isConnected;if (void 0 !== b) return b;for (; a && !(a.__CE_isImportDocument || a instanceof Document);) {
        a = a.parentNode || (window.ShadowRoot && a instanceof ShadowRoot ? a.host : void 0);
      }return !(!a || !(a.__CE_isImportDocument || a instanceof Document));
    }function Va(a, b) {
      for (; b && b !== a && !b.nextSibling;) {
        b = b.parentNode;
      }return b && b !== a ? b.nextSibling : null;
    }function O(a, b, c) {
      c = c ? c : new Set();for (var d = a; d;) {
        if (d.nodeType === Node.ELEMENT_NODE) {
          var e = d;b(e);var f = e.localName;if ("link" === f && "import" === e.getAttribute("rel")) {
            d = e.import;if (d instanceof Node && !c.has(d)) for (c.add(d), d = d.firstChild; d; d = d.nextSibling) {
              O(d, b, c);
            }d = Va(a, e);continue;
          } else if ("template" === f) {
            d = Va(a, e);continue;
          }if (e = e.__CE_shadowRoot) for (e = e.firstChild; e; e = e.nextSibling) {
            O(e, b, c);
          }
        }d = d.firstChild ? d.firstChild : Va(a, d);
      }
    }function w(a, b, c) {
      a[b] = c;
    }function Wa(a) {
      a = a.replace(M.qb, "").replace(M.port, "");var b = oc,
          c = a,
          d = new va();d.start = 0;d.end = c.length;for (var e = d, f = 0, g = c.length; f < g; f++) {
        if ("{" === c[f]) {
          e.rules || (e.rules = []);var h = e,
              l = h.rules[h.rules.length - 1] || null,
              e = new va();e.start = f + 1;e.parent = h;e.previous = l;h.rules.push(e);
        } else "}" === c[f] && (e.end = f + 1, e = e.parent || d);
      }return b(d, a);
    }function oc(a, b) {
      var c = b.substring(a.start, a.end - 1);a.parsedCssText = a.cssText = c.trim();a.parent && ((c = b.substring(a.previous ? a.previous.end : a.parent.start, a.start - 1), c = vd(c), c = c.replace(M.Qa, " "), c = c.substring(c.lastIndexOf(";") + 1), c = a.parsedSelector = a.selector = c.trim(), a.atRule = !c.indexOf("@"), a.atRule) ? c.indexOf("@media") ? c.match(M.wb) && (a.type = G.na, a.keyframesName = a.selector.split(M.Qa).pop()) : a.type = G.MEDIA_RULE : a.type = c.indexOf("--") ? G.STYLE_RULE : G.Da);if (c = a.rules) for (var d = 0, e = c.length, f; d < e && (f = c[d]); d++) {
        oc(f, b);
      }return a;
    }function vd(a) {
      return a.replace(/\\([0-9a-f]{1,6})\s/gi, function (a, c) {
        a = c;for (c = 6 - a.length; c--;) {
          a = "0" + a;
        }return "\\" + a;
      });
    }function pc(a, b, c) {
      c = void 0 === c ? "" : c;var d = "";if (a.cssText || a.rules) {
        var e = a.rules,
            f;if (f = e) f = e[0], f = !(f && f.selector && 0 === f.selector.indexOf("--"));if (f) {
          f = 0;for (var g = e.length, h; f < g && (h = e[f]); f++) {
            d = pc(h, b, d);
          }
        } else b ? b = a.cssText : (b = a.cssText, b = b.replace(M.La, "").replace(M.Pa, ""), b = b.replace(M.xb, "").replace(M.Cb, "")), (d = b.trim()) && (d = "  " + d + "\n");
      }d && (a.selector && (c += a.selector + " {\n"), c += d, a.selector && (c += "}\n\n"));return c;
    }function qc(a) {
      a && (C = C && !a.nativeCss && !a.shimcssproperties, u = u && !a.nativeShadow && !a.shimshadow);
    }function Y(a, b) {
      if (!a) return "";"string" === typeof a && (a = Wa(a));b && Z(a, b);return pc(a, C);
    }function na(a) {
      !a.__cssRules && a.textContent && (a.__cssRules = Wa(a.textContent));return a.__cssRules || null;
    }function rc(a) {
      return !!a.parent && a.parent.type === G.na;
    }function Z(a, b, c, d) {
      if (a) {
        var e = !1,
            f = a.type;if (d && f === G.MEDIA_RULE) {
          var g = a.selector.match(wd);g && (window.matchMedia(g[1]).matches || (e = !0));
        }f === G.STYLE_RULE ? b(a) : c && f === G.na ? c(a) : f === G.Da && (e = !0);if ((a = a.rules) && !e) for (var e = 0, f = a.length, h; e < f && (h = a[e]); e++) {
          Z(h, b, c, d);
        }
      }
    }function Xa(a, b, c, d) {
      var e = document.createElement("style");b && e.setAttribute("scope", b);e.textContent = a;sc(e, c, d);return e;
    }function sc(a, b, c) {
      b = b || document.head;b.insertBefore(a, c && c.nextSibling || b.firstChild);S ? a.compareDocumentPosition(S) === Node.DOCUMENT_POSITION_PRECEDING && (S = a) : S = a;
    }function tc(a, b) {
      var c = a.indexOf("var(");if (-1 === c) return b(a, "", "", "");var d;a: {
        var e = 0;d = c + 3;for (var f = a.length; d < f; d++) {
          if ("(" === a[d]) e++;else if (")" === a[d] && ! --e) break a;
        }d = -1;
      }e = a.substring(c + 4, d);c = a.substring(0, c);a = tc(a.substring(d + 1), b);d = e.indexOf(",");return -1 === d ? b(c, e.trim(), "", a) : b(c, e.substring(0, d).trim(), e.substring(d + 1).trim(), a);
    }function oa(a, b) {
      u ? a.setAttribute("class", b) : window.ShadyDOM.nativeMethods.setAttribute.call(a, "class", b);
    }function T(a) {
      var b = a.localName,
          c = "";b ? -1 < b.indexOf("-") || (c = b, b = a.getAttribute && a.getAttribute("is") || "") : (b = a.is, c = a.extends);return { is: b, aa: c };
    }function xd(a) {
      (a = pa[a]) && (a._applyShimInvalid = !0);
    }function yd(a) {
      a.a || (a.a = !0, zd.then(function () {
        a._applyShimInvalid = !1;a.a = !1;
      }));
    }function nb(a) {
      uc ? uc(a) : (Ya || (Ya = new Promise(function (a) {
        Za = a;
      }), "complete" === document.readyState ? Za() : document.addEventListener("readystatechange", function () {
        "complete" === document.readyState && Za();
      })), Ya.then(function () {
        a && a();
      }));
    }(function () {
      if (!function () {
        var a = document.createEvent("Event");a.initEvent("foo", !0, !0);a.preventDefault();return a.defaultPrevented;
      }()) {
        var a = Event.prototype.preventDefault;Event.prototype.preventDefault = function () {
          this.cancelable && (a.call(this), Object.defineProperty(this, "defaultPrevented", { get: function get() {
              return !0;
            }, configurable: !0 }));
        };
      }var b = /Trident/.test(navigator.userAgent);if (!window.CustomEvent || b && "function" !== typeof window.CustomEvent) window.CustomEvent = function (a, b) {
        b = b || {};var c = document.createEvent("CustomEvent");c.initCustomEvent(a, !!b.bubbles, !!b.cancelable, b.detail);return c;
      }, window.CustomEvent.prototype = window.Event.prototype;if (!window.Event || b && "function" !== typeof window.Event) {
        var c = window.Event;window.Event = function (a, b) {
          b = b || {};var c = document.createEvent("Event");c.initEvent(a, !!b.bubbles, !!b.cancelable);return c;
        };if (c) for (var d in c) {
          window.Event[d] = c[d];
        }window.Event.prototype = c.prototype;
      }if (!window.MouseEvent || b && "function" !== typeof window.MouseEvent) {
        b = window.MouseEvent;window.MouseEvent = function (a, b) {
          b = b || {};var c = document.createEvent("MouseEvent");c.initMouseEvent(a, !!b.bubbles, !!b.cancelable, b.view || window, b.detail, b.screenX, b.screenY, b.clientX, b.clientY, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, b.button, b.relatedTarget);return c;
        };if (b) for (d in b) {
          window.MouseEvent[d] = b[d];
        }window.MouseEvent.prototype = b.prototype;
      }Array.from || (Array.from = function (a) {
        return [].slice.call(a);
      });Object.assign || (Object.assign = function (a, b) {
        for (var c = [].slice.call(arguments, 1), d = 0, e; d < c.length; d++) {
          if (e = c[d]) for (var f = a, k = e, m = Object.getOwnPropertyNames(k), n = 0; n < m.length; n++) {
            e = m[n], f[e] = k[e];
          }
        }return a;
      });
    })(window.WebComponents);(function () {
      function a() {}var b = "undefined" === typeof HTMLTemplateElement;/Trident/.test(navigator.userAgent) && function () {
        var a = Document.prototype.importNode;Document.prototype.importNode = function () {
          var b = a.apply(this, arguments);if (b.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
            var c = this.createDocumentFragment();c.appendChild(b);return c;
          }return b;
        };
      }();var c = Node.prototype.cloneNode,
          d = Document.prototype.createElement,
          e = Document.prototype.importNode,
          f = function () {
        if (!b) {
          var a = document.createElement("template"),
              c = document.createElement("template");c.content.appendChild(document.createElement("div"));a.content.appendChild(c);
          a = a.cloneNode(!0);return 0 === a.content.childNodes.length || 0 === a.content.firstChild.content.childNodes.length || !(document.createDocumentFragment().cloneNode() instanceof DocumentFragment);
        }
      }();if (b) {
        var g = function g(a) {
          switch (a) {case "&":
              return "&amp;";case "<":
              return "&lt;";case ">":
              return "&gt;";case "\xA0":
              return "&nbsp;";}
        },
            h = function h(b) {
          Object.defineProperty(b, "innerHTML", { get: function get() {
              for (var a = "", b = this.content.firstChild; b; b = b.nextSibling) {
                a += b.outerHTML || b.data.replace(v, g);
              }return a;
            }, set: function set(b) {
              k.body.innerHTML = b;for (a.b(k); this.content.firstChild;) {
                this.content.removeChild(this.content.firstChild);
              }for (; k.body.firstChild;) {
                this.content.appendChild(k.body.firstChild);
              }
            }, configurable: !0 });
        },
            k = document.implementation.createHTMLDocument("template"),
            m = !0,
            q = document.createElement("style");q.textContent = "template{display:none;}";var n = document.head;n.insertBefore(q, n.firstElementChild);a.prototype = Object.create(HTMLElement.prototype);var t = !document.createElement("div").hasOwnProperty("innerHTML");a.P = function (b) {
          if (!b.content) {
            b.content = k.createDocumentFragment();for (var c; c = b.firstChild;) {
              b.content.appendChild(c);
            }if (t) b.__proto__ = a.prototype;else if (b.cloneNode = function (b) {
              return a.a(this, b);
            }, m) try {
              h(b);
            } catch (ce) {
              m = !1;
            }a.b(b.content);
          }
        };h(a.prototype);a.b = function (b) {
          b = b.querySelectorAll("template");for (var c = 0, d = b.length, e; c < d && (e = b[c]); c++) {
            a.P(e);
          }
        };document.addEventListener("DOMContentLoaded", function () {
          a.b(document);
        });Document.prototype.createElement = function () {
          var b = d.apply(this, arguments);"template" === b.localName && a.P(b);return b;
        };
        var v = /[&\u00A0<>]/g;
      }if (b || f) a.a = function (a, b) {
        var d = c.call(a, !1);this.P && this.P(d);b && (d.content.appendChild(c.call(a.content, !0)), this.xa(d.content, a.content));return d;
      }, a.prototype.cloneNode = function (b) {
        return a.a(this, b);
      }, a.xa = function (a, b) {
        if (b.querySelectorAll) {
          b = b.querySelectorAll("template");a = a.querySelectorAll("template");for (var c = 0, d = a.length, e, f; c < d; c++) {
            f = b[c], e = a[c], this.P && this.P(f), e.parentNode.replaceChild(f.cloneNode(!0), e);
          }
        }
      }, Node.prototype.cloneNode = function (b) {
        var d;if (this instanceof DocumentFragment) {
          if (b) d = this.ownerDocument.importNode(this, !0);else return this.ownerDocument.createDocumentFragment();
        } else d = c.call(this, b);b && a.xa(d, this);return d;
      }, Document.prototype.importNode = function (b, c) {
        if ("template" === b.localName) return a.a(b, c);var d = e.call(this, b, c);c && a.xa(d, b);return d;
      }, f && (window.HTMLTemplateElement.prototype.cloneNode = function (b) {
        return a.a(this, b);
      });b && (window.HTMLTemplateElement = a);
    })();!function (a, b) {
      "object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = b() : "function" == "function" && __webpack_require__(28).Ib ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : a.ES6Promise = b();
    }(window, function () {
      function a(a, b) {
        B[x] = a;B[x + 1] = b;x += 2;2 === x && (E ? E(g) : M());
      }function b() {
        return function () {
          return process.Lb(g);
        };
      }function c() {
        return "undefined" != typeof D ? function () {
          D(g);
        } : f();
      }function d() {
        var a = 0,
            b = new J(g),
            c = document.createTextNode("");return b.observe(c, { characterData: !0 }), function () {
          c.data = a = ++a % 2;
        };
      }function e() {
        var a = new MessageChannel();return a.port1.onmessage = g, function () {
          return a.port2.postMessage(0);
        };
      }function f() {
        var a = setTimeout;return function () {
          return a(g, 1);
        };
      }function g() {
        for (var a = 0; a < x; a += 2) {
          (0, B[a])(B[a + 1]), B[a] = void 0, B[a + 1] = void 0;
        }x = 0;
      }function h() {
        try {
          var a = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"vertx\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));return D = a.Nb || a.Mb, c();
        } catch (vc) {
          return f();
        }
      }function k(b, c) {
        var d = arguments,
            e = this,
            f = new this.constructor(q);void 0 === f[I] && $a(f);var g = e.m;return g ? !function () {
          var b = d[g - 1];a(function () {
            return wc(g, f, b, e.l);
          });
        }() : w(e, f, b, c), f;
      }function m(a) {
        if (a && "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) && a.constructor === this) return a;var b = new this(q);return u(b, a), b;
      }function q() {}
      function n(a) {
        try {
          return a.then;
        } catch (vc) {
          return O.error = vc, O;
        }
      }function t(a, b, c, d) {
        try {
          a.call(b, c, d);
        } catch (Cd) {
          return Cd;
        }
      }function v(b, c, d) {
        a(function (a) {
          var b = !1,
              e = t(d, c, function (d) {
            b || (b = !0, c !== d ? u(a, d) : r(a, d));
          }, function (c) {
            b || (b = !0, N(a, c));
          });!b && e && (b = !0, N(a, e));
        }, b);
      }function y(a, b) {
        b.m === L ? r(a, b.l) : b.m === H ? N(a, b.l) : w(b, void 0, function (b) {
          return u(a, b);
        }, function (b) {
          return N(a, b);
        });
      }function p(a, b, c) {
        b.constructor === a.constructor && c === k && b.constructor.resolve === m ? y(a, b) : c === O ? (N(a, O.error), O.error = null) : void 0 === c ? r(a, b) : "function" == typeof c ? v(a, b, c) : r(a, b);
      }function u(a, b) {
        a === b ? N(a, new TypeError("You cannot resolve a promise with itself")) : "function" == typeof b || "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && null !== b ? p(a, b, n(b)) : r(a, b);
      }function C(a) {
        a.Ja && a.Ja(a.l);A(a);
      }function r(b, c) {
        b.m === G && (b.l = c, b.m = L, 0 !== b.X.length && a(A, b));
      }function N(b, c) {
        b.m === G && (b.m = H, b.l = c, a(C, b));
      }function w(b, c, d, e) {
        var f = b.X,
            g = f.length;b.Ja = null;f[g] = c;f[g + L] = d;f[g + H] = e;0 === g && b.m && a(A, b);
      }function A(a) {
        var b = a.X,
            c = a.m;if (0 !== b.length) {
          for (var d, e, f = a.l, g = 0; g < b.length; g += 3) {
            d = b[g], e = b[g + c], d ? wc(c, d, e, f) : e(f);
          }a.X.length = 0;
        }
      }function ea() {
        this.error = null;
      }function wc(a, b, c, d) {
        var e = "function" == typeof c,
            f = void 0,
            g = void 0,
            h = void 0,
            ea = void 0;if (e) {
          var k;try {
            k = c(d);
          } catch (Dd) {
            k = (P.error = Dd, P);
          }if (f = k, f === P ? (ea = !0, g = f.error, f.error = null) : h = !0, b === f) return void N(b, new TypeError("A promises callback cannot return that same promise."));
        } else f = d, h = !0;b.m !== G || (e && h ? u(b, f) : ea ? N(b, g) : a === L ? r(b, f) : a === H && N(b, f));
      }function Ed(a, b) {
        try {
          b(function (b) {
            u(a, b);
          }, function (b) {
            N(a, b);
          });
        } catch (Ad) {
          N(a, Ad);
        }
      }function $a(a) {
        a[I] = Q++;a.m = void 0;a.l = void 0;a.X = [];
      }function fa(a, b) {
        this.kb = a;this.J = new a(q);this.J[I] || $a(this.J);xc(b) ? (this.jb = b, this.length = b.length, this.ba = b.length, this.l = Array(this.length), 0 === this.length ? r(this.J, this.l) : (this.length = this.length || 0, this.ib(), 0 === this.ba && r(this.J, this.l))) : N(this.J, Error("Array Methods must be provided an Array"));
      }function F(a) {
        this[I] = Q++;this.l = this.m = void 0;this.X = [];if (q !== a) {
          if ("function" != typeof a) throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
          if (this instanceof F) Ed(this, a);else throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
        }
      }var ab = void 0,
          xc = ab = Array.isArray ? Array.isArray : function (a) {
        return "[object Array]" === Object.prototype.toString.call(a);
      },
          x = 0,
          D = void 0,
          E = void 0,
          z = (ab = "undefined" != typeof window ? window : void 0) || {},
          J = z.MutationObserver || z.WebKitMutationObserver,
          z = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
          B = Array(1E3),
          M = void 0,
          M = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process) ? b() : J ? d() : z ? e() : ab || "function" != "function" ? f() : h(),
          I = Math.random().toString(36).substring(16),
          G = void 0,
          L = 1,
          H = 2,
          O = new ea(),
          P = new ea(),
          Q = 0;return fa.prototype.ib = function () {
        for (var a = this.length, b = this.jb, c = 0; this.m === G && c < a; c++) {
          this.hb(b[c], c);
        }
      }, fa.prototype.hb = function (a, b) {
        var c = this.kb,
            d = c.resolve;d === m ? (d = n(a), d === k && a.m !== G ? this.ua(a.m, b, a.l) : "function" != typeof d ? (this.ba--, this.l[b] = a) : c === F ? (c = new c(q), p(c, a, d), this.va(c, b)) : this.va(new c(function (b) {
          return b(a);
        }), b)) : this.va(d(a), b);
      }, fa.prototype.ua = function (a, b, c) {
        var d = this.J;d.m === G && (this.ba--, a === H ? N(d, c) : this.l[b] = c);0 === this.ba && r(d, this.l);
      }, fa.prototype.va = function (a, b) {
        var c = this;w(a, void 0, function (a) {
          return c.ua(L, b, a);
        }, function (a) {
          return c.ua(H, b, a);
        });
      }, F.g = function (a) {
        return new fa(this, a).J;
      }, F.h = function (a) {
        var b = this;return new b(xc(a) ? function (c, d) {
          for (var e = a.length, f = 0; f < e; f++) {
            b.resolve(a[f]).then(c, d);
          }
        } : function (a, b) {
          return b(new TypeError("You must pass an array to race."));
        });
      }, F.resolve = m, F.i = function (a) {
        var b = new this(q);return N(b, a), b;
      }, F.f = function (a) {
        E = a;
      }, F.c = function (b) {
        a = b;
      }, F.b = a, F.prototype = { constructor: F, then: k, "catch": function _catch(a) {
          return this.then(null, a);
        } }, F.a = function () {
        var a = void 0;if ("undefined" != typeof global) a = global;else if ("undefined" != typeof self) a = self;else try {
          a = Function("return this")();
        } catch (Bd) {
          throw Error("polyfill failed because global object is unavailable in this environment");
        }var b = a.Promise;if (b) {
          var c = null;try {
            c = Object.prototype.toString.call(b.resolve());
          } catch (Bd) {}if ("[object Promise]" === c && !b.Jb) return;
        }a.Promise = F;
      }, F.Promise = F, F.a(), F;
    });(function (a) {
      function b(a, b) {
        if ("function" === typeof window.CustomEvent) return new CustomEvent(a, b);var c = document.createEvent("CustomEvent");c.initCustomEvent(a, !!b.bubbles, !!b.cancelable, b.detail);return c;
      }function c(a) {
        if (m) return a.ownerDocument !== document ? a.ownerDocument : null;var b = a.__importDoc;if (!b && a.parentNode) {
          b = a.parentNode;
          if ("function" === typeof b.closest) b = b.closest("link[rel=import]");else for (; !h(b) && (b = b.parentNode);) {}a.__importDoc = b;
        }return b;
      }function d(a) {
        var b = document.querySelectorAll("link[rel=import]:not(import-dependency)"),
            c = b.length;if (c) for (var d = 0, e = b.length, f; d < e && (f = b[d]); d++) {
          g(f, function () {
            --c || a();
          });
        } else a();
      }function e(a) {
        if ("loading" !== document.readyState) a();else {
          var b = function b() {
            "loading" !== document.readyState && (document.removeEventListener("readystatechange", b), a());
          };document.addEventListener("readystatechange", b);
        }
      }function f(a) {
        e(function () {
          return d(function () {
            return a && a();
          });
        });
      }function g(a, b) {
        if (a.__loaded) b && b();else if (h(a) && !m && null === a.import || a.import && "complete" === a.import.readyState) a.__loaded = !0, b && b();else if ("script" !== a.localName || a.src) {
          var c = function c(d) {
            a.removeEventListener(d.type, c);a.__loaded = !0;b && b();
          };a.addEventListener("load", c);x && "style" === a.localName || a.addEventListener("error", c);
        } else a.__loaded = !0, b && b();
      }function h(a) {
        return a.nodeType === Node.ELEMENT_NODE && "link" === a.localName && "import" === a.rel;
      }function k() {
        var a = this;this.a = {};this.b = 0;this.c = new MutationObserver(function (b) {
          return a.o(b);
        });e(function () {
          a.c.observe(document.head, { childList: !0, subtree: !0 });a.f(document);
        });
      }var m = "import" in document.createElement("link"),
          n = null;!1 === "currentScript" in document && Object.defineProperty(document, "currentScript", { get: function get() {
          return n || ("complete" !== document.readyState ? document.scripts[document.scripts.length - 1] : null);
        }, configurable: !0 });var r = /(^\/)|(^#)|(^[\w-\d]*:)/,
          t = /(url\()([^)]*)(\))/g,
          u = /(@import[\s]+(?!url\())([^;]*)(;)/g,
          v = /(<link[^>]*)(rel=['|"]?stylesheet['|"]?[^>]*>)/g,
          p = { rb: function rb(a, b) {
          a.href && a.setAttribute("href", p.Ca(a.getAttribute("href"), b));a.src && a.setAttribute("src", p.Ca(a.getAttribute("src"), b));if ("style" === a.localName) {
            var c = p.Ta(a.textContent, b, t);a.textContent = p.Ta(c, b, u);
          }
        }, Ta: function Ta(a, b, c) {
          return a.replace(c, function (a, c, d, e) {
            a = d.replace(/["']/g, "");b && (a = p.Ua(a, b));return c + "'" + a + "'" + e;
          });
        }, Ca: function Ca(a, b) {
          return a && r.test(a) ? a : p.Ua(a, b);
        }, Ua: function Ua(a, b) {
          if (void 0 === p.qa) {
            p.qa = !1;try {
              var c = new URL("b", "http://a");c.pathname = "c%20d";p.qa = "http://a/c%20d" === c.href;
            } catch ($a) {}
          }if (p.qa) return new URL(a, b).href;c = p.fb;c || (c = document.implementation.createHTMLDocument("temp"), p.fb = c, c.Fa = c.createElement("base"), c.head.appendChild(c.Fa), c.Ea = c.createElement("a"));c.Fa.href = b;c.Ea.href = a;return c.Ea.href || a;
        } },
          y = { async: !0, load: function load(a, b, c) {
          if (a) {
            if (a.match(/^data:/)) {
              a = a.split(",");var d = a[1],
                  d = -1 < a[0].indexOf(";base64") ? atob(d) : decodeURIComponent(d);
              b(d);
            } else {
              var e = new XMLHttpRequest();e.open("GET", a, y.async);e.onload = function () {
                var a = e.getResponseHeader("Location");a && !a.indexOf("/") && (a = (location.origin || location.protocol + "//" + location.host) + a);var d = e.response || e.responseText;304 === e.status || !e.status || 200 <= e.status && 300 > e.status ? b(d, a) : c(d);
              };e.send();
            }
          } else c("error: href must be specified");
        } },
          x = /Trident/.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent);k.prototype.f = function (a) {
        a = a.querySelectorAll("link[rel=import]");for (var b = 0, c = a.length; b < c; b++) {
          this.h(a[b]);
        }
      };k.prototype.h = function (a) {
        var b = this,
            c = a.href;if (void 0 !== this.a[c]) {
          var d = this.a[c];d && d.__loaded && (a.import = d, this.g(a));
        } else this.b++, this.a[c] = "pending", y.load(c, function (a, d) {
          a = b.s(a, d || c);b.a[c] = a;b.b--;b.f(a);b.i();
        }, function () {
          b.a[c] = null;b.b--;b.i();
        });
      };k.prototype.s = function (a, b) {
        if (!a) return document.createDocumentFragment();x && (a = a.replace(v, function (a, b, c) {
          return -1 === a.indexOf("type=") ? b + " type=import-disable " + c : a;
        }));var c = document.createElement("template");
        c.innerHTML = a;if (c.content) a = c.content;else for (a = document.createDocumentFragment(); c.firstChild;) {
          a.appendChild(c.firstChild);
        }if (c = a.querySelector("base")) b = p.Ca(c.getAttribute("href"), b), c.removeAttribute("href");for (var c = a.querySelectorAll('link[rel=import], link[rel=stylesheet][href][type=import-disable],\n    style:not([type]), link[rel=stylesheet][href]:not([type]),\n    script:not([type]), script[type="application/javascript"],\n    script[type="text/javascript"]'), d = 0, e = 0, f = c.length, h; e < f && (h = c[e]); e++) {
          g(h), p.rb(h, b), h.setAttribute("import-dependency", ""), "script" === h.localName && !h.src && h.textContent && (h.setAttribute("src", "data:text/javascript;charset=utf-8," + encodeURIComponent(h.textContent + ("\n//# sourceURL=" + b + (d ? "-" + d : "") + ".js\n"))), h.textContent = "", d++);
        }return a;
      };k.prototype.i = function () {
        var a = this;if (!this.b) {
          this.c.disconnect();this.flatten(document);var b = !1,
              c = !1,
              d = function d() {
            c && b && (a.c.observe(document.head, { childList: !0, subtree: !0 }), a.j());
          };this.A(function () {
            c = !0;d();
          });this.u(function () {
            b = !0;d();
          });
        }
      };k.prototype.flatten = function (a) {
        a = a.querySelectorAll("link[rel=import]");for (var b = {}, c = 0, d = a.length; c < d && (b.n = a[c]); b = { n: b.n }, c++) {
          var e = this.a[b.n.href];(b.n.import = e) && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && (this.a[b.n.href] = b.n, b.n.readyState = "loading", b.n.import = b.n, Object.defineProperty(b.n, "baseURI", { get: function (a) {
              return function () {
                return a.n.href;
              };
            }(b), configurable: !0, enumerable: !0 }), this.flatten(e), b.n.appendChild(e));
        }
      };k.prototype.u = function (a) {
        function b(e) {
          if (e < d) {
            var f = c[e],
                h = document.createElement("script");f.removeAttribute("import-dependency");for (var k = 0, l = f.attributes.length; k < l; k++) {
              h.setAttribute(f.attributes[k].name, f.attributes[k].value);
            }n = h;f.parentNode.replaceChild(h, f);g(h, function () {
              n = null;b(e + 1);
            });
          } else a();
        }var c = document.querySelectorAll("script[import-dependency]"),
            d = c.length;b(0);
      };k.prototype.A = function (a) {
        var b = document.querySelectorAll("style[import-dependency],\n    link[rel=stylesheet][import-dependency]"),
            d = b.length;if (d) for (var e = x && !!document.querySelector("link[rel=stylesheet][href][type=import-disable]"), f = {}, h = 0, k = b.length; h < k && (f.w = b[h]); f = { w: f.w }, h++) {
          if (g(f.w, function (b) {
            return function () {
              b.w.removeAttribute("import-dependency");--d || a();
            };
          }(f)), e && f.w.parentNode !== document.head) {
            var l = document.createElement(f.w.localName);l.__appliedElement = f.w;l.setAttribute("type", "import-placeholder");f.w.parentNode.insertBefore(l, f.w.nextSibling);for (l = c(f.w); l && c(l);) {
              l = c(l);
            }l.parentNode !== document.head && (l = null);document.head.insertBefore(f.w, l);f.w.removeAttribute("type");
          }
        } else a();
      };k.prototype.j = function () {
        for (var a = document.querySelectorAll("link[rel=import]"), b = a.length - 1, c; 0 <= b && (c = a[b]); b--) {
          this.g(c);
        }
      };k.prototype.g = function (a) {
        a.__loaded || (a.__loaded = !0, a.import && (a.import.readyState = "complete"), a.dispatchEvent(b(a.import ? "load" : "error", { bubbles: !1, cancelable: !1, detail: void 0 })));
      };k.prototype.o = function (a) {
        for (var b = 0; b < a.length; b++) {
          var c = a[b];if (c.addedNodes) for (var d = 0; d < c.addedNodes.length; d++) {
            var e = c.addedNodes[d];e && e.nodeType === Node.ELEMENT_NODE && (h(e) ? this.h(e) : this.f(e));
          }
        }
      };if (m) {
        for (var w = document.querySelectorAll("link[rel=import]"), A = 0, B = w.length, z; A < B && (z = w[A]); A++) {
          z.import && "loading" === z.import.readyState || (z.__loaded = !0);
        }w = function w(a) {
          a = a.target;h(a) && (a.__loaded = !0);
        };document.addEventListener("load", w, !0);document.addEventListener("error", w, !0);
      } else new k();f(function () {
        return document.dispatchEvent(b("HTMLImportsLoaded", { cancelable: !0, bubbles: !0, detail: void 0 }));
      });a.useNative = m;a.whenReady = f;a.importForElement = c;
    })(window.HTMLImports = window.HTMLImports || {});(function () {
      window.WebComponents = window.WebComponents || { flags: {} };
      var a = document.querySelector('script[src*="webcomponents-lite.js"]'),
          b = /wc-(.+)/,
          c = {};if (!c.noOpts) {
        location.search.slice(1).split("&").forEach(function (a) {
          a = a.split("=");var d;a[0] && (d = a[0].match(b)) && (c[d[1]] = a[1] || !0);
        });if (a) for (var d = 0, e; e = a.attributes[d]; d++) {
          "src" !== e.name && (c[e.name] = e.value || !0);
        }c.log && c.log.split ? (a = c.log.split(","), c.log = {}, a.forEach(function (a) {
          c.log[a] = !0;
        })) : c.log = {};
      }window.WebComponents.flags = c;if (a = c.shadydom) window.ShadyDOM = window.ShadyDOM || {}, window.ShadyDOM.force = a;(a = c.register || c.ce) && window.customElements && (window.customElements.forcePolyfill = a);
    })();var z = window.ShadyDOM || {};z.tb = !(!Element.prototype.attachShadow || !Node.prototype.getRootNode);var bb = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild");z.Y = !!(bb && bb.configurable && bb.get);z.Oa = z.force || !z.tb;var aa = Element.prototype,
        yc = aa.matches || aa.matchesSelector || aa.mozMatchesSelector || aa.msMatchesSelector || aa.oMatchesSelector || aa.webkitMatchesSelector,
        Ha = document.createTextNode(""),
        Hb = 0,
        Ga = [];
    new MutationObserver(function () {
      for (; Ga.length;) {
        try {
          Ga.shift()();
        } catch (a) {
          throw Ha.textContent = Hb++, a;
        }
      }
    }).observe(Ha, { characterData: !0 });var ca = [],
        Ia;Ja.list = ca;la.prototype.Ab = function () {
      var a = this;this.a || (this.a = !0, Gb(function () {
        a.b();
      }));
    };la.prototype.b = function () {
      if (this.a) {
        this.a = !1;var a = this.takeRecords();a.length && this.ea.forEach(function (b) {
          b(a);
        });
      }
    };la.prototype.takeRecords = function () {
      if (this.addedNodes.length || this.removedNodes.length) {
        var a = [{ addedNodes: this.addedNodes, removedNodes: this.removedNodes }];
        this.addedNodes = [];this.removedNodes = [];return a;
      }return [];
    };var fc = Element.prototype.appendChild,
        Qa = Element.prototype.insertBefore,
        W = Element.prototype.removeChild,
        zc = Element.prototype.setAttribute,
        Ac = Element.prototype.removeAttribute,
        cb = Element.prototype.cloneNode,
        Ra = Document.prototype.importNode,
        Bc = Element.prototype.addEventListener,
        Cc = Element.prototype.removeEventListener,
        Fd = Object.freeze({ appendChild: fc, insertBefore: Qa, removeChild: W, setAttribute: zc, removeAttribute: Ac, cloneNode: cb, importNode: Ra,
      addEventListener: Bc, removeEventListener: Cc }),
        md = /[&\u00A0"]/g,
        pd = /[&\u00A0<>]/g,
        nd = Kb("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),
        od = Kb("style script xmp iframe noembed noframes plaintext noscript".split(" ")),
        D = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, !1),
        E = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, null, !1),
        Gd = Object.freeze({ parentNode: P, firstChild: Da, lastChild: Ea, previousSibling: Lb, nextSibling: Mb, childNodes: ba,
      parentElement: Nb, firstElementChild: Ob, lastElementChild: Pb, previousElementSibling: Qb, nextElementSibling: Rb, children: Sb, innerHTML: Tb, textContent: Ub }),
        db = Object.getOwnPropertyDescriptor(Element.prototype, "innerHTML") || Object.getOwnPropertyDescriptor(HTMLElement.prototype, "innerHTML"),
        qa = document.implementation.createHTMLDocument("inert").createElement("div"),
        eb = Object.getOwnPropertyDescriptor(Document.prototype, "activeElement"),
        Vb = { parentElement: { get: function get() {
          var a = this.__shady && this.__shady.parentElement;
          return void 0 !== a ? a : Nb(this);
        }, configurable: !0 }, parentNode: { get: function get() {
          var a = this.__shady && this.__shady.parentNode;return void 0 !== a ? a : P(this);
        }, configurable: !0 }, nextSibling: { get: function get() {
          var a = this.__shady && this.__shady.nextSibling;return void 0 !== a ? a : Mb(this);
        }, configurable: !0 }, previousSibling: { get: function get() {
          var a = this.__shady && this.__shady.previousSibling;return void 0 !== a ? a : Lb(this);
        }, configurable: !0 }, className: { get: function get() {
          return this.getAttribute("class") || "";
        }, set: function set(a) {
          this.setAttribute("class", a);
        }, configurable: !0 }, nextElementSibling: { get: function get() {
          if (this.__shady && void 0 !== this.__shady.nextSibling) {
            for (var a = this.nextSibling; a && a.nodeType !== Node.ELEMENT_NODE;) {
              a = a.nextSibling;
            }return a;
          }return Rb(this);
        }, configurable: !0 }, previousElementSibling: { get: function get() {
          if (this.__shady && void 0 !== this.__shady.previousSibling) {
            for (var a = this.previousSibling; a && a.nodeType !== Node.ELEMENT_NODE;) {
              a = a.previousSibling;
            }return a;
          }return Qb(this);
        }, configurable: !0 } },
        La = { childNodes: { get: function get() {
          if (this.__shady && void 0 !== this.__shady.firstChild) {
            if (!this.__shady.childNodes) {
              this.__shady.childNodes = [];for (var a = this.firstChild; a; a = a.nextSibling) {
                this.__shady.childNodes.push(a);
              }
            }return this.__shady.childNodes;
          }return ba(this);
        }, configurable: !0 }, firstChild: { get: function get() {
          var a = this.__shady && this.__shady.firstChild;return void 0 !== a ? a : Da(this);
        }, configurable: !0 }, lastChild: { get: function get() {
          var a = this.__shady && this.__shady.lastChild;return void 0 !== a ? a : Ea(this);
        }, configurable: !0 }, textContent: { get: function get() {
          if (this.__shady && void 0 !== this.__shady.firstChild) {
            for (var a = [], b = 0, c = this.childNodes, d; d = c[b]; b++) {
              d.nodeType !== Node.COMMENT_NODE && a.push(d.textContent);
            }return a.join("");
          }return Ub(this);
        }, set: function set(a) {
          if (this.nodeType !== Node.ELEMENT_NODE) this.nodeValue = a;else {
            for (; this.firstChild;) {
              this.removeChild(this.firstChild);
            }a && this.appendChild(document.createTextNode(a));
          }
        }, configurable: !0 }, firstElementChild: { get: function get() {
          if (this.__shady && void 0 !== this.__shady.firstChild) {
            for (var a = this.firstChild; a && a.nodeType !== Node.ELEMENT_NODE;) {
              a = a.nextSibling;
            }return a;
          }return Ob(this);
        }, configurable: !0 }, lastElementChild: { get: function get() {
          if (this.__shady && void 0 !== this.__shady.lastChild) {
            for (var a = this.lastChild; a && a.nodeType !== Node.ELEMENT_NODE;) {
              a = a.previousSibling;
            }return a;
          }return Pb(this);
        }, configurable: !0 }, children: { get: function get() {
          return this.__shady && void 0 !== this.__shady.firstChild ? Array.prototype.filter.call(this.childNodes, function (a) {
            return a.nodeType === Node.ELEMENT_NODE;
          }) : Sb(this);
        }, configurable: !0 }, innerHTML: { get: function get() {
          var a = "template" === this.localName ? this.content : this;return this.__shady && void 0 !== this.__shady.firstChild ? Ka(a) : Tb(a);
        }, set: function set(a) {
          for (var b = "template" === this.localName ? this.content : this; b.firstChild;) {
            b.removeChild(b.firstChild);
          }for (db && db.set ? db.set.call(qa, a) : qa.innerHTML = a; qa.firstChild;) {
            b.appendChild(qa.firstChild);
          }
        }, configurable: !0 } },
        Dc = { shadowRoot: { get: function get() {
          return this.__shady && this.__shady.root || null;
        }, set: function set(a) {
          this.__shady = this.__shady || {};this.__shady.root = a;
        }, configurable: !0 } },
        Ma = { activeElement: { get: function get() {
          var a;
          a = eb && eb.get ? eb.get.call(document) : z.Y ? void 0 : document.activeElement;if (a && a.nodeType) {
            var b = !!B(this);if (this === document || b && this.host !== a && this.host.contains(a)) {
              for (b = V(a); b && b !== this;) {
                a = b.host, b = V(a);
              }a = this === document ? b ? null : a : b === this ? a : null;
            } else a = null;
          } else a = null;return a;
        }, set: function set() {}, configurable: !0 } },
        Eb = z.Y ? function () {} : function (a) {
      a.__shady && a.__shady.eb || (a.__shady = a.__shady || {}, a.__shady.eb = !0, L(a, Vb, !0));
    },
        Db = z.Y ? function () {} : function (a) {
      a.__shady && a.__shady.bb || (a.__shady = a.__shady || {}, a.__shady.bb = !0, L(a, La, !0), L(a, Dc, !0));
    },
        ra = null,
        Hd = { focusin: !0, focusout: !0, click: !0, dblclick: !0, mousedown: !0, mouseenter: !0, mouseleave: !0, mousemove: !0, mouseout: !0, mouseover: !0, mouseup: !0, wheel: !0, beforeinput: !0, input: !0, keydown: !0, keyup: !0, compositionstart: !0, compositionupdate: !0, compositionend: !0, touchstart: !0, touchend: !0, touchmove: !0, touchcancel: !0, pointerover: !0, pointerenter: !0, pointerdown: !0, pointermove: !0, pointerup: !0, pointercancel: !0, pointerout: !0, pointerleave: !0, gotpointercapture: !0, lostpointercapture: !0,
      dragstart: !0, drag: !0, dragenter: !0, dragleave: !0, dragover: !0, drop: !0, dragend: !0, DOMActivate: !0, DOMFocusIn: !0, DOMFocusOut: !0, keypress: !0 },
        lc = { get composed() {
        !1 !== this.isTrusted && void 0 === this.oa && (this.oa = Hd[this.type]);return this.oa || !1;
      }, composedPath: function composedPath() {
        this.Ga || (this.Ga = Sa(this.__target, this.composed));return this.Ga;
      }, get target() {
        return hc(this.currentTarget, this.composedPath());
      }, get relatedTarget() {
        if (!this.Ha) return null;this.Ia || (this.Ia = Sa(this.Ha, !0));return hc(this.currentTarget, this.Ia);
      },
      stopPropagation: function stopPropagation() {
        Event.prototype.stopPropagation.call(this);this.pa = !0;
      }, stopImmediatePropagation: function stopImmediatePropagation() {
        Event.prototype.stopImmediatePropagation.call(this);this.pa = this.ab = !0;
      } },
        Ua = { focus: !0, blur: !0 },
        Id = Ta(window.Event),
        Jd = Ta(window.CustomEvent),
        Kd = Ta(window.MouseEvent),
        Ld = "function" === typeof Event ? Event : function (a, b) {
      b = b || {};var c = document.createEvent("Event");c.initEvent(a, !!b.bubbles, !!b.cancelable);return c;
    };x.prototype.sb = function () {
      return this.root.querySelectorAll("slot");
    };x.prototype.za = function (a) {
      return a.localName && "slot" == a.localName;
    };x.prototype.wa = function () {
      return this.root.ya() ? this.g(this.c()) : [];
    };x.prototype.c = function () {
      for (var a = [], b = 0, c = this.root.host.firstChild; c; c = c.nextSibling) {
        a[b++] = c;
      }return a;
    };x.prototype.g = function (a) {
      for (var b = [], c = this.root.sa(), d = 0, e = c.length, f; d < e && (f = c[d]); d++) {
        this.f(f, a);var g = f.parentNode;(g = g && g.__shady && g.__shady.root) && g.ya() && b.push(g);
      }for (c = 0; c < a.length; c++) {
        if (d = a[c]) d.__shady = d.__shady || {}, d.__shady.assignedSlot = void 0, (e = P(d)) && W.call(e, d);
      }return b;
    };x.prototype.f = function (a, b) {
      var c = a.__shady.assignedNodes;c && this.Ka(a, !0);a.__shady.assignedNodes = [];for (var d = !1, e = !1, f = 0, g = b.length, h; f < g; f++) {
        (h = b[f]) && this.h(h, a) && (h.__shady.ta != a && (d = !0), this.b(h, a), b[f] = void 0, e = !0);
      }if (!e) for (b = a.childNodes, e = 0; e < b.length; e++) {
        h = b[e], h.__shady.ta != a && (d = !0), this.b(h, a);
      }if (c) {
        for (h = 0; h < c.length; h++) {
          c[h].__shady.ta = null;
        }a.__shady.assignedNodes.length < c.length && (d = !0);
      }this.i(a);d && this.a(a);
    };x.prototype.Ka = function (a, b) {
      var c = a.__shady.assignedNodes;
      if (c) for (var d = 0; d < c.length; d++) {
        var e = c[d];b && (e.__shady.ta = e.__shady.assignedSlot);e.__shady.assignedSlot === a && (e.__shady.assignedSlot = null);
      }
    };x.prototype.h = function (a, b) {
      b = (b = b.getAttribute("name")) ? b.trim() : "";a = (a = a.getAttribute && a.getAttribute("slot")) ? a.trim() : "";return a == b;
    };x.prototype.b = function (a, b) {
      b.__shady.assignedNodes.push(a);a.__shady.assignedSlot = b;
    };x.prototype.i = function (a) {
      var b = a.__shady.assignedNodes;a.__shady.R = [];for (var c = 0, d; c < b.length && (d = b[c]); c++) {
        if (this.za(d)) {
          var e = d.__shady.R;if (e) for (var f = 0; f < e.length; f++) {
            a.__shady.R.push(e[f]);
          }
        } else a.__shady.R.push(b[c]);
      }
    };x.prototype.a = function (a) {
      a.dispatchEvent(new Ld("slotchange"));a.__shady.assignedSlot && this.a(a.__shady.assignedSlot);
    };x.prototype.ga = function (a) {
      return !a.__shady.assignedSlot;
    };var Cb = {};t.prototype = Object.create(DocumentFragment.prototype);t.prototype.i = function (a) {
      this.cb = "ShadyRoot";U(a);U(this);a.shadowRoot = this;this.host = a;this.ra = this.O = !1;this.D = new x(this);this.update();
    };t.prototype.update = function () {
      var a = this;this.O || (this.O = !0, Ib(function () {
        return a.Sa();
      }));
    };t.prototype.h = function () {
      for (var a = this, b = this; b;) {
        b.O && (a = b), b = b.mb();
      }return a;
    };t.prototype.mb = function () {
      var a = this.host.getRootNode();if (B(a)) for (var b = this.host.childNodes, c = 0, d; c < b.length; c++) {
        if (d = b[c], this.D.za(d)) return a;
      }
    };t.prototype.Sa = function () {
      this.O && this.h()._render();
    };t.prototype._render = function () {
      this.ra = this.O = !1;this.ca || this.f();this.ca = !1;this.wa();this.j();
    };t.prototype.wa = function () {
      for (var a = this.D.wa(), b = 0; b < a.length; b++) {
        a[b]._render();
      }
    };
    t.prototype.f = function () {
      var a = this.a;if (a) for (var b = 0, c; b < a.length; b++) {
        c = a[b], c.getRootNode() !== this && this.D.Ka(c);
      }a = this.a = this.D.sb();for (b = 0; b < a.length; b++) {
        c = a[b], c.__shady = c.__shady || {}, U(c), U(c.parentNode);
      }
    };t.prototype.j = function () {
      this.g();
    };t.prototype.g = function () {
      this.c(this.host, this.b(this.host));for (var a = this.sa(), b = 0, c = a.length, d, e; b < c && (d = a[b]); b++) {
        e = d.parentNode, e !== this.host && e !== this && this.c(e, this.b(e));
      }
    };t.prototype.b = function (a) {
      var b = [];a = (a.__shady && a.__shady.root || a).childNodes;
      for (var c = 0; c < a.length; c++) {
        var d = a[c];if (this.D.za(d)) for (var e = d.__shady.R || (d.__shady.R = []), f = 0; f < e.length; f++) {
          var g = e[f];this.ga(d, g) && b.push(g);
        } else b.push(d);
      }return b;
    };t.prototype.ga = function (a, b) {
      return this.D.ga(a, b);
    };t.prototype.c = function (a, b) {
      for (var c = ba(a), d = sd(b, b.length, c, c.length), e = 0, f = 0, g; e < d.length && (g = d[e]); e++) {
        for (var h = 0, k; h < g.$.length && (k = g.$[h]); h++) {
          P(k) === a && W.call(a, k), c.splice(g.index + f, 1);
        }f -= g.da;
      }for (e = 0; e < d.length && (g = d[e]); e++) {
        for (f = c[g.index], h = g.index; h < g.index + g.da; h++) {
          k = b[h], Qa.call(a, k, f), c.splice(h, 0, k);
        }
      }
    };t.prototype.ya = function () {
      return !(!this.a || !this.a.length);
    };t.prototype.sa = function () {
      this.a || this.f();return this.a;
    };(function (a) {
      L(a, La, !0);L(a, Ma, !0);
    })(t.prototype);var Md = { addEventListener: function addEventListener(a, b, c) {
        if (b) {
          var d, e, f;"object" === (typeof c === "undefined" ? "undefined" : _typeof(c)) ? (d = !!c.capture, e = !!c.once, f = !!c.passive) : (d = !!c, f = e = !1);if (b.B) for (var g = 0; g < b.B.length; g++) {
            if (jc(b.B[g], this, a, d, e, f)) return;
          } else b.B = [];g = function g(d) {
            e && this.removeEventListener(a, b, c);d.__target || kc(d);if (d.composed || -1 < d.composedPath().indexOf(this)) if (d.eventPhase === Event.BUBBLING_PHASE && d.target === d.relatedTarget) d.stopImmediatePropagation();else return b.call(this, d);
          };b.B.push({ node: this, type: a, capture: d, once: e, passive: f, Db: g });Ua[a] ? (this.C = this.C || {}, this.C[a] = this.C[a] || { capture: [], bubble: [] }, this.C[a][d ? "capture" : "bubble"].push(g)) : Bc.call(this, a, g, c);
        }
      }, removeEventListener: function removeEventListener(a, b, c) {
        if (b) {
          var d, e, f;"object" === (typeof c === "undefined" ? "undefined" : _typeof(c)) ? (d = !!c.capture, e = !!c.once, f = !!c.passive) : (d = !!c, f = e = !1);var g = void 0;if (b.B) for (var h = 0; h < b.B.length; h++) {
            if (jc(b.B[h], this, a, d, e, f)) {
              g = b.B.splice(h, 1)[0].Db;b.B.length || (b.B = void 0);break;
            }
          }Cc.call(this, a, g || b, c);g && Ua[a] && this.C && this.C[a] && (a = this.C[a][d ? "capture" : "bubble"], g = a.indexOf(g), -1 < g && a.splice(g, 1));
        }
      }, appendChild: function appendChild(a) {
        return ec(this, a);
      }, insertBefore: function insertBefore(a, b) {
        return ec(this, a, b);
      }, removeChild: function removeChild(a) {
        if (a.parentNode !== this) throw Error("The node to be removed is not a child of this node: " + a);if (!Xb(a)) {
          var b = B(this) ? this.host : this,
              c = P(a);b === c && W.call(b, a);
        }Oa(this, null, a);return a;
      }, replaceChild: function replaceChild(a, b) {
        this.insertBefore(a, b);this.removeChild(b);return a;
      }, cloneNode: function cloneNode(a) {
        var b;if ("template" == this.localName) b = cb.call(this, a);else if (b = cb.call(this, !1), a) {
          a = this.childNodes;for (var c = 0, d; c < a.length; c++) {
            d = a[c].cloneNode(!0), b.appendChild(d);
          }
        }return b;
      }, getRootNode: function getRootNode() {
        return Pa(this);
      }, get isConnected() {
        var a = this.ownerDocument;if (a && a.contains && a.contains(this) || (a = a.documentElement) && a.contains && a.contains(this)) return !0;for (a = this; a && !(a instanceof Document);) {
          a = a.parentNode || (a instanceof t ? a.host : void 0);
        }return !!(a && a instanceof Document);
      } },
        Nd = { get assignedSlot() {
        return mc(this);
      } },
        fb = { querySelector: function querySelector(a) {
        return bc(this, function (b) {
          return yc.call(b, a);
        }, function (a) {
          return !!a;
        })[0] || null;
      }, querySelectorAll: function querySelectorAll(a) {
        return bc(this, function (b) {
          return yc.call(b, a);
        });
      } },
        Ec = { assignedNodes: function assignedNodes(a) {
        if ("slot" === this.localName) return dc(this), this.__shady ? (a && a.flatten ? this.__shady.R : this.__shady.assignedNodes) || [] : [];
      } },
        Fc = Fb({ setAttribute: function setAttribute(a, b) {
        ra || (ra = window.ShadyCSS && window.ShadyCSS.ScopingShim);ra && "class" === a ? ra.setElementClass(this, b) : (zc.call(this, a, b), ac(this, a));
      }, removeAttribute: function removeAttribute(a) {
        Ac.call(this, a);ac(this, a);
      }, attachShadow: function attachShadow(a) {
        if (!this) throw "Must provide a host.";if (!a) throw "Not enough arguments.";return new t(Cb, this);
      }, get slot() {
        return this.getAttribute("slot");
      }, set slot(a) {
        this.setAttribute("slot", a);
      }, get assignedSlot() {
        return mc(this);
      } }, fb, Ec);Object.defineProperties(Fc, Dc);var Gc = Fb({ importNode: function importNode(a, b) {
        return gc(a, b);
      } }, fb);Object.defineProperties(Gc, { _activeElement: Ma.activeElement });z.Oa && (window.ShadyDOM = { inUse: z.Oa, patch: function patch(a) {
        return a;
      }, isShadyRoot: B, enqueue: Ib, flush: Ja, settings: z, filterMutations: ld, observeChildren: jd, unobserveChildren: id, nativeMethods: Fd, nativeTree: Gd }, window.Event = Id, window.CustomEvent = Jd, window.MouseEvent = Kd, rd(), X(window.Node.prototype, Md), X(window.Text.prototype, Nd), X(window.DocumentFragment.prototype, fb), X(window.Element.prototype, Fc), X(window.Document.prototype, Gc), window.HTMLSlotElement && X(window.HTMLSlotElement.prototype, Ec), z.Y && (Q(window.Node.prototype), Q(window.Text.prototype), Q(window.DocumentFragment.prototype), Q(window.Element.prototype), Q((window.customElements && window.customElements.nativeHTMLElement || HTMLElement).prototype), Q(window.Document.prototype), window.HTMLSlotElement && Q(window.HTMLSlotElement.prototype)), window.ShadowRoot = t);var ud = new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));
    A.prototype.M = function (a, b) {
      this.s.set(a, b);this.o.set(b.constructor, b);
    };A.prototype.f = function (a) {
      return this.s.get(a);
    };A.prototype.L = function (a) {
      return this.o.get(a);
    };A.prototype.u = function (a) {
      this.h = !0;this.i.push(a);
    };A.prototype.j = function (a) {
      var b = this;this.h && O(a, function (a) {
        return b.g(a);
      });
    };A.prototype.g = function (a) {
      if (this.h && !a.__CE_patched) {
        a.__CE_patched = !0;for (var b = 0; b < this.i.length; b++) {
          this.i[b](a);
        }
      }
    };A.prototype.b = function (a) {
      var b = [];O(a, function (a) {
        return b.push(a);
      });for (a = 0; a < b.length; a++) {
        var c = b[a];1 === c.__CE_state ? this.connectedCallback(c) : this.A(c);
      }
    };A.prototype.a = function (a) {
      var b = [];O(a, function (a) {
        return b.push(a);
      });for (a = 0; a < b.length; a++) {
        var c = b[a];1 === c.__CE_state && this.disconnectedCallback(c);
      }
    };A.prototype.c = function (a, b) {
      b = b ? b : new Set();var c = this,
          d = [];O(a, function (a) {
        if ("link" === a.localName && "import" === a.getAttribute("rel")) {
          var e = a.import;e instanceof Node && "complete" === e.readyState ? (e.__CE_isImportDocument = !0, e.__CE_hasRegistry = !0) : a.addEventListener("load", function () {
            var d = a.import;d.__CE_documentLoadHandled || (d.__CE_documentLoadHandled = !0, d.__CE_isImportDocument = !0, d.__CE_hasRegistry = !0, new Set(b), b.delete(d), c.c(d, b));
          });
        } else d.push(a);
      }, b);if (this.h) for (a = 0; a < d.length; a++) {
        this.g(d[a]);
      }for (a = 0; a < d.length; a++) {
        this.A(d[a]);
      }
    };A.prototype.A = function (a) {
      if (void 0 === a.__CE_state) {
        var b = this.f(a.localName);if (b) {
          b.constructionStack.push(a);var c = b.constructor;try {
            try {
              if (new c() !== a) throw Error("The custom element constructor did not produce the element being upgraded.");
            } finally {
              b.constructionStack.pop();
            }
          } catch (f) {
            throw a.__CE_state = 2, f;
          }a.__CE_state = 1;a.__CE_definition = b;if (b.attributeChangedCallback) for (b = b.observedAttributes, c = 0; c < b.length; c++) {
            var d = b[c],
                e = a.getAttribute(d);null !== e && this.attributeChangedCallback(a, d, null, e, null);
          }m(a) && this.connectedCallback(a);
        }
      }
    };A.prototype.connectedCallback = function (a) {
      var b = a.__CE_definition;b.connectedCallback && b.connectedCallback.call(a);
    };A.prototype.disconnectedCallback = function (a) {
      var b = a.__CE_definition;b.disconnectedCallback && b.disconnectedCallback.call(a);
    };A.prototype.attributeChangedCallback = function (a, b, c, d, e) {
      var f = a.__CE_definition;f.attributeChangedCallback && -1 < f.observedAttributes.indexOf(b) && f.attributeChangedCallback.call(a, b, c, d, e);
    };Ca.prototype.c = function () {
      this.N && this.N.disconnect();
    };Ca.prototype.f = function (a) {
      var b = this.a.readyState;"interactive" !== b && "complete" !== b || this.c();for (b = 0; b < a.length; b++) {
        for (var c = a[b].addedNodes, d = 0; d < c.length; d++) {
          this.b.c(c[d]);
        }
      }
    };Bb.prototype.resolve = function (a) {
      if (this.a) throw Error("Already resolved.");this.a = a;this.b && this.b(a);
    };r.prototype.i = function (a, b) {
      var c = this;if (!(b instanceof Function)) throw new TypeError("Custom element constructors must be functions.");if (!nc(a)) throw new SyntaxError("The element name '" + a + "' is not valid.");if (this.a.f(a)) throw Error("A custom element with name '" + a + "' has already been defined.");if (this.f) throw Error("A custom element is already being defined.");this.f = !0;var d, e, f, g, h;try {
        var k = function k(a) {
          var b = m[a];if (void 0 !== b && !(b instanceof Function)) throw Error("The '" + a + "' callback must be a function.");
          return b;
        },
            m = b.prototype;if (!(m instanceof Object)) throw new TypeError("The custom element constructor's prototype is not an object.");d = k("connectedCallback");e = k("disconnectedCallback");f = k("adoptedCallback");g = k("attributeChangedCallback");h = b.observedAttributes || [];
      } catch (q) {
        return;
      } finally {
        this.f = !1;
      }this.a.M(a, { localName: a, constructor: b, connectedCallback: d, disconnectedCallback: e, adoptedCallback: f, attributeChangedCallback: g, observedAttributes: h, constructionStack: [] });this.c.push(a);this.b || (this.b = !0, this.g(function () {
        return c.o();
      }));
    };r.prototype.o = function () {
      if (!1 !== this.b) for (this.b = !1, this.a.c(document); 0 < this.c.length;) {
        var a = this.c.shift();(a = this.h.get(a)) && a.resolve(void 0);
      }
    };r.prototype.get = function (a) {
      if (a = this.a.f(a)) return a.constructor;
    };r.prototype.u = function (a) {
      if (!nc(a)) return Promise.reject(new SyntaxError("'" + a + "' is not a valid custom element name."));var b = this.h.get(a);if (b) return b.c;b = new Bb();this.h.set(a, b);this.a.f(a) && -1 === this.c.indexOf(a) && b.resolve(void 0);return b.c;
    };
    r.prototype.s = function (a) {
      this.j.c();var b = this.g;this.g = function (c) {
        return a(function () {
          return b(c);
        });
      };
    };window.CustomElementRegistry = r;r.prototype.define = r.prototype.i;r.prototype.get = r.prototype.get;r.prototype.whenDefined = r.prototype.u;r.prototype.polyfillWrapFlushCallback = r.prototype.s;var ya = window.Document.prototype.createElement,
        dd = window.Document.prototype.createElementNS,
        cd = window.Document.prototype.importNode,
        ed = window.Document.prototype.prepend,
        fd = window.Document.prototype.append,
        qb = window.Node.prototype.cloneNode,
        ja = window.Node.prototype.appendChild,
        yb = window.Node.prototype.insertBefore,
        za = window.Node.prototype.removeChild,
        zb = window.Node.prototype.replaceChild,
        Ba = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"),
        pb = window.Element.prototype.attachShadow,
        wa = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"),
        Aa = window.Element.prototype.getAttribute,
        rb = window.Element.prototype.setAttribute,
        tb = window.Element.prototype.removeAttribute,
        ka = window.Element.prototype.getAttributeNS,
        sb = window.Element.prototype.setAttributeNS,
        ub = window.Element.prototype.removeAttributeNS,
        wb = window.Element.prototype.insertAdjacentElement,
        Uc = window.Element.prototype.prepend,
        Vc = window.Element.prototype.append,
        Xc = window.Element.prototype.before,
        Yc = window.Element.prototype.after,
        Zc = window.Element.prototype.replaceWith,
        $c = window.Element.prototype.remove,
        hd = window.HTMLElement,
        xa = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"),
        vb = window.HTMLElement.prototype.insertAdjacentElement,
        Ab = new function () {}(),
        sa = window.customElements;if (!sa || sa.forcePolyfill || "function" != typeof sa.define || "function" != typeof sa.get) {
      var ga = new A();gd(ga);bd(ga);ad(ga);Tc(ga);document.__CE_hasRegistry = !0;var Od = new r(ga);Object.defineProperty(window, "customElements", { configurable: !0, enumerable: !0, value: Od });
    }var G = { STYLE_RULE: 1, na: 7, MEDIA_RULE: 4, Da: 1E3 },
        M = { qb: /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim, port: /@import[^;]*;/gim, La: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim, Pa: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
      xb: /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim, Cb: /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim, wb: /^@[^\s]*keyframes/, Qa: /\s+/g },
        u = !(window.ShadyDOM && window.ShadyDOM.inUse),
        C = !navigator.userAgent.match("AppleWebKit/601") && window.CSS && CSS.supports && CSS.supports("box-shadow", "0 0 0 var(--foo)");window.ShadyCSS ? qc(window.ShadyCSS) : window.WebComponents && qc(window.WebComponents.flags);var Hc = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:([^;{]*)|{([^}]*)})(?:(?=[;\s}])|$)/gi,
        Ic = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,
        Pd = /(--[\w-]+)\s*([:,;)]|$)/gi,
        Qd = /(animation\s*:)|(animation-name\s*:)/,
        wd = /@media[^(]*(\([^)]*\))/,
        Rd = /\{[^}]*\}/g,
        S = null;v.prototype.g = function (a, b, c) {
      a.__styleScoped ? a.__styleScoped = null : this.i(a, b || "", c);
    };v.prototype.i = function (a, b, c) {
      a.nodeType === Node.ELEMENT_NODE && this.A(a, b, c);if (a = "template" === a.localName ? (a.content || a.Gb).childNodes : a.children || a.childNodes) for (var d = 0; d < a.length; d++) {
        this.i(a[d], b, c);
      }
    };v.prototype.A = function (a, b, c) {
      if (b) if (a.classList) c ? (a.classList.remove("style-scope"), a.classList.remove(b)) : (a.classList.add("style-scope"), a.classList.add(b));else if (a.getAttribute) {
        var d = a.getAttribute(Sd);c ? d && (b = d.replace("style-scope", "").replace(b, ""), oa(a, b)) : oa(a, (d ? d + " " : "") + "style-scope " + b);
      }
    };v.prototype.b = function (a, b, c) {
      var d = a.__cssBuild;u || "shady" === d ? b = Y(b, c) : (a = T(a), b = this.U(b, a.is, a.aa, c) + "\n\n");return b.trim();
    };v.prototype.U = function (a, b, c, d) {
      var e = this.c(b, c);b = this.h(b);var f = this;return Y(a, function (a) {
        a.c || (f.W(a, b, e), a.c = !0);d && d(a, b, e);
      });
    };v.prototype.h = function (a) {
      return a ? Td + a : "";
    };v.prototype.c = function (a, b) {
      return b ? "[is=" + a + "]" : a;
    };v.prototype.W = function (a, b, c) {
      this.j(a, this.f, b, c);
    };v.prototype.j = function (a, b, c, d) {
      a.selector = a.F = this.o(a, b, c, d);
    };v.prototype.o = function (a, b, c, d) {
      var e = a.selector.split(Jc);if (!rc(a)) {
        a = 0;for (var f = e.length, g; a < f && (g = e[a]); a++) {
          e[a] = b.call(this, g, c, d);
        }
      }return e.join(Jc);
    };v.prototype.f = function (a, b, c) {
      var d = this,
          e = !1;a = a.trim();a = a.replace(Ud, function (a, b, c) {
        return ":" + b + "(" + c.replace(/\s/g, "") + ")";
      });a = a.replace(Vd, gb + " $1");return a = a.replace(Wd, function (a, g, h) {
        e || (a = d.L(h, g, b, c), e = e || a.stop, g = a.pb, h = a.value);return g + h;
      });
    };v.prototype.L = function (a, b, c, d) {
      var e = a.indexOf(hb);0 <= a.indexOf(gb) ? a = this.T(a, d) : 0 !== e && (a = c ? this.s(a, c) : a);c = !1;0 <= e && (b = "", c = !0);var f;c && (f = !0, c && (a = a.replace(Xd, function (a, b) {
        return " > " + b;
      })));a = a.replace(Yd, function (a, b, c) {
        return '[dir="' + c + '"] ' + b + ", " + b + '[dir="' + c + '"]';
      });return { value: a, pb: b, stop: f };
    };v.prototype.s = function (a, b) {
      a = a.split(Kc);a[0] += b;return a.join(Kc);
    };v.prototype.T = function (a, b) {
      var c = a.match(Lc);return (c = c && c[2].trim() || "") ? c[0].match(Mc) ? a.replace(Lc, function (a, c, f) {
        return b + f;
      }) : c.split(Mc)[0] === b ? c : Zd : a.replace(gb, b);
    };v.prototype.V = function (a) {
      a.selector = a.parsedSelector;this.u(a);this.j(a, this.M);
    };v.prototype.u = function (a) {
      a.selector === $d && (a.selector = "html");
    };v.prototype.M = function (a) {
      return a.match(hb) ? this.f(a, Nc) : this.s(a.trim(), Nc);
    };mb.Object.defineProperties(v.prototype, { a: { configurable: !0, enumerable: !0, get: function get() {
          return "style-scope";
        } } });var Ud = /:(nth[-\w]+)\(([^)]+)\)/,
        Nc = ":not(.style-scope)",
        Jc = ",",
        Wd = /(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=\[])+)/g,
        Mc = /[[.:#*]/,
        gb = ":host",
        $d = ":root",
        hb = "::slotted",
        Vd = new RegExp("^(" + hb + ")"),
        Lc = /(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
        Xd = /(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
        Yd = /(.*):dir\((?:(ltr|rtl))\)/,
        Td = ".",
        Kc = ":",
        Sd = "class",
        Zd = "should_not_match",
        y = new v();p.get = function (a) {
      return a ? a.__styleInfo : null;
    };p.set = function (a, b) {
      return a.__styleInfo = b;
    };p.prototype.c = function () {
      return this.I;
    };p.prototype._getStyleRules = p.prototype.c;
    var Oc = function (a) {
      return a.matches || a.matchesSelector || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector || a.webkitMatchesSelector;
    }(window.Element.prototype),
        ae = navigator.userAgent.match("Trident");n.prototype.W = function (a) {
      var b = this,
          c = {},
          d = [],
          e = 0;Z(a, function (a) {
        b.c(a);a.index = e++;b.V(a.v.cssText, c);
      }, function (a) {
        d.push(a);
      });a.b = d;a = [];for (var f in c) {
        a.push(f);
      }return a;
    };n.prototype.c = function (a) {
      if (!a.v) {
        var b = {},
            c = {};this.b(a, c) && (b.H = c, a.rules = null);b.cssText = this.U(a);a.v = b;
      }
    };n.prototype.b = function (a, b) {
      var c = a.v;if (c) {
        if (c.H) return Object.assign(b, c.H), !0;
      } else {
        for (var c = a.parsedCssText, d; a = Hc.exec(c);) {
          d = (a[2] || a[3]).trim();if ("inherit" !== d || "unset" !== d) b[a[1].trim()] = d;d = !0;
        }return d;
      }
    };n.prototype.U = function (a) {
      return this.T(a.parsedCssText);
    };n.prototype.T = function (a) {
      return a.replace(Rd, "").replace(Hc, "");
    };n.prototype.V = function (a, b) {
      for (var c; c = Pd.exec(a);) {
        var d = c[1];":" !== c[2] && (b[d] = !0);
      }
    };n.prototype.ka = function (a) {
      for (var b = Object.getOwnPropertyNames(a), c = 0, d; c < b.length; c++) {
        d = b[c], a[d] = this.a(a[d], a);
      }
    };n.prototype.a = function (a, b) {
      if (a) if (0 <= a.indexOf(";")) a = this.f(a, b);else {
        var c = this;a = tc(a, function (a, e, f, g) {
          if (!e) return a + g;(e = c.a(b[e], b)) && "initial" !== e ? "apply-shim-inherit" === e && (e = "inherit") : e = c.a(b[f] || f, b) || f;return a + (e || "") + g;
        });
      }return a && a.trim() || "";
    };n.prototype.f = function (a, b) {
      a = a.split(";");for (var c = 0, d, e; c < a.length; c++) {
        if (d = a[c]) {
          Ic.lastIndex = 0;if (e = Ic.exec(d)) d = this.a(b[e[1]], b);else if (e = d.indexOf(":"), -1 !== e) {
            var f = d.substring(e),
                f = f.trim(),
                f = this.a(f, b) || f;d = d.substring(0, e) + f;
          }a[c] = d && d.lastIndexOf(";") === d.length - 1 ? d.slice(0, -1) : d || "";
        }
      }return a.join(";");
    };n.prototype.M = function (a, b) {
      var c = "";a.v || this.c(a);a.v.cssText && (c = this.f(a.v.cssText, b));a.cssText = c;
    };n.prototype.L = function (a, b) {
      var c = a.cssText,
          d = a.cssText;null == a.Na && (a.Na = Qd.test(c));if (a.Na) if (null == a.ha) {
        a.ha = [];for (var e in b) {
          d = b[e], d = d(c), c !== d && (c = d, a.ha.push(e));
        }
      } else {
        for (e = 0; e < a.ha.length; ++e) {
          d = b[a.ha[e]], c = d(c);
        }d = c;
      }a.cssText = d;
    };n.prototype.ja = function (a, b) {
      var c = {},
          d = this,
          e = [];Z(a, function (a) {
        a.v || d.c(a);var f = a.F || a.parsedSelector;b && a.v.H && f && Oc.call(b, f) && (d.b(a, c), a = a.index, f = parseInt(a / 32, 10), e[f] = (e[f] || 0) | 1 << a % 32);
      }, null, !0);return { H: c, key: e };
    };n.prototype.ma = function (a, b, c, d) {
      b.v || this.c(b);if (b.v.H) {
        var e = T(a);a = e.is;var e = e.aa,
            e = a ? y.c(a, e) : "html",
            f = b.parsedSelector,
            g = ":host > *" === f || "html" === f,
            h = 0 === f.indexOf(":host") && !g;"shady" === c && (g = f === e + " > *." + e || -1 !== f.indexOf("html"), h = !g && 0 === f.indexOf(e));"shadow" === c && (g = ":host > *" === f || "html" === f, h = h && !g);if (g || h) c = e, h && (u && !b.F && (b.F = y.o(b, y.f, y.h(a), e)), c = b.F || e), d({ Bb: c, vb: h, Kb: g });
      }
    };n.prototype.ia = function (a, b) {
      var c = {},
          d = {},
          e = this,
          f = b && b.__cssBuild;Z(b, function (b) {
        e.ma(a, b, f, function (f) {
          Oc.call(a.Hb || a, f.Bb) && (f.vb ? e.b(b, c) : e.b(b, d));
        });
      }, null, !0);return { zb: d, ub: c };
    };n.prototype.la = function (a, b, c) {
      var d = this,
          e = T(a),
          f = y.c(e.is, e.aa),
          g = new RegExp("(?:^|[^.#[:])" + (a.extends ? "\\" + f.slice(0, -1) + "\\]" : f) + "($|[.:[\\s>+~])"),
          e = p.get(a).I,
          h = this.h(e, c);return y.b(a, e, function (a) {
        d.M(a, b);u || rc(a) || !a.cssText || (d.L(a, h), d.o(a, g, f, c));
      });
    };n.prototype.h = function (a, b) {
      a = a.b;var c = {};if (!u && a) for (var d = 0, e = a[d]; d < a.length; e = a[++d]) {
        this.j(e, b), c[e.keyframesName] = this.i(e);
      }return c;
    };n.prototype.i = function (a) {
      return function (b) {
        return b.replace(a.f, a.a);
      };
    };n.prototype.j = function (a, b) {
      a.f = new RegExp(a.keyframesName, "g");a.a = a.keyframesName + "-" + b;a.F = a.F || a.selector;a.selector = a.F.replace(a.keyframesName, a.a);
    };n.prototype.o = function (a, b, c, d) {
      a.F = a.F || a.selector;d = "." + d;for (var e = a.F.split(","), f = 0, g = e.length, h; f < g && (h = e[f]); f++) {
        e[f] = h.match(b) ? h.replace(c, d) : d + " " + h;
      }a.selector = e.join(",");
    };n.prototype.u = function (a, b, c) {
      var d = a.getAttribute("class") || "",
          e = d;c && (e = d.replace(new RegExp("\\s*x-scope\\s*" + c + "\\s*", "g"), " "));e += (e ? " " : "") + "x-scope " + b;d !== e && oa(a, e);
    };n.prototype.A = function (a, b, c, d) {
      b = d ? d.textContent || "" : this.la(a, b, c);var e = p.get(a),
          f = e.a;f && !u && f !== d && (f._useCount--, 0 >= f._useCount && f.parentNode && f.parentNode.removeChild(f));u ? e.a ? (e.a.textContent = b, d = e.a) : b && (d = Xa(b, c, a.shadowRoot, e.b)) : d ? d.parentNode || sc(d, null, e.b) : b && (d = Xa(b, c, null, e.b));d && (d._useCount = d._useCount || 0, e.a != d && d._useCount++, e.a = d);ae && (d.textContent = d.textContent);return d;
    };n.prototype.s = function (a, b) {
      var c = na(a),
          d = this;a.textContent = Y(c, function (a) {
        var c = a.cssText = a.parsedCssText;a.v && a.v.cssText && (c = c.replace(M.La, "").replace(M.Pa, ""), a.cssText = d.f(c, b));
      });
    };mb.Object.defineProperties(n.prototype, { g: { configurable: !0, enumerable: !0, get: function get() {
          return "x-scope";
        } } });var H = new n(),
        ib = {},
        ta = window.customElements;if (ta && !u) {
      var be = ta.define;
      ta.define = function (a, b, c) {
        var d = document.createComment(" Shady DOM styles for " + a + " "),
            e = document.head;e.insertBefore(d, (S ? S.nextSibling : null) || e.firstChild);S = d;ib[a] = d;return be.call(ta, a, b, c);
      };
    }ia.prototype.b = function (a, b, c) {
      for (var d = 0; d < c.length; d++) {
        var e = c[d];if (a.H[e] !== b[e]) return !1;
      }return !0;
    };ia.prototype.c = function (a, b, c, d) {
      var e = this.cache[a] || [];e.push({ H: b, styleElement: c, G: d });e.length > this.f && e.shift();this.cache[a] = e;
    };ia.prototype.a = function (a, b, c) {
      if (a = this.cache[a]) for (var d = a.length - 1; 0 <= d; d--) {
        var e = a[d];if (this.b(e, b, c)) return e;
      }
    };if (!u) {
      var Pc = function Pc(a) {
        for (var b = 0; b < a.length; b++) {
          var c = a[b];if (c.target !== document.documentElement && c.target !== document.head) {
            for (var d = 0; d < c.addedNodes.length; d++) {
              var e = c.addedNodes[d];if (e.classList && !e.classList.contains(y.a) || e instanceof window.SVGElement && (!e.hasAttribute("class") || 0 > e.getAttribute("class").indexOf(y.a))) {
                var f = e.getRootNode();f.nodeType === Node.DOCUMENT_FRAGMENT_NODE && (f = f.host) && (f = T(f).is, y.g(e, f));
              }
            }for (d = 0; d < c.removedNodes.length; d++) {
              if (e = c.removedNodes[d], e.nodeType === Node.ELEMENT_NODE && (f = void 0, e.classList ? f = Array.from(e.classList) : e.hasAttribute("class") && (f = e.getAttribute("class").split(/\s+/)), f)) {
                var g = f.indexOf(y.a);0 <= g && (f = f[g + 1]) && y.g(e, f, !0);
              }
            }
          }
        }
      },
          Qc = new MutationObserver(Pc),
          Rc = function Rc(a) {
        Qc.observe(a, { childList: !0, subtree: !0 });
      };if (window.customElements && !window.customElements.flush) Rc(document);else {
        var jb = function jb() {
          Rc(document.body);
        };window.HTMLImports ? window.HTMLImports.whenReady(jb) : requestAnimationFrame(function () {
          if ("loading" === document.readyState) {
            var a = function a() {
              jb();document.removeEventListener("readystatechange", a);
            };document.addEventListener("readystatechange", a);
          } else jb();
        });
      }ob = function ob() {
        Pc(Qc.takeRecords());
      };
    }var pa = {},
        zd = Promise.resolve(),
        Ya = null,
        uc = window.HTMLImports && window.HTMLImports.whenReady || null,
        Za,
        ua = null,
        ha = null;J.prototype.Ma = function () {
      !this.enqueued && ha && (this.enqueued = !0, nb(ha));
    };J.prototype.b = function (a) {
      a.__seenByShadyCSS || (a.__seenByShadyCSS = !0, this.customStyles.push(a), this.Ma());
    };J.prototype.a = function (a) {
      return a.__shadyCSSCachedStyle ? a.__shadyCSSCachedStyle : a.getStyle ? a.getStyle() : a;
    };J.prototype.c = function () {
      for (var a = this.customStyles, b = 0; b < a.length; b++) {
        var c = a[b];if (!c.__shadyCSSCachedStyle) {
          var d = this.a(c);if (d) {
            var e = d.__appliedElement;if (e) for (var f = 0; f < d.attributes.length; f++) {
              var g = d.attributes[f];e.setAttribute(g.name, g.value);
            }d = e || d;ua && ua(d);c.__shadyCSSCachedStyle = d;
          }
        }
      }return a;
    };J.prototype.addCustomStyle = J.prototype.b;J.prototype.getStyleForCustomStyle = J.prototype.a;J.prototype.processStyles = J.prototype.c;Object.defineProperties(J.prototype, { transformCallback: { get: function get() {
          return ua;
        }, set: function set(a) {
          ua = a;
        } }, validateCallback: { get: function get() {
          return ha;
        }, set: function set(a) {
          var b = !1;ha || (b = !0);ha = a;b && this.Ma();
        } } });var Sc = new ia();k.prototype.L = function () {
      ob();
    };k.prototype.ia = function (a) {
      var b = this.s[a] = (this.s[a] || 0) + 1;return a + "-" + b;
    };k.prototype.Ya = function (a) {
      return na(a);
    };k.prototype.$a = function (a) {
      return Y(a);
    };k.prototype.W = function (a) {
      a = a.content.querySelectorAll("style");for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c];b.push(d.textContent);d.parentNode.removeChild(d);
      }return b.join("").trim();
    };k.prototype.ka = function (a) {
      return (a = a.content.querySelector("style")) ? a.getAttribute("css-build") || "" : "";
    };k.prototype.prepareTemplate = function (a, b, c) {
      if (!a.f) {
        a.f = !0;a.name = b;a.extends = c;pa[b] = a;var d = this.ka(a),
            e = this.W(a);c = { is: b, extends: c, Eb: d };u || y.g(a.content, b);this.c();var f = this.b.detectMixin(e),
            e = Wa(e);f && C && this.b.transformRules(e, b);a._styleAst = e;a.g = d;d = [];C || (d = H.W(a._styleAst));if (!d.length || C) b = this.ja(c, a._styleAst, u ? a.content : null, ib[b]), a.b = b;a.c = d;
      }
    };k.prototype.ja = function (a, b, c, d) {
      b = y.b(a, b);if (b.length) return Xa(b, a.is, c, d);
    };k.prototype.ma = function (a) {
      var b = T(a),
          c = b.is,
          b = b.aa,
          d = ib[c],
          c = pa[c],
          e,
          f;c && (e = c._styleAst, f = c.c);return p.set(a, new p(e, d, f, 0, b));
    };k.prototype.U = function () {
      if (!this.b) if (window.ShadyCSS.ApplyShim) this.b = window.ShadyCSS.ApplyShim, this.b.invalidCallback = xd;else {
        var a = {};this.b = (a.detectMixin = function () {
          return !1;
        }, a.transformRule = function () {}, a.transformRules = function () {}, a);
      }
    };k.prototype.V = function () {
      var a = this;if (!this.a) if (window.ShadyCSS.CustomStyleInterface) this.a = window.ShadyCSS.CustomStyleInterface, this.a.transformCallback = function (b) {
        a.A(b);
      }, this.a.validateCallback = function () {
        requestAnimationFrame(function () {
          (a.a.enqueued || a.i) && a.f();
        });
      };else {
        var b = {};this.a = (b.processStyles = function () {}, b.enqueued = !1, b.getStyleForCustomStyle = function () {
          return null;
        }, b);
      }
    };k.prototype.c = function () {
      this.U();this.V();
    };k.prototype.f = function () {
      this.c();var a = this.a.processStyles();
      this.a.enqueued && (C ? this.Wa(a) : (this.u(this.g, this.h), this.M(a)), this.a.enqueued = !1, this.i && !C && this.styleDocument());
    };k.prototype.styleElement = function (a, b) {
      var c = T(a).is,
          d = p.get(a);d || (d = this.ma(a));this.j(a) || (this.i = !0);b && (d.S = d.S || {}, Object.assign(d.S, b));if (C) {
        if (d.S) {
          b = d.S;for (var e in b) {
            null === e ? a.style.removeProperty(e) : a.style.setProperty(e, b[e]);
          }
        }((e = pa[c]) || this.j(a)) && e && e.b && e._applyShimInvalid && (e.a || (this.c(), this.b.transformRules(e._styleAst, c), e.b.textContent = y.b(a, d.I), yd(e)), u && (c = a.shadowRoot) && (c.querySelector("style").textContent = y.b(a, d.I)), d.I = e._styleAst);
      } else this.u(a, d), d.Aa && d.Aa.length && this.T(a, d);
    };k.prototype.o = function (a) {
      return (a = a.getRootNode().host) ? p.get(a) ? a : this.o(a) : this.g;
    };k.prototype.j = function (a) {
      return a === this.g;
    };k.prototype.T = function (a, b) {
      var c = T(a).is,
          d = Sc.a(c, b.K, b.Aa),
          e = d ? d.styleElement : null,
          f = b.G;b.G = d && d.G || this.ia(c);e = H.A(a, b.K, b.G, e);u || H.u(a, b.G, f);d || Sc.c(c, b.K, e, b.G);
    };k.prototype.u = function (a, b) {
      var c = this.o(a),
          d = p.get(c),
          c = Object.create(d.K || null),
          e = H.ia(a, b.I);a = H.ja(d.I, a).H;Object.assign(c, e.ub, a, e.zb);this.la(c, b.S);H.ka(c);b.K = c;
    };k.prototype.la = function (a, b) {
      for (var c in b) {
        var d = b[c];if (d || 0 === d) a[c] = d;
      }
    };k.prototype.styleDocument = function (a) {
      this.styleSubtree(this.g, a);
    };k.prototype.styleSubtree = function (a, b) {
      var c = a.shadowRoot;(c || this.j(a)) && this.styleElement(a, b);if (b = c && (c.children || c.childNodes)) for (a = 0; a < b.length; a++) {
        this.styleSubtree(b[a]);
      } else if (a = a.children || a.childNodes) for (b = 0; b < a.length; b++) {
        this.styleSubtree(a[b]);
      }
    };
    k.prototype.Wa = function (a) {
      for (var b = 0; b < a.length; b++) {
        var c = this.a.getStyleForCustomStyle(a[b]);c && this.Va(c);
      }
    };k.prototype.M = function (a) {
      for (var b = 0; b < a.length; b++) {
        var c = this.a.getStyleForCustomStyle(a[b]);c && H.s(c, this.h.K);
      }
    };k.prototype.A = function (a) {
      var b = this,
          c = na(a);Z(c, function (a) {
        u ? y.u(a) : y.V(a);C && (b.c(), b.b.transformRule(a));
      });C ? a.textContent = Y(c) : this.h.I.rules.push(c);
    };k.prototype.Va = function (a) {
      if (C) {
        var b = na(a);this.c();this.b.transformRules(b);a.textContent = Y(b);
      }
    };k.prototype.getComputedStyleValue = function (a, b) {
      var c;C || (c = (p.get(a) || p.get(this.o(a))).K[b]);return (c = c || window.getComputedStyle(a).getPropertyValue(b)) ? c.trim() : "";
    };k.prototype.Za = function (a, b) {
      var c = a.getRootNode();b = b ? b.split(/\s/) : [];c = c.host && c.host.localName;if (!c) {
        var d = a.getAttribute("class");if (d) for (var d = d.split(/\s/), e = 0; e < d.length; e++) {
          if (d[e] === y.a) {
            c = d[e + 1];break;
          }
        }
      }c && b.push(y.a, c);C || (c = p.get(a)) && c.G && b.push(H.g, c.G);oa(a, b.join(" "));
    };k.prototype.Xa = function (a) {
      return p.get(a);
    };k.prototype.flush = k.prototype.L;k.prototype.prepareTemplate = k.prototype.prepareTemplate;k.prototype.styleElement = k.prototype.styleElement;k.prototype.styleDocument = k.prototype.styleDocument;k.prototype.styleSubtree = k.prototype.styleSubtree;k.prototype.getComputedStyleValue = k.prototype.getComputedStyleValue;k.prototype.setElementClass = k.prototype.Za;k.prototype._styleInfoForNode = k.prototype.Xa;k.prototype.transformCustomStyleForDocument = k.prototype.A;k.prototype.getStyleAst = k.prototype.Ya;k.prototype.styleAstToString = k.prototype.$a;k.prototype.flushCustomStyles = k.prototype.f;Object.defineProperties(k.prototype, { nativeShadow: { get: function get() {
          return u;
        } }, nativeCss: { get: function get() {
          return C;
        } } });var I = new k(),
        kb,
        lb;window.ShadyCSS && (kb = window.ShadyCSS.ApplyShim, lb = window.ShadyCSS.CustomStyleInterface);window.ShadyCSS = { ScopingShim: I, prepareTemplate: function prepareTemplate(a, b, c) {
        I.f();I.prepareTemplate(a, b, c);
      }, styleSubtree: function styleSubtree(a, b) {
        I.f();I.styleSubtree(a, b);
      }, styleElement: function styleElement(a) {
        I.f();I.styleElement(a);
      }, styleDocument: function styleDocument(a) {
        I.f();I.styleDocument(a);
      }, getComputedStyleValue: function getComputedStyleValue(a, b) {
        return I.getComputedStyleValue(a, b);
      }, nativeCss: C, nativeShadow: u };kb && (window.ShadyCSS.ApplyShim = kb);lb && (window.ShadyCSS.CustomStyleInterface = lb);(function () {
      var a = window.customElements,
          b = window.HTMLImports;if (a && a.polyfillWrapFlushCallback) {
        var c,
            d = function d() {
          if (c) {
            var a = c;c = null;a();return !0;
          }
        },
            e = b.whenReady;a.polyfillWrapFlushCallback(function (a) {
          c = a;e(d);
        });b.whenReady = function (a) {
          e(function () {
            d() ? b.whenReady(a) : a();
          });
        };
      }b.whenReady(function () {
        requestAnimationFrame(function () {
          window.dispatchEvent(new CustomEvent("WebComponentsReady"));
        });
      });
    })();
    (function () {
      var a = document.createElement("style");a.textContent = "body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";var b = document.querySelector("head");b.insertBefore(a, b.firstChild);
    })();
  })();
}).call(self);

//# sourceMappingURL=webcomponents-lite.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(29), __webpack_require__(21)))

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map