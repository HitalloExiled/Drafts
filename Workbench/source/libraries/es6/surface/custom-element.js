export class CustomElement extends HTMLElement {
    constructor() {
        super(...arguments);
        this._initialized = false;
    }
    applyTemplate(template) {
        this.appendChild(template.content.cloneNode(true));
    }
}
