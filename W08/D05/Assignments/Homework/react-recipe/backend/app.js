// run `nodemon app.js`

//source react-ajax-solution

var express = require('express');
var cors = require('cors');
var fs = require('fs');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var app = express();


app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// MongoClient lets us interface/connect to mongodb
var MongoClient = mongodb.MongoClient;

var mongoUrl = 'mongodb://localhost:27017/recipeapp';

app.get('/', function(request, response){
  response.json({"description":"recipe api"});
});

/* get all recipes */
app.get('/recipes', function(request, response){
  MongoClient.connect(mongoUrl, function (err, db) {
    var recipesCollection = db.collection('recipes');
    if (err) {
      console.log('Unable to connect to the mongoDB server. ERROR:', err);
    } else {
      /* Get all */
      recipesCollection.find().toArray(function (err, result) {
        if (err) {
          console.log("ERROR!", err);
          response.json("error");
        } else if (result.length) {
          response.json(result);
        } else { //
          console.log('No document(s) found with defined "find" criteria');
          response.json("no recipes found");
        }
        db.close(function() {
          console.log( "database CLOSED");
        });
      }); // end find

    } // end else
  }); // end mongo connect
}); // end get all

/* add new */
app.post('/recipes/new', function(request, response){

  console.log("REQUEST.BODY", request.body);

  MongoClient.connect(mongoUrl, function (err, db) {
    var  recipesCollection = db.collection('recipes');
    if (err) {
      console.log('Unable to connect to the mongoDB server. ERROR:', err);
    } else {
      // We are connected!//
      console.log('Connection established to', mongoUrl);
      console.log('Adding new user...');

      /* Insert */
      var newUser = request.body;
      recipesCollection.insert([newUser], function (err, result) {
        if (err) {
          console.log(err);
          response.json("error");
        } else {
          console.log('Inserted.');
          console.log('RESULT!!!!', result);
          console.log("end result");
          response.json(result);
        }
        db.close(function() {
          console.log( "database CLOSED");
        });
      }); // end insert
    } // end else
  }); // end mongo connect
}); // end add new

/* find contact */
app.get('/recipes/:name', function(request, response){

  MongoClient.connect(mongoUrl, function (err, db) {
    var recipesCollection = db.collection('recipes');
    if (err) {
      console.log('Unable to connect to the mongoDB server. ERROR:', err);
    } else {
      // We are connected!
      console.log('Finding by name... ');
      var recipesCollection = db.collection('contacts');
      /* Get contact */
      recipesCollection.find(request.params).toArray(function (err, result) {
        if (err) {
          console.log("ERROR!", err);
          response.json("error");
        } else if (result.length) {
          console.log('Found:', result);
          response.json(result);
        } else { //
          console.log('No document(s) found with defined "find" criteria');
          response.json("no recipesrecipes found");
        }
        db.close(function() {
          console.log( "database CLOSED");
        });
      }); // end find
    } // end else
  }); // end mongo connect

});

/* delete contact */
app.delete('/recipes/:name', function(request, response) {
  // response.json({"description":"delete by name"});
  console.log("DELETING...");
  console.log("request.body:", request.body);
  console.log("request.params:", request.params);

  MongoClient.connect(mongoUrl, function (err, db) {
    var recipesCollection = db.collection('recipes');
    if (err) {
      console.log('Unable to connect to the mongoDB server. ERROR:', err);
    } else {
      // We are connected!
      console.log('Deleting by name... ');

      /* Delete  */
      recipesCollection.remove(request.params, function(err, numOfRemovedDocs) {
        console.log("numOfRemovedDocs:", numOfRemovedDocs);
        if(err) {
          console.log("error!", err);
        } recipeselse { // after delietion, retrieve list of all contacts
          recipesCollection.find().toArray(function (err, result) {
            if (err) {
              console.log("ERROR!", err);
              response.json("error");
            } else if (result.length) {
              console.log('Found:', result);
              response.json(result);
            } else { //
              console.log('No document(s) found with defined "find" criteria');
              response.json("no recipes found");
            }
            db.close(function() {
              console.log( "database CLOSED");
            });
          }); 

        } 
      }); 

    } 
  }); /

});

/* update contact */
app.put('/recipes/:name', function(request, response) {

  console.log("request.body", request.body);

  var old = {name: request.body.name};
  var updateTo = {name: request.body.newName, ingredients: request.body.newIngredient}

  MongoClient.connect(mongoUrl, function (err, db) {
    var recipesCollection = db.collection('recipes');
    if (err) {
      console.log('Unable to connect to the mongoDB server. ERROR:', err);
    } else {
      // We are connected!
      console.log('Updating by name... ');

      /* Update recipe */
      recipesCollection.update(old,updateTo);


      setTimeout(function() {
        recipesCollection.find(updateTo).toArray(function (err, result) {
          if (err) {
            console.log("ERROR!", err);
            response.json("error");
          } else if (result.length) {
            console.log('Found:', result);
            response.json(result);
          } else { //
            console.log('No document(s) found with defined "find" criteria');
            response.json("no recipes found");
          }
          db.close(function() {
            console.log( "database CLOSED");
          }); // end db close
        }); 
      }, 1000);
    } 
  }); 
}); 

/* tell our app where to listen */
app.listen(3000, function(){
  console.log('listen to events on a "port".')
});
