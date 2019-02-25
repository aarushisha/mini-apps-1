var express = require('express');
var path = require('path');
var app = express();
app.use(express.static('public'));


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.get('/form1', function(req, res) {
  console.log(req);

});





app.listen(8000);

