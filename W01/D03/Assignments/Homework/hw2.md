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

=================

### Part 1: Making arrows

Write a function that takes one argument, cols, a number of columns between 3 and 10, and prints out an arrow to the console like this:
`makeArrow(5)` would log

->

--->

----->

--->

->

(so each row gets longer until your arrow is n units long, then shorter again back to 1)

`makeArrow(7)` would log

->

--->

----->

------->

----->

--->

->

Hint: you're going to want to create a `for` loop that runs as many times as you have rows to print. For each stage of the loop the length of the arrow you're creating will depend on the value of the index in your loop....

=================

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
1. Once they've done that, the console should let them know they've successfully done that, and that it's about to start rolling. Something like (feel free to use your own phrasing!):
```javascript
console.log("Great! I'm digging out my " + sides + "-sided dice from my virtual dice bag.");
console.log("Let's start rolling");
```

What we want is for the computer to "roll" two dice until the both come up with the same number. It should log the result of each roll. So the output might look something like this:
```
Great! I'm digging out my 17-sided dice from my virtual dice bag.
Let's start rolling!
------------------------
Rolling: Die #1 is 7 and Die #2 is 11.
Rolling: Die #1 is 8 and Die #2 is 7.
Rolling: Die #1 is 16 and Die #2 is 3.
Rolling: Die #1 is 10 and Die #2 is 14.
Rolling: Die #1 is 5 and Die #2 is 5.
We have rolled doubles! Stopping here.
```

####EXTRA CREDIT
1. Check out the documentation for the built-in JavaScript [Math object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math). What is the difference between Math.round(), Math.floor(), Math.trunc(),and Math.ceil()?
1. Add in error-checking on the user's submission for the number of sides on the dice. (In general, it's good practice to always try to think of every possible way a user can do something OTHER than what you want them to do!). What happens if they enter a number < 4? Or a non-number ("foo")? Or a non-integer(6.5)? Hint: if you use a `while` loop you can keep the user 'trapped' until they enter a valid number....
