var express = require('express');
var path = require('path');
var http = require('http');

var app = express();

app.use(express.static(__dirname + '/public/'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname+'/public/'));
});

app.listen(3030);


