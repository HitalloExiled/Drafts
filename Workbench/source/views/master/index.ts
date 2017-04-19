import { View } from "@surface/core/view";
import { view } from "@surface/core/decorators";

import template from "index.html";
import style    from "index.scss";

@view("view-master", template, style)
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