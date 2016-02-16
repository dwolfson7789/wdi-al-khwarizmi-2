# objectives


- declare and define our own functions
- determine the difference pure functions  vs functions with side-effects

# Intro

What the func are functions? They are discreet chunks of code that are executed when we make a function call. We've been using other peoples functions (opf) like Math.random() or console.log() all over the place but what if we wrote our own?

Functions give us the power to organize our code into named chunks and basically create mini programs inside of our larger program. This makes reading our code a lot easier and let's res-use common parts of our code as well!

A function has no idea about the rest of the program. It's like a mini-universe inside the larger universe of our program. Let's look at how we create one.


# Function Declaration

	function sayHi(){
		console.log("hi");
	}

	sayHi();

Just like a variable a function can be named. The naming structure follows the same rules as variables.

	function sum(operandOne, operandTwo){
		console.log(operandOne + operandTwo);
	}

	// we know that our function above needs two numbers.
	sum(1,1)

Here we've got a function definition with two `parameters`. Javascript does the work of assigning values to those variables (operandOne and operandTwo) and then we log the sum of those values.

How does Javascript know those values? Well when we `call` our function
we give the arguments that function needs needs and it'll assign them to the parameters we defined.

Arguments can be primitive values or other functions. So something like this is totally valid `console.log(Math.random())`

# Pure vs Side-effects

Functions with side-effects are functions that produce some sort of output independent of their return value. I.E. alert(), creates a dialog box for us.

As opposed to Math.floor() which rounds our numbers but doesn't have any input (like prompt) or output(like console.log())


# Problem

Now that you have a sum function let's create a calculator with subtraction, multiplication, division.
