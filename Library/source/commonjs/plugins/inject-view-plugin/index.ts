//import * as Path from "path";
//import * as FS   from "fs";

namespace InjectViewPlugin
{
    export interface Options
    {
        entries?:   Array<string>;
        template?: (entry: string) => string;
    }
}

export default class InjectViewPlugin
{
    private _options: InjectViewPlugin.Options|null;

    constructor(options?: InjectViewPlugin.Options)
    {
        if (options)
            this._options = options;
    }

    apply (compiler: any)
    {
        const self = this;
        compiler.plugin
        (
            "emit",
            function(this: any, compilation: any, callback: (error?: Error) => void)
            {
                let entries: Array<string>;
                if (self._options && self._options.entries)
                    entries = self._options.entries;
                else
                    entries = compilation.entries.map(x => x.context.replace(this.context, "").replace(/\\/g, "/"));

                for (let entry of entries)
                {
                    let template: string;
                    if (self._options && self._options.template)
                        template = self._options.template(entry);
                    else
                    {
                        let view = entry.replace(/\/(view)s?\/((?:\w|\-)+)/, "$1-$2");
                        template = `<${view}></${view}>`;
                    }

                    let html =
                    [
                        "<!DOCTYPE html>",
                        "<html>",
                        "     <head>",
                        '         <meta charset="utf-8" />',
                        '         <script type="text/javascript" src="index.js"></script>',
                        "     </head>",
                        "     <body>",
                        `         ${template}`,
                        "     </body>",
                        "</html>",
                    ].join("\n");

                    compilation.assets[`${entry}/index.html`] =
                    {
                        source: () => html,
                        size:   () => html.length
                    };
                }

                callback();
            }
        );
    };
}