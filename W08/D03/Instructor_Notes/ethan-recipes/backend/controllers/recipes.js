console.log('recipes.js loaded');
var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

//make a new recipe
router.post('/new', function(req, res) {
  //DUMMY DATA FOR TESTING
  // var newRecipe = {
  //   name: "banana bread",
  //   author: "wdi-al-khwarizmi",
  //   time: 60,
  //   difficulty: "medium",
  //   ingredients: [],
  //   instructions: "Go buy it from a store. No not really. Go find someone who likes to bake and make them do it for you."
  // };

  recipesCollection.insert([newRecipe],function(err, result) {
    if (err) {
      console.error.bind('error inserting new recipe into db', err);
    } else {
      res.json(result);
    }
  });
});

//index -- show all recipes
router.get('/', function(req, res) {
  var recipes = recipesCollection.find().toArray(function(err, result){
    if (err) {
      console.error.bind('error finding recipes in db', err);
    } else {
      res.json(result);
    }
  });
});

//show one recipe
router.get('/:name', function(req, res) {
  var name = req.params.name;
  var recipe = recipesCollection.find({name: name}).toArray(function(err, result){
    if (err) {
      console.error.bind('error finding ' + name + ' in db:', err);
    } else {
      res.json(result[0]);
    }
  });
});

//edit a recipe
router.put('/:name', function(req, res) {
  //TODO code goes here
});

//delete a recipe
router.delete('/:name', function(req, res) {

});

module.exports = router;
