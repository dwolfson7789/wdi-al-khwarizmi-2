# MORNING WARMUPS

1. Write a function that will take in an array of numbers and a multiplier and return a new array, with each number multiplied by the multiplier. E.g.,
```js
var multiplier = function(arr, mult) {
  // stuffs go here
}

console.log(multiplier([2, 5, 4], 3)); //output is [6, 15, 12]

```
1. Write a function that will take in array of numbers and return a new array with those same numbers, sorted smallest to largest. e.g.,
```js
var sorter = function(arr) {
  //code goes here
}

console.log(sorter([10, 5, 20, 15])); //output is [5, 10, 15, 20]

```
1. Write a function that will take in an array of numbers *and* a function and then run that function on each of the entries in the array. It should return a new array. E.g.,
```js
var arrayMapper = function(arr, myFunc) {
  //magic happens here
}

var addSixAndMultByTwo = function(num) {
  return (num + 6) * 2;
}

console.log(arrayMapper([5,7,2], addSixAndMultByTwo)); //returns [22, 26, 16]
```
1. Rewrite your `arrayMapper` function in the last step so that you don't have to have previously created and named the function you're applying to each element of the array. Hint: it rhymes with "schmanonymous schmallback function"
