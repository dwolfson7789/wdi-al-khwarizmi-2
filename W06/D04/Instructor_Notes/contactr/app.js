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
    response.json('{"description":"contactr api", "version": "0.1.0"}');
  });
});

/* get all contacts */
app.get('/contacts', function(request, response){
  fs.readFile('./contacts.json', function(err, data){
    response.json(JSON.parse(data));
  });
});

/* get names  */
app.get('/names', function(request, response){
  fs.readFile('./contacts.json', function(err, data){
    var contacts = JSON.parse(data);
    // reformat the array so we only have names.
    var names = contacts.map(function(obj){
      var name = {};
      name["name"] = obj.name;
      return name;
    });
    response.json(names);
  });
});

/* get emails*/
app.get('/emails', function(request, response){
  fs.readFile('./contacts.json', function(err, data){
    var contacts = JSON.parse(data);
    // reformat array
    var emails = contacts.map(function(obj){
      var email = {};
      email["email"] = obj.email;
      return email
    });
    response.json(emails);
  });
});

/* query for a specific contact */
app.get('/contact', function(request, response){
  console.log(request.query);
  fs.readFile('./contacts.json', function(err, data){
    var parsed = JSON.parse(data);
    var name = parsed.filter(function(obj){
      if(obj["name"] == request.query.name){
        return true;
      } else{
        return false;
      }
    });

    // check if the filter has any names.
    name.length >= 1 ? response.json(name) : response.status(404).send('Not found!');

  });
});

/* post */
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
