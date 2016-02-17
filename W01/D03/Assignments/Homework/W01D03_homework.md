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

## BEFORE DOING ANYTHING ELSE

Remember to first add all changes you've made on your local rep to be staged for commit with `git add -A`. Then commit them with `git commit -m "your commit message goes here"`. Finally run `git push origin master` to push any changes you've made today out to your remote repo. (While the 'origin master' part of that last command is optional here it's not a bad idea to use them at first to remember exactly what you're doing.)

Then run `git pull upstream master` to get the latest version of the class repo! (Note that 'upstream master' is NOT optional and must be included every time.)

===================

### Reminder: How to Submit Your Homework
This is the last time the instructions will appear in the homework file; after this, it's assumed you know how to submit homeworks. Come back here if you need to refresh your memory, check the repo's wiki, or you can also look in the README.md file in the repo's home directory. Lots of places!

To submit a homework, you must first commit your changes. In the Terminal, in the directory where you're working (generally that day's directory):
```
git add -A
git commit -m "some sort of commit message, i.e., 'working on homework. Ethan sucks'"
```

This saves the changes to your local repo on your machine. You now need to push those changes out to your remote repo on Github: `git push origin master`

When you've completed the homework (or gotten as far as you're going to), go to **your** Github account and navigate to the folder where the homework (the URL will look something like https://github.com/YOUR-GITHUB-USERNAME/wdi-al-Khwarizmi/tree/master/W01/D02/Assignments/Homework). **Copy this URL to the clipboard.**

Now go to our main class repo ([here it is](https://github.com/ga-students/wdi-al-Khwarizmi)). Click on the 'Issues' tab and create a new Issue:
* Title: [Your name] Homework Week#Day# (e.g., Ethan Friedman HW W01D04)
* Body: In the body of the issue, paste the link to the homework's location, the one you just copied.
   * Include also, on a scale of 1-5:
      1. How complete you feel your HW submission is
      1. How comfortable you felt with the HW
   * Also include:
      1. Wins: What are you feeling good about in the topics covered in the HW
      1. Struggles: What are you struggling with?
      1. Comments: Anything else you'd like to add
When you're done, submit the issue. Your homework is in!

=================

### Part 1: JavaScript basics

Answer all the questions in a (new) markdown file. Something to keep in mind as you do this (and all) homeworks: Googling "[some Javascript thing]" will often bring up a link from a website called 'W3Schools.com' as the top result(s). Get in the habit of NOT clicking on those links. Although it can be fine for simple things, you really *really* **really** want to get in the habit of reviewing the actual documentation at the [Mozilla Developer Network ](https://developer.mozilla.org/en-US/docs/Web/JavaScript) instead.

#### Datatypes, Conditionals, and Loops
1. What are the different datatypes in JavaScript?
1. What's the keyword for creating a new variable in Javascript?
1. Give an example of an `array`, and why you might choose to use one to store data (what characteristics of the data make it suitable for using this datatype?)?
1. Give an example of an `object` (what your prework called 'associative arrays'). Under what circumstances would you choose to use one to store data instead of an array?
1. Why would you choose to use a `while` loop instead of a `for` loop, or vice versa? (Think about what characteristics of the nature of your iteration make one more suitable than the other.)
1. What's wrong with the `for` loop in the code below? Fix it so the code runs properly:
```js
var awesomePeople = ["Ethan", "Liza", "Syed", "Shorty"]

for (var i = 0, i < awesomePeople.length, i++) {
  console.log(awesomePeople[i] + " is AWEEEEESOME");
}
```

#### Manipulating data
```JavaScript
var teachers = ["Matt Short", "Syed Salahuddin", "Liza Ramo"];
```
1. What's the value of `teachers[1]`?
1. Ethan Friedman has joined the instructional team. How would you add him to the beginning of the array. To the end?
(If you're stuck, you can find the Javascript documentation on arrays [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).)
1. Liza is jetting off to Mexico tomorrow (for real!). How would you remove her from the team? (Temporarily, of course!)
1. Write a `for` loop that iterates over the array and logs each instructor's name to the console.
1. Modify your loop from the previous question so if each instructor's name is 10 characters or fewer, "[name] is short and sweet!" gets logged to the console; if it's 11 characters or more, log "[name] is cool and fun to say!"
1. Check out the documentation for the built-in JavaScript [Math object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math). What is the difference between Math.round(), Math.floor(), Math.trunc(),and Math.ceil()?
1. Pick a Math method that we haven't covered yet in class, and in your own words briefly describe what it does.
1. Fun with nested arrays:    
```javascript
var nestedArray =
  [
    [ "Clinton", "Sanders", "Trump", "Cruz" ],
    [ "raindrops on roses ", "whiskers on kittens", "bright copper kettles", "warm woolen mittens" ],
    [
      [ "bacon","lettuce","tomato"],["rye","wheat","bagel" ]
    ]
];```

  * What is the value of `nestedArray[0,3]`?
  * Write a `for` loop that iterates over Julie Andrews' "favorite things" from the song
  * I would like a bacon sandwich (none of that veggie nonsense!) on wheat. How do I obtain those from `nestedArray`? Paste nestedArray into the console and see if your answer works.
1. Star Wars redux:

```js
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

* For the first movie, what is the *value* corresponding to the "title" *key*? What is the *key* that corresponds to the "Luke Skywalker" *value*?
* How would you add a `protagonist: "Rey"` key:value pair to the second movie in the array? Since the movie is still playing in theaters, also add an `inTheaters: true` property for that movie.
* Let's assume there's a special limited release of "A New Hope" in theaters; change it so its `inTheaters` property is `true`.
* The next movie in the series is tentatively entitled just "Star Wars Episode VIII". It's slated for a 2017 release. Create a new object for the movie that incorporates that info.
* Add your new object to the end of the `movies` array.

#### EXTRA CREDIT (Do Part 2 below before attempting this!)
* Write a `greenlight` function that creates a movie object like the ones above, with a title, protagonist, and year of release of your choice, and returns that object. This is a stretch goal! It should be hard for most of you.
* Extra *extra* credit: make the function reusable. You should be able to pass in title, protagonist and release year, and the function will return the movie object. Please don't freak out if you're struggling with this! e.g., `greenlight("WDI: The Developers Strike Back", "WDI-al-Khwarizmi", 2016)` will return

```js
{
  title: "WDI: The Developers Strike Back",
  protagonist: "WDI-al-Khwarizmi",
  year: 2016
}
```
while `greenlight("Ethan Friedman: The Man, The Myth, The Legend", "Ethan himself", 2025)` will return

```js
{
  title: "Ethan Friedman: The Man, The Myth, The Legend",
  protagonist: "Ethan himself",
  year: 2025
}
```

===================

### Part 2: Rolling Us Some Dice

Let's create a virtual dice simulator. We don't want to be boring and limit ourselves to six-sided dice, so to start you off, here's a function that will generate a random integer between 1 and the number of sides on the die:

```javascript
function rollDie(sides) {
  return Math.floor(Math.random() * sides + 1);
}
```

E.g., `rollDie(10)` will generate a random integer between 1 and 10 inclusive.

If you're not familiar with [Math.floor()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) and/or [Math.random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) check out the documentation at these links. For **extra credit**, think about why it's necessary to use `Math.floor(Math.random())` rather than just `Math.random()`.

1. Create a variable named diceSize and leave it undefined for now.
1. Write a function that prompts the user to enter the number of sides on the dice they want to roll and stores their input in `diceSize`.
1. Once they've done that, the console should let them know they've successfully chosen a number of sides, and that it's about to start rolling. I.e., something like (use your own phrasing!):
```javascript
console.log("Great! I'm digging out my " + diceSize + "-sided dice from my virtual dice bag.");
console.log("Let's start rolling");
```
1. So what are we going to do now that we know how many sides the dice have? We want to simulate the computer "rolling" two dice until they both come up with the same number (i.e., "doubles").It should log the result of each roll. So the output might look something like this:
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

We've given you the `rollDie` function to simulate the actual roll of an individual die. Create variables to store the current value of each die. Write a function (call it `rollUntilDoubles`) to do this.

When you want to keep looping through some code until a condition is satisfied, but you don't know how many times you're going to have to loop, you're often looking at a `while` loop. (`for` loops are great when you have a defined number of times you want to iterate, i.e., for each item in an array.)

While the values of the two dice aren't equal to each other, you want to keep looping. Once the two have the same value, the loop should stop, and some sort of end message be logged.

#### EXTRA CREDIT
1. Add in error-checking on the user's submission for the number of sides on the dice. (In general, it's best practice in coding to always try to think of every possible way a user can do something OTHER than what you want them to do!). What happens if they enter a number < 4? Or a non-number ("Syed" or `true`)? Or a non-integer(6.5)? HINT: if you use a `while` loop you can keep the user 'trapped' until they enter a valid number....
1. Keep track of the number of rolls. Each time the dice are rolled, it should indicate the roll number (Roll 1, Roll 2, etc.).
1. Instead of ending when **any** double is rolled, keep rolling until "snake eyes" (double 1s) are rolled. Any other double comes up, the computer keeps rolling.

===================

### Part 3: Reading

Most of the concepts in Chapter 2 of You Don't Know JavaScript should be familiar to you by now, but if you have time try to review Chapter 2 [here](https://github.com/getify/You-Dont-Know-JS/blob/master/up%20&%20going/ch2.md) as far as the section on Conditionals. If you need more time to read it, don't worry: we'll be practicing all these concepts in class.

===================

### Part 4: videos

Watch videos 12, 16, and 17 from Shorty's playlist [here](https://www.youtube.com/playlist?list=PLw1xVKFbouenbYs8xykO0IG5Bs-utmxqJ)
