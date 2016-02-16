#W02D04 Homework

==============

![flex](https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQyZRr5X-s08B04YAnJFpplSZHXRVpqNOwmhoAc1YRBZX5eehElgg) \+
![box](http://hackathon-in-a-box.org/img/box.png)

##FLEXBOX!

1. Practice your flexbox skills with [Flexbox Froggy](http://flexboxfroggy.com/)! Complete at least through Level 16. If you're having fun and want to keep going, feel free to complete as many levels as you can.
1. Hyrule Potion Shop: head over to the hyrule_potion_shop directory and help their staff get the website up and running.

===============================

##FACTORY FUNCTIONS!
Remember how we used some basic JavaScript to plot out the beginning of *Star Wars*? Let's write factory functions to simplify some of the tasks.

We're developing *Star Wars: The Code Awakens*. The director has provided us with a list of characters and some of their properties below. Write a `createCharacter` function that will return an object with the needed properties. For example:
```js
var rey = createCharacter("Rey", "female", "maybe?", true);
//output will be
{
  name: "Rey",
  gender: "female",
  isJedi: "maybe?",
  isGood: true
}
```

Some of the other characters you should create (push all your characters, including Rey, into a `characters` array):

  Finn: male, not a Jedi, is a good guy

  Poe: male, not a Jedi, is a good guy

  BB-8: no gender, not a Jedi, is good

  Kylo Ren: male, is a Jedi, is baaaaaaaaaaaaaaaad

  Leia: female, not a Jedi, good

  Darth Vader: male, Jedi, bad, is dead. *How would you handle the fact that there's an extra property here for these last two?*

  Jar-Jar Binks: male? I think so. Goodness knows. Not a Jedi (although [this](https://www.reddit.com/comments/3qvj6w) insane fan theory   argues otherwise), and he is very bad. In a different sense of the word 'bad' than we've been using so far, but undeniably bad.


1. Modify your above function so it automatically adds each newly created character to the `characters` array.
1. Some of these characters have enemies. Let's modify our `createCharacter` function accordingly. The object that is returned from the function should have another property, a method called `setEnemy`, which takes one parameter (another character from the array). It will do a couple things:
  * Checks to make sure the character passed into the function actually exists in  `characters`. If it does not, it should return a string `"Invalid enemy"`. If it does exist, it will then:
  * Check to see if the character it (i.e., the `setEnemy` function) is inside has an `enemies` property. If it does not, it will create one, setting it equal to an empty array. HINT: maybe you want to look up Array.findIndex or Array.find? (or indexOf -- lots of possibilities!)
  * Adds the character passed in to the `enemies` array.
  * returns the modified object

  So:
  ```js
  var characters = [
    {
      name: "Rey",
      gender: "female",
      isJedi: "maybe?",
      isGood: true,
      setEnemy: function(enemy) {
        //code goes here
      }
    },
    {
      name: "Kylo Ren",
      gender: "male",
      etc.
    },
    etc.
  ]

  var rey = characters[0];
  var kylo = characters[1];
  rey.setEnemy("Matt Short"); //returns "Invalid enemy";
  rey.setEnemy("Kylo Ren");
    /*returns {
    name: "Rey",
    gender: "female",
    isJedi: "maybe?",
    isGood: true,
    setEnemy: function(enemy){//code goes here},
    enemies: [characters[1]]   }*/
  kylo.setEnemy("Rey")
      /*returns {
      name: "Kylo Ren",
      gender: "male",
      isJedi: true,
      isGood: false,
      setEnemy: function(enemy){//code goes here},
      enemies: [characters[0]]   }*/
  ```

  Once you have your function working:
  Finn, Poe and Rey are all Kylo's enemy (and he is theirs); Leia and Darth are enemies; Jar-Jar Binks is EVERYONE'S enemy (but has no enemies of his own).

Write a `makePeace` function that takes a character name and if that character is found in the object's `enemies` array, it removes it and returns the modified object. (Otherwise it returns "Can't make peace with someone who doesn't exist."). Darth came over to the good side before he died; he and Leia aren't enemies anymore. Use it to remove them from each other's enemies lists.
###BONUS: have your `makePeace` function be reciprocal. If Leia.makePeace (passing in Darth Vader) is valid (i.e., Darth exists in Leia's enemies array), then it should check to see if Leia herself exists in Darth's enemies array and remove her from there if so. It should then return an array with the two modified objects.

============

##SPLITTING UP!

Let's do something a little more abstract: let's write a function that returns functions. Woohoo! We want to write a `splitterFactory` function that will take in a one-character string. It should return a function. The returned function will take a string as an argument and split it across the specified character. So:
```js
var splitterFactory = function(char) {
  //your code goes here
  }  
}

var splitOnA = splitterFactory("a");
splitOnA("Ethan Friedman"); //returns ["Eth", "n Friedm", "n"]
```

###BONUS
* make your splitter factory case-insensitive

==================
