var express = require('express');
var cors = require('cors');
var fs = require('fs');
var app = express();

/* let's add the ability ajax to our server from anywhere! */
app.use(cors());


/* depending on the kind of request fire the right callback */
app.get('/', function(request, response){
  fs.readFile('./contacts.json', function(err, data){
    response.json(JSON.parse(data));
  })
});

app.post('/', function(request, response){
  //read the current contents, push. then write.
  fs.readFile('./contacts.json', function(err, data){
    var parsed  = JSON.parse(data);
    parsed.push({ "name" : "salahuddin"});
    fs.writeFile('./contacts.json', JSON.stringfiy(parsed), function(err){
      response.json('{"success": "true"}')
    });
  });
});

/* listen to requests */
app.listen(3000, function(){
  console.log('listen to events on a "port" of the computer')
});
