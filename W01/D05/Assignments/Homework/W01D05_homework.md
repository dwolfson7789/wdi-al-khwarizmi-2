# W01D05 Homework

![I'm gonna make it!](http://www.quickmeme.com/img/13/13db7aa21860fe4829b11cd9f1e813c1bec801b6a1c230dc997c62ad48d626bb.jpg)

CONGRATULATIONS! One week is in the books. You've come a long way already: you're already manipulating the DOM, styling web pages, have a working understanding of JavaScript functions, objects and more!

**The weekend's homework should feel a little more extensive since you've got, well, the whole weekend to do it. Try not to leave it to Sunday night!**

### PART 1: Now filming: JavaScript Park!

Let's get some practice with JavaScript objects by recreating part of the movie **Jurassic Park**.

#### Ia: Opening Scene

* Create an object called `park`. This object should have 3 properties: people, dinosaurs, and power. People and dinosaurs should be set to empty arrays and `power` should be set to true.

* Now lets create some dinosaurs. Below is an object named rex with a stomach property and a hungry property. Make another object called raptor that has the same properties, except the raptor already ate a peon's shoe and (s)he is not hungry anymore. Push both of the dinosaurs into the park's dinosaur array.

```javascript
var rex = {
	stomach: [],
	hungry: true
}
```

* Let's now create some people. The people we will need for the intro are the `disposable_peon`, `hammond`, `dennis`, and `muldoon`. All will have a name and a profession property. Muldoon will also have a rescueAbility property, which we will set to the number 10. Push everyone into the people array in the park object.

* Now, no matter how much we may love the peon, he's scripted to be eaten as they are bringing the raptor onto the island. Below is an incomplete condition statement.
```javascript
// Change the properties of the raptor and muldoon objects in order to meet the conditional below so that the code in the `if` statement will run.
// Then add code inside the 'if' statement to put the disposable_peon object in the raptor's stomach array
// Finally (as a bonus), remove the disposable peon from the park.people array. (Hint: remember this morning's discussion of Array.splice?). Depending on the order in which you pushed the peon into the array, could you use a different method to take him out of park's people array?


if(raptor.hungry && muldoon.rescue_ability < 10){
	console.log("Raaaar..CHOMP!");

  // your code goes here
} else {
	console.log("CUT! we need to do a retake! The peon is still alive!");
}
```

#### Ib: Who Turned Off the Lights!?

 1. Unfortunately for us, a lot more characters now get introducted. Let's create some more people objects. We're going to need people objects for hammond, malcom, grant, sattler, lex, tim, and gennaro. Use the same base people object described above. You can leave out the profession for lex and tim, as they are children. Make gennaro have two additional properties called catchPhrase and relief and set them equal to 'AHHHHHH!' and 'Phewww', respectively. Push everyone into the park's people array.

 2. Lex and tim are grandchildren of hammond. Let's reflect that in our code. Create two new properties on hammond called grandaughter and grandson and set them equal to lex and tim.

 3. Oh no! Who could have known? Add a property to dennis labeled `treachery` and set it equal to `true`.
 Write a conditional that tests whether or not dennis is treacherous, and if so, set the park's power property to false.
 4. Looks like the power is off and the security fences are down.
 Rex got out of his cage and is heading towards Gennaro! Write a conditional to check whether or not rex is hungry *and* the power is off.
 If so, push gennaro into rex's stomach, log his catch_phrase, and remove him from park.people. If not, log gennaro's sigh of relief.

 Bonus: refactor the conditional above (if you haven't already) to not use any equal signs).
 Bonus 2: access the rex object from the park's dinosaur array instead of its variable name.  


 TO BE CONTINUED!!!....

================

### PART 2: Star Wars (yes, again)

In the Homework directory, you'll see a Star_Wars directory, with three files: a basic index.html, starwars.css, and starwars.js.

We want to get really good at DOM manipulation with JavaScript -- it's the core of a lot of what you'll be doing going forward, including on your first project. Check out the files: index.html has an empty body, as you'll see. We're going to fill it and manipulate it solely with JavaScript.

So:
1. Open up starwars.js and follow the commented instructions. Write your code as instructed below the comments. When you submit your homework, make sure you include a link to your starwars.js file so it can be graded.
1. Once you've successfully completed all the steps in starwars.js, style your webpage in starwars.css! You'll need to:
  * Use at least three different kinds of selectors
  * Use at least 10 different styles. At least three of them must be ones that we have not yet used in class! Search on the web for possibilities.
  * Play around with it. To get rid of the bullets in the `ul li`s, use `list-style-type: none;`; Or, for example, Jakku should probably be a `tan` background color (or something in that range), while the Star Destroyer might be `gray`. What happens if you give Jakku a border and `border-radius: 50%;`?
  * Try restructuring BB-8. Google for images of him, then try making him look a little like himself: two circles, a smaller one on top. Your HTML might look something like this:
  ```
  <div class="bb08">
    <div class="bb-8 head"></div>
    <div class="bb-8 body"></div>
  </div>
  ```

=======================

### PART 3a: CSS selectors

Let's get some practice with CSS Selectors. Go to the [CSS Diner](http://flukeout.github.io/) and complete all 26 levels. Have fun!

=======================

### PART 3b: CSS art

Now that you've seen advanced CSS selectors in class and done CSS diner, you probably have a sense that CSS can be tremendously powerful when used well. A good way to practice CSS is to try creating artwork using it. This is an actual thing: check out [the Simpsons in CSS](https://pattle.github.io/simpsons-in-css/) -- this guy created amazing drawings of all the Simpsons characters just using pure CSS. Seriously insane.

**BEFORE** you try the following, go to [this site](http://learnlayout.com/position.html) and review the basics of web element positioning. Make sure you understand the difference between absolute, relative, static and fixed positioning.

We're going to try our hand at something simpler than the *Simpsons*: Let's try drawing a castle.
In the 'Castle' directory inside 'Homework' you'll see three files:
* A castle image, drawn using CSS
* index.html
* styles.css

**Do NOT modify index.html: Don't change the structure of the HTML at all (although you'll want to look at it for reference as you go).** In styles.css, try to come up with a castle along the lines of the one in the image. It doesn't have to look exactly identical, but should have all the key elements: ground, sky, clouds, sun, castle, battlements, moat, inner gate, and lever.

==================

### PART 4: Scope and hoisting

What will be logged to the console from the programs below, in order? In your own words, can you explain what's happening in each case? This is tricky. Use the handy site Syed showed us, [pythontutor](http://www.pythontutor.com/javascript.html#mode=edit), to help you visualize what's going on in each program. (But only do that AFTER you've written down your answers.) It is HARD to get them all right the first time, so don't freak out if you don't. We've only covered scope and hoisting briefly so far.

```js
console.log(x);
var x = 5;
```

```js
var foo = "ice cream";
console.log(foo);
function bar() {
  if (!foo) {
    var foo = "bananas";
  }
  console.log(foo);
}
bar();
console.log(foo);
```

```js
var x = 3;
function changeValues () {
  x = 7;
  y = 10;
  z = 300;
}
var y = 15;
changeValues();
console.log(x);
console.log(y);
console.log(z);
//
//COMPARE THE ABOVE PROGRAM WITH THE ONE BELOW. WHY DO THEY BEHAVE DIFFERENTLY?
//
var x = 3;
function changeValues () {
  var x = 7;
  var y = 10;
  var z = 300;
}
var y = 15;
changeValues();
console.log(x);
console.log(y);
console.log(z);
```

```js
function first(x) {
  var y = x + second(3 * x);
  console.log(y - 7);

  function second(x) {
    return x + 2;
  }
}

first(5);
console.log(y);
```
===================

### PART 5: The Sieve of Eratosthenes

All that DOM Manipulation and styling was fun, right? The final part of the homework is a more computer science-y exercise. You're going to write a program that finds all the prime numbers between 1 and n (where n is chosen by the user), and logs them to the console. (As a reminder: a prime number is a positive integer that has no divisors except itself and 1: so 2, 3, 5, 7, 11, etc. 1 is not a prime number by definition. 2 is the only even prime number.) So it should look something like this:
```js
function eratosthenes(n) {
  //code goes here
}

eratosthenes(20) //output is [2, 3, 5, 7, 11, 13, 17, 19]
```

[Eratosthenes](https://en.wikipedia.org/wiki/Eratosthenes) was an ancient Greek mathematician who developed an elegant algorithm for finding prime numbers that we're going to use. Here's how it works:

Let's say we want all the primes between 1 and 50. Let's write them out:

1  2  3  4  5  6  7  8  9  10

11 12 13 14 15 16 17 18 19 20

21 22 23 24 25 26 27 28 29 30

31 32 33 34 35 36 37 38 39 40

41 42 43 44 45 46 47 48 49 50

The way the Sieve works is by assuming all the numbers are prime, and successively eliminating non-primes. The first thing we can do is strike 1 off the list, since 1 is not a prime number by definition:

~~1~~  2  3  4  5  6  7  8  9  10


11 12 13 14 15 16 17 18 19 20


21 22 23 24 25 26 27 28 29 30


31 32 33 34 35 36 37 38 39 40


41 42 43 44 45 46 47 48 49 50

The next number is 2. We know that every multiple of 2 in our list (in our function, it will be an array) can't be prime. (Remember, prime numbers can't be divided by any other numbers other than 1 and themselves. Any multiple of 2 is divisible by 2 as well, so it can't be prime.) So let's strike those from the list too (but not the number 2 itself!):

~~1~~  2  3  ~~4~~  5  ~~6~~  7  ~~8~~  9  ~~10~~


11 ~~12~~ 13 ~~14~~ 15 ~~16~~ 17 ~~18~~ 19 ~~20~~


21 ~~22~~ 23 ~~24~~ 25 ~~26~~ 27 ~~28~~ 29 ~~30~~


31 ~~32~~ 33 ~~34~~ 35 ~~36~~ 37 ~~38~~ 39 ~~40~~


41 ~~42~~ 43 ~~44~~ 45 ~~46~~ 47 ~~48~~ 49 ~~50~~

The next non-eliminated number is 3. Again, all multiples of 3 can't be prime. Let's strike all the multiples that haven't already been eliminated (e.g., 6 is a multiple of 3 but was eliminated in the prior step).

~~1~~  2  3  ~~4~~  5  ~~6~~  7  ~~8~~  ~~9~~  ~~10~~


11 ~~12~~ 13 ~~14~~ ~~15~~ ~~16~~ 17 ~~18~~ 19 ~~20~~


~~21~~ ~~22~~ 23 ~~24~~ 25 ~~26~~ ~~27~~ ~~28~~ 29 ~~30~~


31 ~~32~~ ~~33~~ ~~34~~ 35 ~~36~~ 37 ~~38~~ ~~39~~ ~~40~~


41 ~~42~~ 43 ~~44~~ ~~45~~ ~~46~~ 47 ~~48~~ 49 ~~50~~

The next non-eliminated number in our list is 5. So again, strike out all the multiples of 5 (that haven't already been struck out):

~~1~~  2  3  ~~4~~  5  ~~6~~  7  ~~8~~  ~~9~~  ~~10~~


11 ~~12~~ 13 ~~14~~ ~~15~~ ~~16~~ 17 ~~18~~ 19 ~~20~~


~~21~~ ~~22~~ 23 ~~24~~ ~~25~~ ~~26~~ ~~27~~ ~~28~~ 29 ~~30~~


31 ~~32~~ ~~33~~ ~~34~~ ~~35~~ ~~36~~ 37 ~~38~~ ~~39~~ ~~40~~


41 ~~42~~ 43 ~~44~~ ~~45~~ ~~46~~ 47 ~~48~~ 49 ~~50~~

The next non-eliminated number is 7; repeat the process.

~~1~~  2  3  ~~4~~  5  ~~6~~  7  ~~8~~  ~~9~~  ~~10~~


11 ~~12~~ 13 ~~14~~ ~~15~~ ~~16~~ 17 ~~18~~ 19 ~~20~~


~~21~~ ~~22~~ 23 ~~24~~ ~~25~~ ~~26~~ ~~27~~ ~~28~~ 29 ~~30~~


31 ~~32~~ ~~33~~ ~~34~~ ~~35~~ ~~36~~ 37 ~~38~~ ~~39~~ ~~40~~


41 ~~42~~ 43 ~~44~~ ~~45~~ ~~46~~ 47 ~~48~~ ~~49~~ ~~50~~

The next number left in our list is 11, but all multiples of 11 less than 50 have already been crossed off (check for yourself above). Same thing with the number after that, 13 and 17, 19, and 23, the numbers after that. The next non-eliminated number after 23 is 29, but we can stop here. Why? Because the first multiple of 29, 29*2, is 58, which is greater than 50. So we can stop, and see what numbers haven't been crossed off yet: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, and 47: voila! all the prime numbers less than 50!

If the above is unclear, the wikipedia page for Eratosthenes (link above), has a nice animation of how the sieve works.

Here's the general outline of how to go about it:

```js
function eratosthenes(n) {
  //you're going to start by creating two arrays, one to hold the numbers from 0 to n, and the second array to hold
  //the prime "status" of each of those numbers. So if n = 8, the first array would look like this:
  //[0,1,2,3,4,5,6,7,8] and the second one like this:
  //["P","P","P","P","P","P","P","P"] (because remember, we assume all numbers are prime, "P", until proven otherwise)
  //Create your arrays and fill them below. You'll need to iterate because you don't know what 'n' is until the user passes it into the function.




  //let's start by taking care of our special cases, 0 and 1, which aren't prime by definition. change your "status"
  //array so that the entries corresponding to 0 and 1 in the numbers array (the first two entries), now read "N" for
  //"non-prime". If you console.log them (a good idea!) after doing this, your arrays should look something like this:
  //[0,1,2,3,4,5,6,7,8]
  //["N","N","P","P","P","P","P","P"]
  //Take care of that below:


  //Now comes the HARD part. I'm going to leave this to you. You'll need to iterate over your numbers array. If the
  //number you reach is still marked as prime, you'll need to then mark all MULTIPLES of that number (but not then
  //number itself) as non-prime in your "prime status array". This is tricky! A second, different iteration perhaps?



  //If you did the last part correctly, you should now be able to iterate over your arrays; if the prime status of a
  //given number is "P", then log that number to the console; otherwise don't log it.
  console.log("The prime numbers between 0 and " + n + "are ");
  //put your final loop here
  //it should log all the primes


}
```

Run `eratosthenes()` for different values of n. Make sure the function correctly logs the primes to the console. Congratulations!

####EXTRA CREDIT
* We don't actually need two arrays; I just suggested doing it that way to make it easier to see what's going on. How would you do it with a single array?
* If you have time think about how you might optimize your function. You probably tested it using relatively small values of n, which take the computer a fraction of a second to process. But what if n were a million? a billion? 10^15? You'd want to make sure your algorithm is as efficient as possible. What could you do to improve it?

===============

### PART 6: FOR...OF LOOPS!

I just had to add this in after Syed told us about this today!. [`For...of` loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) are a NEW addition to JavaScript in ECMAScript2015! So cool--let's learn some up-to-the-minute advances to JavaScript! For ... of loops make iterating over arrays even easier. They work a lot like `For ... in` loops do.
Here's an example:
```js
var myArray = [10, 12, -6, 5];
for (var num of myArray) {
  console.log(num + 3);
}
//logs 13, 15, -3, 8 to the console
```

Syntax is:
```js
  for (variable of iteratableThing) {
  //code goes here
  }
```
(Where iteratableThing can be an array, a string, or certain other array-like things we're not getting into yet.)

It's a lot more readable and natural language-like than `for (var i = 0; i < iteratableThing.length; i++) { //code goes here }` isn't it? Let's practice using it!

```js
var teachers = [
  {
    name: "Syed",
    gender: male,
    favoriteAnimal: "lemur"
  },
  {
    name: "Liza",
    gender: female,
    favoriteAnimal: "platypus"
  },
  {
    name: "Matt",
    gender: male,
    favoriteAnimal: "koala"
  },
  {
    name: "Ethan",
    gender: male,
    favoriteAnimal: "beetle"
  }
]
```

1. Use a `for...of` loop to iterate over the teachers array and console.log the value of the `name` property of each teacher object it encounters. So your loop should output:

  `"Syed"`

  `"Liza"`

  `"Matt"`

  `"Ethan"`

1. Now use a `for...of` loop to iterate over the array, and inside that loop, use a `for...in` loop to iterate over each object and console log all of its key:value pairs. Make the output a single sentence.  So the first line of the output, when it's examining `teachers[0]`, would look like:

`This teacher's name is Syed. Syed's gender is male. Syed's favorite animal is the lemur.`

(With similar outputs for each of the other instructors.)

===============
### PART 7: VIDEOS AND READING

* Watch videos 19, 21, and 22 from Shorty's [playlist](https://www.youtube.com/playlist?list=PLw1xVKFbouenbYs8xykO0IG5Bs-utmxqJ).
* Read chapter 4 of [Eloquent JavaScript](http://eloquentjavascript.net/04_data.html). This will start out more or less where we are and then go on from there. You may not get everything off the bat. That's OK!
