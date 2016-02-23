# Part 1: Brook_and_Lyn

	Go to the Brook_and_Lyn directory and follow the instructions -- you're going to attempt to recreate the webpage shown in mockup.png. All needed assets (image files) are in  Brook_and_Lyn/assets

======================

# Part 2: Some More JavaScript

	1. Create a `clicker` object. It should have two properties: `clickCount`, which is a number, and `click`, a function. Calling `clicker.click()` should increase the object's `clickCount` by one.
	1. Make a `StringCollector` object. It should have three properties: a `collection` (starts as an empty array), and methods for `collect` and `admireCollection`. `collect` should take a string as an argument. It should reverse that string (so passing in "Ethan" would be reversed "nahtE") *and then* add that reversed string to the object's `collection`. `AdmireCollection` should return the collection. Run your code in the console, collecting a few strings, and then viewing your proud collection of reversed strings.
	1. Create an `atm` object. It should have a `totalCash` property that stores the amount of cash currently in the ATM. It should also have a `dispenseTwenties` method that takes in a number (of twenty-dollar bills). If the desired value of that number of twenties exceeds the ATM's cash holdings, it should return null; otherwise it should dispense the proper amount of money and remove that quantity from the ATM's `totalCash`. E.g, if the ATM's `totalCash` is 100, then `dispenseTwenties(3)` would subtract 60 from totalCash and return 60 (the amount dispensed to the customer). `dispenseTwenties(10)` would return `null`.

======================

# Part 3: Memory!

Today we are going to build the game Memory--remember this from childhood? There's an array of cards with symbols on them. Your goal is to turn over matching pairs of cards to remove them from the board, and eventually to match up all the pairs of cards. Write all your code in memory/scripts/app.js, but look at memory/index.html to get your bearings. I've created the scaffold of the game in app.js -- your job is to write the necessary code to make each function perform its proper task.

### You will need

#### Data

- an array of ten tiles
	- your ten 'tiles' will represent the letter values that will be displayed on each DOM tile. eg. ['A', 'A', 'B', 'B', etc.] (See app.js.)

#### Functions

- `start()`
	- shuffle the provided `tiles` array **(a premade shuffle function is supplied)**
	- then call `makeAndDisplayTiles()` to build and display the gameboard
- `makeAndDisplayTiles()`
	- this function should empty the container that will hold the gameboard tiles
	- it should clear the text in the info div
	- it should create 10 new game tiles (each one will be a div);
	    - give them the class 'column'
			- give them a 'data-value' attribute from each element of your tiles array. The output for an 'A' tile will look like ` <div class="column" data-value="A"></div> `
		- add the game tiles to the board
	- then call a function (below) that will add click events to each tile
- `addEventsToTiles()`
	- should add click events to each of the gameboard tiles
	- Each click event should call the makePlay function passing it the tile that was clicked. Strong hint: the tile that was clicked is `this` tile . . . Can you pass `this` as a parameter to the makePlay function? Test it out. If it doesn't work, what else could you do? Try logging the value of `this` inside of makePlay and seeing what it is?
- `makePlay(tile)`
	- this function should set the text of the current clicked tile to the value stored in the data-value attribute.
	See the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_data_attributes) for "data attributes".
	- it should add a class of "found" to the tile
	- it should add a class of "clicked" to the tile
	- if the number of clicked tiles is 2, then it should check for a match
- `checkForMatch()`
	- this should retrieve the data-value of the two clicked tiles.
	- if they are a match:
		- the 'clicked' class should be removed from the tiles
		- the click event should be turned off for those tiles
		- should check for a win
	- if no match is found:
		- the text of the clicked cards should be set back to empty
		- the found and clicked classes should both be removed
		- BONUS: use setTimeout to keep your cards showing for a hot
		  moment.
*After you have the preceding functions working:*
- `checkForWin()`
	- if the number of found tiles is 10
		- add a winning message to the info div
		- remove the found class
		- add a won class

## START

- add a click event to the start button, so that when it is clicked a new game is triggered.

###BONUSES
If you have time: think about how you might make the game more flexible and/or fun. Some ideas:
- have the info message display congratulatory or insulting messages each time the user gets a match right or wrong
- Change the contents of the tiles to something more fun than mere letters. Maybe there's a font our there with little images you could use?
- Make the difficulty adjustable. Maybe you have 'Start Easy', 'Start Medium', and 'Start Hard' buttons. The number of tiles to match could vary by difficulty level as could the length of the timeout in checkForMatch() (higher difficulty = shorter timeout).
- have the game keep track of your won-loss record. add another div to display it.
- during each game, keep track of (and display in the info div) the number of correct and incorrect matches so far and your success percentage
- Play with styling
- Display the duration of the active game in the info div as "Game time: XXX minutes, YYY seconds"

=====================

# Part 4: Installing Node.js

For Thursday's class, you will need to have installed Node.js on your computer. Node is an amazing, awesome, truly cool thing that we will get into in *MUCH* greater detail later in the course, in Unit 3. For now, all you need to do is pop open your Terminal and run the following commands

```
brew install node
```

Once this completes, check to see that node has been installed on your computer with

```
node -v
```

It should tell you the current version number of Node that has been installed on your system. Node comes with something called node package manager, or npm, that lets you install all sorts of, you guessed it, packages on to your system that do different things. We'll use it ALL THE TIME when we're building back ends for web apps. For now, just run

```
npm install -g http-server
```

Don't forget the `-g` in the above line! You can check to make sure everything's been installed correctly by typing `http-server`. You should get output that looks like the following:

```
Starting up http-server, serving ./
Available on:
  http://127.0.0.1:8080
  http://10.1.223.125:8080
Hit CTRL-C to stop the server
```

Congratulations! Now hit Ctrl-C to turn off http-server and we'll see you in class!
