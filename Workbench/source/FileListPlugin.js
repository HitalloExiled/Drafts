"use strict";
module.exports = class FileListPlugin
{
    constructor(options)
    {}

    apply(compiler)
    {
        console.dir(compiler);
        compiler.plugin
        (
            "make",
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