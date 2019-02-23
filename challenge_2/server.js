var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var Converter = require('./middleware/converter');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(Converter); //middleware to convert json to csv? 
app.use(express.static('client'));



// var form = `<!DOCTYPE html>
// <html>
//   <head>
//     <title>Training Form</title>
//   </head>
//   <body>
//     <h1>Training Form</h1>
//     <form action="/converter" method="POST">
//       Date: <input type="date" name="date">
//       <br>
//       Trainee First Name: <input type ="text" name="traineeFirstName">
//       Trainee Last Name: <input type ="text" name="traineeLastName">
//       <br>
//       Trainer First Name: <input type ="text" name="trainerFirstName">
//       Trainer Last Name: <input type ="text" name="trainerLastName">
//       <br>
//       Training Bench: 
//       <br>
//       <select name="trainingBench">
//         <option>Pre-Analytical</option>
//         <option>Extraction</option>
//         <option>Library Preparation</option>
//         <option>Sequencing</option>
//       </select>
//       <br>
//       <input type="submit">
//     </form>
//     <script src='server.js'></script>
//   </body>
// </html>`

var form2 = `<!DOCTYPE html>
<html>
  <head>
    <title>Training Form</title>
  </head>
  <body>
    <h1>Training Form</h1>
    <form action="/converter" method="POST">
    <input type="file">

      <input type="submit">
    </form>
    <script src='server.js'></script>
  </body>
</html>`;


app.get('/', function(req, res) {
  res.send(form2);
})


app.post('/converter', function(req, res) {

  var results = req.csv;

  res.send(results + form2);
})

app.listen(3000);

