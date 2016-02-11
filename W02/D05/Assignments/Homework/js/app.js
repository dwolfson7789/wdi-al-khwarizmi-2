"use strict";

window.onload = function() {
	console.log('app.js loaded');

	// Invoke your chain of functions and listeners within window.onload
	// during coding, you could (if desired) just call start() here to automatically begin the process
	// once you're satisfied with your code, instead add a click event to the start button that will run start() when clicked

}

var tiles = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E'];

// USE THIS PROVIDED FUNCTION TO SHUFFLE YOUR TILES.
function shuffle(arr) {
	var i = arr.length;
	while (i > 0) {
		var j = Math.floor(Math.random() * i); //pick a random index between 0 and i
		i--;

		var temp = arr[i]; 		// put value at current index location in a temp variable
		arr[i] = arr[j];		  // set value at current index location to value at random index
		arr[j] = temp;		    // set value at the random index to the value stored in temp
	}
	return arr;							//returns the shuffled array
}

function start(){
	// this function should call shuffle and then call makeAndDisplayTiles

}

function makeAndDisplayTiles(){
	// needs to empty out the div (#game) that will hold the tiles

	// should clear the info text

	// should create 10 new tiles (or as many are as in tiles.length if you want to make it more flexible)
	// each tile should have class 'column' and a 'data-value' attribute from each element of your tiles array
	// (see the markdown instructions)
	// add the game tiles to the board

	}

	//needs to call a function to add click handler to each tile.
	addEventsToTiles();
}

function addEventsToTiles(){
	//needs to grab the tiles from the DOM
	//add a click handler to each tile which will run makePlay on the clicked tile
	//see the hint in the instructions regarding this function ....

}

function makePlay(tile){
	//set the text of tile to the data-value of the tile
	//add "found" and "clicked" classes to the tile
	//if 2 tiles have been clicked, call checkForMatch on those tiles.

	}
}

function checkForMatch() {
	//needs to check the clicked tiles for a match.
	//you might want to pass them into this function when you call it above in makePlay (? just a thought ?)
	//see if the two tiles match. If they DO: remove the 'clicked' class. run checkForWin
	//if they DON'T match: remove 'clicked' and 'found' classes. zero out their text (the tile has been 'flipped back over');
	//strongly consider using a function that rhymes with "schmetSchmimeout" to display the tiles' values for a little while
	//before flipping them over

}

function checkForWin() {
	//if all 10 tiles have been 'found':
	//display an appropriate congratulatory message in the info div
	//remove the found class from the tiles
	// add the won class to the tiles

}
