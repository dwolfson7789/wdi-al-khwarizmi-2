# HOMEWORK W11D02

Authenticate!

You've got Liza's code -- both front- and back-end -- as a model. Try not to *literally* copy-and-paste if you can, but ***do*** try to recreate at least some of what she did with either the Contactr or Recipe Manager apps you've built. You should have a front-end that contains

* Ability to sign up as a new user
* Ability to log in as an existing user
* Ability to log out as a signed-in user
* You shouldn't get to see at least one component's worth of JSON data (e.g. all the recipes if you're not logged in (this requires front- and back-end).)

You do NOT need to incorporate Liza's catchall 404 error route that she showed you, or any other special features Liza showed you. (Like automatically redirecting on login.) If you get everything working and want to incorporate these as bonuses feel free. 

On the back-end you'll need the corresponding code to

* generate successful hashes of passwords for new users and store the User information in the DB. (Hint, you're gonna need a User model and controller.)
* compare the hash of a user's submitted password on login with one stored in the database to see if they match
* send a JSON token if they do; or an error code if they don't
* refuse to send JSON (e.g., from `recipes#index`) if the user doesn't send in a valid token

This is hard but should be doable because you have extensive model code to draw on! As you re-create this yourself try to figure out what Liza's code is doing at each step (you started this with the lab). Don't just copy-and-paste blocks of code or stuff will probably break. Re-type it yourself and carefully compare your code with hers.

You can do this whenever you like over the next ~30 hours -- it's due Wednesday at midnight.
