var data = {
  people:
    [
      {firstName: "Syed", lastName: "Salahuddin", like: "Ramen noodles"},
      {firstName: "Ethan", lastName: "Friedman", like: "taking videos of his adorable baby"},
      {firstName: "Liza", lastName: "Ramo", like: "Nachos"}
    ]
};
// `source` is a string representation of the HTML template found in name-template:
var source = document.getElementById('favorites-template').innerHTML;

// HBS compiles `source` & returns a fxn, which we store in the `template` var
var template = Handlebars.compile(source);

// We pass the obj `context` to this fxn, which we store in the `html` variable
// the function returns computed HTML to us
var compiledHTML = template(data);

// we set the computed HTML as the innerHTML of the infoContainer
var favoritesContainer = document.getElementById('favorites');
favoritesContainer.innerHTML = compiledHTML;
