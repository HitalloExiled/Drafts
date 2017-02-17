import * as tslib_1 from "tslib";
import { CustomElement } from "surfacer/custom-element";
import { component } from "surfacer/core/decorators";
let Grid = class Grid extends CustomElement {
    constructor() {
        super();
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
    connectedCallback() { }
    disconnectedCallback() { }
    attributeChangedCallback(attributeName, oldValue, newValue, namespace) { }
    adoptedCallback(oldDocument, newDocument) { }
};
Grid = tslib_1.__decorate([
    component("surface-layout-grid", require("index.html")),
    tslib_1.__metadata("design:paramtypes", [])
], Grid);
export { Grid };
