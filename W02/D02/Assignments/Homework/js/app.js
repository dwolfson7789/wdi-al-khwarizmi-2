window.onload = function() {
	console.log('loaded');

	// Invoke your chain of functions and listeners within window.onload
	// during coding, you could (if desired) just call start() here to automatically begin the process
	// once you're satisfied with your code, instead add a click event to the start button that will run start() when clicked
	start();
}


// USE THIS PROVIDED CODE TO SHUFFLE YOUR ARRAY. IT WILL RETURN A SHUFFLED VERSION OF TILES
var tiles = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E'];
function shuffle(arr) {

	let counter = arr.length;
	while (i > 0) {

		var j = Math.floor(Math.random() * i) //pick a random index between 0 and i
		i--;

		// put value at current index location in a temp variable
		// set value at current index location to value at random index
		// set value at the random index to the value stored in temp
		var temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
	return arr;
};

function start(){
	// this function should call shuffle and then call makeAndDisplayTiles
	shuffle(tiles);
	makeAndDisplayTiles();
}

function makeAndDisplayTiles(){
	// needs to empty out the div (#game) that will hold the tiles
	var game = document.getElementById('game');
	game.innerHTML= "";

	// should clear the info text

	document.getElementById('info').innerHTML = "";

	// should create 10 new tiles (or as many are as in tiles.length if you want to make it more flexible)
	// each tile should have class 'column' and a 'data-value' attribute from each element of your tiles array
	// (see the markdown instructions)
	// add the game tiles to the board

	for (var i = 0, len = tiles.length; i < len; i++) {
		var tile = document.createElement('div')
							 .setAttribute('class', 'column')
							 .setAttribute('data-value', tiles[i]);
		game.appendChild(tile);
	}

	addEventsToTiles();
	// call

	// document.getElementById('game').innerHTML = "";
	// document.getElementById('info').innerHTML = "";
	// for(var i = 0; i<tiles.length;i++){
	// 	var tile = document.createElement('div');
	// 	tile.setAttribute('class', 'column');
	// 	tile.setAttribute('data-value',tiles[i]);
	// 	document.getElementById('game').appendChild(tile);
	// 	tile.onclick = function(){
 // 			makePlay(this);
	// 	};
	// }
	// addEventsToTiles();
}

function addEventsToTiles(){
	var tile = document.getElementsByClassName('column');
	tile.onclick = makePlay(this);
}

function makePlay(tile){
	tile.innerHTML = tile.dataset.value;
	tile.className += "found";
	tile.className += "clicked";
	var clickedTiles = document.getElementsByClassName('clicked');
	if (clickedtiles.length === 2) {
		checkForMatch(clickedTiles);
	}
}

function checkForMatch(tiles) {
	var tileOne = clickedTiles[0].dataset.value;
}
