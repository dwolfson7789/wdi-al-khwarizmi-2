# W01D02 Homework
## Your very first homework!

![your life now](http://i.imgur.com/J40jpTu.jpg)

Please try to complete as many of the exercises as you can. Homework should be submitted by midnight. If you haven't finished by then, please don't stay up trying to get it done! The pace of this course is intense -- you have to take care of yourself (i.e., SLEEP).

######Submitting the homework
This is going to be your process throughout the course. Live it, breathe it.
By this point you should have:
1. Forked the class repo (found [here](https://github.com/ga-students/wdi-al-Khwarizmi)) on Github to your personal Github.
1. Cloned that remote repo from your Github to your local machine.
If you haven't yet, do this now!

To submit a homework, you must first commit your changes. In the Terminal, in the folder where you're working (generally that day's folder):
```
git add -A
git commit -m "some sort of commit message, i.e., 'working on homework. Ethan sucks'"
```

This saves the changes to your local repo on your machine. You now need to push those changes out to your remote repo on Github: `git push origin master`

When you've completed the homework (or gotten as far as you're going to), go to **your** Github account and navigate to the folder where the homework (it will look something like (the URL will look something like https://github.com/[your Github username]/wdi-al-Khwarizmi/tree/master/W01/D02/Assignments/Homework). Copy this URL.

Now go to our main class repo (again, [here it is](https://github.com/ga-students/wdi-al-Khwarizmi)). Click on the 'Issues' tab and create a new Issue:
* Title: HW #XXX

=================

### (Part 0: Fundamentals Prework)
If you haven't finished the pre-work, please do so! We're going to be moving fast. You will find the rest of Unit 1 of this course MUCH easier if you have completed it. Make sure to follow the instructions for submission at the end. If you already finished it, congratulations! You can go right to Part 1 below.

=================

### Part 1: The Command Line
Navigating the command line is an essential part of coding, and you'll need to get skilled at it to successfully complete this course. You can find a bash cheatsheet [here](https://github.com/0nn0/terminal-mac-cheatsheet/wiki/Terminal-Cheatsheet-for-Mac-(-basics-)) for a useful reference.

You might have heard of this new "Star Wars" movie that just got released. I hear it did OK. Let's create the opening of the movie in our file system.

#### Episode 7: The Terminal Awakens ####

It's been decades since a band of plucky Jedi developers defeated the Evil Empire and brought peace and order to software development. But a new menace has arisen ... With the First Order arising on the Empire's ashes, do you have what it takes to bring balance to the Terminal and peace to the WDI course?

  1. Create a directory named "**StarWars**" inside your personal directory for W01D02.
  1. Inside "**StarWars**" create directories for the planet "**Jakku**" , a "**Scavenger_Camp**", "**Old_Shipwreck**", "**Orbiting_Star_Destroyer**" and a "**Small_Village**" directory.
  1. The Scavenger Camp, Old Shipwreck, and Village are actually all locations on Jakku. Move their directories inside the "**Jakku**" directory.
  1. The "**Orbiting_Star_Destroyer**" has a fleet of TIE fighters. Create directories inside it for
    * "**TIE_fighter_1**"
    * "**TIE_fighter_2**"
    * "**TIE_fighter_3**"
  1. When our story begins, our main character, Rey, is exploring the "**Old_Shipwreck**". Create a file called "**Rey.txt**" inside that directory. Inside "**Small_Village**", create
    * "**Poe_Dameron.txt**"
    * "**BB-8.txt**"
  1. Inside the "**Orbiting_Star_Destroyer**", create "**Finn.txt**" and "**Captain_Phasma.txt**". That completes our initial cast of characters.
  1. Now our story begins! Finn and Captain Phasma leave the Star Destroyer and head to the "**Small_Village**": move them there. They take Poe Dameron captive, but BB-8 escapes! Move "**BB-8.txt**" to the "**Scavenger_Camp**". Finn, the Captain, and Poe return to the Orbiting Star Destroyer: Move their files there. Then, the First Order destroyed the poor village. Delete the "**Small_Village**" directory.
  1. Rey is done scavenging at the shipwreck. Move "**Rey.txt**" to "**Scavenger_Camp**"
  1. Finn and Poe Dameron  escape the Star Destroyer on "**TIE_figher_3**" and crash-land it on Jakku near the Scavenger Camp! Move the TIE fighter there. Poe is presumed dead in the crash. Delete his file. Finn leaves the fighter for the camp -- move "**Finn.txt**" to "**Small_Village**". Delete the wrecked, crashed TIE fighter directory.
  1. Inside the Scavenger Camp, we have an old junky Corellian freighter. Make a "**junky_old_spaceship**" directory.
  1. Rey is done scavenging at the shipwreck and returns to the Scavenger Camp; move her there.
  1. Chaos! The First Order is attacking the Camp! Finn, Rey, and BB-8 all board the old spaceship: move them there.
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

=================

### Part 2: Reading

Please read [Chapter 1 of You Don't Know JavaScript](https://github.com/getify/You-Dont-Know-JS/blob/master/up%20&%20going/ch1.md) up through the section on Functions. If you're feeling ambitious and have time to spare, try reading the section on Scope as well. If you don't have time or are feeling overwhelmed, no worries: we will cover scope extensively in class soon.

If you're not clear on any of the concepts presented and/or want to make certain they're covered tomorrow, please write them down and bring with you to class on Wednesday!

### Part 3: Markdown and Bash!

Let's make a bash cheatsheet (Bash is the language you're using when you interact with the Terminal command line).

First, learn about the Markdown language. Markdown is a quick and convenient way of formatting text for prettier display: HTML-lite, as it were. We made (actually, borrowed from another WDI cohort) a cheatsheat for markdown; you can find it here.  
######LINK TO MARKDOWN CHEATSHEET GOES HERE
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
* move around within a directory
* see what files and directories exist
* check where in the directory structure you are.
Be as complete as possible and expand on this list; your cheatsheet will be a great resource for you from now on. This is another opportunity to practice markdown, so include a table, a list (ordered or unordered), and a link.
