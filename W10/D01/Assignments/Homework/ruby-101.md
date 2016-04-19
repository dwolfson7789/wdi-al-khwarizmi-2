# HOMEWORK -- RUUUUUUBY!

So I ran `/giphy ruby` and I got these two results:

![heart palpitations](http://i.giphy.com/dZmq0GVE5eUkE.gif)

If that's how the thought of learning a new programming language makes you feel, just remember the other result I got from giphy. Ruby is:

![best friend](http://i.giphy.com/LGd7FAPL44tiM.gif)

For each of the videos below, watch them, and answer the questions. During the first video also make sure you've installed everything in the video (which walks you through Ruby installation). I also give you the installation outline below.

LINK TO SHORTY'S PLAYLIST: (https://www.youtube.com/playlist?list=PLw1xVKFbouelUj3g_56CRAUjGGEU13bPF)
(Scroll down until you see the videos whose titles begin with "Ruby - From JS" -- this is the video series for Ruby for people coming from JavaScript, like us.)

## PART 1 - The Environment

**IMPORTANT**: make sure you've successfully installed the following:
1. latest version of Homebrew (via `brew update`)
2. latest versions of `rbenv` and `ruby-build` (with `brew install rbenv ruby-build`)
3. Ruby version 2.2.2 (via `rbenv install 2.2.2`)
4. Set your system to use that version (once it's installed and compiled) with `rbenv global 2.2.2`
5. finally, the command-line repl for Ruby, `pry`, with `gem install pry`
WHEW!

**QUESTIONS**
1. What is the repl we use for executing Ruby code right from our command line?
2. What are the Ruby commands to print things to the screen and get user input?
3. How do we run a Ruby file from the command line?
4. Write a program that prints "Hello World" 20 times to the screen. (Re-watch the video if you're not sure how.)

## Part 2A - Variables and Datatypes

**QUESTIONS**
1. How do we create a variable in Ruby vs. in JavaScript?
2. What happens if we try to multiply a string times a number in Ruby? In JavaScript?
3. How do we check out what datatype something is in Ruby?
4. What datatypes are the following things in Ruby? In JavaScript? (If the JS equivalent has a different name or term, what's that equivalent?)
  * "ethan"
  * 5.6
  * 420
  * false
  * true
  * nil
  * [7,8,9]
  * { "teachers": ["syed", "liza"] }
  * :teachers
5. Given the following array, answer the questions below. If the answer would be *different* in JavaScript, what is it?

```ruby
my_array = ["taco", "banana", ["pumpkin", "butter"]]
```
  * How do I access "taco"?
  * How do I access "pumpkin"?
  * What is the value of `my_array[6]`?

6. Given the following hash, answer the questions below.

```ruby
my_hash = { teachers: ["liza", "syed", "ethan"], class_name: "wdi-al-khwarizmi", class_status: "awesome", class_size: 27 }
```

  * How do I access the list of `teachers`?
  * How is the answer to the prior question different than if `my_hash` were a JavaScript object like we're familiar with?
  * JavaScript and Ruby both "assign by reference". What does this mean?

## Part 2B - Variables and Datatypes

**QUESTIONS**

```ruby
my_var = "hello dudes and dudettes"
```
1. What is the value of `my_var[2]` in Ruby? In JS? What is the value of `my_var[-2]` in each language? What about `my_var[-77]`?
2. If I run `my_var[3] = "p"` What is the new value of `my_var`?
3. If I run `my_var[3] = "tyler"` What is the new value of `my_var`? Can we run this command in JS?
4. How do I get the length of `my_var`?
5. what is the value of `my_var[5, 9]` and `my_var[5..9]`?
6. For arrays, what do `push`, `pop`, `shift`, and `unshift` do in Ruby and what do they **return**?
7. What do `reverse`, `shuffle`, and `sample` do?
8. How do we "shovel" something onto an array or string?
9. What sort of entity in JavaScript is a Ruby Hash ***sort of*** like?
10. What can we use as a key in a Ruby Hash? Can we use strings? Fixnums? Floats? Arrays? Other Hashes?
11. What will the following commands result in?
  * `a = Array.new[3]`?
  * `b = Array.new[3, false]`?
  * `c = Hash.new`
  * `d = Hash.new(6)`
12. How do I get the keys of a hash? The values?


## Part 3a - Methods

**QUESTIONS**

1. How do we comment in Ruby? (You see Shorty doing this at the start of the video.)
2. What are the ways to execute a file in Ruby?
3. Define a method that will print "hello world" to the screen. Run it. What's different about calling a method in Ruby vs. a function in JS?
4. Define a method that take two parameters and returns the sum of their squares. (I.e., if your params are 5 and 3, it should return 5^2 + 3^2 = 34) Run it. Again, what can we do differently in Ruby here when we call it than in JS?
5. How do we assign default values to parameters?

## Part 3b - Options Hash

**QUESTIONS**
1. What is an options hash?
2. Write a method that takes an options hash. It should take two params, num_one and num_two. If the options hash has `add: true` in it it will return the sum of the number; if it has `subtract: true` it will return num_one - num_two; and if it has `multiply: true` it will multiply them.
3. What is a symbol? Why might we choose to use a symbol as a key in a hash instead of a string?
4. What is the `=>` notation in Ruby hashes?

## Part 4 - Conditionals

**QUESTIONS**

1. Compare and contrast Ruby and JS conditionals. What is the Ruby versions of JavaScript's `else if`? What are the other differences between JS and Ruby conditionals?
2. How does `unless` work?

## Part 5 - Loops

**QUESTIONS**

1. What will the following method print to the console when it is called?
```ruby
def tyler
  age = 18
  while age < 21
    puts "tyler is too young to drink"
    age += 1
  end
  puts "congrats tyler you can have a beer now!"
end
```
2. How do `while`, `unless`, and `loop do` work? Try rewriting the above method to use the other type of loops.
