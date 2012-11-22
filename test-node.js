var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Teste node\n');
}).listen(80, 'http://75.101.139.176/');
console.log('Server running at http://http://75.101.139.176/:80/');