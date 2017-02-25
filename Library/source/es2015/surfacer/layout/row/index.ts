import CustomElement from "surfacer/custom-element";
import Column        from "surfacer/layout/column";
import {component}   from "surfacer/core/decorators"

@component("surface-layout-row", require("index.html"))
export default class Row extends CustomElement
{
    private _columns: Array<Column>;
    public get columns(): Array<Column>
    {
        return this._columns;
    }

    public set columns(value: Array<Column>)
    {
        this._columns = value;
    }

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