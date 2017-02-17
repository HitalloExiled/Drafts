import {CustomElement} from "surfacer/custom-element";
import {component}     from "surfacer/core/decorators"

@component("surface-layout-grid", require("index.html"))
export class Grid extends CustomElement
{
    private _row: any;
    public get rows(): any
    {
        return this._row;
    }

    public set rows(value: any)
    {
        this._row = value;
    }

    private _columns: any;
    public get columns(): any
    {
        return this._columns;
    }

    public set columns(value: any)
    {
        this._columns = value;
    }

    public constructor()
    {
        super();
    }

    public connectedCallback()
    {
        alert("post template");
    }

    public disconnectedCallback()
    {}

    public attributeChangedCallback(attributeName: string, oldValue: string, newValue: string, namespace: string)
    {}

    public adoptedCallback(oldDocument: Document, newDocument: Document)
    {}
}