# Handlebars • Client-side Templating

### Learning Objectives:
- Create and render client-side templates using Handlebars
- Create Handlebar `helper` functions

### Resources:
- http://handlebarsjs.com

### Client-side rendering problems
We've already seen how to render to the DOM with pure JS.

Holy smokes, Batman. That's a lot of repeated code. There must be a way we can fix this.

```html
<div class="row">
  <div class="four wide column">
    <h3> Syed </h3>
  </div>
  <div class="four wide column">
    <h3> Salahuddin </h3>
  </div>
  <div class="four wide column">
    <h3> Likes: Ramen Noodles</h3>
  </div>
</div>
<div class="row">
  <div class="four wide column">
    <h3>Ethan</h3>
  </div>
  <div class="four wide column">
    <h3> Friedman </h3>
  </div>
  <div class="four wide column">
    <h3> Likes: taking videos of his adorable baby </h3>
  </div>
</div>
<div class="row">
  <div class="four wide column">
    <h3> Liza </h3>
  </div>
  <div class="four wide column">
    <h3> Ramo </h3>
  </div>
  <div class="four wide column">
    <h3> Likes: Nachos </h3>
  </div>
</div>
```

### What's Handlebars?
Handlebars (HBS) is a Javascript `library`. We've heard this term before. What does a library do? It *extends* the functionality of JS and helps us do cool things easier.

*Sidenote*: Handlebars is actually an extension of the Mustache templating library, denoted by the above `{{ }}`, but HBS provides a lot more functionality than Mustache.


### How do I Handlebars?
Let's take a look at a simple example & examine the components.


### Component 1: Script/Template Tag
We need to store our templates somewhere on our webpage so that it is accessible by the handlebars library. You may remember the lowly <script> tag. In addition to just taking a source, you can also change it's type, give it an id, all kinds of fun stuff. So let's take a look at how to use the <script> tag to put our template on the page.


### Component 2: Giving Handlebars your template
In your JS file you need to tell HBS that "I got a template for you to use". We do this as such:

```javascript
var source = document.getElementById('name-template').innerHTML;
var template = Handlebars.compile(source);
```

This grabs the HTML contained in the template tags and generates a template for us.


### Component 3: Populating the Template with Data
So we want to give our template some data. The way it is currently set up, it can only take one piece at a time, but we will soon look at how to easily give it a whole slew of data. Let's look at how to do this.

```javascript
var context = {
	name: 'Syed'
};
var computedHtml = template(context);
```

### Component 4: Rendering
So now we've got compiled HTML that contains our data and is formatted the way we want. So we need to render it on the page. The simplest way to do this is just stick it in a placeholder somewhere. Lucky for us, we have one: The container with `id = "name-container"`

```javascript
nameContainer.innerHTML = compiledHtml;
```

### Recap: what are we doing again?
- We create a template in script tags called `name-template`
- We tell HBS where our template is & store it in the `templateSource` variable.
- Then we "compile" the `templateSource`
  - `compile` is a special HBS function
  - It grabs the HTML in our `name-template` & generates a `template` for us
- `template` is actually a fxn
  - We pass the `data` to the `template` (`data` is what we'd like to display in the template)
  - We get back `computedHtml`
- Then we set the `computedHtml` to be the innerHTML of our `name-container`

### Exercise: basic HBS exercise

---

# Part II: HBS Helper Functions • If & Each
Handlebars provides extensive support for "Helper" functions, functions that basically make it easier to streamline our process. We'll be looking at the `if` and `each` helper functions.

### If
Syntax of an `if` helper function. Notice that the start & end of the statement are denoted with `#` and `/`.

``` javascript
{{#someBuiltIn someArgument}}
  block of code
{{/someBuiltIn}}
```

### Each
So remember before we had a whole list of people? We want to use a template over a group of people. So let's look at how we can change our template and our code to do that:

```html
<script type="text/x-handlebars-template" id="favorites-template">
{{#each people}}
  <div class="row">
    <div class="four wide column">
      <h3> {{ this.firstName }} </h3>
    </div>
    <div class="four wide column">
      <h3>  {{ this.lastName }}   </h3>
    </div>
    <div class="four wide column">
      <h3>  Likes: {{ this.like }}   </h3>
    </div>
  </div>
{{/each}}
</script>
```

Looks very similar to what we had before. But let's look at the key differences:

{{#each people}}: We start out with our each helper and give it the argument `people`. That tells Handlebars that it will be getting an array.

`this` keyword: The `this` keyword is not always necessary, but it is useful to use because it helps keep our code readable.

We still grab and compile our template the same way:

``` javascript
var source = document.getElementById('cool-peeps').innerHTML;
var template = Handlebars.compile(source);
```

### Adding The Data
This is where it gets a little funky. Our data is different now, we've got an `each` involved. Our data should look like this:

``` javascript
var data = { people: [
  {firstName: "Syed", lastName: "Salahuddin", like: "Ramen noodles"},
  {firstName: "Ethan", lastName: "Friedman", like: "taking videos of his adorable baby"},
  {firstName: "Liza", lastName: "Ramo", like: "Nachos"}
]}
```

This time, when we populate our template, we are giving it this object containing an array. And the {{#each}} can do the work for us:
``` js
var compiledHTML = template(data)
var favoritesContainer = document.getElementById('favorites');
favoritesContainer.innerHTML = compiledHTML;
```

Awesome! We were able to render a whole slew of data using a template.
