var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('');
});

app.get('/tri', function(req, res){
  res.send('Teste node.js');
});

app.listen(80);
