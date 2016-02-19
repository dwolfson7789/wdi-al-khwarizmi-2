//////// WANNA PICK US UP SOME STICKS? /////////
////////////////////////////////////////////////

////////////////////////////////////////////////
////JAVASCRIPT EXERCISE FOR wdi-al-Khwarizmi////
/////////////////WEEK 1, DAY 04/////////////////
////////////////////////////////////////////////

// Ethan Friedman's version

// initialize game variables
var stickCount = parseInt(prompt("how many sticks? (10-100)"));
var players = ["Player", "Computer"]; //We will use players[0] to represent the active player

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

// outline of how computer's decision-making process works:
//    1. If there are 2, 3, or 4 sticks remaining, remove all but one stick and guarantee a computer WIN.
//    2. If there's only 1 stick left, remove it and LOSE. :-(
//    3. Otherwise, look at sticks remaining modulo 4; if it's > 1, then remove enough sticks so that when it's your opponent's move,
//    4. (s)he will have a stickCount that's a multiple of 4.
//    5. If stickCount mod 4 === 0, then computer is (technically) screwed; remove a random number of sticks
function computerAI() {
  var mod = stickCount % 4;
  var computerMove;

  if (sticksToRemove <= 4) {
    computerMove = Math.max(sticksToRemove - 1, 1);
  } else if (mod) {
    computerMove = mod;
  } else {
    computerMove = Math.floor(Math.random() * 2) + 1;
  }
  console.log('compMove', computerMove);
  return computerMove;
}

// The game itself: should call getNumOfSticks() and then as long as there are sticks left on the board it should:
// (1) ask the player to enter how many sticks are left and (2) run checkEntry(); (3) once there's a valid entry it should
// subtract the number of sticks removed from the total and swap the players. (4) if there's no sticks left, instead of doing
// step (3) it should alert the players that the game is over and the current active player is the loser
function playGame() {
  getNumOfSticks();
  var sticksToRemove;
  while (stickCount > 0) {
    if (players[0] === "Player") {
      sticksToRemove = parseInt(prompt("There are " + stickCount + " sticks left. " + players[0] +
        ", how many sticks do you want to remove? (1-3)"));
      checkEntry();
    } else {
      sticksToRemove = computerAI();
      alert ("My move; I'm removing " + sticksToRemove + " sticks");
    }

    stickCount = stickCount - sticksToRemove; //could also use '-='; I wanted to make clear what was happening here
    swapPlayers(players);
  }
  if (players[0] === "Player") {
    alert("I had to pick up the last stick. Darn it you beat me!");
  } else {
    alert("AHAHAHAHA! I win!")
  }
}

//let's play!
playGame();
