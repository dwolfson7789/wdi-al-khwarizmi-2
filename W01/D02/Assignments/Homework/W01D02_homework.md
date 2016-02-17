# W01D02 Homework
## Your very first homework!

![your life now](http://i.imgur.com/J40jpTu.jpg)

Please try to complete as many of the exercises as you can. Homework should be submitted by midnight. If you haven't finished by then, please don't stay up trying to get it done! The pace of this course is intense -- you have to take care of yourself (i.e., SLEEP).

###Submitting the homework

This is going to be your process throughout the course. Live it, breathe it.
By this point you should have:

1. Forked the class repo (found [here](https://github.com/ga-students/wdi-al-Khwarizmi)) on Github to your personal Github.
1. Cloned that remote repo from your Github to your local machine.
If you haven't yet, do this now!

Before you even think about STARTING the homework: make sure you've *pulled* the latest version of the students repo so that you know you're working with the correct files:

`git pull upstream master`

Now you can start the homework.

To submit a homework, you must first commit your changes. In the Terminal, in the directory where you're working (generally that day's directory):
```
git add -A
git commit -m "some sort of commit message, i.e., 'working on homework. Ethan sucks'"
```

This saves the changes to your local repo on your machine. You now need to push those changes out to your remote repo on Github:

`git push origin master`

When you've completed the homework (or gotten as far as you're going to), go to **your** Github account and navigate to the folder where the homework (the URL will look something like https://github.com/YOUR-GITHUB-USERNAME/wdi-al-Khwarizmi/tree/master/W01/D02/Assignments/Homework). **Copy this URL to the clipboard.**

Now go to our main class repo (again, [here it is](https://github.com/ga-students/wdi-al-Khwarizmi)). (TIP: bookmark both the class repo and your personal fork -- you'll be accessing them both constantly.) Click on the 'Issues' tab and create a new Issue:
* Title: [Your name] Homework Week#Day# (e.g., Ethan Friedman HW W01D04)
* Body: In the body of the issue, paste the link to the homework's location, the one you just copied.
   * Include also, on a scale of 1-5:
      1. How complete you feel your HW submission is
      1. How comfortable you felt with the HW
   * Also include:
      1. Wins: What are you feeling good about in the topics covered in the HW?
      1. Struggles: What are you struggling with?
      1. Comments: Anything else you'd like to add?
When you're done, submit the issue. Your homework is in!

=================

### (Part 0: Fundamentals Prework)
If for some reason you haven't finished the pre-work, you *need* to do so! We're going to be moving fast. If you haven't already, please also watch Shorty's videos for the prework, the playlist for which is [here](https://www.youtube.com/playlist?list=PLw1xVKFbouem3dTQpZi645Z3NMVpMeBud).

If you already finished it, congratulations! You can go right to Part 1 below.

=================

### Part 1: The Command Line
Navigating the command line is an essential part of coding, and you'll need to get skilled at it to successfully complete this course.

You might have heard of this new "Star Wars" movie that just got released. I hear it did OK? Let's create the opening of the movie in our file system.

#### Episode 7: The Terminal Awakens ####

It's been decades since a band of plucky Jedi developers defeated the Evil Empire and brought peace and order to software development. But a new menace has arisen ... With the First Order arising on the Empire's ashes, do you have what it takes to bring balance to the Terminal and peace to the WDI course?

As you execute the commands below, try doing some of them with absolute paths, some with relative paths. Try running commands to take place in a directory other than the one you're currently located inside. Get so used to using the command line to manipulate your filesystem that it's second nature.

  1. Create a directory named "**StarWars**".
  1. Inside "**StarWars**" create directories for the planet "**Jakku**" , a "**Scavenger_Camp**", "**Old_Shipwreck**", "**Orbiting_Star_Destroyer**" and a "**Small_Village**".
  1. The Scavenger Camp, Old Shipwreck, and Small Village are actually all locations on Jakku. Move their directories inside the "**Jakku**" directory.
  1. The "**Orbiting_Star_Destroyer**" has a fleet of TIE fighters. Create directories for
    * "**TIE_fighter_1**"
    * "**TIE_fighter_2**"
    * "**TIE_fighter_3**"
  1. Move the TIE fighters inside the Star Destroyer.
  1. When our story begins, our main character, Rey, is exploring the "**Old_Shipwreck**". Create a file called "**Rey.txt**" inside that directory.
  1. Two other key characters, Poe Dameron and BB-8, are checking out the Small Village on Jakku: inside "**Small_Village**", create
    * "**Poe_Dameron.txt**"
    * "**BB-8.txt**"
  1. Inside the "**Orbiting_Star_Destroyer**", create "**Finn.txt**" and "**Captain_Phasma.txt**". That completes our initial cast of characters.
  1. Now our story begins! Finn and Captain Phasma leave the Star Destroyer and head to the "**Small_Village**": move their files there from the Star Destroyer. They take Poe Dameron captive, but BB-8 escapes with the secret plans! Move "**BB-8.txt**" to the "**Scavenger_Camp**" directory.
  1. Finn, the Captain, and Poe return to the Star Destroyer: Move their files to "**Orbiting_Star_Destroyer**". The evil First Order destroys the poor village: Delete the "**Small_Village**" directory.
  1. Rey is done scavenging at the shipwreck: Move "**Rey.txt**" to "**Scavenger_Camp**".
  1. Finn and Poe Dameron escape the Star Destroyer on "**TIE_figher_3**" (move their files inside its directory) and crash-land it on Jakku near the Scavenger Camp! Move the TIE fighter from the Star Destroyer to "**Scavenger_Camp**".
  1. Poe is presumed dead in the crash: Delete his file.
  1. Finn leaves the TIE fighter and makes for the camp -- move "**Finn.txt**" to "**Scavenger_Camp**". The wrecked, crashed TIE fighter can't be flown any more: delete its directory.
  1. Inside the Scavenger Camp, we have an old junky Corellian freighter. Make a "**junky_old_spaceship**" directory there.
  1. Rey is done scavenging at the shipwreck and returns to the Scavenger Camp; move her file there.
  1. Chaos! The First Order is attacking the Scavenger Camp! Finn, Rey, and BB-8 all board the old spaceship: move them there.
  1. The junky old spaceship is actually the legendary Millennium Falcon! Rename it "**Millennium_Falcon**".
  1. The "**Millennium_Falcon**" escapes Jakku! Move the directory to the "**StarWars**" directory.

  To be continued ....

## `Extra`

Already feeling comfortable with these commands and want an extra challenge? Try doing the following:

* Try applying one command to multiple files at once.
* Try applying one command to **all** files in a single directory (where necessery)
* Try applying one command to **all files that match a pattern**.
* Find and use command line shortcuts.
* Try using a mix of absolute and relative paths.
* BB-8 is carrying secret plans to the First Order's Starkiller Base. Can you add "Secret plans" to "**BB-8.txt**" from the command line?

=================

### Part 2: Reading

Please read [Chapter 1 of You Don't Know JavaScript](https://github.com/getify/You-Dont-Know-JS/blob/master/up%20&%20going/ch1.md) up through the section on Functions. If you're feeling ambitious and have time to spare, try reading the section on Scope as well. If you don't have time or are feeling overwhelmed, **no worries**: we will cover scope extensively in class soon.

If you're not clear on any of the concepts presented and/or want to make certain they're covered tomorrow, please write them down and bring with you to class on Wednesday!

### Part 3: Markdown and Bash!

Let's make a bash cheatsheet (Bash is the language you're using when you interact with the Terminal command line).

First, learn about the Markdown language. Markdown is a quick and convenient way of formatting text for prettier display: HTML-lite, as it were. We made (actually, borrowed from another WDI cohort) a cheatsheat for markdown and put it in the 'Guides and Resources' directory in our class repo; you can find it [here](https://github.com/ga-students/wdi-al-Khwarizmi/blob/master/Guides_and_Resources/markdown_cheatsheet.md)
If you're interested in learning more about markdown, the cheatsheet contains links to the markdown documentation. Feel free to read up on it (if you have time!).

Going forward, if you use markdown for all homework submission unless otherwise indicated (when you create the file, use the .md extension), it will make it much easier for your instructional team to read. Put your code in code blocks as shown on the cheatsheet, e.g.
```javascript
var isAwesome = function(name) {
  return name + " is awesome!";
};
console.log(isAwesome("Ethan"));
```

Create a new markdown file called bash_cheatsheet.md in the Guides_and_Resources directory. This is going to be a great resource for you going forward. In your cheatsheet, using markdown to format it, you should include the bash commands to

* create a directory
* create a file
* move a file
* move a directory
* rename a file
* rename a directory
* delete a file
* delete a directory
* read the help file for a specific command
* move around within a directory
* see what files and directories exist
* check where in the directory structure you are.
Be as complete as possible and expand on this list. This is a good opportunity to practice markdown, so include a table, a list (ordered or unordered), and a link.
* Save your completed cheatsheet to the 'Guides_and_Resources' directory in your personal repo as well as in the homework folder. Keep it handy!

### EXTRA CREDIT
* Include three other commands beyonds the ones listed above.
* Include some useful keyboard shortcuts. How do you move quickly to the beginning or end of a line? How do you recall the last command entered?
