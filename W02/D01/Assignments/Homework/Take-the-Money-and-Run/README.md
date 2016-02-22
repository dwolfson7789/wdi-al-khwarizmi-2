# Take the Money and Run!

**Do Not Touch Anything in the `body` tag.** You are only allowed to write code inside cashmoney.js.

Note that all styling is inline (bad form!) inside index.html.

## Write some JS to do the following

- When the first link on the page is clicked, the background color should change to something that is **not** white, blue, or black.

- When the second through fifth links are clicked, the relevant part of the song should be displayed. Notice that the `href` of the third link isn't `#`. Which means clicking on it will take you to google.com, which we DON'T want. Fortunately, Syed introduced us to the [event.preventDefault() method](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)) which, well, prevents the default event from happening when an event occurs. I.e., taking you to the url stored in a link's `href` property when you click on it is the default behavior. You'll need to stop that occurring when those links were clicked on. 

## BONUS!
- When the last link is clicked, one line of the chorus should be displayed. Each subsequent click should display an additional line of the chorus until all 6 lines are displayed.
