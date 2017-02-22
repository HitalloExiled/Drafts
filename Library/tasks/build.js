"use strict";
const ChildProcess = require("child_process");
const WATCH = "--watch";
let switchers = process.argv.slice(2);
let isWatching = switchers.filter(x => x == WATCH).length > 0;
let configs = [
    "es2015.json",
    "es2015-es5.json",
    "commonjs.json",
    "commonjs-es5.json"
];
if (isWatching)
    console.log(isWatching ? "Watching..." : "Building...");
ChildProcess.exec("rimraf ./build")
    .on("exit", code => console.log(`Clear ./build directory... ${code == 0 ? "ok" : `finished with code ${code}`}`));
let log = (step, process) => {
    process.stdout.on("data", data => console.log(`${step} - ${data}`));
    process.stderr.on("data", data => console.log(`${step} - ${data}`));
    process.on("exit", code => console.log(`${step} - ${code == 0 ? "ok" : `finished with code ${code}`}`));
};
configs.forEach(config => log(`Compiling ${config}`, ChildProcess.exec(`tsc -p ./configs/${config} ${switchers.join(" ")}`)));
let outputs = [
    "",
    "surfacer-es5"
];
outputs.forEach(output => log(`Copy to static files to ./Build/${output}`, ChildProcess.exec(`cpx ./source/**/*.{d.ts,html,css} ./build/${output} ${isWatching ? WATCH : ""}`)));
//# sourceMappingURL=build.js.map