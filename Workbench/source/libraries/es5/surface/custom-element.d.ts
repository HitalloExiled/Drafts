export declare abstract class CustomElement extends HTMLElement {
    protected _initialized: boolean;
    applyTemplate(template: HTMLTemplateElement): void;
    abstract connectedCallback(): any;
    abstract disconnectedCallback(): any;
    abstract attributeChangedCallback(attributeName: string, oldValue: string, newValue: string, namespace: string): any;
    abstract adoptedCallback(oldDocument: Document, newDocument: Document): any;
}
