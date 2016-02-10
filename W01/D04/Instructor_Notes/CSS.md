# Cascading Style Sheets, or CSS

### Learning Objectives:
After this lesson you will

- be able to define `selector`, `tag`, `class`, `id` with respect to CSS
- be able to define `property` and `value` with respect to CSS
- understand the concept of `specificity`
- be able to write selectors to style specific elements in your document
- be able to describe the difference between `block` and `inline` elements

## CSS

When we look at tag in a document, such as `<div class="logo">`, there are a few distinguishing features.  *This* tag has a tag name of `div`, and a class name of `logo`.  It's missing an `id`, but that's ok.

(A brief note on ids: The value for any given id **must not** be the same as any other id on the same page.  Think of an `id` as a social security number.  It's a way to identify a specific element.)

If you were to give me instructions to find that element you might tell me to look for a `div`, or you might tell me to look for something with a class named `logo`.

##### Exercise (5 minutes)

```html
<header class="nav-header">
  <div class="logo">
    <a class="home-anchor" href="/">My Company</a>
  </div>
  <nav>
    <ul class="menu">
      <li><a id="about" href="/about">About Us</a></li>
      <li><a id="contact" href="/contact">Contact Us</a></li>
      <li><a id="hours" href="/hours">Hours</a></li>
    </ul>
  </nav>
</header>
```

Neighbor 1: Pick an element, and explain to your neighbor how to find it.  
Neighbor 2: Be difficult!  If there are multiple elements which match it based on the description, ask for more information.

Switch back and forth to complete this exercise twice each.

### Selectors

The way we combine tag names, class names, and ids to describe elements in our document is through something called a selector.

```CSS
div {}    /* tag name */
.logo {}  /* class name */
#about {} /* id */
```

A selector will look for all elements in the document that it matches, and will apply the styling directives to all of them.

##### Exercise (10 minutes)

Given the following selectors, list all elements from our previous exercise which will get something other than the default styling.  Ultimately what will each of them look like?

```CSS
header {
  background: darkgreen;
}

a {
  color: white;
}

.home-anchor {
  font-size: 48px;
}
```

### Combining Selectors

It's possible to combine multiple properties into one selector.  

```CSS
div.logo {}                 /* div AND class name logo */
a#home {}                   /* anchor tag with id home */
ul#navigation.pull-right {} /*
  unordered list, id of "navigation", class name of "pull-right"
*/
```

This allows us to be much more specific about which elements get styled a certain way.

##### Exercise (5 minutes)

For the previous HTML, write 3 selectors using as many properties as possible.

### Specificity

CSS declarations are read and applied from top to bottom.  If two declarations are equally specific and both style the same property, then the one that is defined last (top-to-bottom) will be the one that wins.

What does it mean for two declarations to be equally specific?

1. Inline styles win over everything else
2. Existence of an id beats a declaration without an id
3. Number of classes in the declaration is the next tie-breaker
4. Number of elements / pseudo elements is the final tie-breaker
5. Then closeness to the bottom of the stylesheet decides

##### Exercise (5 minutes)

Sort the following in order of specificity

1. `div.purple`
2. `div#orange`
3. `#orange`
4. `.green#orange`
5. `div.purple.omega-element`
6. `.purple.omega-element`
7. `div#orange.omega-element`

### Block vs Inline

One last thing.  When you imagine an element in your HTML, you want to think of it as living inside a box.  There are two types of boxes, and they differ in how they are inserted into your document.

1. Block elements:
  * start on a new line
  * have width equal to their parent element
  * have height equal to their content
  * break to the next available line for content following them
2. Inline elements:
  * are treated as text for positioning
  * have width equal to their content
  * have height equal to surrounding content
  * wrap to the next line at end of line

Examples of **block** elements are:
  * Footer tag `<footer>`
  * Navigation tag `<nav>`
  * List tags `<ol>`, `<ul>`, and `<li>`
  * The quintessential `<div>`

Examples of **inline** elements are:
  * Anchor tag `<a>`
  * The quintessential `<span>` element
  * Form elements `<button>`, `<input>`, `<label>`, `<select>`, `<textarea>`


##### Exercise (10 minutes)

Style the `index.html` file in this directory.  Make sure everything has at least one style applied to it.
