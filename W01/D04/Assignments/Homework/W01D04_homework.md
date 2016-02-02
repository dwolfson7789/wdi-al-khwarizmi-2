# W01D04 Homework
### Reminder: How to Submit Your Homework
This is the last time the instructions will appear in the homework file; after this, it's assumed you know how to submit homeworks. Come back here if you need to refresh your memory.

To submit a homework, you must first commit your changes. In the Terminal, in the folder where you're working (generally that day's folder):
```
git add -A
git commit -m "some sort of commit message, i.e., 'working on homework. Ethan sucks'"
```

This saves the changes to your local repo on your machine. You now need to push those changes out to your remote repo on Github: `git push origin master`

When you've completed the homework (or gotten as far as you're going to), go to **your** Github account and navigate to the folder where the homework (it will look something like (the URL will look something like https://github.com/[your Github username]/wdi-al-Khwarizmi/tree/master/W01/D02/Assignments/Homework). **Copy this URL.**

Now go to our main class repo (again, [here it is](https://github.com/ga-students/wdi-al-Khwarizmi)). Click on the 'Issues' tab and create a new Issue:
* Title: HW #XXX
* Body: In the body of the issue, paste the link to the homework's location in your fork of the class repo, the one you just copied.

When you're done, submit the issue. Your homework is in!

### Part 1: Calculator

Let's try building a JavaScript calculator.
1. The skeleton of four functions are given below. Complete them so they each do the appropriate arithmetical operation on the arguments that are passed into them.
```javascript
function add(a,b) {

}

function subtract(a,b) {

}

function multiply(a,b) {

}

function divide(a,b) {

}
```
(NOTE: subtract is not a commutative operation; write your subtract() function so that the second argument passed in is subtracted from the first; similarly divide() should be written so that the first argument is divided by the second.)
1. Try running your functions. Pass in different numbers into each. Do they all work?
1. What's the result of add(multiply(subtract(8,3),4),15)? **Don't** just paste it into the console! See if you can figure out what's going on first.
