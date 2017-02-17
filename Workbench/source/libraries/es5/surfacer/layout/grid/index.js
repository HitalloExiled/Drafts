import * as tslib_1 from "tslib";
import { CustomElement } from "surfacer/custom-element";
import { component } from "surfacer/core/decorators";
var Grid = (function (_super) {
    tslib_1.__extends(Grid, _super);
    function Grid() {
        return _super.call(this) || this;
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
    Grid.prototype.connectedCallback = function () { };
    Grid.prototype.disconnectedCallback = function () { };
    Grid.prototype.attributeChangedCallback = function (attributeName, oldValue, newValue, namespace) { };
    Grid.prototype.adoptedCallback = function (oldDocument, newDocument) { };
    return Grid;
}(CustomElement));
Grid = tslib_1.__decorate([
    component("surface-layout-grid", require("index.html")),
    tslib_1.__metadata("design:paramtypes", [])
], Grid);
export { Grid };
