const http = require("node:http");
const fs = require("node:fs");

const desiredPort = process.env.PORT ?? 8000;

const processRequest = (req, res) => {
  if (req.url === "/") {
    fs.readFile("./client/index.html", (err, data) => {
      res.setHeader("Content-Type", "text/html; charset=utf8");
      res.end(data);
    });
  } else if (req.url === "/about") {
    fs.readFile("./client/about.html", (err, data) => {
      res.setHeader("Content-Type", "text/html; charset=utf8");
      res.end(data);
    });
  } else if (req.url === "/contact-me") {
    fs.readFile("./client/contact-me.html", (err, data) => {
      res.setHeader("Content-Type", "text/html; charset=utf8");
      res.end(data);
    });
  } else {
    res.statusCode = 404;
    fs.readFile("./client/404.html", (err, data) => {
      res.setHeader("Content-Type", "text/html; charset=utf8");
      res.end(data);
    });
  }
};

const server = http.createServer(processRequest);

server.listen(desiredPort, () => {
  console.log(`listening on port http://localhost:${desiredPort}`);
});
