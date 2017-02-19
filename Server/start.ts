import * as HTTP from "http";
import * as FS   from "fs";
import * as Path from "path";

const port = process.env.port as number || 1337
const root = Path.resolve(__dirname);

HTTP.createServer
(
    (request, response) =>
    {
        try
        {
            if (request.url == "/")
            {
                loadFile(response, Path.join(root, "views/home/index.html"));
            }
            else
            {
                loadFile(response, Path.join(root, request.url));

                //if (request.url.indexOf(".js") > -1)
                //{
                //    loadJS(response, Path.join(root, request.url));
                //}
                //else if (request.url.indexOf(".ts") > -1)
                //{
                //    loadJS(response, Path.join(Path.resolve(root, "../source"), request.url));
                //}
                //else
                //{
                //    loadFile(response, Path.join(root, request.url));
                //}
            }
        }
        catch (error)
        {
            response.writeHead(404, { "Content-Type": "text/plain" });
            response.end(error.message);
        }
    }
)
.listen(port);

function loadFile(response: HTTP.ServerResponse, path: string): void
{
    try
    {
        let contentType = 'text/html';
        let extension = Path.extname(path);
        switch (extension)
        {
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
    catch (error)
    {
        throw error;
    }
}

function loadJS(response: HTTP.ServerResponse, path: string): void
{
    try
    {
        let data = FS.readFileSync(path);

        eval(data as any);
        response.writeHead(200, { "Content-Type": "text/html", "content-lenght": data.length });
        response.end(data);
    }
    catch (error)
    {
        throw error;
    }
}