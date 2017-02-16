export function component(name, template, options) {
    return (target) => {
        let connectedCallback = target.prototype.connectedCallback;
        target.prototype.connectedCallback = function () {
            //if (initializing)
            //{
            let element = new DOMParser()
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
