export function component(name, template, options) {
    return function (target) {
        target.prototype.template = new DOMParser()
            .parseFromString(template, "text/html")
            .querySelector("template");
        window.customElements.define(name, target, options);
    };
}
