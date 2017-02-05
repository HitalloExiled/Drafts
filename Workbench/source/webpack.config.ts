import * as Webpack from "webpack";
import * as Glob    from "glob";
import * as Path    from "path";
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
        
        let config =
        {
            filename: `views/${view}/index.html`,
            template: Path.join(value, "index.html"),
            chunks:   [name],
            baseHref: "../www"
        } as HtmlWebPackPlugin.Config;

        plugins.push(new HtmlWebPackPlugin(config));
    }
);

let config = 
{
    context: __dirname,
    devtool: "source-map",
    entry:   entries,
    output:
    {
        path:       Path.resolve(__dirname, "../www"),
        publicPath: "",
        filename:   "[name].js"
    } as Webpack.Output,
    resolve:
    {
        extensions: [".html", ".ts", ".js"],
        modules:
        [
            ".",
            `${__dirname}/lib/es6/`,
            `${__dirname}/lib/es5/`,
            "node_modules"
        ]
    } as Webpack.Resolve,
    module:
    {
        rules:
        [
            //{
            //    test: /\.html$/,
            //    loader: "file-loader",
            //    options:    
            //    {
            //        name:       "[path][name].[ext]",
            //        outputPath: "../www/"
            //    }
            //},
            //{
            //    test:   /\.html$/,
            //    loader: "extract-loader",
            //},
            {
                test:   /\.html$/,
                loader: "html-loader",
            },
            {
                test:   /\.ts$/,
                loader: "ts-loader"
            }
        ] as Array<Webpack.Rule>,
    } as Webpack.Module,
    plugins: plugins
} as Webpack.Configuration;

export default config;