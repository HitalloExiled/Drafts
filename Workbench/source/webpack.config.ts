import * as Webpack           from "webpack";
import * as Glob              from "glob";
import * as Path              from "path";
import * as HtmlWebPackPlugin from "html-webpack-plugin";

let entries = {} as Webpack.Entry;
let plugins = [] as Array<Webpack.Plugin>;
let matches = new Glob.GlobSync(`${__dirname}/views/*`).found;

//function customLoader(source: any)
//{
//    debugger;
//    console.log(source);
//    //return FS.readFileSync(source.resource, "utf-8");
//    //const reversed = source.toString().split('').reverse().join('');
//    return `module.exports = ${FS.readFileSync(source.resource, "utf-8")}`;
//}


plugins.push(new HtmlWebPackPlugin());

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

let uglifyOptions =
{
    beautify:  true,
    comments:  false,
    sourceMap: true
} as Webpack.UglifyPluginOptions;

plugins.push(new Webpack.optimize.UglifyJsPlugin(uglifyOptions))

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
        extensions: [".html", ".scss", ".ts", ".js"],
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
            {
                test: /\.(png|jpe?g)$/,
                loader: "url-loader"
            },            
            {
                test: /\.scss$/,
                use:
                [
                    //{
                    //    loader: "file-loader",
                    //    options:
                    //    {
                    //        name: "[path][name].css",
                    //        publicPath: Path.resolve(__dirname, "../www")
                    //    }
                    //},
                    { loader: "url-loader" },
                    { loader: "sass-loader" }
                ]
            },            
            {
                test:    /\.html$/,
                loader:  "html-loader",
                options: { attrs: ['img:src', 'link:href'] }//interpolate: true }
            },
            {
                test:   /\.ts$/,
                loader: "ts-loader"
            },
        ] as Array<Webpack.Rule>,
    } as Webpack.Module
    //plugins: plugins
} as Webpack.Configuration;

export default config;