var express               = require('express'),
    app                   = express(),
    cors                  = require('cors'),
    bodyParser            = require('body-parser'),
    mongodb               = require('mongodb'),
    MongoClient           = mongodb.MongoClient,
    MongoUrl              = 'mongodb://localhost:27017/recipe_manager',
    recipesController     = require('./controllers/recipes.js'),
    ingredientsController = require('./controllers/ingredients.js'),
    PORT                  = 3000;

// MIDDLEWARE
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// ROUTERS
// any routes that begin with the paths specified will be processed using the indicated controller
app.use('/recipes',recipesController);
app.use('/ingredients', ingredientsController);


// INITIATING DB CONNECTION AND STARTING SERVER
MongoClient.connect(MongoUrl, function(err, db) {
  if (err) {
    console.error.bind('error containing to db', err);
  } else {
    recipesCollection = db.collection('recipes');
    ingredientsCollection = db.collection('ingredients');
    app.listen(PORT, function(err) {
      if (err) {
        console.error.bind('error starting up server', err);
      } else {
        console.log("connected to MongoDB at", MongoUrl);
        console.log("server up and running on port", PORT);
      }
    });
  }
});
