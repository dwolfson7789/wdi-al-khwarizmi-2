# W02D04 Morning Exercise

Let's play around some more with higher-order functions (functions that operate on other functions).

## Array reverser

Write a function that takes in an array and returns that SAME array in reversed order. So:

```js
var testArray = [1,2,3,4,5,6];
var reverser = function(array) {
  //your code here
};

reverser(testArray); //returns new value of testArray: [6,5,4,3,2,1];
```

## Array tester

Write a function called `tester`. It should take two arguments: an array and a "test" function. You can assume that function will perform some test on whatever's passed into it, and return `true` if it passes the test and `false` if it doesn't. `tester` will return a new array with only the items that have passed the test.

So:

```js
var testArray = [1,2,3,4,5,6];
var biggerThanThree = function(num) {
  if (num > 3) {
    return true;
  } else {
    return false;
  }
}

var tester = function(array, test) {
  //your code goes here

}

tester(testArray, biggerThanThree); // returns [4,5,6]

```

##
