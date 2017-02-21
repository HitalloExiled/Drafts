import * as Webpack from "webpack";
import * as Glob    from "glob";
import * as Path    from "path";
import * as FS      from "fs";

import devConfig  from "./webpack.config-development";
import prodConfig from "./webpack.config-production";

import injectViewPlugin from "surfacer-inject-view-plugin";

export default (env: string) =>
{
    const DEV  = "DEV";
    const ROOT = Path.resolve(__dirname, "../");

    let entries = {} as Webpack.Entry;
    let matches = new Glob.GlobSync(`${ROOT}/source/views/*`).found;

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
        context: ROOT,
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
                Path.join(ROOT, "source"),
                Path.join(ROOT, "node_modules", "surfacer-es5"),
                Path.join(ROOT, "node_modules")
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

    let envConfig = env == DEV ? devConfig : prodConfig;

    envConfig.plugins = envConfig.plugins || [];
    envConfig.plugins.push(new injectViewPlugin())

    return Object.assign
    (
        config,
        envConfig
    ) as Webpack.Configuration;
}