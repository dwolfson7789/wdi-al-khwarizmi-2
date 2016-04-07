
var express = require('express');
var cors = require('cors');
var fs = require('fs');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));

var MongoClient = mongodb.MongoClient;
var mongoUrl = 'mongodb://localhost:27017/recipes';

app.get('/', function(request, response) {
  response.json({description: "This is the recipes API."});
});

app.get('/recipes', function(request, response) {
  MongoClient.connect(mongoUrl, function(err, db) {
    var recipesCollection = db.collection('recipe');
    if (err) {
      console.log("Unable to connect to MongoDB. Error:", err);
    } else {
      recipesCollection.find().toArray(function (err, result) {
        if (err) {
          console.log("Error!", err);
        } else if (result.length) {
          console.log("Found:", result);
          response.json(result);
        } else {
          console.log("No document(s) found.");
          response.json({error: 'No documents found.'});
        }
        db.close(function() {
          console.log("Database closed.");
        });
      });
    }
  });
});

app.get('/recipes/:name', function(request, response) {
  var name = request.params.name;
  MongoClient.connect(mongoUrl, function(err, db) {
    var recipesCollection = db.collection('recipe');
    if (err) {
      console.log("Unable to connect to MongoDB. Error:", err);
    } else {
      recipesCollection.find({name: name}).toArray(function (err, result) {
        if (err) {
          console.log("Error!", err);
        } else if (result.length) {
          console.log("Found:", result);
          response.json(result[0]);
        } else {
          console.log("No document(s) found.");
          response.json({error: 'No documents found.'});
        }
        db.close(function() {
          console.log("Database closed.");
        });
      });
    }
  });
});

app.post('/new', function(request, response) {
  var newRecipe = request.body;
  console.log("request.body:", request.body);
  MongoClient.connect(mongoUrl, function(err, db) {
    var recipesCollection = db.collection('recipe');
    if (err) {
      console.log("Unable to connect to MongoDB. Error:", err);
    } else {
      recipesCollection.find({name: request.body.name}).toArray(function (err, result) {
        if (err) {
          console.log("Error inserting new recipe into DB. Error:", err);
        } else {
          response.json(result);
        }
        db.close(function() {
          console.log("Database closed.");
        })
      });
    }
  });
});

app.listen(3000, function() {
  console.log("Listening on port 3000.");
