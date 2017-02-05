import Http = require("http");

var port = process.env.port as number || 1337

Http.createServer
(
    (request, response) =>
    {
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.end("Hello World\n");
    }
)
.listen(port);