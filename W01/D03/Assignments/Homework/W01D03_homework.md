# W01D03 Homework

![I have no idea why my code works](http://weknowmemes.com/wp-content/uploads/2012/09/my-code-doesnt-work-i-have-no-idea-why.jpg)

Save your homework as a markdown file. Remember, to include a block of code separate from other text, surround the code with ```` ``` ````.
If you want the code to be syntax highlighted (you do!), write the language name after the first ```` ``` ````

e.g.:

    ```javascript
    console.log("This is code.");
    var code = function () {
      return "This is even more code!";
    }
    ```
===================

### Reminder: How to Submit Your Homework
This is the last time the instructions will appear in the homework file; after this, it's assumed you know how to submit homeworks. Come back here if you need to refresh your memory.

To submit a homework, you must first commit your changes. In the Terminal, in the folder where you're working (generally that day's folder):
```
git add -A
git commit -m "some sort of commit message, i.e., 'working on homework. Ethan sucks'"
```

This saves the changes to your local repo on your machine. You now need to push those changes out to your remote repo on Github: `git push origin master`

When you've completed the homework (or gotten as far as you're going to), go to **your** Github account and navigate to the folder where the homework (it will look something like (the URL will look something like https://github.com/[your Github username]/wdi-al-Khwarizmi/tree/master/W01/D02/Assignments/Homework). **Copy this URL.**

Now go to our main class repo (again, [here it is](https://github.com/ga-students/wdi-al-Khwarizmi)). Click on the 'Issues' tab and create a new Issue:
* Title: HW #XXX
* Body: In the body of the issue, paste the link to the homework's location in your fork of the class repo, the one you just copied.

When you're done, submit the issue. Your homework is in!

=================

### Part 1: JavaScript basics
#### Datatypes
1. What are the different ways of storing data in JavaScript?
1. Give an example of an `array`, and why you might choose to use one to store data (what characteristics of the data make it suitable for using this datatype?)?
1. Give an example of an `object` (what your prework called 'associative arrays'). Under what circumstances would you choose to use one to store data instead of an array?
1. What's the keyword for creating a new variable in Javascript?

#### Manipulating data
```JavaScript
var teachers = ["Matt Short", "Syed Salahuddin", "Liza Ramo"];
```
1. What's the value of teachers[1]?
1. Ethan Friedman has joined the instructional team. How would you add him to the beginning of the array. To the end?
(If you're stuck, you can find the Javascript documentation on arrays [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).)
1. Liza is jetting off to Mexico. How would you remove her from the team? (Temporarily, of course!)
1. Write a `for` loop that iterates over the array and logs each instructor's name to the console.
1. Instructors with long names are the coolest. Modify your loop from the previous question so if each instructor's name is 10 characters or fewer, "[name] is short and sweet!" gets logged to the console; if it's 11 characters or more, log "[name] is cool and fun to say!"
1. ```javascript
var nestedArray = [["Matt", "Ethan", "Liza", "Syed"],["raindrops on roses ", "whiskers on kittens", "bright copper kettles", "warm woolen mittens"],[["bacon","lettuce","tomato"],["rye","wheat","bagel"]]];
```
  * What is the value of nestedArray[0,3]?
  * Write a `for` loop that iterates over Julie Andrews' "favorite things" from the song
  * I would like a bacon sandwich (none of that veggie nonsense!) on wheat. How do I obtain those from nestedArray?  
1. ```javascript
var movies = [
  {
    title: "A New Hope",
    year: 1977,
    protagonist: "Luke Skywalker",
    inTheaters: false
  },
  {
    title: "The Force Awakens",
    year: 2015    
  }
];
```
  * For the first movie, what is the **value** corresponding to the "title" key? What is the **key** that corresponds to the "Luke Skywalker" value?
  * How would you add a protagonist ("Rey") property to the second movie in the array? Since the movie is still playing in theaters, also add an `inTheaters: true` property for that movie.
  * Let's assume there's a special limited release of "A New Hope" in theaters; how would you change it so `inTheaters` is `true` for that movie too?
  * The next movie in the series is tentatively entitled just "Star Wars Episode VIII". It's slated for a 2017 release. Create a new object for the movie that incorporates that info.
  * Add your new object to the end of the `movies` array.

#### EXTRA CREDIT
* Write a `greenlight` function that takes two arguments: first, a (movie) object like the ones above, and second, a year. It should check to see if there's a scheduled release date (i.e., if the object has a 'year' set). If not, it should set the movie's scheduled year of release to the year that was passed into the function. The function should return the original object if it already had a release date scheduled, and the modified object if it didn't.

===================

### Part 2: Rolling Us Some Dice

Let's create a virtual dice simulator. We don't want to be boring and limit ourselves to six-sided dice, so to start you off, here's a function that will generate a random integer between 1 and the number of sides on the die:

```javascript
function rollDie(sides) {
  return Math.floor(Math.random() * sides + 1);
}
```

E.g., `rollDie(10)` will generate a random integer between 1 and 10 inclusive.

If you're not familiar with [Math.floor()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) and/or [Math.random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) check out the documentation at these links.

1. Write a function that prompts the user to enter the number of sides on the dice they want to roll and stores it in a variable.
1. Once they've done that, the console should let them know they've successfully chosen a number of sides, and that it's about to start rolling. I.e., something like (feel free to use your own phrasing!):
```javascript
console.log("Great! I'm digging out my " + sides + "-sided dice from my virtual dice bag.");
console.log("Let's start rolling");
```

What we want is for the computer to "roll" two dice until the both come up with the same number. It should log the result of each roll. So the output might look something like this:
```
Great! I'm digging out my 16-sided dice from my virtual dice bag.
Let's start rolling!
------------------------
Rolling: Die #1 is 7 and Die #2 is 11.
Rolling: Die #1 is 8 and Die #2 is 7.
Rolling: Die #1 is 16 and Die #2 is 3.
Rolling: Die #1 is 10 and Die #2 is 14.
Rolling: Die #1 is 5 and Die #2 is 5.
We have rolled doubles! Stopping here.
```

We've given you the function to simulate the actual roll of an individual die. Create variables to store the current value of each die.

When you want to keep looping through some code until a condition is satisfied, but you don't know how many times you're going to have to loop, you're often looking at a `while` loop. (`for` loops are great when you have a defined number of times you want to iterate, i.e., for each item in an array.)

While the values of the two dice aren't equal to each other, you want to keep looping. Once the two have the same value, the loop should stop, and some sort of end message be logged.

#### EXTRA CREDIT
1. Check out the documentation for the built-in JavaScript [Math object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math). What is the difference between Math.round(), Math.floor(), Math.trunc(),and Math.ceil()?
1. Add in error-checking on the user's submission for the number of sides on the dice. (In general, it's best practice in coding to always try to think of every possible way a user can do something OTHER than what you want them to do!). What happens if they enter a number < 4? Or a non-number ("Syed")? Or a non-integer(6.5)? Hint: if you use a `while` loop you can keep the user 'trapped' until they enter a valid number....
1. Keep track of the number of rolls. Each time the dice are rolled, it should indicate the roll number (Roll 1, Roll 2, etc.).
1. Instead of ending when **any** double is rolled, keep rolling until "snake eyes" (double 1s) are rolled. Any other double comes up, the computer keeps rolling.

===================

### PART 3: Now filming: JavaScript Park!
Let's get some practice with JavaScript objects by recreating part of the movie **Jurassic Park**.

#### I: Opening Scene

* Create an object called `park`. This object should have 3 properties: people, dinosaurs, and power. People and dinosaurs should be set to empty arrays and power should be set to true.

* Now lets create some dinosaurs. Below is an object named rex with a stomach property and a hungry property. Make another object called raptor that has the same properties, except the raptor already ate a peon's shoe and s/he is not hungry anymore. Push all of the dinosaurs into the park's dinosaur array.

* Now lets create some dinosaurs. Below is an object named rex with a stomach property and a hungry property. Make another object called raptor that has the same properties, except the raptor already ate a peon's shoe and (s)he is not hungry anymore. Push both of the dinosaurs into the park's dinosaur array.

```javascript
var rex = {
	stomach: [],
	hungry: true
}
```

* Let's now create some people. The people we will need for the intro are the disposable_peon, hammond, dennis, and muldoon. All will have a name and a profession property. Muldoon will also have a rescueAbility property, which we will set to the number 10. Push everyone into the people array in the park property.

* Now, no matter how much we may love the peon, he's scripted to be eaten as they are bringing the raptor onto the island. Below is an incomplete condition statement.
//Change the properties of the raptor and muldoon objects in order to meet the conditions so that the code in the `if` statement will run.
//Then add code to put the disposable_peon object in the raptor's stomach array
//Finally (as a bonus), remove the disposable peon from the park.people array. (see hint below). Depending on the order in which you pushed the peon into the array, could you use a different method to take him out of park's people array?

```javascript
//change the objects so that this condition will be satisfied
if(raptor.hungry && muldoon.rescue_ability < 10){
	console.log("Raaaar..CHOMP!");

	// add code to put the disposable_peon into the stomach of the raptor

	// add code to remove the disposable_peon from the park's people array. HINT: look up Array.splice()

	// bonus: take the disposable peon out of the people array in the park object. hint: look up the splice method for arrays.
} else {
	console.log("CUT! we need to do a retake! The peon is still alive!");
}
```

#### II: Who Turned Off the Lights!?

// 1. Unfortunately for us, a lot more characters now get introducted. Let's create some more people objects. We're going to need people objects for hammond, malcom, grant, sattler, lex, tim, and gennaro. Use the same base people object described above. You can leave out the profession for lex and tim, as they are children. Make gennaro have two additional properties called catchPhrase and relief and set them equal to 'AHHHHHH!' and 'Phewww', respectively. Push everyone into the park's people array.

// 2. Lex and tim are grandchildren of hammond. Let's reflect that in our code. Create two new properties on hammond called grandaughter and grandson and set them equal to lex and tim.

// 3. Oh no! Who could have known? Add a property to dennis labeled `treachery` and set it equal to `true`.
// Write a conditional that tests whether or not dennis is treacherous, and if so, set the park's power property to false.
// 4. Looks like the power is off and the security fences are down.
// Rex got out of his cage and is heading towards Gennaro! Write a conditional to check whether or not rex is hungry *and* the power is off.
// If so, push gennaro into rex's stomach, log his catch_phrase, and remove him from park.people. If not, log gennaro's sigh of relief.

// Bonus: refactor the conditional above (if you haven't already) to not use any equal signs).
// Bonus 2: access the rex object from the park's dinosaur array instead of it's variable name.  


// TO BE CONTINUED!!!....

===================
