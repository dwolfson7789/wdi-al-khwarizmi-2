# ANOTHER WEEK IN THE BOOKS!

![api](http://i.giphy.com/WipRpqUWGWbKw.gif)

(This gif came up when I searched giphy for "API." I have no idea why. HOWEVER, it seemed like a good image for the end of the week!)

**WHILE THERE ARE TWO PARTS TO THE WEEKEND HOMEWORK, PART 1 IS THE MOST IMPORTANT ONE. ONLY START PART 2 IF YOU'VE COMPLETED PART 1.** However, do try to get to Part 2 if you can -- we're going to be doing more with factory functions in this class, so the practice is good if you have the time!

## PART 1: POKEAPI

Check out [pokeapi.co](pokeapi.co). It's a Pokemon API! We can get all sorts of Poke-info sent our way. Cool! (I have a confession to make -- I never played Pokemon.)

I am keeping this deliberately open-ended: you guys have used a bunch of APIs now (OMDB, Weather Underground, Colour Lovers, and Marvel) so you should be old hands at this. This is what you'll need to do:

1. Build the skeleton of a web app (HTML, CSS, and JS files). Link the CSS and the JS to your HTML and make sure everything's working.
1. To access the API, you'll need jQuery. Grab it from a CDN and load it up in a `<script>` tag on your webpage. You'll also need handlebars so grab that as well and load it up.
1. You'll need to read the API docs. There are a *lot* of possible endpoints for you to consider. You'll need to decide which ones you want. I suspect many of you might want the Pokemon endpoint, which returns a bunch of Pokemon(Pokemen?). You can find the full docs [here](http://pokeapi.co/docsv2/) and the section on the Pokemon endpoint [here](http://pokeapi.co/docsv2/#pokemon). (Note that passing in a resource or name is OPTIONAL -- if you don't do so, the API will send you an array of Pokemen in return--20 items is the default, but you can change that as outlined in the docs).
1. Do something cool with the data. This is up to you! But you *must* do the following at a minimum:
    * Build a form that takes some kind of user input and
    * Use that input to build an API call, which it then makes successfully and gets data back
    * Take the data that the API returns and use handlebars to display it using templating.
    * *Try* to use at least on one filter function on the data before displaying it.
    * Apply at least some minimal styling via CSS so that the page looks decent.

Think of this as a dry run for Project 2! Have fun! Poke around!

## PART 2: JavaScript refresher on Factory Functions

To be completed once you've done Part 1 -- finishing Part 1 is more important!

Write a factory function that takes one argument, the name of an HTML tag (e.g., "div" or "img"), and returns a *function* that in turn will return a string with that tag, giving it any content that's passed in. An example may make this clearer (read closely -- this is not as complex as it may sound!):
```js
function HTMLFactory(tagName) {
  //your factory code goes here
  //Henry Ford would weep tears of joy at this factory

}

var divMaker = HTMLFactory('div');  //divMaker is now a function.

divMaker("this is test text")
// returns "<div>this is test text</div>" <--NOTE THAT'S A STRING

var linkMaker = HTMLFactory('a'); //linkMaker is now a function

divMaker(linkMaker("I'm a really cool link"));
// returns:
// "<div><a>I'm a really cool link</a></div>"
```

Note that '*class*' is a reserved keyword in JavaScript and you can't use it as the name of any arguments or variables.
