# Objectives

- write functions that act on other functions. also known as callbacks.
- difference between referencing and invoking a function

# higher order functions

Remember when we said that functions are "first class objects" in Javascript.
Well this is where we found out why. The ability to pass functions as if they
are values is an incredibly powerful tool that let's us build really neat
abstractions.

```js

function hello(msg){
  console.log(msg);
}

hello(function(){
  return "hi how's it going"
});

```

Wait but what happened? We gave our function another function that returns a
string but our output was the function. not the message?

# referencing functions vs invoking

There are certain cases where we need to reference function instead of just invoking it. Why?
Because if we are creating functions to react to user behavior when we want a function
to called when something like a click event or mouse hover happens, but not right away.

Our hello function has a function reference BUT it doesn't actually call the
function until we've invoked it with ().

Let's take another look at it:

```js
function happyBirthday(callback){
  if(true){
    callback("happy birthday");
  } else {
    callback("another day another dollar");
  }
}

happyBirthday(function(msg){
  console.log(msg);
});
```

HOW AWESOME IS THAT

# i'm counting on you

Let's take a look at a simple countdown clock.

```js

// variable in the global space
var count = 10;

function countDown(){

  console.log(count);
  count -= 1

  // stop counter
  if(count === 0){
    clearInterval(interval);
  }
};

// interval variable in global space
var interval  = setInterval(countDown(), 1000);
```

# think pair share.

Why is this code not working. Describe the mechanics of what is happening
here.

# Problem: count down component

Let's make another count down clock. But this time let's make a version
that will be displayed via the DOM. Please use createElement and appendChild
instead of query selector.


# creating map, filter, reduce with our own functions and how it all composes

# using map, reduce filter from ES2015.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

# anonymous functions the ES2015 way

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
