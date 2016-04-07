var express = require('express');
var cors = require('cors');
var fs = require('fs');
var app = express();

app.use(cors());

var PORT = process.env.PORT || 3000;


app.get('/', function(request, response) {
  console.log('incoming GET request');


  fs.readFile('data/babblr.json', 'utf-8', function(error, data){
    if (error) return console.log(error);
    console.log(data);
    response.json(JSON.parse(data));
  });


  fs.writeFile('data/babblr.json', JSON.stringify(parsed) function(err){
    response.json({success: true});
  }


});

app.post('/', function(request, response) {
  console.log('incoming POST request');
  fs.readFile('data/babblr.json', 'utf-8', function(error, data){
    if (error) return console.log(error);
    console.log(data);
    response.json(JSON.parse(data));
  });


  fs.writeFile('data/babblr.json', JSON.stringify(parsed) function(err){
    response.json({success: true});
  }
});

app.listen(PORT, function() {
  console.log('server is up and running on port', PORT);
});
