import CustomElement from "@surface/core/custom-element";
import {component}   from "@surface/core/decorators";

import template from "./index.html";
import style    from "./index.scss";

namespace Stack
{
    export type Orientation = "vertical"|"horizontal";
}

@component("layout-stack", template, style)
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
        Stack._observedAttributes = ["orientation", "width", "height", "display"];
    }
}

export default Stack;