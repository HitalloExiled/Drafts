import "dependencies";
import "index.html";
import "index.scss";

import {Grid} from "surfacer/layout/grid";

window.customElements.whenDefined("surface-layout-grid").then(() => alert("grid created"));

let grid = new Grid();
grid.id = "grid";

document.body.appendChild(grid);

alert("Hello World!!!, Mother Fucker!!!");