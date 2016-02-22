# objectives
- be able to listen and react to dom events

# introduction

Now we're finally going to bring everything together. Our JS skills, knowledge
about the DOM, HTML, and CSS to create some interesting interactions.

From the MDN:
> DOM Events are sent to notify code of interesting things that have taken place.
Each event is represented by an object which is based on the Event interface,
and may have additional custom fields and/or functions used to get additional
information about what happened. Events can represent everything from basic
user interactions like keyboard and mouse input to speech recognition.

Basically we listen to the type of event we want and then fire off a callback
function that does something in respect to that event. We've already been listening
to the DOM to see if all the components of the DOM are ready to use. We can apply
that same functionality to mouse and keyboard events.

# buttons!

Probably the most common and most useful form of interaction. The button!


```html
<button>do this!</button>
```

```js
document.addEventListener('DOMContentLoaded', function(){
  var butt = document.querySelector('button');
  butt.addEventListener("click", function(eventObject){
    console.log(eventObject);
    var el = document.createElement("img");
    el.src = "http://i.imgur.com/yurTtSn.gif";
    document.body.appendChild(el);
  });
});
```

Once our anonymous function has been called, we can do the work of actually reacting
to our DOM event. The dom function calling our callback magically gives us a
event object, some interactions require additional info and we can gather that
from our dom event.

# Problem

Random cat gif generator! Create an array of 5 of your favorite cat gifs. Each
time someone clicks on your button a new random cat gif should be selected. The
cat gif should be swapped out as you change gifs instead of adding new ones to
the page.

# More events (keyboard, scroll, focus)

# Event Propagation
