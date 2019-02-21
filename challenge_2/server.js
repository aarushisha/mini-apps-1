var express = require('express');
var bodyParser = require('body-parser');
var Converter = require('./middleware/converter');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(Converter); //middleware to convert json to csv? 
app.use(express.static('client'));

app.post('/', function(req, res) {
  console.log("Hi!");
  res.send("Hello World!");

})

