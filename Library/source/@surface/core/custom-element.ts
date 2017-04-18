﻿export abstract class CustomElement extends HTMLElement
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

    private applyTemplate(): void
    {
        if (window["ShadyCSS"])
            ShadyCSS.styleElement(this);
            
        if (this._template)
            this.attachShadow({ mode: "open" }).appendChild(document.importNode(this._template.content, true));
    }

    /** Called when the element is created or upgraded */
    public connectedCallback(): void
    {
        //if (this._template)
        //    this.appendChild(document.importNode(this._template.content, true));
    }

    /** Called when the element is inserted into a document, including into a shadow tree */
    public disconnectedCallback(): void
    { }

    /**
     * Called when an attribute is changed, appended, removed, or replaced on the element.
     * Only called for observed attributes.
     */
    public attributeChangedCallback(attributeName: string, oldValue: string, newValue: string, namespace: string): void
    {
        if (attributeName in this)
            this[attributeName] = newValue;
        else if (attributeName in this.style)
            this.style[attributeName] = newValue;
    }

    /** Called when the element is adopted into a new document */
    public adoptedCallback(oldDocument: Document, newDocument: Document): void
    { }
}