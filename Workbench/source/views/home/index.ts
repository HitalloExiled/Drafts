import "dependencies";

import {Grid} from "surfacer/layout/grid";

class Home
{
    constructor()
    {
        let grid = new Grid();
        grid.id = "grid";

        document.body.appendChild(grid);

        alert("Hello World!!!, Mother Fucker!!!");
        window.customElements.whenDefined("surface-layout-grid").then(() => alert("grid created"));
    }
}

export default new Home();