# TinyCasino

Let's build a tiny casino, with two or three simple games.

![cat](http://2.bp.blogspot.com/-CyIecagIBBo/T_9RMLEGT8I/AAAAAAAAGXA/ZkgD6VAVlfQ/s1600/casino-cat-4.jpg)

1. **Coin Flip**: Guess the next flip, heads or tails.  If you're right, you double your bet!
2. **Die Roll**: Guess the number that will come up on the next six-sided die roll.  If you're right, you earn five times your bet!
3. [BONUS] **Rock, Paper, Scissors**: You choose rock, paper, or scissors.  The computer then picks at random.  You keep your bet if you tie, and double your bet if you win.

## The interface

You should divide the screen vertically into equal regions, with each game played in one of those regions.  Each region should have a choice panel, and a result panel.  

For example, for the coin flip's choice panel, there should be two clickable things - one to choose heads, and one to choose tails.  Clicking one will register your choice, and then the game begins.  The result of the flip, and whether or not the user won should then be displayed in the result panel.  

In addition, there should be a separate region which keeps track of the user's total pot.  The user should start with $100, and bets should be fixed to be $5.  

[BONUS] If you want, add buttons to change the current bet value.  

## The objects

It's up to you to figure out how to organize this, but some suggested objects:

- `player`, which keeps track of the player's name, current pot, and (if you implement it) current bet value.  Additionally the `player` object might want `.bet(value)` and `.win(value)` methods.
- `coinGame`, which keeps track of the functions necessary to play the coin game
- `dieGame`, which keeps track of the functions necessary to play the die game
- `rpsGame`, which... y'know.
- additionally, `coinGameInterface`, or `coinGameView`, which keeps track of the interface between the user and the coinGame.  Likewise for `dieGameInterface`, etc.

You can do this without constructors, instead just using these objects as ways of organizing the code.  Use object literals, but define the functions and grab DOM elements as necessary.  

The `*Interface` objects should have `setHandlers` methods, which initialize the callbacks for the interface.  Since `player` will be a global object, each `*Interface` can interact with the player object easily (for things like taking the bet, giving the player money, etc)

## Starting the game

Basically, once you call `setHandlers` on each of your interfaces, the game should be up and running.  Since the window will listen for user interaction, and will play itself, things should be great if you design the functions correctly.

## Losing the game

One last thing to think about, what happens to the user when they run out of money?  Perhaps you want to create a **modal** that allows them access to a restart button.  Once they hit the restart button, give the player $100, and hide the modal.
