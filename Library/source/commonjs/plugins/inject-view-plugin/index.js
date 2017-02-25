//import * as Path from "path";
//import * as FS   from "fs";
"use strict";
class InjectViewPlugin {
    constructor(options) { }
    apply(compiler) {
        //console.log(compiler);
        compiler.plugin("make", (compilation, callback) => {
            //console.log(compilation);
            // Create a header string for the generated file:
            var filelist = 'In this build:\n\n';
            // Loop through all compiled assets,
            // adding a new line item for each filename.
            for (var filename in compilation.assets) {
                filelist += (`- ${filename + "\n"}`);
            }
            // Insert this list into the Webpack build as a new file asset:
            compilation.assets['filelist.md'] =
                {
                    source: () => filelist,
                    size: () => filelist.length
                };
            callback();
        });
    }
    ;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = InjectViewPlugin;
//# sourceMappingURL=index.js.map