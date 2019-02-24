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
app.use(express.static('client'));


var form2 = `<!DOCTYPE html>
<html>
  <head>
    <title>JSON to CSV</title>
  </head>
  <body>
    <h1>JSON to CSV</h1>
    <form id="form" enctype="multipart/form-data" action="/converter" method="POST">
    <input type="file" accept=".json" name="json">
      <input type="submit">
    </form>
    <a id="downloadCSV" href=""></a> 
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="app.js"></script>
  </body>
</html>`;

var createHeaders = jsonObject => {
  var headersArray = [];
  for (var key in jsonObject) {
    if (key !== 'children') {
      headersArray.push(key);
    }
  }

  var headersString = headersArray.join(',');
  // console.log('headersString---------------------', headersString);
  return headersString;
}

var createValues = jsonObject => {
  var valueArray = [];
  for (var key in jsonObject) {
    if (key !== 'children') {
      valueArray.push(jsonObject[key]);
    } 
  }
  var valuesString = valueArray.join(',');
  

  if (jsonObject.children !== []) {
    for (var i = 0; i < jsonObject.children.length; i++) {
      valuesString += "\n" + createValues(jsonObject.children[i]);
    }
  }
  return valuesString;
}

var converter = (jsonObject) => {
  var csv = createHeaders(jsonObject) + "\n" + createValues(jsonObject);
  return csv;

}

app.get('/converter', function(req, res) {
  res.send(form2);
})


app.post('/converter', upload.single('json'), function(req, res) {
  console.log('req=========================', req.body.results);
  var obj = JSON.parse(req.body.results);
  
  // console.log('type of', typeof req.body.results);
  // var obj = req.body.results;

  var results = converter(obj);
  res.send(results);
})


app.listen(3000);

