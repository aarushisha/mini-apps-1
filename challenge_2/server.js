var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var Converter = require('./middleware/converter');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(Converter); //middleware to convert json to csv? 
app.use(express.static('client'));


var convertToCSV = function(obj) {
  var str = '';
  for (var key in obj) {
    str += key + ',';
  }

  var headerStr = str.slice(0, str.length - 1);

  var strV = '';
  for (var key in obj) {
    strV += obj[key] + ',';
  }

  var valueStr = strV.slice(0, strV.length - 1);

  var csv = headerStr + '\n' + valueStr;

  return csv;
}




app.get('/', function(req, res) {
  res.sendFile(__dirname + '/client/index.html');
  res.render('/client/index.html');
})


app.post('/', function(req, res) {
  console.log('req.body in server----------------------------------------------', req.body);
  var csvFile = convertToCSV(req.body);
  console.log(csvFile);

  res.send(csvFile);
})

app.listen(3000);

