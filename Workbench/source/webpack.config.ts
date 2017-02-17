﻿import * as Webpack           from "webpack";
import * as Glob              from "glob";
import * as Path              from "path";
import * as HtmlWebPackPlugin from "html-webpack-plugin";
//import * as FS                from "fs";

//const FileListPlugin = require("./FileListPlugin.js");

let entries = {} as Webpack.Entry;
let plugins = [] as Array<HtmlWebPackPlugin>;
let matches = new Glob.GlobSync(`${__dirname}/views/*`).found;

//function customLoader(source: any)
//{
//    debugger;
//    console.log(source);
//    //return FS.readFileSync(source.resource, "utf-8");
//    //const reversed = source.toString().split('').reverse().join('');
//    return `module.exports = ${FS.readFileSync(source.resource, "utf-8")}`;
//}

//class FileListPlugin
//{
//    constructor(options?: any)
//    {}

//    apply (compiler: any)
//    {
//        console.dir(compiler);
//        compiler.plugin
//        (
//            'emit',
//            (compilation, callback) =>
//            {
//                console.dir(compilation);
//                // Create a header string for the generated file:
//                var filelist = 'In this build:\n\n';

//                // Loop through all compiled assets,
//                // adding a new line item for each filename.
//                for (var filename in compilation.assets)
//                {
//                    filelist += ('- '+ filename +'\n');
//                }

//                // Insert this list into the Webpack build as a new file asset:
//                compilation.assets['filelist.md'] =
//                {
//                    source: () => filelist,
//                    size:   () => filelist.length
//                }
//                callback();
//            }
//        );
//    };
//}

//plugins.push(new FileListPlugin());

matches.forEach
(
    (value, index) =>
    {
        let parts = value.split("/");
        let view  = parts[parts.length - 1];

        let name = `views/${view}/index`
        entries[name] = Path.join(value, "index.ts");

        //name = `views/${view}/index.txt`
        //entries[name] = Path.join(value, "index.txt");

        //name = `views/${view}/index.scss`
        //entries[name] = Path.join(value, "index.scss");
        
        //let config =
        //{
        //    filename: `views/${view}/index.html`,
        //    template: Path.join(__dirname, "template", "index.html"),
        //    chunks:   [name],
        //    inject:   "body"
        //} as HtmlWebPackPlugin.Config;
        //plugins.push(new HtmlWebPackPlugin(config));
    }
);

//let uglifyOptions =
//{
//    beautify:  false,
//    comments:  false,
//    sourceMap: true
//} as Webpack.UglifyPluginOptions;

//plugins.push(new Webpack.optimize.UglifyJsPlugin(uglifyOptions))

let config = 
{
    context: __dirname,
    devtool: "#source-map",
    entry:   entries,
    output:
    {
        path:          Path.resolve(__dirname, "../www"),
        publicPath:    "",
        filename:      "[name].js",
        libraryTarget: "umd"
    } as Webpack.Output,
    resolve:
    {
        extensions: [".html", ".ts", ".js"],
        modules:
        [
            ".",
            `${__dirname}/libraries/es5/`,
            `${__dirname}/libraries/es6/`,
            "node_modules",
            "../node_modules/surfacer-drafts/build/es5/"
        ]
    } as Webpack.Resolve,
    module:
    {
        rules:
        [
            {
                test: /\.scss$/,
                loaders: ["url-loader", "css-loader", "sass-loader"]
            },
            //{
            //    test: /\.scss$/,
            //    use:
            //    [
            //        { loader: "style-loader" },
            //        { loader: "css-loader" },
            //        {
            //            loader: "sass-loader",
            //            options:
            //            {
            //                includePaths: [Path.resolve(__dirname, "../www")]
            //            }
            //        },
            //    ]
            //},
            {
                test: /\.jpg$/,
                use:
                [
                    { loader: "./custom-loader" },
                    { loader: "url-loader" }
                ]
            },
            {
                test:   /\.html$/,
                loader: "html-loader"
            },
            {
                test:   /\.js$/,
                loader: "./custom-loader"
            },
            {
                test: /\.ts$/,
                use:
                [   
                    { loader: "./custom-loader-dep" },
                    { loader: "ts-loader" },
                ]
            },
            //{
            //    test: /\.txt$/,
            //}
            //{
            //    test: /\.html$/,
            //    use:
            //    [
            //        {
            //            loader: "file-loader",
            //            options:
            //            {
            //                name:       "[path][name].[ext]",
            //                publicPath: "",
            //                outputPath: "../www/",
            //                //emitFile:   false
            //            }
            //        },
            //        { loader: "extract-loader" },
            //        { loader: "html-loader?"+ JSON.stringify({ attrs: ["script:src"] })}
            //    ]
            //},
        ] as Array<Webpack.Rule>,
    } as Webpack.Module,
    plugins: plugins
} as Webpack.Configuration;

export default config;