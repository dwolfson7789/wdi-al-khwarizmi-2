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

Model your React frontend on Liza's in-class Contacter demo: you should make an AJAX call when clicking the appropriate links, get the data back from the backend, and render it.

Have fun!
