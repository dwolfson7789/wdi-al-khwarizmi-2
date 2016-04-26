# HOMEWORK W10D05

TWO MORE WEEKS TO GO!!! !!!

## Ruuuuuuuuby on Rails!

Your assignment, should you choose to accept it, is -- actually strike that. Your assignment, no matter what, is to build a Rails API server!

1. Find your Recipe Manager app from Unit 3 (remember that?)
1. Copy the *frontend* over into today's homework folder.
1. Review your old Express backend. Write down what the routes are that you used (e.g., 'GET /recipes': display all recipes; 'POST /recipes/new': create a new recipe; etc.). If you made a file for yourself noting down what your routes are, this will save you time! If you didn't, well do it now.
1. Don't copy the backend itself to today's homework folder; all you need to know is what the routes are that work with your frontend.
1. Now the fun starts! Go to today's HW folder. create a new Rails backend for your app. (`rails new`). Run `bundle install` to install Gems. Anytime you change your Gemfile (in the app's root directory), you'll need to re-run `bundle install`. Syed's demos and notes from today will be very helpful.
1. Your goal is to get your Rails backend to supply the appropriate API data to your existing frontend!
1. This is going to be *hard* so don't get discouraged!!!
1. You'll need to model your database in app/models/ If you remember from class you can make models with `rails g Tablename field1name:field1type field2name:field2type field3name:field3type [... etc.]` Then you run `rake db:migrate`. You can seed your data in /db/seeds.rb and then run `rake db:seed` to get your db started....
1. You'll need appropriate controllers in app/controllers/
1. All the Rails routes should ideally correspond to your existing routes. You can always check all your routes in a Rails app by running `rake routes` and you'll see all the current routes in your terminal. If you need to change a route because Rails uses a different path than your prior ones, that's fine -- just remember you'll need to change the path of the route on your frontend API call. For example, let's say your path to post a new recipe was POST '/recipe/new' and Rails has it as POST '/recipes/new' (note the plural) -- just change the route on your front end.
1. In your /app/views you're going to need to create .json.jbuilder files to build your json like Syed did in class. E.g., for recipes you'd have recipes.json.jbuilder
1. Make it CORS-compatible like Syed showed ....
1. Again, this is going to be **hard** STUDY Syed's demos! Make sure especially to check out his:
  * /Gemfile
  * /config/routes.rb
  * /db/seeds.rb
  * /app/models/
  * /app/controllers/
  * /app/views/
1. Try to cook something this weekend using your new Rails Recipe Manager!
