import * as Webpack from "webpack";
import * as Glob    from "glob";
import * as Path    from "path";
import * as FS      from "fs";

import devConfig  from "./dev";
import prodConfig from "./prod";

//import injectViewPlugin from "surfacer-plugins";

export default (env: string) =>
{
    const DEV          = "DEV";
    const ROOT         = Path.resolve(__dirname, "../../");
    const SOURCE       = Path.resolve(ROOT, "./source");
    const NODE_MODULES = Path.resolve(ROOT, "./node_modules");
    const LIBRARY      = Path.resolve(ROOT, "../Library/source");

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
            path:          Path.resolve(ROOT, "../Server"),
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
                Path.join(LIBRARY, "es2015"),
                NODE_MODULES
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
                                    target: "es5"
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
    //envConfig.plugins.push(new injectViewPlugin())

    return Object.assign
    (
        config,
        envConfig
    ) as Webpack.Configuration;
}