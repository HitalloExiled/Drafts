import "dependencies";
import "surfacer/layout/stack";

import View from "surfacer/view";
import {view} from "surfacer/core/decorators";

import template from "./index.html";
import style    from "./index.scss";

import Grid from "surfacer/data/grid";

@view("view-home", template, style)
export default class Home extends View
{
    constructor()
    {
        super();
        if (this.shadowRoot)
            this.shadowRoot.appendChild(new Grid());
    }
}