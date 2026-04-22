const http = require('http');

http.createServer((req, res) => {
  res.end("DevOps App is LIVE 🚀");
}).listen(3000, '0.0.0.0');
