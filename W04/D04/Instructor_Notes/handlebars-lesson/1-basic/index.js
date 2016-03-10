var data = {
	name: 'Syed'
};

// Component 2: give HBS your template.
// `templateSource` is a string representation of the HTML template found in name-template:
var templateSource = document.getElementById('name-template').innerHTML;

// HBS compiles `templateSource` & returns a fxn, which we store in the `template` var
var template = Handlebars.compile(templateSource);
console.log(template);

// We pass the obj `data` to this fxn, which we store in the `html` variable
// the function returns computed HTML to us
var computedHtml = template(data);

// we set the computed HTML as the innerHTML of the infoContainer
var nameContainer = document.getElementById('name-container');
nameContainer.innerHTML = computedHtml;
