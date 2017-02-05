export function component(name, options) {
    return function (target) { return window.customElements.define(name, target, options); };
}
//# sourceMappingURL=decorators.js.map