# no sql

### Agenda
- Introduction to databases and their role in web development
- NoSQL vs SQL
- Introduction to Mongo (document store based databases)
- Mongo Lab

### Objectives
- Setup a mongo database
- Create, Retrieve, Update, Delete
- Stretch objective: model data and join tables.

### Introduction
Using json files is great for storing data but if need our application to scale
and work with not just a few people people but thousands or even millions
then we need something more robust. We'll be looking at document-store style
database called mongo to fill that need.

### mongo getting up and running
- install mongo (follow instructions from the mongo website, use sudo when necessary)
- run mongo by running the server daemon `mongod`
- type `mongo`

### creating a database
- We're creating a collection of data that contain documents. Each documents has
a of properties that are called `fields`. Think of documents as objects and
collections as a way labeling and organizing documents.
`use [NAME OF DB HERE]`

### db methods
- Let's take a look at a few db methods in mongo.
- `db.stats()`

### create a new collections
- db.[name of collection].insert
### I do
- create a new contact
### You Do
- create 5 different contacts with name and email fields.

### find()
- mongo has the ability to filter data by using greater than / less than or
less than equal to / greater than equal to relational operators. To use an expression
we simply type use the `{}` and define a key value pair. the key being the
operator and the value being the relational operand. for example:
`{ age: {$gte: 21} }`

### i do
- find by name
### you do
- find a contact by email



### remove()
- remove({}) removes EVERYTHING from the database
- remove filters work the same way find does but removes the document found.

### i do
- remove everything from database
### you do
- remove a contact by name
- remove everything from database

### unicorn data and mastering selectors

### $operators

- relational operators: `gt`,`gte`, `ne`, `lt` ,`lte`, `in`
- logical operators: `or`, `and`, `not`, `nor`
- element: `exists`, `type`
- silently fails!


### update()

- w/o $set
- with $set
- $inc, $push

### i do
- update with new object
- update with set

### you do
- update a contact with set

### sorting

### joins

- unique ids
- one to many relationships
- employee to manager.
