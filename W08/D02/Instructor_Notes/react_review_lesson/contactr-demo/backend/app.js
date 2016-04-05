// backend: run `nodemon app.js` to begin listening to localhost:3000
// FE will make requests to localhost:3000
// Resources: http://blog.modulus.io/mongodb-tutorial


var express = require('express');
var cors = require('cors');
var fs = require('fs');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var app = express();

/* let's add the ability ajax to our server from anywhere! */
app.use(cors());
/* extended:true = put it in an obj */
app.use(bodyParser.urlencoded({extended: true}));

// MongoClient lets us interface/connect to mongodb
var MongoClient = mongodb.MongoClient;
// Connection url where your mongodb server is running.
var mongoUrl = 'mongodb://localhost:27017/contacter_app';

/*** our backend routes ***/
/* depending on the kind of request, fire the right callback */

/* welcome page */
app.get('/', function(request, response){
  response.json({ description: "Oh hai. This is the contactr api" });
});

/* get all contacts */
app.get('/contacts', function(request, response){
  // response.json({ description: "get all contacts" });

  MongoClient.connect(mongoUrl, function (err, db) {
    var contactsCollection = db.collection('contacts');
    if (err) {
      console.log('Unable to connect to the mongoDB server. ERROR:', err);
    } else {
      /* Get all */
      contactsCollection.find().toArray(function (err, result) {
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
