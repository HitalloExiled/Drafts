import "dependencies";
import Master from "views/master";

import Grid   from "surfacer/layout/grid";
import {view} from "surfacer/core/decorators";

@view("view-home", require("index.html"), Master)
export default class Home
{
    constructor()
    {
        let grid = new Grid();
        grid.id = "mains-grid";

        document.body.appendChild(grid);

        alert("Hello World!!!!, Mother Fucker!!!");
        window.customElements.whenDefined("surface-layout-grid").then(() => alert("grid created"));
    }
}