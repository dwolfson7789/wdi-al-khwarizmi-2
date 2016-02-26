"use strict";

window.onload = function() {
	console.log('loaded');

	// Invoke your chain of functions and listeners within window.onload
	// during coding, you could (if desired) just call start() here to automatically begin the process
	// once you're satisfied with your code, instead add a click event to the start button that will run start() when clicked

	var startButton = document.querySelector('button');

	startButton.addEventListener('click',function(){ start(); });
	document.getElementById('info').innerHTML = "Do you have the mental chops to win at MEMORY?";
}

var tiles = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E'];

// THIS IS MY **START** AT SOME ADDITIONAL FEATURES //
// the `record` object holds statistics, past game times, etc.
var record = {
		wins: 0,
		gamesPlayed: 0,
		guesses: {
			correct: 0,
			wrong: 0
		},
		gameTimes: []
	};

var gameTime = { //current game time
	minutes: 0,
	seconds: 0
};
var timerInterval;
var difficulty = {
	tileCount: 10, //number of tiles
	tileDisplayTime: 800 //number of milliseconds tiles are displayed after an incorrect guess
}

// USE THIS PROVIDED CODE TO SHUFFLE YOUR ARRAY. IT WILL RETURN A SHUFFLED VERSION OF TILES
function shuffle(arr) {
	var i = arr.length;
	while (i > 0) {
		var j = Math.floor(Math.random() * i); //pick a random index between 0 and i
		i--;

		// put value at current index location in a temp variable
		// set value at current index location to value at random index
		// set value at the random index to the value stored in temp
		var temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
	return arr;
}

function start(){
	// this function should call shuffle and then call makeAndDisplayTiles
	var button = document.querySelector('button');
	button.innerHTML = "Start a New Game";
	button.style.display = "none";
	console.log("starting game");

	shuffle(tiles);
	makeAndDisplayTiles();
	initializeStats(); // see below -- this function is new and tracks stats
	initializeTimer(); // see below -- this starts the timer
}

// new function to keep track of statistics
function initializeStats() {
	var stats = document.getElementById('stats');
	stats.innerHTML = ""; //empty out the stats div

	record.gamesPlayed++;	// increment number of games played
	var gamesWon = document.createElement('div');
	gamesWon.setAttribute('class','stats-div');
	gamesWon.innerHTML = "Games won: " + record.wins;	// display games won

	var gamesPlayed = document.createElement('div');
	gamesPlayed.setAttribute('class','stats-div');
	gamesPlayed.innerHTML = "Games played: " + record.gamesPlayed; // display games played
	//TODO could break out the above code (repeated 2X) into its own function easily
	stats.appendChild(gamesWon);
	stats.appendChild(gamesPlayed);

	if (record.gameTimes.length) {
		var lastGameTime = record.gameTimes[record.gameTimes.length - 1];
		var lastTimeDisplay = document.createElement('div');
		lastTimeDisplay.innerHTML = "Last game: " + lastGameTime[0] + " mins, " + lastGameTime[1] + " secs"
		stats.appendChild(lastTimeDisplay);
	}
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
		var tile = document.createElement('div');
		tile.setAttribute('class', 'column');
		tile.setAttribute('data-value', tiles[i]);
		game.appendChild(tile);
	}

	addEventsToTiles();
}

function tileListener() {
	makePlay(this);
}

function addEventsToTiles(){
	var tiles = document.getElementsByClassName('column');
	for (var i = 0, len = tiles.length; i < len; i++) {
		var thisTile = tiles[i];
		thisTile.addEventListener('click', tileListener);
	}
}

function makePlay(tile){
	tile.innerHTML = tile.dataset.value;
	tile.classList.add("found");
	tile.classList.add("clicked");
	var clickedTiles = document.getElementsByClassName('clicked');
	if (clickedTiles.length === 2) {
		checkForMatch(clickedTiles);
	}
}

function checkForMatch(clickedTiles) {
	var tileOne = clickedTiles[0];
	var tileTwo = clickedTiles[1];
	if (tileOne.dataset.value === tileTwo.dataset.value) { //correct guess -- remove clicked class and check for win
		tileOne.classList.remove('clicked');
		tileTwo.classList.remove('clicked');
		tileOne.removeEventListener(tileListener);
		tileTwo.removeEventListener(tileListener);
		checkForWin()
	} else {		 //incorrect guess: remove classes, zero out tile text after preset amount of time
		setTimeout(function() {
			tileOne.classList.remove('clicked');
			tileTwo.classList.remove('clicked');
			tileOne.classList.remove('found');
			tileTwo.classList.remove('found');
			tileOne.innerHTML = "";
			tileTwo.innerHTML = "";
		}, difficulty.tileDisplayTime);
	}
}

function checkForWin() {
	var foundTiles = document.getElementsByClassName('found');
	if (foundTiles.length === 10) {
		console.log("we have a winner. " + foundTiles.length + " tiles have been found.");
		document.getElementById('info').innerHTML = "Congratulations! You've won!";
		record.wins++;
		clearInterval(timerInterval);
		finalGameTime();
		document.querySelector('button').style.display = "block";
		document.getElementsByClassName('stats-div')[0].innerHTML = "Games won: " + record.wins;
		for (var i = 0; i < foundTiles.length; i++) {
			foundTiles[i].classList.remove('found');
			foundTiles[i].classList.add('won');
		}
	}
}

// push the final time of the game into the statistics object
function finalGameTime() {
	var finalTime = [];
	finalTime.push(gameTime.minutes);
	finalTime.push(gameTime.seconds);
	record.gameTimes.push(finalTime);
}

//there are probably much  easier ways to do this. I'm just being contrary here.
//starts the timer going
function initializeTimer() {
	gameTime.minutes = 0;
	gameTime.seconds = 0;
	displayTime();
 	timerInterval = setInterval(function() {
		timer();
		displayTime();
	}, 1000); //one-second interval
}

// renders the time in the DOM
function displayTime() {
	var timerDiv = document.getElementById('timer');
	timerDiv.innerHTML = "";
	var mins = " minutes, ";
	var secs = " seconds";
	// getting pluralization right on 'minute' vs. 'minutes' and 'second' vs. `seconds` because I'm anal.
	if (gameTime.minutes === 1) {
		mins = " minute, ";
	}
	if (gameTime.seconds === 1) {
		secs = " second";
	}
	timerDiv.innerHTML = "Game time: " + gameTime.minutes + mins + gameTime.seconds + secs;
}

//there are probably much easier ways to do this. I'm just being contrary
// updates minute and seconds vars accordingly
function timer() {
	if (gameTime.seconds === 59) {
		gameTime.seconds = 0;
		gameTime.minutes++;
	} else {
		gameTime.seconds++;
	}
}
