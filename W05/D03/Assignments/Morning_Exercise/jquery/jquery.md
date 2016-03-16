==== JQUERY ====

1. **What is jQuery?** It's just a library that adds various functions and capabilities to JavaScript. It makes doing certain things a lot easier (or at least the syntax is cleaner) than with vanilla JS.
1. **Why use it?**
  - cross-browser compatability
  - it's got great shorthand syntax
  - simplifies certain things
1. **So why didn't we use it more already?**
  - vanilla JS is sometimes faster
  - it's important to know how to do everything with plain old JS before you add in jQuery
  - jQuery is a big library. You import a ton of code and only use a small portion on any given project. (There are simplified versions of jQuery that just do some of the stuff, like underscore.)
  - conflict with other libraries / frameworks (like AngularJS)
  - any time you use code someone else has written you risk stuff breaking in hard-to-detect ways
1. **Haven't we used jQuery already?** Yup, we used it in making AJAX calls to APIs. You *can* do that with vanilla JS too but the syntax is *so* gruesome, we went ahead and used jQuery instead.

## PART 1: HTML ELEMENT CREATION

To make an HTML element in vanilla JS we used `document.createElement`. E.g.,
```js
var navBar = document.createElement('nav');
```

**In jQuery, the same syntax is a lot shorter.**
```js
var $navBar = $('<nav>');
```
The syntax is $() and inside the parentheses you pass in the HTML tag *including the surrounding carats* as a string. Because you made it with jQuery, it's a good practice to name the variables you use starting with a $ (as above) so you know that they're jQuery objects. Some more examples:
```js
var $div = $('<div>');
var $footer = $('<footer>');
```




## PART 2: HTML ELEMENTS -- GRABBING WITH jQUERY

**What about grabbing elements from the DOM?**
Vanilla JS: `var myNav = document.querySelector('nav');`
jQuery: `var $myNav = $('nav');`
If you just pass the *name* of the tag into the same jQuery syntax $() it will return that object for you.
It can also grab multiple ones! same syntax
```js
var $links = $('a'); //will grab all <a> tags from the page and store them in $links
```

**And of course you can grab elements by any CSS selector pattern you wish:**
```js
var $containerDivs = $('div.container') //grab all div elements with a class of container
var $navLinks = $('nav a') //grab only those link tags that are inside of a nav elements
var $comment3 = $('#comment3') // grab the element with an ID of comment3
var $catImg = $('img[src="cutekitty.jpg"]') //grab img tag with src='cutekitty.jpg'
```


## PART 3: MODIFYING ELEMENTS

**We then have all sorts of convenient functions available. For example, to style the CSS for an element:**
```js
var $nav = $('nav')
$nav.css('background-color','pink');
```
We can even chain together multiple such commands
```js
$('div').css('margin-left','10px')
        .css('background-color', 'khaki')
        .css('display','inline-block');
```

there are shortcut funcs for some properties too
```js
// with nothing in the parens this returns the width; or you can pass something in
.width()        // returns width of jQuery object it's called on
.width('500px') // sets width of element it's called on to 500px
.height()       // ditto for height
```

**Where it gets especially helpful is in things like iterating over multiple elements.** For example, let's say we want to grab all the '<a>' tags from the page, iterate over them and see if they point to 'http://www.myspace.com'; if they do, we want to change the link's `href` attribute to point to Facebook instead. Here's how we might do that with vanilla JS:
```js
var links = document.QuerySelectorAll('a[href="http://www.myspace.com"]');
for (var i = 0; i < links.length; i++) {
    links[i].setAttribute('href',"http://www.facebook.com");
}
```

and in jQuery
```js
var $mySpaceLinks = $('a[href="http://www.myspace.com"]');
$mySpaceLinks.attr('href','http://www.facebook.com');

// or even on just one line of code:
$('a[href="http://www.myspace.com"]').attr('href','http://www.facebook.com');
```

## PART 4: GETTING EVERYTHING GOING
**To start your jQuery when the document is ready, you use**
```js
$(document).ready(function() {
  //stuff goes here

  })
```

**To add elements to the DOM with jQuery we have all sorts of useful functions**
```js
insertBefore() // inserts as a sibling before
insertAfter()  // inserts as a sibling after
append()       // same as appendChild in vanilla JS
prepend()      // adds as a child of the specified element at the beginning
empty()        // removes all child nodes and content
```

## PART 5: FUN STUFF!

**jQuery also adds a bunch of handy functions to do stuff that you'd have to write a bunch of regular JS to accomplish.** For example, fading elements in and out:

```js
var $myDivs = $('div').fadeOut(1000)   //pass in the time the fadeOut should take in milliseconds
$('nav').slideDown('slow')             
```

Examples include:
* fadeIn
* fadeOut
* fadeTo (fades to specified opacity)
* slideDown
* slideUp
* slideToggle
* hide
* show
* animate
* toggle

E.g.,
```js
$('footer').animate({
             opacity: 0.5,
             left: "-= 100",
             height: 'toggle'
           },1000);
```

## PART 6: AJAX

**You're already familiar with this.**

```js
//make an ajax call with specified properties
$.ajax({
  //properties go here
})
.success(callback) // execute on a successful ajax request
.error(callback) // execute on a failed request

```
