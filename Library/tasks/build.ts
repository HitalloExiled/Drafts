import * as ChildProcess from "child_process";
import * as Path         from "path";

let build  = Path.resolve(__dirname, "../build");
let source = Path.resolve(__dirname, "../source");

let paths =
{
    es2015:
    {
        in:     Path.join(source, "es2015"),
        out:    Path.join(build,  "surfacer"),
        outES5: Path.join(build,  "surfacer-es5", "surfacer"),
    },
    commonjs:
    {
        in:  Path.join(source, "commonjs"),
        out: Path.join(build,  "surfacer-plugins"),
    }
};

function execute()
{
    try
    {
        let isWatching = process.argv.filter(x => x == "--watch").length > 0;

        clearBuild();
        compileTS(isWatching);
        copyStaticFiles(isWatching);
    }
    catch (error)
    {
        throw error;
    }
};

function log (step: string, process: ChildProcess.ChildProcess): void
{
    process.stdout.on("data", data => console.log(`${step} - ${data}`));
    process.stderr.on("data", data => console.log(`${step} - ${data}`));
    process.on("exit", code => console.log(`${step} - ${code == 0 ? "ok" : `finished with code ${code}`}`));
};

function clearBuild()
{
    log("Clear build directory...", ChildProcess.exec(`rimraf ${build}`));
}

function compileTS(isWatching: boolean)
{
    let switchers: Array<string> = [];

    if (isWatching)
    {
        console.log(isWatching ? "Watching..." : "Building...");
        switchers.push("--watch");
    }
    switchers.push("--noEmit");
    switchers.push("false");
    switchers.push("--declaration");
    switchers.push("--sourceMap");
    switchers.push("false");

    let compile = (step: string, tsconfig: string, options: Array<string>) =>
        log(step, ChildProcess.exec(`tsc -p ${tsconfig} ${options.join(" ")}`));
   
    let es2015 = Path.join(paths.es2015.in, "tsconfig.json");        
    compile("Compiling es2015 modules", es2015, switchers.concat(["--outDir", paths.es2015.out]));
        
    let es2015ES5 = ["--target", "es5", "--outDir", paths.es2015.outES5];
    compile("Compiling es2015-es5 modules", es2015, switchers.concat(es2015ES5));
    
    let commonjs = Path.join(paths.commonjs.in, "tsconfig.json");
    compile("Compiling commonjs modules", commonjs, switchers.concat(["--outDir", paths.commonjs.out]));
}

function copyStaticFiles(isWatching: boolean)
{
    let targets =
    [
        { module: "es2015",     in: Path.join(paths.es2015.in,   "surfacer"), out: paths.es2015.out },
        { module: "es2015-es5", in: Path.join(paths.es2015.in,   "surfacer"), out: paths.es2015.outES5 },
        { module: "commonjs",   in: Path.join(paths.commonjs.in, "plugins"),  out: paths.commonjs.out }
    ];

    targets.forEach
    (
        target => log
        (
            `Copy static files of ${target.module} modules from ${target.in} to ${target.out}`,
            ChildProcess.exec(`cpx ${target.in}/**/*.{d.ts,html,css} ${target.out} ${isWatching ? "--watch" : ""}`)
        )
    );
}

execute();