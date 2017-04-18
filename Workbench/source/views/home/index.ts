import "dependencies";
import "@surface/components/layout/stack";

import {View} from "@surface/core/view";
import {Grid} from "@surface/components/data/grid";
import {view} from "@surface/core/decorators";

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