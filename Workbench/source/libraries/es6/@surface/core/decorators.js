export function component(name, options) {
    return (target) => window.customElements.define(name, target, options);
}
