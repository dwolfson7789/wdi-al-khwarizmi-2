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

Given the following selectors, which elements from our previous exercise will get styled?  Ultimately what will each of them look like?

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
div.logo {} /* div AND class name logo */
a#home      /* anchor tag with id home */
ul#navigation.pull-right /* unordered list
                            id navigation
                            class name pull-right */
```
