var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var fs = require('fs');

var app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', function(request, response){
  response.json({hello:"hi"});
});

app.post('/', function(request, response){
  response.json({type:'post'})
});

app.put('/', function(request, response){
  response.json({type:'put'})
});

app.delete('/', function(request, response){
  response.json({type:'delete'})
});

app.listen(3000, function(){
  console.log('listening on port 3000 of this computer');
})
