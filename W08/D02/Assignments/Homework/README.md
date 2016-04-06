# W08D02 Homework!

Hope you're all feeling better than I am!

Here's your Tuesday night homework: as usual this is a two-night homework.

### Build a small, fully functioning FE/BE web app using React for the front end and Node/Express/Mongo for the backend

We're going to rework our Recipe Manager app we built last week. You should have the backend code in your repo for last Wednesday.

Your app should:

Display a simple webpage, with header(s) and a nav bar that offers the following options:
- View all recipes
- Search recipes
- Make a new recipe

If you want, you can not bother with ingredients as separate collection (you'll have to rework the backend code if so), and just make them an array of strings in your recipes in the database. E.g., you could have
```js
{
  name: "Hamburger",
  author: "Ethan",
  difficulty: "Easy",
  time: 20,
  ingredients: ["ground beef", "buns", "lettuce"],
  description: "Make some freaking' hamburgers. How hard can it be?"
}
```

That simplifies the task rather than have each ingredient be its own database document and your `ingredients` array be an array of Mongo ObjectIDs. If you'd like to do that, feel free!

Model your React frontend on Liza's in-class Contacter demo: you should make an AJAX call (use `axios`) when clicking the appropriate links, get the data back from the backend, and render it.

Clicking on 'create a new recipe' should render a form, and on form submission, make an AJAX post to the backend to save the new recipe to the database.

Try to do the following if/once you have the above working:

* Make the initial AJAX call to get all the recipes in the appropriate component's `componentDidMount` method so that on page load, all current recipes are displayed.
* On clicking the 'search recipes' link, display a search bar and button; on submission, make an AJAX get request, passing in the recipe name the user entered. On the backend, search the recipes by name, get the matching one (if found), send it back to the front end, and display it.
* **BONUS** Add in the 'UD' part of 'CRUD': ability to edit and update recipes.
* **BONUS** Add in some styling. Do your styling in JavaScript and `import` into your React component files as needed.
* **NOT SO MUCH A BONUS AS JUST GOOD PRACTICE** Really segregate your files to make it easy to find stuff!
For example

recipe-manager/ -- home for the entire project
  - backend/ BACKEND API SERVER LIVES HERE
    - app.js
    - package.json
    - node_modules
    - .gitignore
  - frontend/ FRONTEND WEB SERVER LIVES HERE
    - config files (webpack.config.js; .babelrc; package.json; .gitignore)
    - node_modules
    - app/
      - index.html
      - index.js (imports the parent component of the app and runs ReactDOM.render)
      - components/ -- bottom-level component files live here
      - containers/ -- components that are containers live here
      - styles/ -- styles JS files live here

If you were going to segregate things out even more, you could have:

  - app/utils/ -- helper JS files (e.g., methods to make AJAX calls) live here -- this keeps your actual components cleaner and shorter: they just import the appropriate helper and call its methods as need be

  - app/config/ --router file lives here
