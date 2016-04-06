var express = require('express');
var cors = require('cors');
var fs = require('fs');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({extended:true}));

var MongoClient = mongodb.MongoClient;

var mongoUrl = 'mongodb://localhost:27017/twitterapp';

app.get('/', function(request, response){
  response.json({ description: "yo shit loaded"});
});

app.get('/', function (request, response){
  mongoClient.connect(mongoUrl, function (err, db){
    var tweetsCollection = db.collection('tweets');
    if (err) {
      console.log("unable to connect to the DB server", err);
    } else {
  tweetsCollection.find().toArray(function (err, result){
    if (err) {
      console.log("ERROR!", err);
      response.json("error");
    } else if (result.length) {
      console.log('Found:', result);
      response.json(result);
    } else { //
      console.log('No document(s) found with defined "find" criteria');
      response.json("no contacts found");
    }
    db.close(function() {
      console.log( "database CLOSED");
    });
  }); // end find
} // end else
}); // end mongo connect
}); // end get all

/* tell our app where to listen */
app.listen(3000, function(){
console.log('listen to events on a "port".')
});
