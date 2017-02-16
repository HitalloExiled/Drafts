export abstract class CustomElement extends HTMLElement
{
    protected _initialized = false;
        
    public applyTemplate(template: HTMLTemplateElement)
    {
        this.appendChild(template.content.cloneNode(true));
    }

    public abstract connectedCallback();
    public abstract disconnectedCallback();
    public abstract attributeChangedCallback(attributeName: string, oldValue: string, newValue: string, namespace: string);
    public abstract adoptedCallback(oldDocument: Document, newDocument: Document);
}