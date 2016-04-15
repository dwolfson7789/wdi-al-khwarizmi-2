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

#### Procfile

A `Procfile` is a text file in the root directory of your application - it's used to declare, to Heroku's computers, what command should be run to start your application. Since we are no longer in development, we are not going to be responsible for starting up our server. The `Procfile` will act as a sort of configuration file for Heroku.  To get started we only need one command in there, and the command denoted will declare: a single process type, web, and the command your app needs. `web` is crucial for this file - it's saying that this process type will be attached to the HTTP routing stack of Heroku and take web requests when the application goes live.

To set this up, in the main or root directory of your application create a new file called `Procfile` - you do not need to add a file extension. Add the following line to the `Procfile`:

```
web: node app.js
```

### Deploy your app
- `cd` into the root folder of your app
- `heroku create`
  - This command simultaneously creates an app on Heroku & adds a remote called `heroku` to your app (kind of like the reverse of when you git clone an existing app)
- Add & commit
- Push to Heroku: `git push heroku master`
- You should also push to GH `git push origin master`

# Cheat Sheet

### Install the Heroku toolbelt
https://toolbelt.heroku.com/


### Config/Environment vars
- **Environment Variables:** (also called env vars, config vars, etc.)
- Because your `.env` file will never make it to Heroku (because it's listed in your bash profile), you need to tell Heroku about your env var like this:
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

### Define a procfile
  - **Procfile:** a text file in the root directory of your app that explicitly declares what command should be executed to start your app
  - Touch a `Procfile` (capital, no file extension)
  - Inside, write only `web: node index.js`

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
Just run `npm run production` and generate the folder.

### Step 2
create a static express server that serves the files in dist
folder. please look at the index.js in the react-frontend.
and be sure install --save express.

### Step 3
repeat the steps the back-end server. **your back-end and front-end
need to be in separate repositories**

### Step 4
update your ajax urls to point to your back-end endpoint.
