const http = require('http');
const textBody = require("body");

const resources = {
  "/IP": "Internet Protocol",
  "/TCP": "Transmission Control Protocol",
  "/fukyu": "no fukme"
};

const hostname = '127.0.0.1';
// const hostname = null;
// const hostname = '192.168.200.42';
const port = 3000;

const server = http.createServer((req, res) => {

  let body;
  if (req.method === "GET") {
    if (resources[req.url] === undefined) {
      res.statusCode = 404;
      res.end()
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      body = resources[req.url];
      res.end(body)
    }
  } else if (req.method === "PUT") {
    console.log(req.method, "at", req.url)
    
    
    textBody(req, res, (err, reqBody) => {
      resources[req.url] = reqBody;
      body = resources[req.url];
      
      res.setHeader('Content-Type', 'text/plain');
      res.statusCode = 201;
      res.end(reqBody)
    })
    
  }

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});