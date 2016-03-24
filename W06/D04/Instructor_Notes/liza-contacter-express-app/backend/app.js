var express = require('express');
var cors = require('cors');
var fs = require('fs');
var bodyParser = require('body-parser');
var app = express();

/* add the ability to ajax our server!! */
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

/* depending on the kind of req we get, fire the right callback */
app.get('/', function(request, response) {
  // read the json file
  fs.readFile('./contacts.json', function(err, data) {
    response.json( JSON.parse(data) );
  });
});

app.post('/', function(request, response) {
  console.log("request.body", request.body);
  var newContact = request.body;

  fs.readFile('./contacts.json', function(err, data) {
    console.log("data", data);
    var parsed = JSON.parse(data);
    parsed.push(newContact);
    fs.writeFile('./contacts.json', JSON.stringify(parsed), function(err) {
      response.json({success: true})
    }) // end writeFile
  }); // end readFile
}); // end post

app.listen(3000, function() {
  console.log("listening on a port.");
});
