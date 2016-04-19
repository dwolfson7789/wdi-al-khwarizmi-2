# Deploying your Backend
#### env variables

We need to assign certain config variables that are ***not*** checked into our repository for security reasons. Things like secret api keys and such.

#### local env

All you have to do to create a `environment variable` is add a name value pair like this `export TACO="tacoapikey"` at the end of your bash profile **(usually located under ~/.bash_profile on a mac)** and you'll be able to use it in your **Back end** node app as `process.env.TACO`, it's global variable you can use anywhere in your app. You can `export` as many variables as you want, `TACO`, `BURRITO`, or `PIZZA` even!

Remember, store anything that is tied to a account key or api secret ket.

```js
process.env.TACO
```
Now instead of having your taco api key exposed. You can just use this global variable whenever you need it in a ajax call.

#### server env

You can also set config variables in heroku as well, we'll need to assign our secret variable so we can deploy our. One is already set for us, which is the process env. you'll see here:

```js
app.server.listen(process.env.PORT || 3000);
```

All this line says if `process.env.PORT` is set use that OR
port `3000`. `PORT` is a variable set by Heroku. If you need to set your own just follow this link (i.e. for you api keys above):

https://devcenter.heroku.com/articles/config-vars

#### mongo env variable

We also need provide a way for heroku to create our database. To do that you need to use a special plug-in called "MongoLab". Follow the instructions for this portion of tutorial plus the follow-up articles there: https://devcenter.heroku.com/articles/mongolab#adding-mlab-as-a-heroku-add-on

Once you're setup you can use the `MONGODB_URI` value in your db connect to connect to your heroku mongo setup.

```javascript
(process.env.MONGODB_URI || 'mongodb://localhost/myapp')
```
This expression says if that URI exists connect to or use this piece of text.

## Heroku and Node

First, we'll need a functioning git repository with our application that includes a package.json file - remember, this is used by Node’s dependency manager. Make sure your `main` points to `index.js`! or whatever your main file is.

## Set up your app for deployment

To verify that the Heroku CLI toolbelt os properly working , type:

```bash
heroku auth:whoami
```

This should display the email corresponding to the logged in account.


### Set up your app for deployment

To verify that the Heroku CLI toolbelt os properly working , type:

```bash
heroku auth:whoami
```

This should display the email corresponding to the logged in account.
If you don't have one then install and sign-up: https://toolbelt.heroku.com/

#### Changing "start" script in package.json

We need to tell Heroku how to get your app going. Open up your package.json. There should be a "scripts" section with one or more scripts listed there, one of which should be `"start"`. It should look something like this
```json
"scripts": {
  "start": "nodemon"
}
```

Change the name of your existing "start" script to "start-dev" so that you can still start it with `nodemon` if you want on your own machine by running `npm run start-dev`.

For Heroku, in production, we want it to just run `node index.js`. So add in a new "start" script that does just that. Now your package.json will look like this:

```json
"scripts": {
  "start-dev": "nodemon",
  "start": "node index.js"
}
```

(see example in /express-backend)


### Deploy your app
- `cd` into the root folder of your app
- `heroku create`
  - This command simultaneously creates an app on Heroku & adds a remote called `heroku` to your app (kind of like the reverse of when you git clone an existing app)
- Add & commit
- Push to Heroku: `git push heroku master`
- You should also push to GitHub: `git push origin master`

# Cheat Sheet

### Install the Heroku toolbelt
https://toolbelt.heroku.com/


### Config/Environment vars
- **Environment Variables:** (also called env vars, config vars, etc.)
- Because your `.bash_profile` file will never make it to Heroku, you need to tell Heroku about your env var like this:
  - `heroku config:set LINKEDINAPIKEY='28cds9asdkenclkjai'`
- To see a list of all your Heroku config vars, run `heroku config`

### Deploy your app
- `cd` into the root folder of your app
- `heroku create`
  - This command simultaneously creates an app on Heroku & adds a remote called `heroku` to your app (kind of like the reverse of when you git clone an existing app)
- Add & commit
- Push to Heroku: `git push heroku master`
- You should also push to GH `git push origin master`

### Check on your app
- Ensure that at least one instance of your app is running:
  - `heroku ps:scale web=1`
- Go to your heroku URL
  - `heroku open`

### Database
  - Install a third-party add-on for Mongo called Mongolab  
    - `heroku addons:create mongolab:sandbox`
    - This command simultaneously creates a DB and adds a `MONGODB_URI` env var (which you can check by running `heroku config`) in this format: `mongodb://dbuser:dbpass@host:port/dbname`
    - Here's an example: `MONGODB_URI => mongodb://root:liza_secret_password@ds029017.mLab.com:29017/contacter_app`


# Additional Resources
https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction

# Deploying your Frontend

## DISABLE HOT RELOAD FIRST
remove `react-hmre` from your `.babelrc`.

### Step 1
Update your ajax urls to point to your back-end endpoint! (i.e., something like `"https://vast-hamlet-78179.herokuapp.com/"`)

### Step 2
Run `npm run production` and generate the `dist` folder.

### Step 3
create a static express server that serves the files in the `dist` folder. please look at the index.js in the react-frontend.
and be sure to run `npm install --save express`.

### Step 4
repeat the steps for the back-end server. (Including changing your existing package.json "start" script to "start-dev" and making a new "start" script.)
**your back-end and front-end
need to be in separate repositories**

### Step 4
Start up your front-end and `heroku open`. Voila! Your front-end server should be displaying your app. Whenever it needs to make an ajax call, it should be hitting up the backend server for the JSON data.

### Step 5
Profit???

## TROUBLESHOOTING
The odds are this won't go perfectly the first time, or indeed ever. Deployment is hard! If you're getting errors, head over to your app in the terminal and run `heroku logs` to see the error messages. They can be overwhelming, but there IS useful info in there you can use to help debug what's going on. 
