var context = {
	name: 'Mickey',
	age: 87,
	profileSrc: 'https://upload.wikimedia.org/wikipedia/en/d/d4/Mickey_Mouse.png',
  happy: true
};

// source is a string representation of the HTML template `info-template`:
var source = document.getElementById('info-template').innerHTML;

// HBS compiles `source` and returns a function, which we store in the `template` variable:
var template = Handlebars.compile(source);

// We pass the obj `context` to this fxn, which we store in the `html` variable
// the function returns computed HTML to us
var compiledHtml = template(context);

// we set the computed HTML as the innerHTML of the infoContainer
var infoContainer = document.getElementById('info-container');
infoContainer.innerHTML = compiledHtml;
