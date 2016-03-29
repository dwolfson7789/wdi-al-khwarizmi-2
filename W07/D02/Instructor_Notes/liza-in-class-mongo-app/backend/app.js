// npm init
// npm install...


// require modules
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');

// Express stuff
var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

// MongoClient lets us interface/connect to mongodb
var MongoClient = mongodb.MongoClient;
// Connection url where your mongodb server is running
var mongoUrl = 'mongodb://localhost:27017/contacter_app';

/***************************/
/*** our backend routes ***/
/*************************/
/* welcome page */
app.get('/', function(request, response){
  response.json({"description": "this is the root route."});
});

/* get all contacts */
app.get('/contacts', function(request, response) {
  // response.json({"description": "all contacts"});
  MongoClient.connect(mongoUrl, function(err, db) {
    var contactsCollection = db.collection('contacts');
    if (err) {
      console.log("ERROR", err );
    } else {
      /* GET ALL THE CONTACTS */
      contactsCollection.find().toArray(function(err, result) {
        if (err){
          console.log("THIS IS AN ERROR!", err);
          response.json("error");
        } else if (result.length) {
          console.log("result:", result);
          response.json(result);
        } else {
          console.log("no documents here!");
          response.json("no contacts found");
        }
        db.close(function() {
          console.log("DATABASE CLOSED");
        });
      }); // end .find()
    } // end else



  }); // end mongoclient connect fxn


}); // end get all contacts

/* add new contact */
app.post('/contacts/new', function(request, response) {
  // response.json({"description": "new contact!"});
  console.log("request.body:", request.body);

  var newUser = request.body; // { }
  MongoClient.connect(mongoUrl, function(err, db) {
    var contactsCollection = db.collection('contacts');
    if (err) {
      console.log("ERROR");
    } else {
      // insert into db
      contactsCollection.insert([newUser], function(err, result) {
        if (err) {
          console.log("ERROR");
        } else {
          console.log("RESULT", result);
          response.json(result);
        }
        db.close(function() {
          console.log("HEY DB IS CLOSED");
        });
      });
    } // end else
  }); // end connect
}); // post fxn

/* find contact */
app.get('/contacts/:name/', function(request, response) {
  // response.json({"description":"find contacts route"});
  console.log("request.params", request.params);
  MongoClient.connect(mongoUrl, function(err, db) {
    var contactsCollection = db.collection('contacts');
    if (err) {
      console.log("ERROR");
    } else {
      console.log("finding someone...");
      contactsCollection.find(request.params).toArray(function(err, result) {
        if (err) {
          console.log("ERROR");
        } else if (result.length){
          console.log("result:", result);
          response.json(result);
        } else {
          console.log("no matching documents found");
          response.json("none found.");
        }
        db.close(function() {
          console.log("DB close");
        });
      });
    }

  }); // end connect


});

/* delete contact */
app.delete('/contacts/:name', function(request, response) {
  // response.json({"description":"delete a contact"});
  console.log("request.params", request.params);

  MongoClient.connect(mongoUrl, function(err, db) {
    var contactsCollection = db.collection('contacts');
    if (err) {
      console.log("ERR");
    } else {
      contactsCollection.remove(request.params, function(err, result) {
        if (err){
          console.log("ERR");
        } else {
          console.log(result);
          response.json(result);
        }
        db.close(function() {
          console.log("db closed");
        });
      }); // end .remove
    } // end else
  }); // end connect
}); // end delete

/* update contact */
app.put('/contacts/:name', function(request, response) {
  // response.json({"description":"update a contact"});
  console.log("request.params", request.params);
  console.log("request.body", request.body);
  var old = {
    name: request.body.name
  }
  var updateTo = {
    name: request.body.newName,
    email: request.body.newEmail
  }
  MongoClient.connect(mongoUrl, function(err, db){
    var contactsCollection = db.collection('contacts');
    if (err) {
      console.log("ERR");
    } else {
      contactsCollection.update(old, updateTo);

      setTimeout(function() {
        contactsCollection.find(updateTo).toArray(function(err, result) {
          if (result.length) {
            response.json(result);
          }
          db.close(function() {
            console.log("that's all, folks");
          });
        });
      }, 1000); // end set timeout
    }
  });

});





/* tell our app where to listen */
app.listen(3000, function() {
  console.log("oh hai");
});
