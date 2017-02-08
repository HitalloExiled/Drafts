import {BaseElement} from "@surface/base-element";
import {component}   from "@surface/core/decorators"

const template = require("grid/index.html") as string;

@component("surface-layout-grid")
export class Grid extends BaseElement
{
    private _initializing = true;

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
        if (this._initializing)
            this.innerHTML = template;

        this._initializing = false;
    }

    public disconnectedCallback()
    {}

    public attributeChangedCallback(attributeName: string, oldValue: string, newValue: string, namespace: string)
    {}

    public adoptedCallback(oldDocument: Document, newDocument: Document)
    {}
}