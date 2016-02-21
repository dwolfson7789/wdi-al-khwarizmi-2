#Objectives

- describe the difference between named and anonymous functions.
- define call backs and anonymous functions


# functions functions functions

As we barrel towards adding more interactivity to our programs we will need to look deeper into how functions work in Javascript.

# Review: anonymous functions

So we've see this function declaration everywhere. Let's look at what this piece of code does?

```js
function sum(numArray){
	var sum = 0;
	for(var num of numArray){
		sum += num;
	}
	return sum;
}
```

function declarations are great but there is one little problem with them. Once we've declared a function we can't rename it! Unlike a variable functions will live in the global name-space. Remember we only have limited amount of space for naming things. Once a name is taken up by something then we are forced to find a new name.

# The function with no name.

One way to get around the problem of "global name-space pollution" is through anonymous functions. How do we use functions without names?  One way is to assign it to a variabl.

```js
// kind of like a reduction.
var sum = function(numArray){
	var sum = 0;
	for(var num of numArray){
		sum += num;
	}
	return sum;
}
```

# Problem

Create a calculator that takes an array of numbers and has a function to add,
subtract, multiply, and divide by a given number and return a new array. Please
use function expressions.

for example:

```js
// create divide array by, subtract array by, etc.

sumArrayBy([1,2,3], 2);
```

And the output should be:

```js
[2,4,6]
```

# Problem

Now let's create a set of functions that takes an array and another number.
It will look to see if a number given isBigger or isSmaller than the number in the array.
The function should also return an array with **only** the numbers that are bigger or smaller
than what we provide. Please declare these as function expressions.

```js
isBiggerThan([1,2,3,4], 2);
```

should output:

```js
[3,4];
```
