const http = require('http');

const port = 3000;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end("DevOps App is LIVE 🚀");
}).listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});
