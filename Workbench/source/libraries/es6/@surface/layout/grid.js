import * as tslib_1 from "tslib";
import { BaseElement } from "@surface/base-element";
import { component } from "@surface/core/decorators";
const template = require("grid/index.html");
let Grid = class Grid extends BaseElement {
    constructor() {
        super();
        this._initializing = true;
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
    connectedCallback() {
        if (this._initializing)
            this.innerHTML = template;
        this._initializing = false;
    }
    disconnectedCallback() { }
    attributeChangedCallback(attributeName, oldValue, newValue, namespace) { }
    adoptedCallback(oldDocument, newDocument) { }
};
Grid = tslib_1.__decorate([
    component("surface-layout-grid"),
    tslib_1.__metadata("design:paramtypes", [])
], Grid);
export { Grid };
