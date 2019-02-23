var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var Converter = require('./middleware/converter');
var multer  = require('multer');
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(Converter); //middleware to convert json to csv? 
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
    <form enctype="multipart/form-data" action="/converter" method="POST">
    <input type="file" accept=".json" name="json">
      <input type="submit">
    </form>
    <script src='server.js'></script>
  </body>
</html>`;

var flatten = (jsonObject) => {
  for (var key in jsonObject) {
    if (key === "children") {
      
    }
  }

}


var converter = (jsonObject) => {

  var str = '';
  for (var key in jsonObject) {
    str += key + ',';
  }

  var headerStr = str.slice(0, str.length - 1);

  var strV = '';
  for (var key in jsonObject) {
    strV += jsonObject[key] + ',';
  }

  var valueStr = strV.slice(0, strV.length - 1);

  var csv = headerStr + "\n" + valueStr;
  // console.log('comma separated values-----------------', csv);

return csv;

}





app.get('/', function(req, res) {
  res.send(form2);
})


app.post('/converter', upload.single('json'), function(req, res) {
  console.log('req.file.buffer in POST====================', req.file.buffer)

  var obj = JSON.parse(req.file.buffer);
  console.log("obj------------------------------------", obj);

  var results = converter(obj);

  res.send(results + form2);
})

app.listen(3000);

