const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-Type": "text/plain" });
    res.end("Heloo Node");
  })
  .listen(8001, "127.0.0.1", () => {
    console.log("sever running");
  });
