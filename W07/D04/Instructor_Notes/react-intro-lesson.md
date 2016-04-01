# Intro to React

#### * Exciting announcement! React expert coming in Friday at lunch for an AMA.

### Lesson Objectives
- What is the `view` layer?
- What is React?
- Get comfy with React [official docs](https://facebook.github.io/react/)
- What are 3 technologies we use for `React` & their purposes?
- What is a `React component`
- What are the two main parts of a `React component`
- What is the `virtual DOM`?
---

# Part I • What is React?

### How do we typically build the `view` layer of our apps?
- First, what is the `view` layer and what is the `logic` layer in our apps?
- How have we been building the `view` layer of our app? Client side with jQuery or vanilla JS.
- Both technologies allow us to build the view dynamically based on the data you're trying to display (If you didn't use them, you'd have to hard code everything in HTML).

### Context - Frontend Frameworks
- So far we've talked about **web** frameworks like `node` with `express` and `ruby on rails`, but what is a **frontend** framework?
- **Problem:** You know when you write a bunch of JS to manipulate the DOM & it quickly becomes spaghetti code? You accidentally show elements that should be hidden, then you accidentally delete some elements from the DOM, then you need to show some elements you created, but not until a thing happens that triggers another thing that hides first. Spaghetti.  
- **Solution:** Frontend frameworks handle that issue. Imagine if you had an enormous, enterprise-level single-page app (SPA). It'd be impossible to keep everything accurate using only vanilla JS.
- Remember Handlebars? HBS eliminated tons of repeated HTML & JS by letting us use a template.
- You can think of React as HBS on steroids. Essentially, it's going allow us to better organize our logic (JS) and views (HTML) on the frontend.
- *Note:* Don't confuse this with a *CSS framework* like Bootstrap. These frameworks solve a different problem - organizing **design**, not **data**.

### So what is React?
- A JS library for handling front end logic. That's it.
- You can use it in any web framework. We're going to use it in Node.

---

# Part II • React Components

### Components overview:
- React is comprised of `components`.
- What is a `component`? Think of a component like a JS object that has properties & methods.
- Single Responsibility Principle
  - Component should only do one thing
  - If the component grows, it should be broken down into smaller subcomponents that only have one responsibility
- At the very end, only one parent component is inserted into the DOM using the `render` fxn.
- Components have `unidirectional data flow`
- Components have two main parts:
  - Props
  - State

### UI of a product table • parent & child components
- Draw out hierarchy & identify child & parent components

### Virtual DOM & `state`
- In P1 & P2, you wrote about 60+ lines of vanilla JS to manipulate the DOM
- In your head, you had to keep track of what the DOM looked like each time an event occurred. There could be a million different scenarios - you had to code what would happen if a user chose one path, or an entirely different one - which easily creates 100 permutations. Each of these permutations needed to render something different to the DOM. Each of these possible DOM renderings are called `states`; the `state` of the DOM.
- As you coded your vanilla JS, you had to keep track of what elements were doing what and when so that you could create the appropriate UI for the user at that time. This DOM that you're keeping track of in your head is the **virtual DOM**  
- You will also see it called the `shadow DOM`, but in React, the shadow DOM is called the **virtual DOM**.

### How does React use the virtual DOM?
- Before React renders the DOM, it looks at the current virtual DOM, then looks at what parts of the DOM are **going to change**, and then only renders **what has changed.**
- Why does it only change the parts of the DOM that need updating instead of the entire thing?
- How does it do this?
- Let's say you had a handlebars template.

``` html
  <p class="user-name">{{name}}</p>
```
- When **rendered**, it looks like this:
``` html
  <p class="user-name">Liza</p>
```
- Let's say you change the class from `user-name` to `contact-name`.
- Vanilla JS and jQuery would re-render the entire DOM just for that one tiny change.
- React would look at what is going to change **and only update the class name.**

### Recap:
- When do I re-render? Answer: When I observe that the data is dirty.
- We aim to re-render the virtual DOM tree only when the state changes.
- How do I re-render efficiently? Answer: Using a virtual DOM to generate a real DOM patch.
- In React, each of your components have a state. Essentially, React knows when to re-render the scene because it is able to observe when this data changes.


### Recap: React Components have two parts: `props` and `state`
- `props` are like properties on the react component "objects"
- Child components keep track of their own `state`. They let their parent components know about it.
- In React, **"properties flow down** and **states flow up"**

---
# Part III • React is written in JSX
### JSX
- JSX is a custom JavaScript syntax used by React. JSX maps to real HTML elements when rendered.
- Don't be scared. It looks similar to HTML & Handlebars.

---

# Part IV • Set up a new React app & some basic React examples

---

# Part V • More context & some history

### Similar frameworks
- Backbone
- Angular
- Ember

### What's React Native? Are they the same?
- Nope, don't confuse the two.
- React Native brings the React methodology to native apps. Same idea, slightly different code.
- React for mobile apps (iOS, Android, and now desktop Mac apps!)
- In iOS apps, React replaces writing Swift; in Android, Java.
- Can share some React code between iOS, Android & your web app.

### Some React History
- First released by a Facebook engineer, Jordan Walke, in 2013
- He rewrote the `liking` and `commenting` functionality of Facebook in React, then a different FB developer went to Instagram and rewrote Instagram's feed on web in React.

### Who uses React?
- Facebook
- Instagram
- Air BNB
- React
- Delivery.com
- Code Academy
- etc.

---
# Part VI • What's under the hood? React relies on Webpack, JSX & Babel

### Webpack
- Module loader, bundler, task runner. It is independent of React; you can use it other places without React.
- Webpack takes modules with dependencies and generates static assets (files) representing those modules
- Essentially, it takes what we've written in React and translates it into javascript that's readable by browsers.
- Browsers can't read `JSX` and some can't read ES6, so we need to translate it before giving it to them.
- Coolest thing about Webpack is you can load modules on the frontend. We've never done that before!

##### Webpack Features: Code Splitting
- For large web apps (SPAs) it’s not optimal to have all code in a single file.
- Webpack allows you to define split points so segments of code are required on demand.

##### Webpack Features: Loaders
- The crux of Webpack, similar to `tasks` in other build tools like grunt
- A function that processes a static asset (html, css, images, etc) and returns Javascript
- Primarily defined and configured in the webpack.config file (also can be required in a file)
- Examples: http://webpack.github.io/docs/list-of-loaders.html
- Or you can write your own!

##### Webpack Features: Large Plugin Ecosystem
- Lots of community support
- Plugins can inject custom build steps
- Examples: https://github.com/webpack/docs/wiki/list-of-plugins

##### Why Webpack?
- Current build tools cannot check all of these boxes:
- Split the dependency tree into chunks loaded on demand
- Keep initial loading time low
- Every static asset should be able to be a module

### JSX behind the scenes
- JSX is a custom JavaScript syntax used by React. JSX maps to real HTML elements when rendered.
- JSX must be transformed from JSX to real JavaScript in order to be parsed by JavaScript engines.
- The official tool used to transform JSX to actual JavaScript is **Babel**.

### Babel
- Babel is a transpiler (if you've ever written SASS, it's kind of like a preprocessor that lets you write in SASS syntax, then translates that into CSS, which the browser can read.)
- Babel allows us to write in JSX and ES6 (ES2015), then it converts the code into earlier versions of javascript that most browsers support.
- What's the point of this?
- It allows us to write code using a more efficient syntax. Then, it does the hard work for us by translating our code into something usable by lots of browsers.
- This is kind of like how we write in javascript or ruby, instead of machine code.


----
### Resources
- [ES6 guide](https://css-tricks.com/lets-learn-es2015/)
- [React videos](https://egghead.io/series/react-fundamentals)
- [Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html)
- [The Elevator Pitch for React](http://developer.telerik.com/featured/elevator-pitch-react/)
