const http = require("http")
const host = "localhost";
const port = "8000";

const server = http.createServer(requestListener);

const requestListener = (req, res)=>{
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(`<html><body><h1>This is HTML</h1></body></html>`);
};

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});