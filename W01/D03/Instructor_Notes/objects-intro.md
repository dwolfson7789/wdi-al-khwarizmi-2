# objectives


- store associative data indside an object
- retrieve data from object literals


# intro

Let's take a look at a new we can organize our data. We've seen that `arrays` give us a powerful data structure that let us update, delete, append a squence of objects called `elements`. Those elements can be strings, numbers, even other functions or `arrays`. 

Let's take a look another type of datastructure that allows us to store data in pairs. 

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


# Looping

This brings us to the part of the lesson where we figure out how to loop through a set of values in an object.	
	
	for (var prop in contactList) {
		console.log("obj." + prop + " = " + obj[prop]);
	}

# Problem 


Subways! Create objects for the the blue line, yellow line, and the green line for all the stops below central park in manhattan. The object should have a property that is the line and the station. 

[http://web.mta.info/maps/submap.html](http://web.mta.info/maps/submap.html)


	







