#Objectives 

- describe the difference between referencing vs invoking functions.
- define call backs and anonymous functions


# functions functions functions

As we barrel towards adding more interactivitiy to our apps we well need to look at a few more features that ES2015 offer to us. 

# referencing functions vs invoking


There are certain cases where we need to reference function instead of just invoking it. Why? Because if we are creating functions to react to user behaviour when we want a function to called when something like a click event or mouse hover happens, but not right away.


regular old function call: 

```js 
function hello(msg){
	console.log(msg);
}

hello("sup bro");
```

regular old function refernce:

function hello(msg){
	console.log(msg());
}

function message(){
	return "hey there";
}

hello(message);



a regular old anonymous function reference:

```js

function hello(msg){
	console.log(msg());
}

hello(function(){
	return "whoa";
});
``` 


	