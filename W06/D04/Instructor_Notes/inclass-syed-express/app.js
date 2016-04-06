var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var fs = require('fs')

var app = express();

/* use plugins! */
app.use(cors());
app.use(bodyParser.json());

app.get('/', function(request, response){
  response.json('{"greeting":"hi hello"}')
});

app.post('/', function(request, response){

  fs.readFile('./contacts.json', function(err, data){
    var parsed = JSON.parse(data);
    parsed.push(request.body);
    fs.writeFile('./contacts.json', JSON.stringify(parsed), function(err){
      response.json({success:true});
    });
  });
});




app.listen(3000, function(){
  console.log('server is listening on port 3000 on local host');
});
