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

var tableQuery = 'CREATE TABLE IF NOT EXISTS checkout_users (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name CHAR, email CHAR, password CHAR, address1 CHAR, address2 CHAR, city CHAR, state CHAR, zipCode CHAR, phone CHAR, cc CHAR, exp CHAR, cvv CHAR, billingZipCode CHAR)'

db.query(tableQuery, function(err, result) {
  if (err) {
    console.log('error in creating table checkout_users', err)
  } else {
    console.log('created table checkout_users');
  }
});