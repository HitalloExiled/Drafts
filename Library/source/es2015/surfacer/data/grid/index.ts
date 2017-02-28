import CustomElement from "surfacer/custom-element";
import Row           from "surfacer/data/row";
import {component}   from "surfacer/core/decorators";

@component("surface-layout-grid", require("index.html"))
export default class Grid extends CustomElement
{
    private _rows: Array<Row>;
    public get rows(): Array<Row>
    {
        return this._rows;
    }

    public addRow(row: Row)
    {
        this._rows.push(row);
    }

    public removeRow(index: number)
    {
        this._rows.splice(index, 1);
    }
}