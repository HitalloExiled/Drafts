import CustomElement from "surfacer/custom-element";
import {component}   from "surfacer/core/decorators";

namespace Stack
{
    export type Orientation = "vertical"|"horizontal";
}

@component("layout-stack", require("index.html"))
class Stack extends CustomElement
{
    private _orientation: Stack.Orientation;
    public get orientation(): Stack.Orientation
    {
        return this._orientation;
    }

    public set orientation(value: Stack.Orientation)
    {
         this._orientation = value;
    }

    constructor()
    {
        super();
        CustomElement._observedAttributes = ["orientation", "width", "height", "display"];
    }
}

export default Stack;