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

1. Given the array below, write a `youngest` function that will return the name of the youngest person in the array.
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
    name: "Paul Ryan",
    age: 46
  },
  {
    name: "Marco Rubio",
    age: 44
  }
]
```
1. Michael Bloomberg (age 73) is considering entering the race. Write a `runForOffice` function that will take two arguments, a name and an age, and return a candidate object like the ones above. Use it to add Bloomberg to the array.
1. Following his poor performance in Iowa, Paul Ryan decided to drop out. Write a `dropOut` function that takes in a name and an array of candidates. If it finds a candidate by that name in the array, it removes him or her from the candidate list and returns the modified array. If it doesn't find a candidate by that name, it returns `"Candidate " + "[name] + " isn't in the race!"`. Use it to remove Ryan from the race. As of this past Friday, Jeb is out too--remove him.  Use `dropOut` to try to Syed Salahuddin from the race as well.
1. Try reworking your `youngest` function so that it takes not just the array but also a string. Passing in `"youngest"` works as before; passing in `"oldest"` returns the oldest candidate, and `"average"` returns the average age of the candidates in the array.
