# js-dom-quotes
## Set up

- `open index.html`
- open JavaScript console (`command + option + J`)

## Exercise - Selecting DOM elements

1. Using relative selection, select the &lt;p&gt; element containing the second Mark Twain quote
2. Do the same using a query selector
3. Select all of the elements with class `.quote`
4. Select the 'Quotes About Motivation' heading
5. Select all of the elements with class `.subject`

## Exercise 2 - Styling the DOM

1. Apply some basic styling to the `footer`.  In particular, give it a background, an upper border, and some padding + margin to have it stand out.
2. Do the same for the `header`, but switch to a bottom border.
3. Style the `main` section by setting the width to `80%` of the page width, and giving it `margin: 0 auto;`.  What does this do?
4. Apply some basic styling to the classes: `quote`, `subject`, `life`, and `simplicity`

## Bonus

A node object has a method called `remove` which will remove the node from the page.  It works like this:

```js
var someNode = document.querySelector('h3');
someNode.remove(); // note, parens are important here!  They actually call the method.
```

1. Remove the header from the page.
2. Grab all of the quotes, and remove each of them from the page.
  - use `querySelectorAll` to grab a collection of all quotes
  - this is *array like*... that means we can loop over them, right?  How would we do that?
  - as we loop, call `remove` on each quote
