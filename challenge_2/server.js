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
    <form enctype="multipart/form-data" action="/converter" method="POST">
    <input type="file" accept=".json" name="json">
      <input type="submit">
    </form>
    <script src='server.js'></script>
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
  console.log('headersString--------------------------------', headersString);
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

  console.log('valuesString----------------------------', valuesString);
  return valuesString;
}

var converter = (jsonObject) => {
  var csv = createHeaders(jsonObject) + "\n" + createValues(jsonObject);
  return csv;

}





app.get('/', function(req, res) {
  res.send(form2);
})


app.post('/converter', upload.single('json'), function(req, res) {
  var obj = JSON.parse(req.file.buffer);
  var results = converter(obj);
  // res.attachment(results);
  res.send(results + form2);
})


app.listen(3000);

