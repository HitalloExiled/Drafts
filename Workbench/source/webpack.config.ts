import * as Webpack           from "webpack";
import * as Glob              from "glob";
import * as Path              from "path";
import * as HtmlWebPackPlugin from "html-webpack-plugin";

let entries = {} as Webpack.Entry;
let plugins = [] as Array<HtmlWebPackPlugin>;
let matches = new Glob.GlobSync(`${__dirname}/views/*`).found;

matches.forEach
(
    (value, index) =>
    {
        let parts = value.split("/");
        let view  = parts[parts.length - 1];

        let name = `views/${view}/index`
        entries[name] = Path.join(value, "index.ts");

        //name = `views/${view}/index.html`
        //entries[name] = Path.join(value, "index.html");

        //name = `views/${view}/index.scss`
        //entries[name] = Path.join(value, "index.scss");
        
        let config =
        {
            filename: `views/${view}/index.html`,
            template: Path.join(__dirname, "template", "index.html"),
            chunks:   [name],
            inject:   "body"
        } as HtmlWebPackPlugin.Config;
        plugins.push(new HtmlWebPackPlugin(config));
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
            "node_modules"
        ]
    } as Webpack.Resolve,
    module:
    {
        rules:
        [
            //{
            //    test: /\.scss$/,
            //    loaders: ["style-loader", "css-loader", "sass-loader"]
            //},
            {
                test: /\.scss$/,
                use:
                [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    {
                        loader: "sass-loader",
                        options:
                        {
                            includePaths: [Path.resolve(__dirname, "../www")]
                        }
                    },
                ]
            },
            {
                test:    /\.html$/,
                loader:  "html-loader"
            },
            {
                test:   /\.ts$/,
                loader: "ts-loader"
            },
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