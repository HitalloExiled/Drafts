import * as ChildProcess from "child_process";
import * as Path         from "path";

let build  = Path.resolve(__dirname, "../build");
let source = Path.resolve(__dirname, "../source");

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
           
    let tsconfig = Path.join(source, "tsconfig.json");
    compile("Compiling modules", tsconfig, switchers.concat(["--outDir", build]));
}

function copyStaticFiles(isWatching: boolean)
{
    console.log(`Copy static files of @surface modules from source to build`);
    ChildProcess.exec(`cpx ${source}/@surface/**/*.{d.ts,html} ${build} ${isWatching ? "--watch" : ""}`);
}

execute();