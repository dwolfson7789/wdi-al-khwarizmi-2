var express = require('fs');
var bodyParser = require('body-parser');
var cors = require('cors');
var fs = require('fs');

var app = express;

app.use(cors());
app.use(bodyParser.json());

/* our routes */

app.get('/', function(request, response){
  response.json({"description":"contactr api"});
});

/* get all */

app.get('/contacts', function(request, response){
  fs.readFile('./contacts.json', function(err, data){
    response.json(JSON.parse(data));
  });
})

/* get one */

app.get('/contact/:name', function(request, response){
  fs.readFile('./contacts', function(err, data){
    var contacts = JSON.parse(data);
    var contact = contacts.filter(function(obj){
      if(obj["name"] == request.params.name){
        return true;
      } else {
        return false;
      }
    });

  });
});

/* create a new resource */
//app.post

/* update a specific resource */
//app.put

/* delete a specific resource */
//app.delete
