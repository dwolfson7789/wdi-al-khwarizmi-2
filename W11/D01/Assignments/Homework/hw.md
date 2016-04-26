RAILS CHEATSHEET

1. `rails new [APPNAME]`
  * creates a directory inside the current directory named `/appname`
  * inside that directory, creates a new Rails app. Notable pieces of the application that we care about:
    * Gemfile -- sorta like package.json, your Gemfile lists all the 'gems' (equivalent of npm packages) your app uses. If you change your gemfile you'll need to run `bundle install` to incorporate the changes
    * /config/routes.rb -- all your routes live here
    * /db/migrate/ -- here's where your database tables are created. One for each model you make
    * /db/seeds.rb -- seed data for your database lives here
    * /app/controllers/ -- controllers live here
    * /app/views/ -- views live here
    * /app/models/ -- models live here
1. `cd [appname]` to enter your app
1. Let's create a model. E.g., `rails g model Product name:string price:integer active:boolean`. This will create a new model for Product. If you open your app in Atom and inspect /db/migrate you'll see some long filename that looks like this: `20160425143950_create_products.rb`. (The number is a date/timestamp.) This should feel familiar by now. Create models for all the elements in your database. For Recipe Manager, we're probably looking at Recipe and Ingredient (which should have a `recipe:references` column).
1. Seed some data. Copy over Syed's seed file and make yours the same way.
1. Run `rake db:create` (if you're using Postgres; if you're using SQLite no need to run this command).
1. Run `rake db:migrate` and `rake db:seed` to run your migrations and seed your DB. If you screwed up `rails destroy model Modelname` and then `rake db:drop`, `rake db:migrate`, `rake db:seed`.
1. Create controllers `rails g controller [controllername]`.
1. Modify `config/routes.rb` as necessary (see today's in-class demo / lab)
1. If necessary, modify `app/controllers/application_controller.rb` to change `null_session` piece as indicated in comment (and as we did in class today)
1. If necessary (it should be) add in `gem 'rack-cors', :require => 'rack/cors'` in your Gemfile (re-run `bundle install`) and modify /config.ru as we did today in class. (docs available at https://github.com/cyu/rack-cors)
1. In your controllers, add in the methods (index, show, etc.) that you need.
1. in `app/views/` add in `[viewname].json.jbuilder` files and build the JSON accordingly
1. start your server and check it's working!
1. Profit?
