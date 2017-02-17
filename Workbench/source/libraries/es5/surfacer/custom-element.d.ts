export declare abstract class CustomElement extends HTMLElement {
    private _template;
    template: Nullable<HTMLTemplateElement>;
    constructor();
    applyTemplate(): void;
    /** Called when the element is created or upgraded */
    abstract connectedCallback(): void;
    /** Called when the element is inserted into a document, including into a shadow tree */
    abstract disconnectedCallback(): void;
    /**
     * Called when an attribute is changed, appended, removed, or replaced on the element.
     * Only called for observed attributes.
     */
    abstract attributeChangedCallback(attributeName: string, oldValue: string, newValue: string, namespace: string): void;
    /** Called when the element is adopted into a new document */
    abstract adoptedCallback(oldDocument: Document, newDocument: Document): void;
}
