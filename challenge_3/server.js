var express = require('express');
var mysql =  require('mysql');
var path = require('path');
var app = express();
app.use(express.static('public'));


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.listen(8000);

var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: ''
});

db.connect(function(error) {
  if (error) {
    console.log('Error connecting to mysql: ', error);
  } else {
    console.log('mysql is connected')
  }
});