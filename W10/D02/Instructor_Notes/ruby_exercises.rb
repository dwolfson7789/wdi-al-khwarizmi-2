### Ruby! ###

def ruby_is_awesome(some_knowledge)
   learn stuff here
  puts some_knowledge
end



# Instructions
# ---------------------------------- #

# As you go through these exercises, psuedocode them first, then write them in JS as well if it will help you. Psuedocoding will help you when you go to google for answers.
# A large part of this exercise is finding the methods that will be most helpful to you. Make sure you jot them down & a short description of what they do. Use the resources provided below.
# Make yourself a cheatsheet of notes, especially for the big concepts in ruby:
  # - common data types
  # - variables: syntax, scope, etc.
  # - methods: syntax, scope, return, etc.
  # - arrays: iterating over them & accessing items/indices in them
  # - hashes: iterating over them & accessing keys/values in them
  # - control structures: if statements, etc.
  # - loops: there are many ways to loop over collections in ruby, make sure you jot down a few.
  # - truthy & falsy values in ruby




# Reading & videos (required)
# ---------------------------------- #

# Shorty videos:
# https://www.youtube.com/playlist?list=PLw1xVKFbouelFRXAxAHq5DP2WdSoVoXv6

# Reading on ruby methods:
# 1- https://launchschool.com/books/ruby/read/methods#whataremethodsandwhydoweneedthem
# 2- Pages 1 & 2: https://www.ruby-lang.org/en/documentation/quickstart/
# 3- http://ruby-doc.org/core-2.2.0/doc/syntax/methods_rdoc.html
# 4- https://pine.fm/LearnToProgram/chap_05.html
# 5- https://pine.fm/LearnToProgram/chap_08.html
# 6- ruby bang! http://ruby-for-beginners.rubymonstas.org/objects/bangs.html
# 7- A nice little ruby cheatsheet courtesy of Tyler or Sumit: http://www.pragtob.info/rails-beginner-cheatsheet/



# Resources
# ---------------------------------- #

# Official ruby docs:
# http://ruby-doc.org

# List of methods you can call on strings
# http://ruby-doc.org/core-2.2.0/String.html

# And on arrays
# http://ruby-doc.org/core-2.2.0/Array.html

# And on hashes
# http://ruby-doc.org/core-2.3.0/Hash.html





# Arithmetic & comparisons are the same as in JS!
# ---------------------------------- #

# Arithmetic methods:
+, -, *, /, **, %

# Comparison methods:
<, <=, >, >=, ==, !=

# Except...
  9 / 2 => 4
  # Wat?
  # This is because if you divide an int by an int, it will try to give you an int (and round down)

# Make sure you do this instead:
  9.0 / 2.0 => 4.5



# Some helpful methods:
# ---------------------------------- #

# Conversion methods
.to_i
.to_s
.to_f


# String methods
puts
gets
.chomp
.reverse
.length?
.upcase/.downcase
.capitalize
.swapcase
.center/.ljust/.rjust
.times


# Array methods
.each
.length
.reverse
.join
.push
.pop
.last


# Integer methods
.length
.times
.reverse?
.abs
rand and srand



# Quiz
# ---------------------------------- #

# - Pry
#   - What is Pry
it is primaraly used for source code browsing and navigation methods around the current state
#   - What's it similar to in JS?
node
#   - How do you load a file into pry?
put and get

# - How do you run a single ruby file
ruby. your filw

# - What is `puts` similar to in JS?
console.log

# - Difference between `puts` and `print`
 puts adds a newline after executing, and print does not.

# - Difference between `each` vs. `map`
Array.each executes the given block for each element of the array, then returns the array itself.

Array.map also executes the given block for each element of the array, but returns a new array

# - Write out a basic each/do method

ary = [1,2,3,4,5]
ary.each do |i|
   puts i
end

will out put the index of the array

# - Now write out the alternate syntax of an each/do (hint: use curly braces)
arr = [1,2,4,5]
{:arr}
# - How do you each over a hash? (hint: this was in one of Shorty's video)

 arr.each{|e| ...} #=> arr





# Exercises: ruby docs
# ---------------------------------- #

# In this exercise you'll begin to familiarize yourself with the Ruby
# documentation.

# What do you notice about conventions in the Ruby documentation?
you dont need () for functions

# What does each method return?
return the index of the array

## Strings

# http://ruby-doc.org/core-2.2.0/String.html
# - Find the method on Strings to check if it ends in a certain letter.
# - Find the method to turn a string into a number.


## Integers

# http://ruby-doc.org/core-2.2.0/Integer.html
# - Find the method on Integers to check if it is odd or even.


## Ranges

# http://ruby-doc.org/core-2.2.0/Range.html
# - Find the method on Ranges to check if an object is in the range.


## Symbols

# http://ruby-doc.org/core-2.2.0/Symbol.html
# - How do you find the array of all the symbols currently in Ruby's symbol table


## Date

# http://ruby-doc.org/stdlib-2.0.0/libdoc/date/rdoc/Date.html
# - How do you check if a Date is Thursday?
# - Is anything else required to use Dates?


## Time

# http://ruby-doc.org/core-2.0.0/Time.html
# - How do you format Time in Ruby?







# Exercises: beginner level
# ---------------------------------- #

# Strings:
# ---

# Reverse the string `"monkey"`.

# Return the substring, `"worry"` from the string, `"What me worry?"`.

# Convert the string, `"90210"` to an integer.

# Capitalize the letter `"r"` in the string  `"richard"`.


# Arrays:
# ---

# Given the array `numbers = [1, 3, 5, 7]`, create a new array with each element of `numbers` multiplied by three.

# Given the array `instructors = ["Liza", "Syed", "Shorty", "Ethan"]` return a new array with only the instructor whose name is exactly four characters long.

# Write a method that given an array, `wdi_topics = ["express", "node", "javascript", "ruby"]`
# prints the following statements to the terminal (*note the capitalization):
# "I will learn Express in WDI."
# "I will learn Node in WDI."
# "I will learn Javascript in WDI."
# "I will learn Ruby in WDI."

# Given the following array (of arrays):
sandwiches_with_costs = [
  ["blt", 5],
  ["grilled cheese", 7],
  ["turkey club with pesto", 9],
  ["ramenburger", 6],
  ["portobello and spicy sauce compote", 10]
]
# Create a hash using sandwich names as keys and cost amounts as values.
# i.e. `{"blt"=>5, "grilled cheese"=>7} `


# Hashes:
# ---

# Perform the following tasks using hash methods (note: you might also need to use some string and array methods).

# Given the hash:
breakfast_prefs = {
	juice: "orange",
	syrup: "blueberry",
	potatoes: "steak fries",
	meat: "corned beef hash",
	carb: "Texas Toast",
	cups_of_coffee: 3,
	vegan: false
}
# 1. Return an array containing only the KEYS of `breakfast_prefs`.
# 2. Return an array containing only the VALUES of `breakfast_prefs`.
# 3. Change the value of `:syrup` to `"boysenberry"`.
# *Note: Remember `.each` can take a second parameter, which is very nifty for each-ing over hashes. Refer to Shorty's video.


# Methods:
# ---

# 1. Lengths
# Write a Ruby method `lengths` that accepts as a single parameter an array of strings.
# The method should return an array of numbers. Each number in the array should be the length of the corresponding string.

words = ["i", "love", "cute", "little", "owls"]
lengths(words)
# => [1, 4, 4, 6, 4]


# 2. Transmogrifier
# Write a Ruby method called `transmogrifier`.
# This method should accept three arguments, which you can assume will be numbers.
# Your method should return the "transmogrified" result.
# The transmogrified result of three numbers is the product (numbers multiplied together) of the first two numbers, raised to the power (exponentially) of the third number.
# For example, the transmogrified result of 5, 3, and 2 is
# `(5 times 3) to the power of 2` is 225.

# Use your method to find the following answers:
transmogrifier(5, 4, 3)
transmogrifier(13, 12, 5)
transmogrifier(42, 13, 7)


# 3. Toonify
# Write a Ruby method called `toonify` that takes two parameters, `accent` and `sentence`.
# - If `accent` is the string `"daffy"`, return a modified version of `sentence` with all "s" replaced with "th".
# - If the accent is `"elmer"`, replace all "r" with "w".
# - If the accent is not recognized, just return the sentence as-is.

toonify("daffy", "so you smell like sausage")
# => "tho you thmell like thauthage"


# 4. Longest
# Write a Ruby method `longest` that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return either.
longest(["aren't", "those", "owls", "soooooooo", "cute?"]);
# => "soooooooo"
longest(["they", "can", "turn", "their", "heads", "around", "all", "the", "way"]);
# => "around"






# Exercises: medium level
# ---------------------------------- #

# *Note:* Psuedocode first, then go find the solution.

# -- PROBLEM: RESTAURANT TIPPIN'

# Write a method that takes the bill, splits it amongst the dinner party, and
# adds the tip percentage of your choosing.


# -- PROBLEM: EQUATOR DRIVE

# How much would it cost to drive around the world at the equator, assuming
# the Earth is rotating at 1000 mph, and assuming gas costs $3 per gallon,
# and your car gets 15 miles to the gallon.


# -- PROBLEM: THE PRIME DIRECTIVE

# Prime numbers play an important role in lots of applications. Prime numbers
# are the basis of modern cryptography. When you log on to your bank online,
# it's prime number-based cryptography that allows you to do so securely,
# without anyone being able to intercept your account information. Pseudocode
# how you might go about testing to see if a given number is prime.
# e.g., given some number n, you want to determine if n is prime or not. As a
# refresher, a prime number is divisible only by itself and 1, and 1 is not
# prime.


# -- PROBLEM: CARD DECK

# Given the two arrays below, generate a new array that contains the full deck
# of 52 cards in this format: "5H" for five of hearts, "QD" for Queen of
# Diamonds, etc. Puts the full deck to the console.
suits = ["S", "H", "D", "C"]
values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

# BONUS: After you construct your deck, randomly pull two cards from your deck
# array and determine their blackjack value.


# -- PROBLEM: BAD WORDS

# We want to build a comment system for a blog, but we want to filter out
# bad words from comments.
# Create an array with these bad words: "shorty", "voldemort", "shucks"
# `gets` a comment from the user in the terminal (in pry)
# Evaluate it and puts an "alert" to indicate whether or not the comment
# contained a bad word


# -- PROBLEM: FIBONNACI SEQUENCE

# The Fibonnaci sequence is an infinite sequence where each number in the
# sequence is the sum of the prior two. The first two numbers, by definition,
# are 0 and 1. From that we can get the whole sequence. E.g., the first 7
# Fibonnaci numbers are 0, 1, 1, 2, 3, 5, 8.
# Write a program that prints out the first 20 numbers of the sequence.


# -- PROBLEM: YOUNG WHIPPER SNAPPERS

# Given the array of hashes below, write a youngest function that will return
# the name of the youngest person in the array.

candidates = [
  {
    name: "Bernie Sanders",
    age: 74
  },
  {
    name: "Hillary Clinton",
    age: 68
  },
  {
    name: "Jeb Bush",
    age: 62
  },
  {
    name: "Donald Trump",
    age: 69
  },
  {
    name: "Ted Cruz",
    age: 45
  },
  {
    name: "Paul Ryan",
    age: 46
  },
  {
    name: "Marco Rubio",
    age: 44
  }
]


# -- PROBLEM: EL BLOOMBITO

# Michael Bloomberg (age 73) is considering entering the race. Write a
# `run_for_office` function that will take two arguments, a name and an age,
# and return a candidate `hash` like the ones above. Use it to add Bloomberg
# to the `candidates` array.


# -- PROBLEM: DROP OUTS

# Following his poor performance in Iowa, Paul Ryan decided to drop out. Write
# a `drop_out` function that takes a name and an array of candidates.
# If it finds a candidate by that name in the array, it removes him or her
# from the candidate list and returns the modified array. If it doesn't find a
# candidate by that name, it returns "Candidate " + name + " isn't in the
# race!". Use it to remove Ryan from the race. As of a few months ago, Jeb is
# out too--remove him. Use `drop_out` to try to remove Syed Salahuddin from
# the race as well.


# -- PROBLEM: SEARCH ARRAY

# Write a method `search_array` that takes an array and value as parameters
# and searches the array for the given value. If the value is in the array,
# puts `true`, otherwise puts `false`.
# example:
# nums = [1,2,3,4,5]
# search_array(nums, 3) # returns true
# search_array(nums, 6) # returns false


# -- PROBLEM: PALINDROME

# Write a function `is_palindrome` that takes in a single parameter, a string,
# and puts true if the string is a palindrome, and false otherwise. For example:
# is_palindrome('hello')  # false
# is_palindrome('hannah') # true


# -- PROBLEM: ARRAY REVERSER

# Write a method that takes in an array and returns that SAME array in
# revers order. So:
# testArray = [1,2,3,4,5,6]
# reverser(testArray) # returns: [6,5,4,3,2,1]


# -- PROBLEM: ARRAY TESTER

# Write a method called `tester`. It should take two args: an array and
# a "test" method that performs some test on
# whatever's passed into it, and return true if it passes the test and false
# if it doesn't. tester will return a new array with only the items that have
# passed the test. For example:

testArray = [1,2,3,4,5,6]
def bigger_than_three(num)
  # code to test if num > 3
end

def tester(array, test_method) {
  # your code goes here
end

tester(testArray, bigger_than_three) # returns [4,5,6]


# -- PROBLEM: UNIQUE CHARACTERS

# Write a method that takes in a string and puts 'true' if the string has all
# unique characters and 'false' if any of the characters are repeated. So:
unique('syed') # true
unique('lizaramo') # false
