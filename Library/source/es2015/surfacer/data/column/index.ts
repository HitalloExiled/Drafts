import CustomElement from "surfacer/custom-element";
import {component}   from "surfacer/core/decorators";

@component("surface-layout-column", require("index.html"))
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