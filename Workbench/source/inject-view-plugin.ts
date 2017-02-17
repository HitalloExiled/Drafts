//import * as Path from "path";
//import * as FS   from "fs";

export default class FileListPlugin
{
    constructor(options?: any)
    {}
    apply (compiler: any)
    {
        console.dir(compiler);
        compiler.plugin
        (
            'emit',
            (compilation, callback) =>
            {
                console.dir(compilation);
                // Create a header string for the generated file:
                var filelist = 'In this build:\n\n';
                // Loop through all compiled assets,
                // adding a new line item for each filename.
                for (var filename in compilation.assets)
                {
                    filelist += ('- '+ filename +'\n');
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