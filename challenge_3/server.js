var express = require('express');
var mysql =  require('mysql');
var path = require('path');
var bodyParser = require('body-parser')
var app = express();

app.use(express.static('public'));
app.use(bodyParser.json());


app.get('/home', function(req, res) {
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.get('/form1', function(req, res) {
  db.query('INSERT INTO checkout_users (id) VALUES (null)', function(err, result) {
    if (err) {
      console.log('err in getting /form1', err);
    } else {
      console.log('created new row in checkout_users')
    }
  })
});

app.post('/form2', function(req, res) {
  console.log(req.body);
})

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

db.query('CREATE DATABASE IF NOT EXISTS checkout', function(err, result) {
  if (err) {
    console.log('error in creating database', err);
  } else {
    console.log('database created');
  }
});

db.query('USE checkout', function(err, result) {
  if (err) {
    console.log('error in using database checkout', err)
  } else {
    console.log("using database checkout")
  }
});

var tableQuery = 'CREATE TABLE IF NOT EXISTS checkout_users (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name CHAR(30), email CHAR(20), password CHAR(14), address1 CHAR(30), address2 CHAR(30), city CHAR(20), state CHAR(2), zipCode CHAR(5), phone CHAR(12), cc CHAR(20), exp CHAR(4), cvv CHAR(5), billingZipCode CHAR(5))'

db.query(tableQuery, function(err, result) {
  if (err) {
    console.log('error in creating table checkout_users', err)
  } else {
    console.log('created table checkout_users');
  }
});