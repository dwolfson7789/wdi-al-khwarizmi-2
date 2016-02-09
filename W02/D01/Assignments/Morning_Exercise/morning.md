##Morning Exercise: W02D01

###Let's limber up our JavaScript muscles after the weekend!

1. Given the two arrays below, generate a new array that contains the full deck of 52 cards in this format: "5H" for five of hearts, "QD" for Queen of Diamonds, etc. Log the full deck to the console.
```js
var suits = ["S", "H", "D", "C"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
```
BONUS: After you construct your deck, randomly pull two cards from your deck array and determine their blackjack value. If you're not sure how, look up the `Math.random` and `Math.floor` methods.  This may require several `if` statements
1. Filtering out BAAAAAAAD words. Let's say we want to build a comment system (maybe we're building a blog?) but we want it to filter out any bad words.
  * Create an array with these bad words: "shorty", "voldemort", "shucks"
  * Ask user to create a comment
  * Evaluate it and create a browser alert to indicate whether or not the comment contained a cuss word

ANOTHER BONUS: The [Fibonnaci sequence](https://en.wikipedia.org/wiki/Fibonacci_number) is an important infinite sequence where each number in the sequence is the sum of the prior two. The first two numbers, by definition, are 0 and 1. From that we can get the whole sequence. E.g., the first 7 Fibonnaci numbers are 0, 1, 1, 2, 3, 5, 8.

Write a program that prints out the first 20 numbers of the sequence.

1. Given the array below, write a `youngest` function that will return the name of the youngest person in the array. Then write an `oldest` function for the oldest.
```js
var candidates = [
  {
    name: "Bernie Sanders",
    age: 74
  },
  {
    name: "Hillary Clinton",
    age: 68
  },
  {
    name: "Jeb Bush",
    age: 62
  },
  {
    name: "Donald Trump",
    age: 69
  },
  {
    name: "Ted Cruz",
    age: 45
  },
  {
    name: "Marco Rubio",
    age: 44
  }
]
```
