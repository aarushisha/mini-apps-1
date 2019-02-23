var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var Converter = require('./middleware/converter');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(Converter); //middleware to convert json to csv? 
app.use(express.static('client'));


// var convertToCSV = function(obj) {
//   var str = '';
//   for (var key in obj) {
//     str += key + ',';
//   }

//   var headerStr = str.slice(0, str.length - 1);

//   var strV = '';
//   for (var key in obj) {
//     strV += obj[key] + ',';
//   }

//   var valueStr = strV.slice(0, strV.length - 1);

//   var csv = headerStr + "\n" + valueStr;

//   return csv;
// }

var form = `<!DOCTYPE html>
<html>
  <head>
    <title>Training Form</title>
  </head>
  <body>
    <h1>Training Form</h1>
    <form action="/converter" method="POST">
      Date: <input type="date" name="date">
      <br>
      Trainee First Name: <input type ="text" name="traineeFirstName">
      Trainee Last Name: <input type ="text" name="traineeLastName">
      <br>
      Trainer First Name: <input type ="text" name="trainerFirstName">
      Trainer Last Name: <input type ="text" name="trainerLastName">
      <br>
      Training Bench: 
      <br>
      <select name="trainingBench">
        <option>Pre-Analytical</option>
        <option>Extraction</option>
        <option>Library Preparation</option>
        <option>Sequencing</option>
      </select>
      <br>
      <input type="submit">
    </form>
    <script src='server.js'></script>
  </body>
</html>`


app.get('/', function(req, res) {
  res.send(form);
})


app.post('/converter', function(req, res) {
  console.log('req.body in server----------------------------------------------', req.body);
  //The response from the server should contain the CSV report along with the form so the user 
  // can keep submitting indefinitely, without having to go back to the "form page".

  var results = req.csv;




  // res.render('/client/index.html');
  res.send(results + form);
})

app.listen(3000);

