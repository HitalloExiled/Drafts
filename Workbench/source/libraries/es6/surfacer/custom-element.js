export class CustomElement extends HTMLElement {
    get template() {
        return this._template;
    }
    set template(value) {
        this._template = value;
    }
    constructor() {
        super();
        this.applyTemplate();
    }
    applyTemplate() {
        if (this._template)
            this.appendChild(document.importNode(this._template.content, true));
    }
}
