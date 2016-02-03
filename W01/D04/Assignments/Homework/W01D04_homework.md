# W01D04 Homework

![And so it begins](http://seooasis.co.uk/wp-content/uploads/2014/10/So-It-Begins-Image.gif)

===================

### Part 1: Calculator

Let's try building a basic JavaScript calculator.
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
1. What's the result of add(multiply(subtract(8,3),4),15)? **Don't** just paste it into the console! See if you can figure out what's going on first.

====================

### Part 2: Can you handle the `Truth`?

Using the variables below, determine if each code snippet will evaluate to ```true``` or ```false```. Answer WITHOUT pasting the expressions into a repl! (Feel free to check and see if you're right after you've answered them all)

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
