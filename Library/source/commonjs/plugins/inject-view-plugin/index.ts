//import * as Path from "path";
//import * as FS   from "fs";

export default class InjectViewPlugin
{
    constructor(options?: any)
    { }
    apply (compiler: any)
    {
        //console.log(compiler);
        compiler.plugin
        (
            "emit",
            (compilation, callback) =>
            {
                //console.log(compilation);
                // Create a header string for the generated file:

                var filelist = 'In this build:\n\n';

                // Loop through all compiled assets,
                // adding a new line item for each filename.
                for (var filename in compilation.assets)
                {
                    filelist += (`- ${filename + "\n"}`);
                }
                // Insert this list into the Webpack build as a new file asset:
                compilation.assets['filelist.md'] =
                {
                    source: () => filelist,
                    size:   () => filelist.length
                }

                callback();
            }
        );
    };
}