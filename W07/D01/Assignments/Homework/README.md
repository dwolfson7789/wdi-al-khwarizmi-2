# W07D01 HOMEWORK

## MON-GOD!
Tonight's homework is practice with MongoDB. We're going to do everything in the terminal.

Make sure you've got `mongod` running in one terminal instance and `mongo` running in another.

Create a new database and use it: `use <dbname of your choice here>`

E.g., `use mondayHW` would create a new database named mondayHW and switch to it.

Now make a new collection

Go to pp. 6 and 7 of [The Little Book of MongoDB](http://openmymind.net/mongodb.pdf). Copy all the "unicorns" data and paste it into your terminal. ( I think Syed gave you unicorn data in class; you can get this data from the file he created as well.)

Refer to the book in the link above if you're stuck!

You should get a message that a whole bunch (herd?) of unicorns were inserted.

In your terminal, write the mongo commands to answer the following questions. Paste your answers here:

1. Get all of the unicorns
1. Get all of the female unicorns
1. Get all of the unicorns who like grape
1. Get all of the female unicorns who like apples
1. Get all of the female unicorns who like apples OR carrots OR strawberry
1. Get all of the unicorns who weigh more than 550 pounds AND like watermelon
1. Get all of the unicorns born before the year 2000.
1. Get all of the unicorns who don't have a `vampires` field
1. Get all of the male unicorns who have killed more than 25 vampires. (The "vampires" field represents the number of vampires slain by that unicorn.)
1. Make a new unicorn with name "Syed", born on January 7, 1654, loves JavaScript, teaching, and Smurfs, weighs 140 pounds, and has killed 1,523 vampires.
1. Make a new collection called vampires
1. Add a new document to your vampires collection named "Liza". She was killed (or reborn as undead if you prefer) on Oct 7, 1965, loves blood, killing, and mayhem, has eaten 154 unicorns, is female, and owns headphones, a MacBook, and a water bag.
1. Create another vampire: Shorty. He was killed on Jan 1, 1125; he loves being silly; he has eaten 1,550,054 unicorns. His current_location is Google, Inc.
1. Oh no! Syed has slain Liza. Change his vampires property to reflect one more vampire killed. Also, delete Liza from the vampires collection.
1. There's been a total change of taste in the unicorn population. Everyone who like carrots has simultaneously decided they're disgusting. Remove carrots from their 'likes' field.
1. Every unicorn has decided they like marshmallow peeps (it's Easter!). Add it to everyone's `likes` array.  
1. Shorty strikes again. He's got 3 unicorns working as secret agents for the evil vampires. Give Shorty a unicornSpies property, which is an array of three unicorns' ObjectIDs.
