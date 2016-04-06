console.log('ingredients.js loaded');

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

//CREATE make a new incredient
router.post('/new', function(req, res) {
  console.log('get req to ingredients/new');

  //THIS IS DUMMY DATA FOR TESTING
  // var newIngredient = {
  //   name: "strawberries",
  //   category: "fruits",
  //   inRecipes: []
  // };
  ingredientsCollection.insert([newIngredient],function(err, result) {
    if (err) {
      console.error.bind('error inserting new ingredient into db', err);
    } else {
      res.json(result);
    }
  });
});

// show: get one ingredient
router.get('/:name', function(req, res) {
  var name = req.params.name;
  var recipe = ingredientsCollection.find({name: name}).toArray(function(err, result){
    if (err) {
      console.error.bind('error finding ' + name + ' in db:', err);
    } else {
      res.json(result[0]);
    }
  });
});

//index route: get all ingredients
router.get('/', function(req, res) {
  var ingredients = ingredientsCollection.find().toArray(function(err, result){
    if (err) {
      console.error.bind('error finding ingredients in db', err);
    } else {
      res.json(result);
    }
  });
});

//edit an ingredient
router.put('/:name', function(req, res) {
  //code goes here TODO
});

//delete an ingredient
router.delete('/:name', function(req, res) {
  //code goes here TODO
});

module.exports = router;
