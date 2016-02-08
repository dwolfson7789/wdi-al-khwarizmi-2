"use strict";

window.onload = function() {
	console.log('loaded');
	// Invoke your chain of functions and listeners within window.onload
	// during coding, you could (if desired) just call start() here to automatically begin the process
	// once you're satisfied with your code, instead add a click event to the start button that will run start() when clicked

}

var tiles = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E'];

// USE THIS PROVIDED CODE TO SHUFFLE YOUR ARRAY. IT WILL RETURN A SHUFFLED VERSION OF TILES
// IF YOU'RE INTERESTED, RESEARCH THE 'FISHER-YATES SHUFFLE' TO SEE WHY WE NEED TO USE THIS TECHNIQUE
function shuffle(arr) {
	var i = arr.length;
	while (i > 0) {
		var j = Math.floor(Math.random() * i); //pick a random index between 0 and i
		i--;

		var temp = arr[i]; // put value at current index location in a temp variable
		arr[i] = arr[j]; // set value at current index location to value at random index
		arr[j] = temp; // set value at the random index to the value stored in temp
	}
	return arr;
}

function start(){
	// this function should call shuffle and then call makeAndDisplayTiles

}

function makeAndDisplayTiles(){
	// needs to empty out the div (#game) that will hold the tiles

	// clear the info text

	// should create 10 new tiles (or as many are as in tiles.length if you want to make it more flexible)
	// each tile should have class 'column' and a 'data-value' attribute from each element of your tiles array
	// (see the markdown instructions)
	// add the game tiles to the board



	// call the function to add the click handlers to the tiles

}

function addEventsToTiles(){
	//grab all the tiles from the DOM and add a click handler to each that will call makePlay, passing in
	//the tile that was clicked (SEE THE MARKDOWN FILE FOR A KEY HINT!).

}

//modify this function -- it will need to take one argument, the title that was clicked on
function makePlay(){

	// set the innerHTML of the tile that was clicked on to the tile's 'data-value' attribute
	// google 'HTMLelement.dataset' to see a nice way to do this
	// add classes of 'found' and 'clicked' to the title that was clicked on


	// if two tiles have classes of 'clicked' run checkForMatch, passing them in

}

//modify this function to take an argument (the two tiles that were clicked on)

function checkForMatch() {

	//check to see if the 'data-value' attributes of the two tiles match
	//if so: (1) remove the 'clicked' class from those tiles (2) remove the click event from those tiles (3) call checkForWin()
	//if they DON'T match (1) remove the 'clicked' and 'found' classes from those tiles. (2) set their innerHTML to ""
	//try using setTimeout so the innerHTML doesn't disappear immediately

}

function checkForWin() {

	//if all 10 tiles have been 'found':
	// (1) add a winning message to the info dive (2) remove the 'found' class (3) add a 'won' class

}
