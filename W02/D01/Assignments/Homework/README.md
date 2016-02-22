# HOMEWORK

1. Go to the Take-the-Money-and-Run directory and follow the instructions
1. Videos: Watch video 20 from the playlist.
1. Practicing Loops: Fizz Buzz Bang Bi Bim Bop
Did you guys do Fizz Buzz as part of your prework? If not, here's a reminder. Fizz Buzz is a children's game where you count up from one. However, if the number you're supposed to say is divisible by 3 you say "Fizz", if it's divisible by 5 you say "Buzz", and if it's divisible by both, you say "FizzBuzz". So the first 20 numbers would look like this:
    - 1
    - 2
    - Fizz
    - 4
    - Buzz
    - Fizz
    - 7
    - 8
    - Fizz
    - Buzz
    - 11
    - Fizz
    - 13
    - 14
    - FizzBuzz
    - 16
    - 17
    - Fizz
    - 19
    - Buzz

For a computer, the above is ridiculously simple. Let's make a more complex version:
* Create a `words` array. The words are strings: "Fizz", "Buzz", "Bang", "Bi", "Bim", "Bop"
* Create a `divisors` array. The entries in this array are numbers: 3, 5, 7, 11, 13, 17
* Now create a `fizziness` function that takes one argument called `lastNumber`.
* Inside fizziness, you're now going to create nested loops. It should iterate over all the numbers from 1 to lastNumber and for each
number, check to see it's divisible by each and every one of the numbers in the `divisors` array. (Remember: to see if number A is
divisible evenly by number B, you use the modulo operator: A % B. A is divisible by B if A % B === 0.) If a number is divisible by
a given divisor, the corresponding word from the `words` array should be logged to the console. (So for 11, the corresponding word is `Bi`; for 5 it's `Bang`, etc.). If the number isn't divisible by any of the divisors, the number itself should be logged to the console.
* Once you've done that, let's make our function more reusable:

```js
var fizzGame = function(lastNumber, words, divisors) {
  //your code goes here
}
```

lastNumber works the same as it did before. `words` and `divisors` are arrays that you will pass into fizzGame. The function will then work exactly as it did before (in fact you'll be able to reuse most if not all of the code!). The difference now is that instead of words and divisors being hard-coded in advance, they can be generated on the fly. Try playing the game with different divisors and different sets of words ["strawberry","vanilla","chocolate","peppermint"] or ["dammit","hell","fudge","curses"]
