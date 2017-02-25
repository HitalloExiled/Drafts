import View   from "surfacer/view";
import {view} from "surfacer/core/decorators";

@view("view-master", require("index.html"))
export default class Master extends View
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