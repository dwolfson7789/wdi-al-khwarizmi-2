# More Ruby Videos!

LINK TO SHORTY'S PLAYLIST: https://www.youtube.com/playlist?list=PLw1xVKFbouelUj3g_56CRAUjGGEU13bPF
(Scroll down until you see the videos whose titles begin with "Ruby - From JS" -- this is the video series for Ruby for people coming from JavaScript, like us.)

## PART 6a - Each and Map

**Questions**
1. Research five of Ruby's built-in methods for arrays or strings at ruby-doc.org/core-2.2.2/.

E.g., all the array methods can be found at
http://ruby-doc.org/core-2.2.0/Array.html

and if you were interested in what the `uniq!` method does for arrays, you can look it up there (all the methods are listed in the sidebar) and you'll see that it removes all duplicate elements from an array (so that `[a,b,a,b,c]` is transformed into `[a,b,c]`) while the `uniq` method with no bang ('!') at the end returns a new array with only unique elements in the source array while leaving the source array untouched.

2. In the console, how do we find all the methods available for a given piece of data?

3. What's the syntax for an `each`?
Given `my_array` below, use `each` to print the square of each item in the array to the console.
```ruby
my_array = [6,22,5,-10]
```

4. What does `map` do?
5. How do we call `each` on a hash?

## PART 6b - Range, Times, Upto

**Questions**

1. How do we create a range in Ruby? Create a range that contains all the numbers from 6 to 20 inclusive.
1. What's the difference between `..` and `...`?
1. Using `times` write a method that prints your name 10 times.
1. Using `upto` write a method that prints the squares of all numbers from 1 to 10.

## PART 7 - Ruby Blocks

**Questions**
```ruby
teachers = ["liza", "syed", "ethan"]
```
1. How would you write a *one-line* `each` block to `puts` each of the teachers' names to the console?
1. What is a block in Ruby? What is a Proc?
1. What does `.call` do?
1. What should the following output to the console? **WORK IT THROUGH YOURSELF -- DON'T JUST CUT AND PASTE INTO PRY!**

```ruby
$teachers = [
  {  
    first_name: "Liza",
    last_name: "Ramo"
  },
  {
    first_name: "Ethan",
    last_name: "Friedman"
  },
  {
    first_name: "Syed",
    last_name: "Salahuddin"
  }
]

def teacher_iterator &blk
  $teachers.each do |teacher|
    blk.call teacher
  end
  "isn't that cool?"
end

teacher_iterator do |x|
  puts x[:first_name] + " is the best"
end
```

## PART 8 - Ruby Classes
**IMPORTANT**
Shorty refers to JavaScript constructor functions in this video. We haven't covered them in detail in class; we looked at factory functions instead. We also want to understand the difference between JS's "prototypical" method of inheritance and Ruby's "class" inheritance.

SO: before you watch this Ruby video, you should first watch the video titled "JavaScript -  Object Construction". (It's in the same YouTube playlist, just scroll up)

**QUESTIONS on JAVASCRIPT OBJECT CONSTRUCTION**

After watching it, please create a Student constructor function below so it makes new students. Each student should have a `firstName` property, a `lastName` property and a `returnFullName` method which returns that student's full name (with a space in between)
```js
//write your function so that if I run
var kaushal = new Student("Kaushal", "Patel");

//then
kaushal.firstName // "Kaushal"
kaushal.lastName // "Patel"
kaushal.returnFullName // logs "Kaushal Patel" to the console

//if I now do
var yulia = new Student("Yulia", "Shea");
//it should do the same things as Kaushal but with Yulia's name!
```

**NEXT VIDEO: JAVASCRIPT - OBJECT CONSTRUCTION II - PROTOTYPES**

Rework your Student constructor. I want you to add a property to the prototype like Shorty does in the video. This property should be `className: "WDI-al-Khwarizmi"`

Now change the `returnFullName` method so instead of being in the constructor function you've added it to the prototype like Shorty does in the video.

This is important because you need to understand how JavaScript does things to understand why Ruby's way of doing it is different! Ruby's "classical" inheritance is actually more like how *many* other languages work.

*Prototypical languages:* JavaScript and a few others I've never really heard of

*Class-based languages:* Ruby, C++, Java, Python, PHP, Objective-C, C#, COBOL and others

Now you can watch **RUBY PART 8 -- CLASSES** at last!

**Questions**

1. How do I create a new Class in Ruby? What is the mandatory method that the Class must contain (the equivalent of the constructor function in JS)
1. How do I create an instance variable? What character does the variable name always start with?
1. How do I access a class constant from outside the class?

## PART 8b - Instance methods

**QUESTIONS**

1. Write a Dog class. Each instance should have a color that's randomly `sample`ed from the available colors (I made that for you). It should also have a name that's passed in (see the empty initialize function I created for you). And it should have a `bark` method that returns `bark bark woof woof`.

```ruby
class Dog
  COLORS = ["black", "white", "yellow", "spotted"]

  def initialize name
  end
end
```

1. Give your Dog class a `hairDye` method that changes the instance's color to one you pass in.
1. What is a "writer"?
1. What is a "reader"?
1. What is an "accessor"?
1. Rewrite your Dog class so that you are using `attr_reader` for its name (we can't rename the dog) and `attr_accessor` for its color (we can both view it and change it). Make sure that both work.

## PART 8c - Class methods, self

**QUESTIONS**

1. What does `self` refer to?
1. How do we define a class method?
1. What's the difference between a class method and an instance method (Shorty explains this clearly at the end of the video)?
1. Create a Triangle class (notice class names are capitalized)
  * it should take 3 parameters, for the lengths of the three sides. The second and third parameters should default to the first one if they're not specified
  (so that `a = Triangle.new 5` will create an equilateral triangle with all sides equal to 5 while `b = Triangle.new 5, 6, 7` will create a triangle with sides of those lengths).
  * it should have a `perimeter` method that returns the perimeter of the triangle (the sum of its sides)
  * it should have an `area` method that calculates the area of the triangle using Heron's Formula. If all we know about a triangle is how long its sides are, we can calculate its area using Heron's Forumla as follows:
    * if p = perimeter / 2
    * then its area is equal to the square root of: p * (p - a) * (p - b) * (p - c)

## PART 8d - Inheritance

**QUESTIONS**

1. How does one class inherit from another?
1. What is `super`?
1. What does `||=` do?
1. Why is Shorty so prejudiced against reptiles? They're not dumb! They have feelings too! boooo!
1. Make a Developer class
  * it should have the following instance variables:
    - `@languages-known`: an array equal to the languages passed in as a parameters
    - `@experience_level`: a string; it should default to "intermediate"
    - a `learn_new_language` method which adds a passed-in language to the Developer's `languages_known`
1. Make a Student class that inherits from Developer. Lets set Student's `experience_level` should be automatically set to 'beginner' (despite whatever is passed in).
1. Make a Teacher class that inherits from Developer, with its `experience_level` automatically set to "advanced".
1. Change `learn_new_language` on the student only. It should take in a teacher as a parameter and automatically add a random language (`sample`) from that teacher's `languages` array to the student's array.
Now Student and Teacher, despite both being subclasses of Developer, learn languages differently: for a Teacher to learn a new language, you have to tell it what language to learn. E.g., if `liza = Teacher.new ["JS","Ruby","PHP"]` and you want liza to learn Python you would run `liza.learn_new_language "Python"` and now. But if `sumit = Student.new []` (i.e., as a new student he doesn't know any languages yet) and you want him to learn a language you'd run `sumit.learn_new_language liza` and sumit would learn one of liza's languages.
