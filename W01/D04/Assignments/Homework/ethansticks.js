//////// WANNA PICK US UP SOME STICKS? /////////
////////////////////////////////////////////////

////////////////////////////////////////////////
////JAVASCRIPT EXERCISE FOR wdi-al-Khwarizmi////
/////////////////WEEK 1, DAY 04/////////////////
////////////////////////////////////////////////

// Ethan Friedman's version

// initialize game variables
var stickCount = parseInt(prompt("how many sticks? (10-100)"));
var players = ["Player 1", "Player 2"]; //We will use players[0] to represent the active player

// error checking function for stickCount
// check to see that stickCount is (a) a number; (b) an integer; (c) in range 10-100
// re-prompt user for a new input if entry was invalid
function getNumOfSticks() {
  while (typeof stickCount !== "number"        ||
         Math.trunc(stickCount) !== stickCount ||
         stickCount < 10                       ||
         stickCount > 100) {
    alert("Invalid entry");
    stickCount = parseInt(prompt("how many sticks? (10-100)"));
  }
}

// reverses the order of the players array
function swapPlayers(playersArray) {
  playersArray.unshift(playersArray.pop());
}

//does error checking on the player's entry of number of sticks to remove from the table
// entry must be (a) a number; (b) an integer; (c) in range from 1 to the lesser of 3 OR the number of sticks left on table
function checkEntry() {
  while (typeof sticksToRemove !== "number"            ||
         Math.trunc(sticksToRemove) !== sticksToRemove ||
         sticksToRemove < 1                            ||
         sticksToRemove > Math.min(3, stickCount)) {
    sticksToRemove = parseInt(prompt("Invalid entry. " + players[0] + ", how many sticks do you want to remove? (1-3)"));
  }
}
// The game itself: should call getNumOfSticks() and then as long as there are sticks left on the board it should:
// (1) ask the player to enter how many sticks are left and (2) run checkEntry(); (3) once there's a valid entry it should
// subtract the number of sticks removed from the total and swap the players. (4) if there's no sticks left, instead of doing
// step (3) it should alert the players that the game is over and the current active player is the loser
function playGame() {
  getNumOfSticks();
  while (stickCount > 0) {
    var sticksToRemove = parseInt(prompt(players[0] + ", how many sticks do you want to remove? (1-3)"));
    checkEntry();
    stickCount = stickCount - sticksToRemove; //could also use '-='; I wanted to make clear what was happening here
    alert("now there are " + stickCount + " sticks remaining");
    swapPlayers(players);
  }
  alert("no more sticks left! " + players[0] + " loses");
}

//let's play!
playGame();
