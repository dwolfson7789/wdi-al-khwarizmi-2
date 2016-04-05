# React Review

### Components - rules
- Think of them like plain JS objects that can have properties.
- Single responsibility principle
- Must have a `render` function
  - `render` fxn must return `jsx`
  - Everything rendered must be encapsulated in a single element
- At the very end, only one component can be rendered to the dom. It will contain other components.
- Components have two built-in properties:
  - State
  - Props

```javascript
var helloComponent = {
  state: {
    // empty obj by default
  },
  props: {
    // empty obj by default
  }
}
```

### State
- `State` is a property on the component object. It starts out as an empty object.
- When you need to update it, **cannot** use `this.state.counter = 5`. You must use `.setState`. Why? Because that triggers a re-render of the DOM.
  - React doesn't like you to manipulate the state directly.

### Props
- `Props` is a property on the component object. It starts out as an empty object.


### State vs. Props
- State is tracked from within the component.
- Props come from outside.
- `props flow down, state flows up`
  - What does this mean?
  - Parent components give children components props
  - Children components keep track of their own state & let their parent know about it.
- **How do you know when something should be `state` or `props`?**
  - **State:** Anything that can change based on user interaction should be `state`.
  - **Props:** If the only way a thing inside of a component can change is because something in the parent changed, it should be `props`.

### Props vs. this.props.children
- Use React dev tools/inspector to your advantage here.
- If a `component` is just a plain JS object, and `props` is just a property on the component, then `children` is just a key in the props object:

```javascript
// child component
var HelloComponent = {
  state: {
    // empty obj by default
  },
  props: {
    name: 'Liza',
    fullNameArr: ['liza', 'hayes', 'ramo'],
    children: '<p>My name is liza</p>'
  },
  render: renderFxn
}

// parent component
var App = {
  render: function(){
    var name = 'liza';
    var fullNameArr = ['liza', 'hayes', 'ramo'];

    return(
      <div className="main-container">
        <Title/>
        <HelloComponent name={name} fullNameArr={fullNameArr} children={'<p>my name is liza</p>'}>
          <p>My name is {name}</p>
        <HelloComponent/>
      </div>
    )
  }

}

```


### Functional stateless components (FSC)
- Take a normal component & break it up into two parts: FSC & container component
- FSC
  - Renders a view
  - A component that's just a function
  - Doesn't have lifecycle methods
  - Not created with .createClass()
- Container component
  - Contains the logic of the component
- Why do we do this? It plays better with `react router`

### Styles in React
- For now, just link to a static `.css` file in the HTML the way you would in a static site.
- Soon we'll get into css and style loaders in webpack.

---

# React Demo - Contacter
### What we'll cover:
Backend:
- Node
- Express
- Mongo
- CORS
- Body parser
- Nodemon

Frontend:
- React
- Webpack + Babel + JSX bootstrap from Syed
- Axios















---

# React Lab

### Assignment: Twitter 
- Create a fully functional node + react app
- Pull all tweets from the database and display them using react.

### Set up
- Create a new folder for this lab called `react-mongo-lab`
- Inside of that, copy Syed's Webpack Bootstrap folder from W08/D01. Rename this folder `frontend`.
- Run `npm install` & `npm start`
- Touch `.gitignore` >> `node_modules`
- `mkdir` a folder called `app`
- Inside `app`, touch `index.html` and `index.js`. Touch a `components` dir.
- Create your components in this folder.
- Create a new database and use `mongo` in your terminal to add a few tweets, maybe four.
