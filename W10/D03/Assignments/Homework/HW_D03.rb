# PART 1
To find methods FOR a given piece of data, you would define a variable DREW = [1,2,3]) then type example_var.methods

my_array = [6, 22, 5, -10] to print out the square of each index in my_array using each it would be: my_array.each do |val| puts val ** 2 end

map method creates a modified version of the original array it pulls data from. Similar to .each but creates a new array.


Create an array with range that goes from 6 to 20, you can do: arr = (6..20) arr.each do |val| puts val end

the difference between ".." and "..." is doing ".." will display every number from the range (ex: (1..10).to_a will display numbers 1-10) whereas "..." will cut off the ending number (ex: (1...10).to_a will display numbers 1-9)

Method that displays my name 10 times: using_times = 'tyler' 10.times do puts using_times end

Method that uses upto that shows the square for nums 1-10: 1.upto(10) do |hi| puts hi ** 2 end (not quite sure how to store this to a var.. tried to do it but i dunno how)

teachers = ["liza", "syed", "ethan"] displaying the teachers names in one line: teachers.each {|hi| puts hi}

Ruby blocks are the things that go into curly braces and after a do. A proc seems to be a block of code that is assigned to a function.

.call seems to allow the user to call a proc in a function (or method, dunno proper terminology yet.)

$teachers = [ {
first_name: "Liza", last_name: "Ramo" }, { first_name: "Ethan", last_name: "Friedman" }, { first_name: "Syed", last_name: "Salahuddin" } ]

def teacher_iterator &blk $teachers.each do |teacher| blk.call teacher end "isn't that cool?" end

teacher_iterator do |x| puts x[:first_name] + " is the best" end

$teachers is a global var, so that's what everything below is referencing to, and contains an array with 3 hashes, each containing a first and last name for each teacher. def teacher_iterator &blk is starting a new method with a proc of &blk. guessing the first each do displays the teacher by first and last name. second do is probably displaying the first names, and adding "is the best" to the end of each one.
After running the code through the terminal: i was close! i was correct with the "do |x|". The first each do though when I put it into the terminal came up as nil, not sure if intentional or not.

# worked with T.Gates

# PART 2

my_array = [6, 22, 5, -10]

my_array.each do |val|
  puts val ** 2
end

puts "<============== Next Method ================>"

hash = {hi: "hey", greetings: "hello"}
hash.each do |val|
  puts val
end

puts "<============== Next Method ================>"

using_times = 'tyler'
10.times do
  puts using_times
end

puts "<============== Next Method ================>"

1.upto(10) do |hi|
  puts hi ** 2
end

puts "<============== Next Method ================>"

teachers = ["liza", "syed", "ethan"]
teachers.each {|hi| puts hi}
