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
      "Small Village",
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


}

//try calling the function here. does it work?

function sceneLocations() {
 // Inside each place, create an unordered list of scene locations for that place
 // give each scene a class name of "scene-location"


}

//try calling the function here. does it work?

function castOfCharacters() {
  //create a div with an id of 'character-list'
  //give it a title (make it an h3) of your choice.
  //create a list of characters (ordered or unordered, your choice) and put it in the div
  //give each character a class of 'character'
  //add the div to the DOM before the places


}

//try calling the function here. does it work?

function raisingTheCurtain() {
  //let's put the characters in the right places to start the movie.
  //Finn and Captain Phasma are on the orbiting star destroyer (But not on any of the TIE fighters)
  //move them inside the star destroyer



  //Rey is exploring the old shipwreck; move her there



  //Poe Dameron and BB-8 are visiting the Small Village. Move them there.


}

//try calling the function here. does it work?

function theFirstOrderAttacks() {
  //the First Order captures Poe! move him to the Star Destroyer
  //BB-8 escapes to the Scavenger Camp -- move it there
  //the First Order destroys all the peace-loving web developers in the Small Village -- wipe it off the map

}

//try calling the function here. does it work?

function escapeTheShip() {
  // move Poe and Finn into TIE Fighter 3.
  // The TIE Fighter takes off from the Star Destroyer and crash lands near the Scavenger Camp. Move it there

}

//try calling the function here. does it work?

//It's pretty clunky to write all these functions and then call them individually, right?
//Especially when we know we want to run them all. Let's create a function that calls them all in order

function beginTheMovie() {
  //call all your functions above here, in order

}

// uncomment the line below to raise the curtain and begin your movie!
// window.onload = beginTheMovie();
