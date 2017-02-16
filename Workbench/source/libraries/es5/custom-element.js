import * as tslib_1 from "tslib";
var CustomElement = (function (_super) {
    tslib_1.__extends(CustomElement, _super);
    function CustomElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._initialized = false;
        return _this;
    }
    CustomElement.prototype.applyTemplate = function (template) {
        this.appendChild(template.content.cloneNode(true));
    };
    return CustomElement;
}(HTMLElement));
export { CustomElement };
