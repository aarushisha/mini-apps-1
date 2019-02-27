var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser')

var app = express();

app.use(express.static('client'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/client/dist/index.html'));
})

app.listen(3333);
