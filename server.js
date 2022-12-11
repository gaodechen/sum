const fs = require("fs");
const http = require("http");
const port = 8080;

http
  .createServer(function (req, res) {
    if (req.url === "/") {
      console.log(`Root Request '${req.url}'`);
      fs.readFile(__dirname + "/main.html", function (err, data) {
        if (err) {
          res.writeHead(404);
          res.end(JSON.stringify(err));
          return;
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
    } else if(req.url === "/main.wasm") {
      console.log(`WASM Request '${req.url}'`);
      fs.readFile(__dirname + "/main.wasm", function (err, data) {
        if (err) {
          res.writeHead(404);
          res.end(JSON.stringify(err));
          return;
        }
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(data);
      });
    }
  })
  .listen(port, () => console.log(`Listening on port ${port}`));
