# objectives

- determining what is "truth" with boolean logic and relational operators.
- make decisions with if statements and boolean expressions.


# intro

We have programs that are great for creating "linear" programs but what if wanted to make decisions? Decisions are incredibly important in imperative programming. For instance if you're creating a game, how do you check the state of a program to see if the player has won or not?


### example of a problem that needs control flow

   - If a worker works more than 40 hours in a week they are entitled to overtime pay. Overtime pay is calculated at the rate of 1.5 times the worker’s hourly rate. This additional rate is only applied to hours worked above the 40 hour limit.

   - Input: Hourly rate of pay
   - Input: Number of hours worked in 1 week
   - Process: If the hours worked is less than 40, simply multiply hourly rate by hours worked
   - Process: If the hours worked is greater than 40:
   - Multiply hourly rate by hours worked for 40 hours.
   - Subtract 40 from the the total hours to obtain the overtime hours
   - Multiply overtime hours by 1.5 times the rate of pay
   - Add overtime pay to base pay
   - Output: Total Pay

# Control Flow

How do we control the flow of our program so we can make decisions? Let's take a look at some flow charts.

![flow char picture](http://image.slidesharecdn.com/computerprogrammingknowhowtoflowchart-150203135309-conversion-gate01/95/computer-programmingknow-how-to-flowchart-3-638.jpg?cb=1422971635)


# Back to tooling for a second

- Linking html to js!  

# truthy / falsy

Control structures, specifically if statements have a predicate that evaluates to to true or false. That predicate / question determines if something gets executed or not.

Basically think of these questions as "yes or no". The code inside the body of a if statement will be executed only if the answer is "yes" to our boolean expression, otherwise the rest of the program will continue.

The following values are always falsy:

- false
- 0 (zero)
- "" (empty string)
- null
- undefined
- NaN (a special Number value meaning Not-a-Number!)

[https://developer.mozilla.org/en-US/docs/Glossary/Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

and these are examples of values that are truthy:

- true
- 42
- "some string"

[https://developer.mozilla.org/en-US/docs/Glossary/Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)


### boolean expressions

Boolean expressions use `relational operators` to evaluate to true of false. Let's take a look at some of them

      10 > 100
      10 === 100
      1 === 1
      900 != 1000
      2 <= 4

Each question or "predicate" evaluates to `true` or `false`.


### evaluate these expressions  

	a = 99
	b = 7
	c = -5
	d = 92
	
	a > b
	b < c
	b >= c
	c <= d  
	a == b+d  
	d <= a + c  
	c != b

### watch out!

`=` is not `===`, `!` is not, and `<=` and `>=` test more than one relation!


### if statement

      secret_number = 7;
      guess = parseInt(prompt("please enter: ");
      if( guess === secret_number ){
        alert("you guessed right!");
      } else {
        alert("you're wrong!");
      }
      alert("thanks for playing!")

# problem set 2

### 2a. Guppies are hardy fish, but they can’t live in all water temperatures.The acceptable range for guppies is between 72 and 86 degrees Fahrenheit. Write a program that asks the user for a temperature. Then display one of two messages based on the information provided:
- You’re going to freeze your guppy!
- You’re going to boil your guppy!

### 2b. Ask the user to guess a number between 1 and 10. Assume they will enter an Integer. Pick a number between 1 and 10 that is your “secret” number
- If the user types in your secret number, tell them that they win!
- If the user types in a number less than or greater than your secret number, tell them that they’re either above or below the number and to try again.

### 3b. You’re the manager of a large, distributed sales force. You want to create an easy to use tool that will allow your sales staff to do the following:
- Input their monthly sales amount
- Determine if they made their monthly quota of $10,000
- If they made their quota, they are eligible for a bonus of $500
- If they made their quota, they should receive a “You get a bonus!” message
- At the end of the program you should print out how much their bonus will be ($0 or $500)

# branching

Our current programs have a single branch of execution, but sometimes we need to have more than one branch to solve our problem

### example

      //get temp
      temperature = parseInt(prompt("enter the temp"));
      if (temperature < 32){
        //if it's true
        alert("too cold!");
      } else {
        //if it's false
        alert("well ok then");
      }
      //let's resume the rest of the program
      alert("thanks for playing!")

# string comparisons

Not only can we compare numbers relationally but we can also compare strings. If we want to check if to two strings what relational operator do you think we would need?

      'cat' === 'cat'
      'dog' === 'cat'
      'cat' > 'dog' //what?

The first two look ok but what on earth does the last expression mean?
Remember the ASCII table we looked at in the last lesson? well each character has a binary value so the binary value of 'd', 'o', and 'g' are greater than 'c', 'a', and 't'.


# problem set 3a

- Write a program that asks the user for a password
- Check to see if the password that was submitted is equal to the string ‘secret’
- If it is, print out a “welcome” message Otherwise, tell them to try again

# string manipulation

We also have built-in functions specific to strings that help us manipulate them.
for example you can add .toLowerCase() at the end of a string to change the case of all the characters in that string.

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)


# problem 3b

- Rewrite your password protection program to be case insensitive (i.e. the password “Secret” will also let you into your program)

# problem 3c

- Ask the user to type in two names. Compare the names and print them out in alphabetical order

# string length

We also have "string" properties that tell us the length of that string:

      .length


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length

# problem 3d

- Ask the user to input two names
- Sort the names in size order and print them out to the user

# Nested Decisions

- Sometimes you need to ask “follow up” questions after you’ve evaluated the value of a Boolean expression

- Re-write the “guess the number” game using a nested
decision structure.

- If the user guesses the number they win. If they don’t you should tell them to guess higher or lower next time depending on their answer.

# solution
      //pseudo code
      if ( guess == num){
         alert(you guessed it!)
      } else {
        if (num < secret){
          alert(too low)
        } else {
          alert(too high)
        }
      }

# problem set 4

- Guppies are hardy fish, but they can’t live in all water temperatures. The acceptable range for guppies is between 72 and 86 degrees Fahrenheit. Write a program that asks the user for a temperature. Then display one of three messages based on the information provided:

- You’re going to freeze your guppy!
- You’re going to boil your guppy!
- Your guppy is going to be fine!

# problem 4a

- Write a program that asks the user to enter in a number greater than or equal to zero and less than or equal to 100. If they do not you should alert them and end the program.

- Next, determine the letter grade associated with the number. For example, and A is any grade between 90 and 100. Report the letter grade to the user.

# else if

Let's take a look at other ways to write decision structures:

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)


# problem 4b

Write a program that takes a grade in the form  of a number and converts into a letter grade. Use an if-else structure


# logical operators

Logical operators are commonly used with relational operators to create compound predicates:

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)


# problem 5c

Write a program that asks a user for a username and a password.
- Check to see if BOTH the username and password are correct.
- If so, provide a Welcome message to the user
- If not, provide a Login Failure message to the user
