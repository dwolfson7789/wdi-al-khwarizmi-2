# Revisiting HTML

### Learning Objectives:
After this lesson you will

- be able to define the terms *tag*, *attribute*, *name-value pair*, *parent*, *child*
- understand which tags are self-closing
- be able to draw a tree representing the contents of an HTML document

## HTML
When we look at some HTML:

```HTML
<html>
  <head>
    <title>Casual Catwear, Inc.</title>
  </head>
  <body>
    <h1>Casual Catwear, Inc.</h1>
    <p>
      Specializing in bespoke sweaters and boots for your fussy feline friends.
    </p>
  </body>
</html>
```

We see a lot of things going on, but the thing that matters most are *tags*.

### Tags

A tag in HTML is simply anything of the form `<` + `tagname` + `>`.  Example tags from above are the `<html>` tag, the `<body>` tag, and the `<p>` tag.  

You may notice that a large number of the tags have complementary *closing tags*, which are tags of the form `</` + `tagname` + `>`.  These tags will match an opening tag in name, and only differ by having that slash (`/`) before the tag's name.  These are important, since they'll tell the browser when a tag is finished with its job.  

#### Self-closing tags

There are tags which don't require the matching closing tag, and those are *self-closing tags*.  Examples of self closing tags are:

```html
<img src='pony.png'>
<hr>
<input type='text'>
```

As of `HTML5`, the following tags (also known as *Void Tags*) are self-closing:

* area
* base
* br
* col
* embed
* hr
* img
* input
* keygen
* link
* meta
* param
* source
* track
* wbr

Everything else needs a matching tag.

#### Attributes

When you see an element like this link tag below:

```html
<a class="link external-link" href="https://google.com" target="_blank">
```

You should notice several pairs of the form `attribute="value"`.  We call those *name-value pairs*, and there are many common ones, such as:

* id
* class
* href
* src

They're a way to store data that the browser will use to do its job correctly.  For example, the `class` attribute will store class names which correspond to styling information.

##### Exercise 1 (5 minutes)

Pardon my french, but go visit [http://motherfuckingwebsite.com/](http://motherfuckingwebsite.com/).  It's funny, a bit brusque, but it also contains some very simple HTML.  

Inspect the HTML and:
1. Find an example of a self-closing tag.
2. Find a name-value pair, and report the attribute and value.

### Nesting

One of the most important things about HTML is that tags can be nested.  In the example above, the `<html>` tag actually contains all other tags.  

The next two tags, `<head>` and `<body>` separate the document into two clear parts:

* `<head>` is where we put things like `<style>` information, `<meta>` tags, and the document `<title>` (which shows up in the browser bar)
* `<body>` is where we put the body of the document, or the things we actually intend for the user to see.

If you've ever explored front end CSS frameworks, you've likely seen code that looks like this:

```HTML
<div class="row">
  <div class="col-sm-8 blog-main">
    <div class="blog-post">
      <h2 class="blog-post-title">Sample blog post</h2>
      <p class="blog-post-meta">January 1, 2014 by <a href="#">Mark</a></p>

      <p>This blog post shows a few different types of content that's supported and styled with Bootstrap. Basic typography, images, and code are all supported.</p>
      <hr>
      <p>Cum sociis natoque penatibus et magnis <a href="#">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
      <blockquote>
        <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
      </blockquote>
    </div>
  </div>
</div>
```

When an outer tag contains an inner tag, we call the outer tag the *parent*, and the inner tag a *child*.  Likewise we can use the familiar terms *descendent* and *ancestor* to describe relationships further than one level.  

For this reason, we can think of a document as a family tree, with the `<html>` tag as being the ultimate ancestor.  Since we think of it as a tree, we often call the `<html>` tag the *root* element.

At this point you have an idea of what the word `document` refers to in what will become the **Document Object Model**, or DOM for short.

##### Exercise 2 (5 minutes)

For the code example above, draw a tree for all tags contained in the example.  You don't need to include the text content, or any attributes for the tags when drawing the tree.  

*Be careful!*  Many of the tags have secret hidden tags inside of them.  
