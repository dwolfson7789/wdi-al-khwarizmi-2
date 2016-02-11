# basics

# objectives

- express primitive values
- define variables / name bindings
- call functions and their arguments
- use math operators in simple calculations
- be able to distinguish between data types
  - int, float
  - booleans
  - strings

# intro

To be able to program we need to talk to our machine. Our code is human readable only and before it can be executed it needs to be interpreted into binary for our computer to run.

The interpreter in our case will be `v8` the javascript/`es2015` `virtual machine` that
will interpret and run our code.

Cchrome will let us interact with v8 and evaluate code. Most browswers have some sort of JS interpreter. Hence Javascript's popularity.



# primitive values

let's take a look at the smallest parts of a computer program. our code can not be decomposed or broken a-part any further than these objects.

fire up the chrome developer tools console and type in the value and hit return/enter for each of them.

    100
    10.5
    "this is not like the others"
    true
    false

Chrome evaluates each line of code an spits it right back at us. since there is nothing more to reduce from these values it just spits back the thing we typed in.

Digital approxamation of something analog.
![](http://www.centerpointaudio.com/Images/Analog-Digital%20frequency%20examples.png)

First thing to note is that we have numbers, but not only that but two kinds of number. they are represented as "whole numbers" or numbers with "decimal values". The decimal values are just approximations. Just like digital sound is an approximation of analog sound.

Another thing to note is that that you can see that the third value is textual. It is actually a pretty special in sense that it's a sequence of characters. all the letters including any spaces or tabs make up that value called a `string`. Like a string of characters. Strings need to be surrounded by quotes or double quotes to be evaluated by the interpreter.

![](http://web.alfredstate.edu/weimandn/miscellaneous/ascii/ASCII%20Conversion%20Chart.gif)
 All characters need to be represented as binary somehow. Some folks got together and decided what numbers represent what charcters.
 
 
I won't get into the last two values just yet, booleans. Just know that know predicates (in the math sense) are a big part of programming.


# name bindings

one of the useful features of a high-level programming language is the ability to name things. we can actually name our data objects and javascript can reference them by that name. How do we do it?

We use the `assignment` operator and it looks like an equals sign `=`. When we bind a name to something like a value using the assignment operator we say we've `declared` that value.

The way it works is that the name we are binding is on the left of the operator and the value is on the right.

    var age = 32
    var greeting = "hello, how are are you?"
    var place_of_birth = "Houston"
    greeting
    age
    place_of_birth

Now we have names representing those primitive values.

variables names have a few rules
- names cannot start with a number
- and cannot have special characters or spaces.
- variable declarations are statements. They hold some "state" of a program.
- state is what lets the interpreter "remember" our value, it saves it to memory.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators

# comments and re-assignment

sometimes we want to annotate our code. we do this by using "comments". comments
are lines of code that don't execute. we do this by double backslashes.

    //age variable holds reference to a number
    var age = 32
    //update variable to dog years
    var age = 32 * 7
    // and then add one
    var age = age + 1

we did a few things there. not only did we use comments but we also did this neat thing called re-assignment. we can change the value of variable at any time. we can also accumulate values.

notice that i'm using math operators, we'll get into those a little deeper in just a second.

# functions

the most powerful feature in javascript are functions. at the moment we will look at a couple of built-in functions that are provided for us by the browser (not javascript) to add a little bit of interactivity to our programs.

    alert("hi")
    input("how are you feeling today?")
    alert(100)
    alert("these text prompts could get annoying")

functions have a name and have a parenthesis (like in math). We "call" functions to run them, and pass arguments into them so we can do some work on that data or expression.

the alert function is just a dialog box and displays the values from our expression and the prompt function creates dialog box that can take some user input.


![](http://images.slideplayer.com/14/4312700/slides/slide_5.jpg)



alert and prompt are functions with side-effects. meaning they do all the work of creating dialog boxes for us.

functions take something in and give something back, what is given back is called a "return value". in the case of prompt it "gives back" what the user has typed in but in a dialog box. 

now if we can get a user's input then what can we do with it? store it in a variable!

      var name = alert("hey what's your name?")
      prompt(name)

# operators and types

before we can start doing some real work let's quickly look at some operators that let us do calculations and concatenation(add strings together).

      1 + 1
      10 / 2
      400 - 100
      10 % 2
      100 * 2

See something unlike the others? The expression value of 10/2 is a decimal! It's what we call a `floating point number`. Whole numbers are called `integers`. So numbers are represented as two DIFFERENT data types.

data types come with certain rules on how you can use them. We'll take a look at that in just a moment.

Before we jump into types let's take a look at how to use the addition operator with strings.

      name = prompt("what is your name?")
      alert("hello "+name)

Cool so now that we can get input, give output and do some simple calculations, let's create a calculator!

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators)


# our first program with input and output

    alert("let's add some numbers together")
    var operand_1 = prompt("please enter a number")
    var operand_2 = prompt("please enter another number")
    alert("The solution is: "+ operand_1 + operand_2)

whoa whoa what happened?

# not my type

we need to look at the return value of prompt function to make sure that we are getting numbers back not strings! one way to do that is with typeof operator

      let some_num = prompt("enter a number please")
      typeof some_num

Now what!? Well we need convert our string to a number, thankfully there are built-in functions to help us do that:

      // we can compose functions!
      parseInt(prompt("enter a number"))

Now remember we have two types of numerbers there is also a `parseFloat()` function for parsing floating point numbers. 

as well as rounding them when they get too big: 

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)

try it out!


# problem set 1
#### 1a. fix the sum program!

#### 1b. Ask the user for two numbers. You can assume they will be floating point numbers. Compute the following and print it out to the user: 
- The sum of the numbers
- The product of the numbers
- The difference between the numbers
- The first number divided by the second number
 

#### 1c. Write a program that asks the user for a number of pennies, nickels, dimes and quarters. Calculate the total amount of money that the user has and print it out. Use .toFixed() to format your results to the right number of decimels.

#### 1d. Write a program that asks the user for the value of their current Metrocard and compute how many rides they have left on their card. Only provide whole number results (i.e. you cannot have 3.5 rides left on a card); use the Math.floor() function.

##### Note that Math.floor() is a pure function, as a opposed to a function with side-effects. It doesn't produce any kind of input or output, it just returns a value! 

# Why you bugging. debugging errors

Types of errors:

- Syntax
  - incomplete quotes or parentheses (see what happens when you have a missing quote0)
- Reference
  - no variable declaration (try using a var w/o declaring it!)
  - no function definition (samething but with a function name)
- Semantic
  - no error but wrong output (ie 1 + 1 is 11)

# Advanced Math Operators

We've used the basic operators like `+`,`-`,`*`,`/` but let's take a look at `reamainder` operator and Math.pow

		3/2
		3%2
			
The first expression evaluates to 1.5 and the the second evaluates to 1. When using the remainder operator the value we get back is the the remainder of that division. 

Try you some calculations that evenly divide into each other and others that don't. Use both operators.

# Math 

The math object in JS gives us some neat tools to tackle complicated calculations. Let's take a look at one of them. 

		Math.pow(2, 4)
		
The syntax looks a bit odd but what we have here is a function that takes two number like 2 and 4 and returns the value of 2 to the power of 4. 

You can take a look at all the math objects avaiable to us here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

###problem 1e.

Ask the user to input a number of seconds as a whole number.  Then express the time value inputted as a combination of minutes and seconds.

Enter seconds: 110

That’s 1 minute and 50 seconds

# Line Continuation

Sometimes you'll be writting code that doesn't fit inside the width of your window we can use the `\` to let our code flow the next line.

	'some string of text \
	that can be on two lines!'


# Escape Characters 

There are times where we would like to use ' character in a string literal. Like so:

	'hey how's it going?' // this will break
	'hey how\'s it going?' // this will not
	
if you try to type this into your console you'll notice an error. If we add a `backlash` to our string we'll be able to `escape` our character and make our string valid. 

We can also add tabs and newlines to our strings too. remember computers encode spaces, tabs, and enter key strokes into characters.

	'\tjim'
	'jim\nbob'

For all the ascii character encodings check this out!

[http://www.computerhope.com/jargon/a/ascii.htm](http://www.computerhope.com/jargon/a/ascii.htm)

# String Concatenation

We can take multiple strings and add them together. We do this by the using the `+` operator. So we can have variables that reference strings and combine them or just a couple of plain old strings as well

	"hey" + "hi"
	
# Formatting Strings

One of the nice features of javascript is that it gives us a bunch of default functions or methods on the String object to do stuff to our strings. 

And example of one could be when we want to chop off some digits from our floats 

	var some_div = 10/3 //remember to assign it to a variable.
	some_div
	some_div.toFixed(2)
	

For a complete list: 

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

# String Templates

A new neat feature in ES2015, instead of worrying about concatenating mixed typed expression from numbers to strings when we're trying to display things. we can just evaluate them inside the strings themselvs.

	"1+1"
	`${1+1}`
	
	
[https://developers.google.com/web/updates/2015/01/ES6-Template-Strings?hl=en](https://developers.google.com/web/updates/2015/01/ES6-Template-Strings?hl=en)


 

