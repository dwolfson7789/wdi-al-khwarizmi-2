#HOMEWORK!

![node](http://i.giphy.com/SpYX5QSSzMgdG.gif)

(I have NO idea why that came when I typed '/giphy node'. You go giphy, do your thing.)

===================================

You must have Node.js and npm installed before beginning this homework! You should have done it back in Unit 1....

So, we're going to write a bunch of Node apps to get used to it.

# Part 1: Node

```js
var badJokes = [
  "A man walks into a bar. Ouch",
  "Your momma's so fat that when she sits around the house, \
  she REALLY sits around the house.",
  "What's that on your shoe? (slaps you upside the face)"
];
```

1. What do `require` and `module.exports` do? Write your answers in a new markdown file.
1. What is a Node module? A package? What's the difference?
1. Write a node file called jokeTeller.js that picks a bad joke at random from the above array and logs it to the console. You can copy and paste the badJokes array into this file.
** *BONUS* make it print the joke in colors!**
1. Let's practice compartmentalizing your code: move your badJokes array (from the problem above) to a NEW file ('badJokes.js'). You'll need to add a line of code to that file so that other files can use it (HINT: it rhymes with 'schmodule.schmexports'). Once you've done that, `require` badJokes.js from within your jokeTeller file and get it working!
1. More practice!
  * Make a file called `geometry.js`. Inside it, write three functions: one for calculating the area of a circle (taking in a radius as an argument); you'll want to make use of the Math.PI constant (notice how PI is capitalized? Typically constants are ALL CAPS in JavaScript). Also write a function for calculating the area of a rectangle of a supplied height and width, and a square (given a supplied side length). Open the command line repl and calculate the areas of:
    - a square of side 16.23
    - a rectangle with sides 45 and 107.55
    - a circle with radius 6
    - a circle with radius 10.2
  * Rework your geometry.js file. Put all your functions as methods inside an object called `geometry`. `module.exports` that object. Make another file called `math.js`, which will `require` your `geometry.js` file.
    - Inside math.js, prompt the user to enter a radius, and then console.log the area of a circle of that radius.
    - Liza discussed process.argv right? It's an array containing any arguments passed in on the command line. `process.argv[0]` will be equal to "node"; `process.argv[1]` will be equal to the name of the JavaScript file that 's being run. Indexes 2 on are the arguments the user passes in.
    So.
    ```js
    node foo.js 10 20
    // process.argv[0] is node
    // process.argv[1] is path/to/foo.js
    // process.argv[2] is 10
    // process.argv[3] is 20
    ```
    - rewrite your math.js file. Now when the user runs math.js, they should pass in two or three arguments: the first is the name of a shape (square, rectangle, or circle), the second is the side length (for a square) or radius (for a circle), or the height (for a rectangle), and the third is the width (for a rectangle). Math.js should figure out which shape is being asked for, and execute the appropriate function, passing in the parameters. So
    ```js
    node math.js square 6 // logs 36 to the console
    node math.js rectangle 2 4 //logs 8 to the console.
    node math.js circle 5 // logs whatever 25 * pi is to the console.
    ```
    - make sure it's working right!
1. Make a new file called `fileWriter.js`. Inside it you'll need to add `var fs = require('fs');`. Write a function called `makeAFile` that takes two arguments, a filename and a string and uses `fs.writeFile` to write that string to the file. You should get a 'success' or 'error' message depending on whether, you know, the operation was a success or not. Then call the function, passing in process.argv[2] and [3] as the arguments. So, when you're done:
```js
node filewriter.js ethan.txt "Ethan is the best"
// will create a file called ethan.txt with the supplied text in it
```
1. Write at least three files to make sure it's working.
1. use `fs.watch` to set up watches on those files. Change them and confirm you're getting notifications.
1. Play around on the npm [website](https://www.npmjs.com/). Learn about at least three other packages that sound interesting. Go to our class repo wiki [here](https://github.com/ga-students/wdi-al-Khwarizmi/wiki/npm-packages) and list the packages you found and what they do. Link to them. Put your name in parentheses after each one so you get eternal credit for the discovery!

# PART 2: READING

1. [MDN: Concurrency model & the Event Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
1. [The Proactive Programmer: JS Event Loop](http://theproactiveprogrammer.com/javascript/the-javascript-event-loop-a-stack-and-a-queue/)
1. [More reading on event loop](http://blog.mixu.net/2011/02/01/understanding-the-node-js-event-loop/)
1. [Some more](http://blog.carbonfive.com/2013/10/27/the-javascript-event-loop-explained/)
