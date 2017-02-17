import "dependencies";
import {view} from "codebase/decorators";
import {Grid} from "surfacer/layout/grid";
import * as surface from "surfacer-drafts";

const index = require("index.html");
const css   = require("index.scss");

@view("view-home")
class Index
{
    public template = null as Nullable<HTMLTemplateElement>;
    constructor()
    {
        let grid = new Grid();
        grid.id = "grid";

        document.body.appendChild(grid);

        alert("Hello World!!!, Mother Fucker!!!");
        alert(index);
        alert(css);
        surface
    }
}

new Index();