var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var Converter = require('./middleware/converter');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(Converter); //middleware to convert json to csv? 
app.use(express.static('client'));


app.get('/', function(req, res) {
  res.render('/client/index.html');
})


app.post('/upload_json', function(req, res) {
  console.log('req.body in server----------------------------------------------', req.body);
})

app.listen(3000);

