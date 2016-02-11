# W01D04 Homework

![And so it begins](http://seooasis.co.uk/wp-content/uploads/2014/10/So-It-Begins-Image.gif)

===================

### Part 1: Calculator

Let's try building the start of a basic JavaScript calculator.
1. The skeleton of four functions are given below. Complete them so they each do the appropriate arithmetical operation on the arguments that are passed into them.
```javascript
function add(a,b) {

}

function subtract(a,b) {

}

function multiply(a,b) {

}

function divide(a,b) {

}
```
(NOTE: subtract is not a commutative operation; write your subtract() function so that the second argument passed in is subtracted from the first; similarly divide() should be written so that the first argument is divided by the second.)

1. Try running your functions. Pass in different numbers into each. Do they all work?
1. What's the result of `add(multiply(subtract(8,3),4),15)`? **Don't** just paste it into the console! See if you can figure out what's going on first.
1. What happens if you pass three numbers into your arithmetic functions? What about if you only pass in one number? Why?
1. Modify your functions so that if only one argument is passed in, it just returns that number.

====================

### Part 2: Can you handle the `Truth`?

Using the variables below, determine if each code snippet will evaluate to ```true``` or ```false```. Answer without pasting the expressions into a repl! (Feel free to check and see if you're right after you've answered them all.)

```js
var a = 1
var b = 2
var c = 3
var d = 5
var e = 8
var f = false
var g = "false"
var h = '2'
var i = '0'
var j = 0
```

1. ```a === c - b```
- ```c === d % e```
- ```b === e / 4```
- ```"Hello world"```
- ```a === e % d - b * c - b + d + 1```
- ```f === false```
- ```f != "Hello world"```
- ```f === g```
- ```f == g```
- ```h !== b```
- ```h != b```
- ```!a```
- ```!f```
- ```i == j```
- ```i```

====================

### PART 3: Scope and hoisting

What will be logged to the console from the programs below? In your own words, can you explain what's happening in each case?

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
js
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

================

### PART 4: Now filming: JavaScript Park!
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

 ====================

 ### PART 5: HTML/CSS

 1. Research HTML tags (there's this website called Google.com....). Make a list of tags, with each tag's intended use in the HTML. Start with these common tags:
  * \<div\>
  * \<p\>
  * \<a\>
  * \<span\>
  * \<ul\>
  * \<li\>
  * \<nav\>
  * \<head\>
  * \<body\>
  * \<html\>
  * \<button\>
  * \<script\>
1. List at least 5 others we haven't covered in class yet, along with their use. (To display an HTML tag in markdown you'll need to use the "escape" character, a backslash, \\, before the 'greater than' and 'less than' symbols that make up the tag.) i.e., \\\<div\\\>
1. CSS!
  * First, [some reading on CSS layout](http://learnlayout.com/)  -- we will cover this in class tomorrow so consider this a preview. You can stop once you hit the section on 'media queries'
  * Next, go [here](http://flukeout.github.io/) and practice using CSS selectors. There are 26 exercises to help get the selectors engrained. Can you successfully complete them all.
