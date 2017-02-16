export function component(name, template, options) {
    return function (target) {
        var connectedCallback = target.prototype.connectedCallback;
        target.prototype.connectedCallback = function () {
            //if (initializing)
            //{
            var element = new DOMParser()
                .parseFromString(template, "text/html")
                .querySelector("template");
            this.applyTemplate(element);
            //}
            //initializing = false;
            connectedCallback.apply(this);
        };
        //return instance;
        window.customElements.define(name, target, options);
    };
}
