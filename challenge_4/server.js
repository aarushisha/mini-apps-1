var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser')

var app = express();

app.use(express.static(__dirname + '/client/dist/'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/client/dist/'));
})

app.listen(3333, function() {
  console.log("listening");
});
