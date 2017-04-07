import View   from "surfacer/view";
import {view} from "surfacer/core/decorators";

@view("view-register", require("index.html"))
export default class Register extends View
{
    constructor()
    {
        super();
    }

    public connectedCallback(): void
    { }
    
    public disconnectedCallback(): void
    { }

    public attributeChangedCallback(attributeName: string, oldValue: string, newValue: string, namespace: string): void
    { }
    
    public adoptedCallback(oldDocument: Document, newDocument: Document): void
    { }
}