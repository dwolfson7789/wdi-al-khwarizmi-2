# W01D04 Homework

![And so it begins](http://seooasis.co.uk/wp-content/uploads/2014/10/So-It-Begins-Image.gif)

===================

## HOMEWORK ORDER OF PRIORITY:
1. Make sure you watch the videos listed in Part 5 (at the bottom of this doc). Don't necessarily do this first but do allow 20-30 minutes to watch them.
1. Part 1: Calculator
1. Part 2: Can You Handle The `Truth`?
1. Part 4: HTML Tags
1. Part 3: Pick-Up Sticks

Many of you might not finish the Pick Up Sticks Game. That's FINE. Don't stress!

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


NOTE: subtract is not a commutative operation; write your subtract() function so that the second argument passed in is subtracted from the first; similarly divide() should be written so that the first argument is divided by the second.

1. Try running your functions. Pass in different numbers into each. Do they all work?
1. What's the result of `add(multiply(subtract(8,3),4),15);`? **Don't** just paste it into the console! See if you can figure out what's going on first.
1. What happens if you pass three numbers into your arithmetic functions? What about if you only pass in one number? Why?
1. EXTRA CREDIT: Modify your functions so that if only one argument is passed in, it just returns that number.

====================

### Part 2: Can you handle the `Truth`?

Using the variables below, determine if each code snippet will evaluate to ```true``` or ```false```. Answer without pasting the expressions into the console! (Feel free to check and see if you're right after you've answered them all.)

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

================
#### PART 3: IT'S A STICK-UP!

We are going to build a game of Pick-Up Sticks. Here is how it works:

* The game begins with a number of sticks on the table (between 10 and 100)
* Each player, in turn, takes 1-3 sticks off the table
* The player who takes the last stick off the table **LOSES**

Your job is to build a virtual version of the game using JavaScript. The program is broken into a series of parts to help you understand how to put together a game with many different components. Each part builds on the previous one, so you should complete them in order and turn in your the final part as your solution.

=================

##### Sub-part 1: Single Player Game
Begin by asking the user for a number of sticks to be used in the game. Only accept numbers between 10 and 100 - if the user supplies a number outside of this range you should re-prompt them.
Next, continually announce to the user how many sticks are on the table and ask the user to enter in a number of sticks to take away. Only accept choices of 1,2 or 3 sticks - anything else should cause an error message to be displayed. Once a valid number of sticks has been entered you should deduct that # of sticks from the total number of sticks in the game. When you reach 0 sticks left the game is over.

Here is a sample running of the program:

```
How many sticks (10-100)? 999
Sorry, that's too many sticks. Try again
```

```
How many sticks (10-100)? -10
Sorry, that's too few sticks. Try again.
```

```
How many sticks (10-100)? 10
Great Let's play ...
```

```
There are 10 sticks on the table.
How many sticks do you want to take (1, 2 or 3)? 999
Sorry, that's not a valid number.
```

```
There are 10 sticks on the table.
How many sticks do you want to take (1, 2 or 3)? 0
Sorry, that's not a valid number.
```

```
There are 10 sticks on the table.
How many sticks do you want to take (1, 2 or 3)? 3
```

```
There are 7 sticks on the table.
How many sticks do you want to take (1, 2 or 3)? 2
```

```
There are 5 sticks on the table.
How many sticks do you want to take (1, 2 or 3)? 3
```

```
There are 2 sticks on the table.
How many sticks do you want to take (1, 2 or 3)? 2
```

```
There are no sticks left on the table!  Game over.
```     

Let's give you some stuff to get started. I'm going to start with a little pseudocoding here for you:
  1. Get the number of sticks we're going to have on the table from the user
  1. Check to make sure the user entered a valid number. WHILE (that's a hint!) this is the case, keep prompting him/her until they enter a valid value. Valid values are integers >= 10 and <= 100. Invalid values would be any other datatype, any floating point number, or any integer that falls outside that range.
  1. Once we've got a valid number, we know how many sticks are on the table!
  1. Now prompt the user to remove some number of sticks (1, 2, or 3) from the total. (Your prompt should also tell the user how many sticks are currently on the table.) Similar to Step 2, we need to make sure the user enters a valid number. Any integer outside of that range, any floating point number, or any non-number is an invalid value and the user should be prompted again. ALSO invalid would be an integer in the correct range that's greater than the number of sticks remaining. I.e., if there are 2 sticks left, you can't remove 3 sticks. If there's one stick left you can't remove 2 or 3 sticks.
  1. Once that idiot user has finally entered a valid value (always assume users are either utter morons or unstoppable tricksters who will try to find every way possible to break your code!), subtract the user's entry from the number of sticks left.
  1. Check to make sure there's still at least one stick left. If there are 0 sticks left, it's game over; end the play loop and alert the player. But if there's more than one stick left, go back to Step 4 and prompt the player to enter another number of sticks.

I am aware this is sort of pointless. No matter what you lose. We're just, basically, repeatedly subtracting 1, 2, or 3 from whatever number of sticks the player originally entered. But once you've got this working, we can move on to the two-player version:

##### Sub-part 2: Two Player Game
As you can see, the single player version of this game isn't very fun. To make things more interesting we are now going to add in an element of competition. For this part you will be implementing a two player game where players take turns taking sticks from the table. The same rules apply - each player can only take 1, 2 or 3 sticks per turn. The player who takes the last stick off of the table is the loser.

Here's a sample running of the game:
```
How many sticks (10-100)? 999
Sorry, that's too many sticks. Try again
How many sticks (10-100)? 10
Great Let's play ...
```

```
Turn: Player 1
There are 10 sticks on the table.
How many sticks do you want to take (1, 2 or 3)? 999
Sorry, that's not a valid number.
```

```
Turn: Player 1
There are 10 sticks on the table.
How many sticks do you want to take (1, 2 or 3)? 0
Sorry, that's not a valid number.
```

```
Turn: Player 1
There are 10 sticks on the table.
How many sticks do you want to take (1, 2 or 3)? 3
```
```
Turn: Player 2
There are 7 sticks on the table.
How many sticks do you want to take (1, 2 or 3)? 2
```
```
Turn: Player 1
There are 5 sticks on the table.
How many sticks do you want to take (1, 2 or 3)? 3
```
```
Turn: Player 2
There are 2 sticks on the table.
How many sticks do you want to take (1, 2 or 3)? 1
```
```
Turn: Player 1
There is 1 stick on the table.
How many sticks do you want to take (1, 2 or 3)? 0
Sorry, that's not a valid number.
```
```
Turn: Player 1
There is 1 stick on the table.
How many sticks do you want to take (1, 2 or 3)? 1
```
```
There are no sticks left on the table!  Game over.  
Player 2 wins!         
```

In your game you only want to switch turns when the player takes a valid # of sticks:
  Here's a hint to one way you might do that:
  ```js
  var players = ["Player 1", "Player 2"]
  ```
You might want to look up docs on `Array.pop()` and `Array.unshift()`. Pop removes ("pops") an element off the end of an array and RETURNS the element that was popped off. Unshift sticks an element onto the front of an array.

So if you make the current player always be `players[0]`, then when it's time to switch players and make Player 2 the active player, you could `pop` "Player 2" off the end of the array and stick it on the beginning. Now the array will look like this: `var players = ["Player 2", "Player 1"]`.

So you can execute your code (hint, there's probably going to be something that rhymes with "smile smoop" going on here) that takes in the number of sticks the current active player selects, checks to make sure it's a valid entry, and then if so, subtracts the number of sticks from the current total, and swaps the players.

Do not allow players to take more than the total # of sticks on the table (i.e. if there are 2 sticks left the player should not be able to take 3 sticks)
The player who takes the last stick is the loser.

The pseudocode would be similar to the one above, EXCEPT for Step 6, which would now read:

 Check to make sure there's at least one stick left. If there are 0 sticks left, the game is over. end the play loop and alert that the current player LOST. But if there's one or more sticks remaining, swap the players so the other player is now the active player (`players[0]`) and go back to Step 4.

**This is going to be hard.**

EXTRA CREDIT: Make a one-player version where it's one player versus the computer. After the player goes, the computer will randomly choose 1, 2, or 3 sticks to remove.
EXTRA EXTRA CREDIT: If there are 2, 3, or 4 sticks remaining the computer will automatically choose the correct number to remove to win the game. (e.g., if it's the computer's turn and there are 3 sticks left, it will remove 2 sticks. That leaves 1 stick, your opponent has to pick it up and (s)he loses).

================

### PART 4: HTML/CSS

 1. Research HTML tags (there's this website called Google.com....). Make a list of tags, with each tag's intended use in the HTML. Start with these common tags:
  * div
  * p
  * a
  * span
  * ul
  * li
  * nav
  * head
  * body
  * html
  * button
  * script
1. List at least 5 others we haven't covered in class yet, along with their use.
1. Go to the class repo (*not* to your fork, go to the main repo [here](https://github.com/ga-students/wdi-al-Khwarizmi)). Click on the 'wiki' tab. you'll see a wiki page for HTML tags. Add any tags you researched to the wiki page, along with a one-sentence description of what they're for. Everyone needs to add at least one tag to the wiki page (ideally all 5 you found that we haven't reviewed yet, but I do recognize that the last students to do this may have found some of the tags they researched have already been added by others.)
1. CSS!
  * [Some reading on CSS layout](http://learnlayout.com/)  -- we will cover this in class tomorrow so consider this a preview. You can stop once you hit the section on 'media queries'
  * In this folder you'll see an index.html file with a very basic personal webpage outline. Also, there's a styles.css file that is completely empty.
    * First, replace the text IN CAPS in index.html with stuff about you.
    * Now, using both files (index.html and styles.css), style your page. You must apply at least one style to each element in the body of the HTML. You must make use of classes and ids. For example (don't do this) you might have the following
    ```CSS
    li {
      list-style-type: georgian;
      background-color: yellow;
      border-style: ridge;
      border-width: 10px;
    }
    ```
    Etc. Remember that CSS syntax is to list the the thing you're styling (e.g., `p` or `h3`) followed by curly braces. Inside the curly braces each individual style is listed in the form `style-name: style` with a semicolon after EVERY one. (semicolons are not optional). Another example:
    ```CSS
    #ethans-bio {
      font-weight: bold;
    }
    ```

======================

### PART 5: VIDEOS

Watch videos 13, 14, 15, and 18 from Shorty's [playlist](https://www.youtube.com/playlist?list=PLw1xVKFbouenbYs8xykO0IG5Bs-utmxqJ)
