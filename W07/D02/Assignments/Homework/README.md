# MONGO MADNESS!

## OR, BABBLR REDUX

![babble](http://i.giphy.com/UfEfvvcxW5F6g.gif)

Your homework for tonight is simple.

Take your 'babblr' code from last week (W06D04). *If you did not complete the assignment for some reason, either go back and do it now (preferred! and better for you!) OR ask a classmate for their code in order to start this assignment. You will need a babblr that does the following: displays all the babbls on request, and creates a new babbl on request.*

**If you borrow code please make sure to clearly note at the top of the code (and in your github issue!) that you borrowed code in order to start this assignment and whose code your borrowed. If someone made use of your code, please also indicate that in your own github issue.**

#### Rework babblr so that instead of using your `data/babbls.json` file to store persistent data, it uses Mongo instead.

You'll need to
1. Make sure you've got `mongod` up and running (in fact it may be handy just to keep the Mongo server running in the background throughout this unit of the course). Not sure if it's going? Type `ps` in a terminal window to get a list of currently running processes. You should see that one of the lines in the output looks something like this ` 3336 ttys004 10:22.42 mongod` (the other fields will vary but 'mongod' should be there somewhere).
2. `npm install --save mongodb` to add mongodb to your node_modules
3. `require` it in your code.
4. Follow Liza's in-class code. You'll need to create a MongoClient variable which is equal to `mongodb.MongoClient`; you'll need to create a MongoUrl variable which is the location of your desired db. I'm *99%* sure you don't need to have pre-created the db in advance -- it will create it for you if it doesn't exist! Name your database `babblr` or course.
5. I suggest you pre-populate it with some babbls. Open up `mongo` in a new Terminal window, `use babblr`, create a collection named `babbls` and `insert` some babbls into it. Each babbl should have an author and a body, something like `db.babbls.insert({author:"Ethan", body:"I'm a babblin' fool."})`. Make 4-5 babbls so that you've got some data in there.
6. Finally, you'll need to open a connection to the database at the specified Url and either find all the babbls (for the GET('/') route; or create a new babbl (for POST('/'))).
7. *If* you have all of the following, working then add in the ability to delete a babbl.
8. If you get *that* working, add in the ability to update a babbl. You've got two nights to do this!
9. **SUPER-DUPER BONUS** Create a drop-down menu or input field in which you can type an author's name (like Liza did with contacter) and fetch all the babbls by that author.

A sample of how your route structure might look:

GET /babbls ==> fetch all the babbls

POST /babbls/new ==> create a new babbl

DELETE /babbls/:id ==> delete specified babbl

PUT /babbls/:id ==> update specified babbl

GET /authors/:id/babbls ==> get all babbls from a specific author
