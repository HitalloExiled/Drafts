export abstract class CustomElement extends HTMLElement
{
    private _template: Nullable<HTMLTemplateElement>;
    
	public get template(): Nullable<HTMLTemplateElement>
    {
		return this._template;
	}

	public set template(value: Nullable<HTMLTemplateElement>)
    {
		this._template = value;
	}    
    
    constructor()
    {
        super();

        this.applyTemplate();
    }

    public applyTemplate(): void
    {
        if (this._template)
            this.appendChild(document.importNode(this._template.content, true));
    }

    /** Called when the element is created or upgraded */
    public abstract connectedCallback(): void;

    /** Called when the element is inserted into a document, including into a shadow tree */
    public abstract disconnectedCallback(): void;

    /**
     * Called when an attribute is changed, appended, removed, or replaced on the element.
     * Only called for observed attributes.
     */
    public abstract attributeChangedCallback(attributeName: string, oldValue: string, newValue: string, namespace: string): void;

    /** Called when the element is adopted into a new document */
    public abstract adoptedCallback(oldDocument: Document, newDocument: Document): void;
}