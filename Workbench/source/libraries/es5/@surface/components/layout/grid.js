import * as tslib_1 from "tslib";
import { BaseElement } from "@surface/components/base-element";
import { component } from "@surface/core/decorators";
var template = require("grid/index.html");
var Grid = (function (_super) {
    tslib_1.__extends(Grid, _super);
    function Grid() {
        var _this = _super.call(this) || this;
        _this.innerHTML = template;
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
    return Grid;
}(BaseElement));
Grid = tslib_1.__decorate([
    component("sfc-layout-grid"),
    tslib_1.__metadata("design:paramtypes", [])
], Grid);
export { Grid };
//# sourceMappingURL=grid.js.map