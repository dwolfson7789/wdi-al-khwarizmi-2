# objectives


- declare and define our own functions
- determine the difference pure functions  vs functions with side-effects

# Intro

What the func are functions really? They are discreet chunks of code that are executed when we make a function call. We've been using other peoples functions (opf) like Math.random() or console.log() all over the place but what if we wrote our own?

Functions give us the power to organize our code into named chunks and basically create mini programs inside of our larger program. This makes reading our code a lot easier and let's res-use common parts of our code as well!

A function has no idea about the rest of the program. It's like a mini-universe inside the larger universe of our program. Let's look at how we create one.


# Function Declaration

	function sayHi(){
		console.log("hi");
	}

	sayHi();

Just like a variable a function can be named. The naming structure follows the same rules as variables.

	function sum(num1, num2){
		console.log(operandOne + operandTwo);
	}

	// we know that our function above needs two numbers.
	sum(1,1);

Here we've got a function declaration with two `parameters`. Javascript does the work of assigning values to those variables (operandOne and operandTwo) and then we log the sum of those values.

How does Javascript know those values? Well when we `call` our function we give the arguments that function needs needs and it'll assign them to the parameters we defined.

Arguments can be primitive values or even other functions. So something like this is totally valid `sum(Math.random(), Math.random())`.


# Function Expression

There are two ways you can define functions. We've seen declarations and now let's take a look function expressions.

	// function on the right is techincally called a anonmous function
	var add = function(num1, num2){
		console.log(num1 + num2);
	}

	add(1, 1);

# Pure vs Side-effects

Functions with side-effects are functions that do stuff independent of their return value. For example alert() creates a dialog box for us.

Where as Math.floor() which rounds our numbers but doesn't actually effect anything in our computer. It doesn't even change the state of a variable!

# Return Values

The two functions we've looked at so far don't have actually have any explicit return values. They log to console but if you assign them to a variable, you'll see that they return `undefined` according to chrome..

We can create function returning values using the `return` keyword. This let's return numbers, booleans, or even data structures like Arrays.

	function sum(num1, num2){
		return num1 + num2;
	}

This also let's us compose functions together you can do something like this:

	sum(sum(1,1),sum(1,1));



# Problem

Now that we have a sum/add function let's create a simple calculator with subtraction, multiplication, and division functions.

But make sure that each function checks if both numbers are actually numbers otherwise return null.

# Scope

Functions are kind of like their own little universes. All the variables that exist inside that function cannot be accessed from the outside. For example

	function calculateSalesTax(someAmount){
		var salesTax = .0887
		return someAmount + (someAmount * salesTax)
	}
	console.log(salesTax); // womp womp

# Problem: to the max

Creating a function that takes an array as an argument and returns the max value from that Array.


# Problem: simple text adventure
