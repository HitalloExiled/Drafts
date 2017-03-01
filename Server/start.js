"use strict";
const HTTP = require("http");
const FS = require("fs");
const Path = require("path");
const port = process.env.port || 1337;
const root = Path.resolve(__dirname);
HTTP.createServer((request, response) => {
    try {
        if (request.url == "/") {
            loadFile(response, Path.join(root, "views/home/index.html"));
        }
        else if (/^\/[^\/]+$/.test(request.url || "")) {
            loadFile(response, Path.join(root, "views/home", request.url || ""));
        }
        else if (request.url) {
            let url = request.url.replace(/\/(.*)/, "$1");
            loadFile(response, Path.resolve(root, url));
        }
    }
    catch (error) {
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.end(error.message);
    }
})
    .listen(port);
function loadFile(response, path) {
    try {
        let contentType = 'text/html';
        let extension = Path.extname(path);
        switch (extension) {
            case '.js':
                contentType = 'text/javascript';
                break;
            case '.map':
                contentType = 'application/json';
                break;
            case '.css':
                contentType = 'text/css';
                break;
            case '.json':
                contentType = 'application/json';
                break;
            case '.png':
                contentType = 'image/png';
                break;
            case '.jpg':
                contentType = 'image/jpg';
                break;
            case '.wav':
                contentType = 'audio/wav';
                break;
        }
        let data = FS.readFileSync(path);
        response.writeHead(200, { "Content-Type": contentType });
        response.write(data);
        response.end();
    }
    catch (error) {
        throw error;
    }
}
//# sourceMappingURL=start.js.map