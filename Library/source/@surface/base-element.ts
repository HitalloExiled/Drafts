export abstract class BaseElement extends HTMLElement
{
    public abstract connectedCallback();
    public abstract disconnectedCallback();
    public abstract attributeChangedCallback(attributeName: string, oldValue: string, newValue: string, namespace: string);
    public abstract adoptedCallback(oldDocument: Document, newDocument: Document);
}