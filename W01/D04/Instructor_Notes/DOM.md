# The DOM, not just some guy from Jersey

### Learning Objectives:
After this lesson you will

- be able to define what the DOM is
- be able to define what an API is
- understand how to access the DOM with JavaScript, and how this represents an API

## The DOM

In the early days of the web, all pages were static.  At best you'd have a form or two to submit data that would be stored on a server somewhere.  Overall, pages were just documents... they were a tree of tags, and (for a solid year by itself) some styling information.

Along comes JavaScript 1.0 and Netscape Navigator 2.0, and the era of interactivity in webpages begun.  JavaScript allowed developers to talk to the document, to access the document... to add and change what was displayed in the document based on user input - all without requesting more information from the server.

When we say **DOM**, we mean the Document Object Model.  It's another representation of the document stored in an HTML file (or XML file), that allows a programming interface to interact with it.

## JavaScript + DOM = API

JavaScript is the programming language of choice when it comes to interacting with the DOM.  Together they form an API, or an *application program interface*.  A way to think of the term API is the publicly available interface that allows a programmer to write software efficiently.  It's a list of available commands, the specific syntax for the commands, and the expected results for those commands.

A reasonable quote (from Quora user Tristan Irwin) is that "an API is an agreement between two people stating: 'If you give me this instruction, I will perform this action, or return this information'"

JavaScript is the language that allows us to access the DOM, and the DOM is the representation of the HTML that is displayed in the browser.  Together they let us access and change what's in the browser at any given moment.

## Enough Talk, let's do it.

Ok, so how do we use JavaScript to access the DOM?  Thankfully all browsers expose a variable called `document`.  This variable represents the entire document, but also contains a variety of methods for us to access, augment, and modify the document.  

### Accessing the document

#### `document.querySelector` and `document.querySelectorAll`

We've just had practice writing query selectors while playing with **CSS**, so we can now utilize these to target elements in the DOM.

##### Exploration (5 minutes)

The method `querySelector` takes a string, which can be any number of CSS query strings separated by commas.  It will return the first element on the page which matches any of the selectors, or `null` if there is no match.

Open the document `fuzzy_bunnies.html` in your web browser (from the command line: `open fuzzy_bunnies.html` should suffice).  Bring up the JavaScript console (command-option-J), and type in the following commands.  What does each one return?

- `document.querySelector('p.follow-paragraph');`
- `document.querySelector('#page-title');`
- `document.querySelector('h1, p');`
- `document.querySelector('p, h1');`
- `document.querySelector('h2');`

##### Exercise (5 mins)

Write a `querySelector` to grab each element on the page.

##### Exploration (5 minutes)

The method `querySelectorAll` searches for all elements on the page, and returns a *NodeList*.  Often we'll just say list, it's very similar to an array.

Rewrite all of your `querySelector`s from the previous exploration as `querySelectorAll`.  

- What is returned with each?
- Since the lists are array-like, try accessing specific elements by bracketing in.  For example:  

    ```js
    var a = document.querySelectorAll('p');
    a[0]; // <p class="lead-paragraph">I love my fuzzy bunnies.  I pet them every day.</p>
    ```

### Changing the document

For now, we're going to settle with changing existing elements on the page.  Soon we'll make new ones!

#### `someNode.innerText` and `someNode.innerHTML`

Once you have a node, you can access and change the `innerText` and `innerHTML` properties.  

##### Exploration (10 minutes)

For `fuzzy_bunnies.html`, access the JavaScript console.  Grab the page title as below:

```js
var title = document.querySelector('#page-title');
```

What happens when you execute each of the following commands?

- `title.innerText;`
- `title.innerText = "I <3 Bunnies";`
- `title.innerHTML;`
- `title.innerHTML = "<span style='background: blue;'>I really love bunnies</span>";`

After the final command, try grabbing the new span by using a query selector.  Are you able to?  

What's the difference between `innerText` and `innerHTML`?

#### `someNode.classList`

Once you have a node, you can access information about the classes the node has.  You can also add, remove, or toggle classes.

##### Exploration (10 minutes)

For the title, as above, what happens when you execute each of the following commands?

- `title.classList;`
- `title.classList.add('highlight');`
- `title.classList.toggle('boxed');`
- `title.classList.remove('highlight', 'boxed');`
- `title.classList.add('floating');`
