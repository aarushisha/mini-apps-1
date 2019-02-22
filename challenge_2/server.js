var express = require('express');
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


app.post('/', function(req, res) {
  console.log('req.body in server----------------------------------------------', req.body);
  console.log('res.body in server----------------------------------------------', res);
})

app.listen(3000);

