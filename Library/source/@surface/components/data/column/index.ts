import CustomElement from "@surface/core/custom-element";
import {component}   from "@surface/core/decorators";

import template from "./index.html";

@component("data-column", template)
export default class Column extends CustomElement
{
    public constructor()
    {
        super();
    }

    public connectedCallback()
    { }

    public disconnectedCallback()
    { }

    public attributeChangedCallback(attributeName: string, oldValue: string, newValue: string, namespace: string)
    { }

    public adoptedCallback(oldDocument: Document, newDocument: Document)
    { }
}