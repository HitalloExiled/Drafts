export declare abstract class BaseElement extends HTMLElement {
    abstract connectedCallback(): any;
    abstract disconnectedCallback(): any;
    abstract attributeChangedCallback(attributeName: string, oldValue: string, newValue: string, namespace: string): any;
    abstract adoptedCallback(oldDocument: Document, newDocument: Document): any;
}
