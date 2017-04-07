import "dependencies";
import "surfacer/layout/stack";

import View   from "surfacer/view";

import Grid   from "surfacer/data/grid";
import {view} from "surfacer/core/decorators";

import template from "./index.html";
import style    from "./index.scss";

@view("view-home", template, style)
export default class Home extends View
{
    constructor()
    {
        super();
        let grid = new Grid();
        grid.id = "main-grid";
        
        if (this.shadowRoot)
            this.shadowRoot.appendChild(grid);
    }
}