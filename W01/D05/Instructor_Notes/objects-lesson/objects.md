# objectives


- store associative data inside an object
- retrieve data from object literals
- define object methods
- define this


# intro

Let's take a look at a new we can organize our data. We've seen that `arrays` give us a powerful data structure that let us update, delete, append a sequence of objects called `elements`. Those elements can be strings, numbers, even other functions or `arrays`.

Let's take a look another type of data structure that allows us to store data in pairs.

# Object literals

Javascript does not do a good job at defining exactly what all an object does. It's defined very broadly and we're get to look at one portion of what objects can do and they are called `Object literals`.

# Creating an Object

creating an object is real easy. So just like you define an array literal with `[]` an object uses `{}` .

		var contactList = {
			drake: "1-201-555-3332",
			beyonce: "1-201-134-0934",
			kendrick: ["1-201-555-5555", "1-201-123-1234"]
		}

Now if we wanted to access a value from our our contact list all we have to do is use the `.` operator and the name of the `key` or `property`. So if we wanted drake's number we would do this: `contactList.drake`.

We also have the ability to access the value associated with the `key` drake by using the `[]` like an array but inside the square brackets we name the key. `contactList.drake["drake"]`.

This can be pretty powerful way to get values from an object. It let's you use a variable or a function as your key to retrieve a value.

You might have noticed that you can also have arrays as values inside of objects. These arrays act just like you would imagine them to, you can loop through them, mutate them, etc.

You can also delete properties from objects by using the the `delete` operator.

```JS
delete contactList.drake
```

You can also use the `in` operator to check if something is inside of an object.

```js
"drake" in contactList
```

# Looping

This brings us to the part of the lesson where we figure out how to loop through a set of values in an object.

	for (var prop in contactList) {
		console.log("obj." + prop + " = " + contactList[prop]);
	}


# Objects are everywhere!

We have String Objects, Number Objects, Array Objects, Function Objects. Everything is an object.

Explore:
Partner up, and find a method you haven't used before and present it!


# Problem

Subway time!

Create objects for the the blue line, yellow line, and the green line for all stops below central park in Manhattan. The object should have a property name that is the station and an array that associates the lines for that stop and is respective of that line. Like:

```js
blue = {
	'42nd' : ['a', 'c', 'e']
}
```
Prompt the user with a list of stations.

Loop through these objects and find any stops where you would be able to transfer respective of the station.

[http://web.mta.info/maps/submap.html](http://web.mta.info/maps/submap.html)

# Object Methods

Objects start to get really interesting when combined with functions. Remember when we said functions are just values? Since objects can "store" key-value pairs, we can have properties that are made-up of functions. We call them `Object Methods`.

Now we have a way to `name space` our functions. Think of an object as a container for our functions, which may contain variables that are containers for our values as well.

```
var person = {
	name: "Syed",
	sayName: function(){
		console.log(person.name);
	}
};

person.sayName();
```

There's a slight problem with our code though. If we change the name of our variable we'll need to change the reference to `person.name` too. That makes our code inefficient and rigid. Javascript has a way around `this`

# this

```
var person = {
	name: "Syed",
	sayName: function(){
		console.log(this.name);
	}
};

person.sayName();
```
