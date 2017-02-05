import * as tslib_1 from "tslib";
import { BaseElement } from "@surface/base-element";
import { component } from "@surface/core/decorators";
const template = require("grid/index.html");
let Grid = class Grid extends BaseElement {
    constructor() {
        super();
        this.innerHTML = template;
    }
    get rows() {
        return this._row;
    }
    set rows(value) {
        this._row = value;
    }
    get columns() {
        return this._columns;
    }
    set columns(value) {
        this._columns = value;
    }
};
Grid = tslib_1.__decorate([
    component("sfc-layout-grid"),
    tslib_1.__metadata("design:paramtypes", [])
], Grid);
export { Grid };
//# sourceMappingURL=grid.js.map