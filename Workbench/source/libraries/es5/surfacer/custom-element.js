import * as tslib_1 from "tslib";
var CustomElement = (function (_super) {
    tslib_1.__extends(CustomElement, _super);
    function CustomElement() {
        var _this = _super.call(this) || this;
        _this.applyTemplate();
        return _this;
    }
    Object.defineProperty(CustomElement.prototype, "template", {
        get: function () {
            return this._template;
        },
        set: function (value) {
            this._template = value;
        },
        enumerable: true,
        configurable: true
    });
    CustomElement.prototype.applyTemplate = function () {
        if (this._template)
            this.appendChild(document.importNode(this._template.content, true));
    };
    return CustomElement;
}(HTMLElement));
export { CustomElement };
