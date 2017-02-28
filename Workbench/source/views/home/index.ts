import "dependencies";
import Master from "views/master";
import View   from "surfacer/view";

import Grid   from "surfacer/data/grid";
import {view} from "surfacer/core/decorators";

@view("view-home", require("index.html"), Master)
export default class Home extends View
{
    constructor()
    {
        super();
        let grid = new Grid();
        grid.id = "mains-grid";
        
        if (this.shadowRoot)
            this.shadowRoot.appendChild(grid);

        alert("Hello World!!!!, Mother Fucker!!!");
        window.customElements.whenDefined("surface-layout-grid").then(() => alert("grid created"));
    }
}