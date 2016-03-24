var express = require('express');
var bodyParser = require('body-parser')
var cors = require('cors');
var fs = require('fs');

var app = express();

/* add neat features to our server */
app.use(cors());
app.use(bodyParser.json());


/* depending on the kind of request, fire the right callback */
app.get('/', function(request, response){
  fs.readFile('./contacts.json', function(err, data){
    response.json(JSON.parse(data));
  })
});

app.post('/', function(request, response){
  //read the current contents.
  fs.readFile('./contacts.json',  function(err, data){
    // parse and push the body of our request on to our array
    var parsed = JSON.parse(data);
    // body parser gives us the body property
    parsed.push(request.body);
    fs.writeFile('./contacts.json', JSON.stringify(parsed), function(err){
      // this can be anything
      response.json('{"success":"true"}');
    });
  });
});

/* listen to requests from the operating system */
app.listen(3000, function(){
  console.log('listen to events on a "port" (3000) of the localhost of this computer')
});
