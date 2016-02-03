////////////////////////////////////////////////////
//////////// STAR WARS: THE DOM AWAKENS ////////////
////////////////////////////////////////////////////

//We are going to simulate the opening of the new Star Wars movie by adding and removing elements from the DOM
//The skeleton of the JavaScript is below
//Put all your code after the respective comments

//the characters array contains all the characters for the movie opening
var characters = [
  "Rey",
  "Finn",
  "BB-8",
  "Poe Dameron",
  "Captain Phasma"
];

//the places array contains the locales for the movie's beginning scenes
//each place is an object with a name, and an array of scene locations within that place
//(i.e., the Scavenger Camp is located on the planet Jakku, etc.)
var places = [
  { name: "Jakku",
    locations: [
      "Old Shipwreck",
      "Scavenger Camp",
      "Millennium Falcon"
    ]
  },
  {
    name: "Orbiting Star Destroyer",
    locations: [
      "TIE Fighter 1",
      "TIE Fighter 2",
      "TIE Fighter 3"
    ]
  }
];

function makePlaces() {
  // create a section tag with an id of "star-wars"
  // add each place from the places array as an article tag
  // inside each article tag, create an h1 tag with the name of the place
  // append the articles to the section, and the section to the document body

  var sec = document.createElement("section");
  sec.setAttribute("id","star-wars");

  for (var i = 0; i < places.length; i++) {
    var el = document.createElement("article");
    var h1 = document.createElement("h1");
    var t = document.createTextNode(places[i].name);
    h1.appendChild(t);
    el.appendChild(h1);
    sec.appendChild(el);
  }
  document.body.appendChild(sec);
}

//try calling the function here. does it work?
makePlaces();

function sceneLocations() {
 // Inside each place, create an unordered list of scene locations for that place
 // give each scene a class name of "scene-location"
 var arts = document.getElementsByTagName('article');

 for (var i = 0; i < places.length; i++) {
   var ul = document.createElement('ul');
   ul.setAttribute('class','scene-location');
   for (var j = 0; j < places[i].locations.length; j++) {
    var li = document.createElement('li');
    var t = document.createTextNode(places[i].locations[j]);
    li.appendChild(t);
    ul.appendChild(li);
   }
   arts[i].appendChild(ul);
 }
}

sceneLocations();

function castOfCharacters() {
  //create a div with an id of 'characters'
  //give it a title of your choice ("Dramatis Personae,")
}
