import * as tslib_1 from "tslib";
import { BaseElement } from "@surface/base-element";
import { component } from "@surface/core/decorators";
var template = require("grid/index.html");
var Grid = (function (_super) {
    tslib_1.__extends(Grid, _super);
    function Grid() {
        var _this = _super.call(this) || this;
        _this._initializing = true;
        return _this;
    }
    Object.defineProperty(Grid.prototype, "rows", {
        get: function () {
            return this._row;
        },
        set: function (value) {
            this._row = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Grid.prototype, "columns", {
        get: function () {
            return this._columns;
        },
        set: function (value) {
            this._columns = value;
        },
        enumerable: true,
        configurable: true
    });
    Grid.prototype.connectedCallback = function () {
        if (this._initializing)
            this.innerHTML = template;
        this._initializing = false;
    };
    Grid.prototype.disconnectedCallback = function () { };
    Grid.prototype.attributeChangedCallback = function (attributeName, oldValue, newValue, namespace) { };
    Grid.prototype.adoptedCallback = function (oldDocument, newDocument) { };
    return Grid;
}(BaseElement));
Grid = tslib_1.__decorate([
    component("surface-layout-grid"),
    tslib_1.__metadata("design:paramtypes", [])
], Grid);
export { Grid };
