const http = require('http');

const hostname = '127.0.0.1';
// const hostname = null;
// const hostname = '192.168.200.42';
const port = 3000;

const server = http.createServer((req, res) => {
  console.log('this is the the url' , req.url);
  console.log('this is the header' , req.headers);
  console.log(req.body);
  console.log(req.method);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n Hello from Aaron! what made a change do i have to save wait a sec');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
