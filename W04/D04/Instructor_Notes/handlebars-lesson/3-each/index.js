
var context = {
	name: 'Gandalf',
	age: 2019,
	profileSrc: 'http://i2.mirror.co.uk/incoming/article4543672.ece/ALTERNATES/s615/Ian-McKellan-as-the-character-Gandalf.jpg',
	hobbies: [
		{
			name: 'Messin with Hobbits',
			experience: 1050,
			embarrassing: false
		},
		{
			name: 'Flying on eagles',
			experience: 800,
			embarrassing: false
		},
		{
			name: 'Preventing people from passing places',
			experience: 1800,
			embarrassing: false
		},
		{
			name: 'Cooking naked',
			experience: 300,
			embarrassing: true
		}
	]
};

// source is a string representation of the HTML template
var source = document.getElementById('info-template').innerHTML;

// HBS compiles `source` & returns a fxn, which we store in the `template` variable
var template = Handlebars.compile(source);

// We pass the obj `context` to this fxn, which we store in the `html` variable
// the function returns computed HTML to us
var html = template(context);

// we set the computed HTML as the innerHTML of the infoContainer
var infoContainer = document.getElementById('info-container');
infoContainer.innerHTML = html;
