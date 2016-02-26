///////////////////////////////////////////////////////
//THE HAUNTED MANSION: A SPEECH RECOGNITION ADVENTURE//
///////////////////////////////////////////////////////

console.log ('JavaScript is loaded ...');

// initializing game variables
var SpeechRecognition = window.webkitSpeechRecognition ||   //prefixes for cross-browser compatability
                        window.mozSpeechRecognition    ||
                        window.msSpeechRecognition     ||
                        window.oSpeechRecognition      ||
                        window.SpeechRecognition,
    storyDisplay      = document.getElementById('display'), // the display element for the narrative from the DOM
    gameOptions       = document.getElementById('choices'), // element to display the narrative choices in the DOM
    scene             = story.opening.narrative,            // the opening story text
    choices           = story.opening.fullChoices,          // opening narrative choices
    commands          = [],                                 // commands for the speech recognition to process
    started           = false,                              // Boolean to start/end the game
    recognition       = new SpeechRecognition();            // create a new SpeechRecognition() object

/***********************************************/
/** FUNCTIONS RELATED TO GAME SETUP AND START **/
/***********************************************/

// grab the 'Start Game' button and add a click handler to call the start() function
var button = document.querySelector('button');
button.addEventListener('click', function() {
  start();
});

// this function will display the story in the view
// it needs to (1) empty out the .display and .choices divs in the DOM
// (2) fill the .display div with what's passed in as 'text', and
// (3) iterate over the storyChoices that were passed in and for each one
// create a new <p> with class "game-options" and add them all to the .choices div
function renderStory(text, storyChoices) {
  storyDisplay.innerHTML = "";
  storyDisplay.innerHTML = text;

  gameOptions.innerHTML = "";
  storyChoices.forEach(function(choice) {
    var p = document.createElement('p');
    p.className = "game-options";
    p.innerHTML = choice;
    gameOptions.appendChild(p);
  });
}

// this function should iterate over the story object (HINT: check out 'for ... in' loops!) and for each property in 'story'
// it should make a new 'shortChoices' property: an array that contains the FIRST word of each item in that property's fullChoices
// array. i.e., story.opening.shortChoices should be equal to ["open", "walk"] after this function has run.
// finally this function should set 'commands' equal to story.opening.shortChoices
// A second HINT: make sure you use `hasOwnProperty` when you use a for ... in loop
function makeShortChoices() {
  for (var scene in story) {
    if (story.hasOwnProperty(scene)) {
      story[scene].shortChoices = [];
      for (var i = 0; i < story[scene].fullChoices.length; i++) {
        story[scene].shortChoices.push(story[scene].fullChoices[i].toLowerCase().split(" ")[0]);
      }
    }
  }
  commands = story.opening.shortChoices;
}

// sets up parameters for the speech recognition and starts it listening
// leave this alone unless you want to experiment with the SpeechRecognition API
function initializeRecognition() {
  recognition.continuous = false;                          // it's always listening
  recognition.interimResults = true;                      // display interim results
}

// this function gets the game started (you'd never guess that from the name of the function, right?)
// It should do a bunch of things: (1) it should add the 'hidden' class to the start button; (2) it should call renderStory,
// passing in the initial scene and choices (which were initially set up above for you); (3) it should call makeShortChoices,
// (4) it should call initializeRecognition, to start the speech listener, and finally it should call playGame to begin the game
function start() {
  console.log('starting game');
  started = true;
  button.classList.add("hidden");
  renderStory(scene, choices);
  makeShortChoices();
  initializeRecognition();
  playGame();
}

/***********************************************/
/****** FUNCTIONS RELATED TO THE GAMEPLAY ******/
/***********************************************/
// this function starts the game loop
// while (started) ... needs to set recognition.onresult to a function that will:
//  (1) grab the appropriate result from the speech recognition HINT: TRY CONSOLE LOGGING RESULT IN THE PROVIDED function
//  AND INSPECTING IT CLOSELY. DIG INTO IT. This is a common thing to do when using APIs -- you need to explore the provided object
//  to find where the piece(s) you want are located!
//  (2) Then it needs to run checkForMatch, passing in the appropriate part of 'result' from recognition.onresult
//  (3) There needs to be an endgame condition that will set 'started' to false and break the while loop.
function playGame() {
  console.log("let's play now!");
  if (started) {
    speechResult();
  } else {
    endGame();
  }
}

// This function will listen for speech from the user. When it detects speech, it will run the function assigned to
// the onresult property in our speech recognition object. That function will grab the text from the 'result' returned by the API
// and then (this next part is on you) run checkForMatch() on that text. If checkForMatch() returns false, then it should do nothing
// If checkForMatch returns "GAMEOVER" it should change the 'started' variable to false -- the game is now over. If checkForMatch()
// returns anything it should pass what is returned into moveStory() to, you know, move the story forward to the next scene
function speechResult(result) {
  console.log("running speechResult() ");
  recognition.start();                     // time to start listening
  console.log("Every breath you take   ");
  console.log("Every word you make     ")
  console.log("I'm listening to you ..."); // creepy .......
  recognition.onresult = function(event) {
    console.log("speech detected")
    var choice = event.results[0][0].transcript;
    console.log("Your choice was: ", choice);
    var match = checkForMatch(choice);
    if (match) {
      if (match == "GAMEOVER") {
        console.log('game over condition detected');
        recogition.stop();
        started = false;
      } else {
        console.log("match found to command");
        moveStory(match);
        recognition.stop();
        playGame();
      }
    } else {
      console.log("no match found");
      recognition.stop();
      playGame();
    }
  }
  console.log("speechResult() has finished running now.");
}

// checks for a match between the text passed in (the choice that was detected by the SpeechRecognition object) and
// the current available commands in the commands array.
// this function needs to take text that was passed in (it will be the text the SpeechRecognition API detected)
// and compare it to the current available commands in the commands array. It should return FALSE if no match is found
// and if a match IS found it should return the corresponding result from the story object. i.e., if we are currently in
// the 'opening' scene in the story object, then if it detects 'open' was said by the user, it should make a match between that and
// commands[0] and consequently should return results[0] from story.opening ....
function checkForMatch(text) {
  var result = false;
  for (var i = 0; i < commands.length; i++) {
    if (commands[i] == text) {
      result = story[scene].results[i];
    }
  }
  return result;
}

// needs to set the narrative and choices and commands objects appropriately
// pass in the choice the user made and update the various narrative variables accordingly.
// finally, needs to call renderStory with the new scene and choices
function moveStory(choice) {
  scene = story[choice].narrative;
  choices = story[choice].fullChoices;
  commands = story[choice].shortChoices;
  renderStory(scene, choices);
}

//TODO WRITE THIS FUNCTION
function endGame() {
  started = false;
  console.log('ending game');
  // FIXME stuff goes here
}
