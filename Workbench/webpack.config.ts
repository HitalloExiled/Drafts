import * as Webpack from "webpack";
import * as Glob    from "glob";
import * as Path    from "path";

import devConfig  from "./configs/webpack.config-development";
import prodConfig from "./configs/webpack.config-production";

import injectViewPlugin from "surfacer/plugins/inject-view-plugin";

console.log(`Starting build in ${process.env["NODE_ENV"].trim() == "DEV" ? "development" : "production"} mode.`);

let entries = {} as Webpack.Entry;
let matches = new Glob.GlobSync(`${__dirname}/source/views/*`).found;

matches.forEach
(
    (value, index) =>
    {
        let parts = value.split("/");
        let view  = parts[parts.length - 1];

        let name = `views/${view}/index`
        entries[name] = Path.join(value, "index.ts");
    }
);

let config = 
{
    devtool: "#source-map",
    context: __dirname,
    entry:   entries,
    output:
    {
        path:          Path.resolve(__dirname, "../Server"),
        publicPath:    "",
        filename:      "[name].js",
        libraryTarget: "umd"
    } as Webpack.Output,
    resolve:
    {
        extensions: [".ts", ".js"],
        modules:
        [
            ".",
            "node_modules/surfacer-es5",
            "node_modules"
        ]
    } as Webpack.Resolve,
    module:
    {
        rules:
        [
            {
                test: /\.(png|jpe?g)$/,
                loader: "url-loader"
            },
            {
                test: /\.scss$/,
                use:
                [
                    { loader: "url-loader" },
                    { loader: "sass-loader" }
                ]
            },
            {
                test:   /\.html$/,
                loader: "html-loader",
                options: { attrs: ['img:src', 'link:href'] }
            },
            {
                test:    /\.ts$/,
                use:
                [
                    {
                        loader: "ts-loader",
                        options:
                        {
                            compilerOptions:
                            {
                                module: "es2015",
                                target: "es5"
                            }
                        },                        
                    }
                ]
            },
        ] as Array<Webpack.Rule>,
    } as Webpack.Module
} as Webpack.Configuration;

let envConfig =
    (process.env["NODE_ENV"] as string).trim() == "DEV" ?
        devConfig :
        prodConfig

envConfig.plugins = envConfig.plugins || [];
envConfig.plugins.push(new injectViewPlugin())

export default Object.assign
(
    config,
    envConfig
);