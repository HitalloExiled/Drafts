import * as Webpack from "webpack";
import * as Glob    from "glob";
import * as Path    from "path";
import * as FS      from "fs";

import devConfig  from "./development";
import prodConfig from "./production";

import injectViewPlugin from "../../../Library/source/@surface/plugins/inject-view-plugin";

export default (env: string) =>
{
    const DEV          = "DEV";
    const ROOT         = Path.resolve(__dirname, "../../");
    const SOURCE       = Path.resolve(ROOT, "./source");
    const NODE_MODULES = Path.resolve(ROOT, "./node_modules");
    const LIBRARY      = Path.resolve(ROOT, "../Library/source");
    const SERVER       = Path.resolve(ROOT, "../Server");

    let entries = {} as Webpack.Entry;
    let matches = new Glob.GlobSync(`${SOURCE}/views/*`).found;

    matches.forEach
    (
        (value, index) =>
        {
            let parts = value.split("/");
            let view  = parts[parts.length - 1];

            let name = `views/${view}/index`
            let path = Path.join(value, "index.ts");

            if (FS.existsSync(path))
                entries[name] = Path.join(value, "index.ts");
        }
    );

    let config = 
    {
        devtool: "#source-map",
        context: SOURCE,
        entry:   entries,
        output:
        {
            path:          SERVER,
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
                SOURCE,
                LIBRARY,
                NODE_MODULES
            ]
        } as Webpack.Resolve,
        module:
        {
            rules:
            [
                {
                    test: /\.(png|jpe?g)$/,
                    use:
                    [
                        {
                            loader: "file-loader",
                            options:
                            {
                                name:       "/resources/[hash].[ext]",
                                publicPath: "",
                                outputPath: "./"
                            }
                        },
                        //{ loader: "url-loader" }
                    ]
                },
                {
                    test: /\.scss$/,
                    use:
                    [
                        //{
                        //    loader: "file-loader",
                        //    options:
                        //    {
                        //        name:       "/resources/[hash].css",
                        //        outputPath: "./"
                        //    }
                        //},
                        //{ loader: "extract-loader" },                        
                        { loader: "to-string-loader" },
                        { loader: "css-loader" },
                        { loader: "sass-loader" }
                    ]
                },
                {
                    test: /\.html$/,
                    use:
                    [
                        {   
                            loader: "html-loader",
                            options:
                            {
                                attrs: ['img:src', 'link:href'],
                                interpolate: "require",
                                minify: true
                            }
                        }//,
                        //{
                        //    loader: "html-minify-loader",
                        //    options: { empty: true }
                        //}
                    ]
                },
                {
                    test: /\.ts$/,
                    use:
                    [
                        {
                            loader: "ts-loader",
                            options:
                            {
                                compilerOptions:
                                {
                                    noEmit: false,
                                    target: "es6"
                                }
                            },                        
                        }
                    ]
                },
            ] as Array<Webpack.Rule>,
        } as Webpack.Module
    } as Webpack.Configuration;

    let envConfig = env == DEV ? devConfig : prodConfig;

    envConfig.plugins = envConfig.plugins || [];
    //envConfig.plugins.push(new Webpack.ProvidePlugin({ Promise: "promise-polyfill" }))
    envConfig.plugins.push(new injectViewPlugin());
    envConfig.plugins.push(new Webpack.IgnorePlugin(/vertx/));

    return Object.assign
    (
        config,
        envConfig
    ) as Webpack.Configuration;
}