# React Overview Cheatsheet - quiz from memory

### General questions:
- What is React?

React is a new way to create a new component and a JS representation of the DOM.

- What purpose does it serve/what problem does it solve?

You can update multiple sections at once, you are also given the ability to have a JS representation of the DOM. Auto refresh ability.

- What is the `view` layer of our apps?
When you see the backend, data, before it is placed on the site.

- What is the virtual DOM

JS representation of the DOM.

- What is unique about how React renders the DOM?

It allows you to add to the add, without actually writting code in the DOM, it returns and renders.

- When does React know to re-render the DOM?

It knows to update the DOM automatically, when the element is saved, without having to refresh the page.


- What is the difference between a front end framework and a CSS framework like Bootstrap?


- What are the three main technologies that React relies on and what purpose do they serve?

DOM, Webpack, bablrc

- What is the one thing that Webpack lets us do in Node that we couldn't before?

allows you to build loaders and optimizations to reduce output size.

- Difference between var, let, const

var: var is a global variable, that can be changed,
const: is a constant variable that cant be changed.
let: let can only see within the function.


- What have we been using instead of jQuery to make our AJAX calls in React?
Axios

- List the technologies in your backend and the command you use to start your server.
mongodb, nodemon app.js, npm install our package.json

- List the technologies in your frontend and the command you use to start your server.
npm run start, npm install (will install packages)
Webpack
ReactDOM


- What are two ways that we can apply styles in React?
Modular Stylesheet, inline styling.


- What are the purpose of your backend routes?
data transportation, data security, data storage.


### Components
- What is a react component?
Element taken from another file.

- What are the two main parts of a component?
render and return.

- Describe the Single Responsibility Principle and how to apply it if your components grow.



- Components have what type of data flow, bidirectional or unidirectional?
bidirectional


- What are props?
property of a object.

- Describe a way your app uses state.
dynamic updating.

- Fill in the blanks with either `up` or `down`: "In react, props flow ___ and states flow ___ ."
up and up

- What react method do you use to create a component?
const Component = React.createClass({})

- Describe how you pass data or a function from a parent component to a child component?

this.props.children

it knows to pass the children into the parent.




- Give one reason why you would keep logic & data that is specific to a child component inside of the parent component instead?

easy for organization, object is where you want to hold the body of the App, while the data is where you keep the separate pieces of the page.


- How would you write a simple component and render it to the DOM.
const Drew = React.createClass({
  return: function () {
    render (
        <div>
        <p>this is will render in the DOM</p>
        </div>
    )
  }
})


- Describe `props.children` and how a parent gives the child this data. How is it different from other props?

Children can be stored within a full function that can contain the styling, content, functionality and more and use it as a key element for the DOM.


- Why do you have to use the .setState fxn instead of setting state like this: `this.state.someState = 5`

predefined react function, set the state of the function after returning the AJAX call.



- How do you decide what should be state and what should be a prop?

state starts with a default value, props are unchangable. A Component cannot change its props, but it is responsible for putting together the props of its child Components.

if you want to add an external element, props are created as state are functions within the component.

- *Remember:* props come from outside (from the parent component), whereas state is maintained from within the component.  

### Rules of components
- Must have a render function

- Render function must return JSX

- The JSX must be encapsulated in a single element

- Only a single component can be rendered to the DOM (it may have components nested inside of it)

### Stateless components
- How do you create a stateless component?

- What is different about it than a regular component?
  - It doesn't have state
  - It solely renders UI
  - No lifecycle methods
  - Do not create by using .createClass()
  - Must pass it props explicitly as an argument
  - Do not use `this` when calling `props`, ie. `this.props.someProp`
- Write a simple stateless component

### Container component
- What is a container component & it's purpose?


### Lifecycle methods
- Lifecycle methods are simply pre-built event listeners that you can add to components.
- Assignment:
  - Go to React docs and read about these (two of them below should look very familiar). Write one sentence next to each one below describing it's purpose. I put the ones below that you should focus on, you don't have to read all of them.
  - You can use the code below to build a little app that will trigger some of the lifecycle methods (all it will do when triggered is log the name of the method), or you can strategically paste these into the contacter app you just built and see if they fire. You already know how to trigger getInitialState and render, so you don't have to do those.
  - *Hint* One will be too tricky to trigger, one needs to go into a child component to render, but you should be able to trigger at least 5 in App.js.


``` javascript

var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
  getInitialState: function() {
    console.log('getInitialState');
    return {};
  },

  componentWillMount: function() {
    console.log('componentWillMount')
  },

  componentDidMount: function() {
    console.log('componentDidMount')
  },

  componentWillReceiveProps: function(nextProps) {
    console.log('componentWillReceiveProps')
  },

  shouldComponentUpdate: function() {
    console.log('shouldComponentUpdate');
    return true;
  },

  componentWillUpdate: function() {
    console.log('componentWillUpdate')
  },

  componentDidUpdate: function() {
    console.log('componentDidUpdate')
  },

  componentWillUnmount: function() {
    console.log('componentWillUnmount')
  },

  render: function() {
    console.log('render');
    return <p>Hello</p>;
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('react-app')
);

```
