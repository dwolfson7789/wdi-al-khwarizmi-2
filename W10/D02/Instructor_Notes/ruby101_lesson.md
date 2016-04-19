# Ruby 101


### Agenda
- Shuffle
- Video: WAT. Highlights the absurdities of JS & Ruby.
  - Note: `irb` is similar to `pry`; `jsc` is similar to using `node`'s repl.
  - https://www.destroyallsoftware.com/talks/wat
- Short lesson
- OYO exercises & reading

---

### History of ruby
- The primary purpose of ruby is happiness. No really.
- "Often people, especially computer engineers, focus on the machines. They think, "By doing this, the machine will run fast. By doing this, the machine will run more effectively. By doing this, the machine will something something something." They are focusing on machines. But in fact we need to focus on humans, on how humans care about doing programming or operating the application of the machines."
- Creator: Yukihiro Matsumoto (“Matz”)
- 1993/1995 in Japan
- Wanted a language that was syntactically simple & truly object oriented
- Most of all, Matz wanted to create a language that was fun for developers to write
- Ruby emphasizes the necessity for developers to write code for humans first, computers second.
- Ruby has an enthusiastic community that is inviting to beginners
- Do not confuse ruby with Ruby on Rails. The former is the programming language, the latter is the web framework.

---

### Gems
- Plugins in ruby are called `gems`; in JS they're called `packages`
- Remember how we can type `node` in our terminal and we get a JS REPL (repeat evaluate print loop)? The Ruby version of that is `pry`
  - `gem install pry`
  - Type `pry` in your terminal; type `exit` to get out.

### Data types
- Numbers
- Strings
- True, False, and Nil
- Arrays
- Hashes
- Symbols

### T & F
- Everything in Ruby is `truthy` except:
  - `false`
  - `nil`
- Very different from JS where everything is `truthy` except:
  - `false`
  - `undefined`
  - `null`
  - `0`
  - `NaN`
  - `' '` (empty string)
- In Ruby, even `0` is truthy because it is a value, and values are truthy

### Nil
- What is `nil`? Literally, nothing.
- It is like `null` in JS (not to be confused with `undefined`).
- In ruby, `nil` is the default return value of any "action", much like how `undefined` is the default return value of a function in JS.

### Symbols
- Like strings, but unchangeable
- Create them like this: `:liza`
- Think of them as unique identifiers, like IDs
- What is the difference between strings & symbols?
  - Let's say you print out (puts/console.log) the string 'hello' 5 times. You will actually be creating 5 new strings each time. But if you print out the symbol `:hello`, you will be creating one symbol & it will be reused 5 times.


### Types of variables in ruby
- local
- global
- instance
- class

### Declaring variables
- Javascript:
``` javascript
var helloWorld = 'oh hai.';
```
- Ruby:
``` ruby
# local:
hello_world = 'oh hai.'
# global:
$hello_liza = 'Oh hai, liza.'
```
- No `var` required; no semicolon required; note the `camelCase` vs `snake_case`.

### Some notes on variable scope:
- The `$` means it's a `global var`: `$my_name = 'Liza'`
- Nothing means it's `local`: `my_name = 'Liza'`
- All caps implies it's a `constant`: `MYNAME = 'Liza'`
  - A Ruby constant is like a variable, except that its value remains constant for the duration of the program. You should not modify a constant, although you CAN. Ruby will yell at you.
  - A constant is an identifier to which you can assign an object. In other words, it is a variable that references the object that you assigned it to. It is not, itself, an object.
- A symbol IS an object. They are immutable.  
- There are two other types of variables - `instance` & `class` - we'll get to those soon.

### Puts
- Like JS `console.log` for the terminal instead of the browser's console.

### Gets
- A nifty way to get user input from the CLI.
- One way we did this in JS is by using the `prompt` npm package, but Ruby has it built right in!
- *Note:* `gets` & `puts` are always strings

```ruby
puts "How old are you?: "

user_input = gets.to_i
if user_input > 10
  puts "You are older than ten"
end
```

---

### Hashes
- Key : value pairs
- A lot like JS `objects`
- In other languages they're called `dictionaries` or `associative arrays`

```ruby
my_first_hash = {first_name: 'liza', last_name: 'ramo'}
my_first_arr_of_hashes = [
  { first_name: 'liza', last_name: 'ramo' },
  { first_name: 'Ethan', last_name: 'Friedman' }
]
```
- Access the values using the keys:
  - `my_first_hash[:first_name]`
  - `my_first_arr_of_hashes[0][:first_name]`
- Gotchas:
  - In hashes, keys turn into symbols   
  - Can only bracket in, can't dot in `my_first_hash.liza` --> Why? Because 'liza' is not a property of 'my_first_hash'

---

### RUBY METHODS
- Begins with the keyword `def`; ends with `end`
- Parens not necessary for params, but I think it's more semantic with them.
- Everything returns something
  - In JS the default return of a fxn is `undefined`
  - In Ruby, it's `nil`
- String interpolation: in Ruby, you can evaluate an argument right in a string, kind of like in Handlebars. See below.

```ruby
def helloWorld(name)
  puts "Oh hai", name
end

# with string interpolation:
def helloWorld(name)
  puts "Oh hai, #{name}"
end

```

---

### RUBY LOOPS & ITERATORS
- Ruby provides a lot of ways to iterate and loop over arrays and hashes
- *Note:* unlike JS, ruby loops do not create a new scope for variables, which means those variables are still available outside the loop. Therefore, a lot of ruby developers will use an iterator instead of a loop.  

```ruby

my_first_array = ['liza', 'hayes', 'ramo']

my_first_hash = {first_name: 'liza', last_name: 'ramo'}

my_first_arr_of_hashes = [
  { first_name: 'liza', last_name: 'ramo' },
  { first_name: 'Ethan', last_name: 'Friedman' }
]

my_first_array.each do |name_part|
  puts "this is part of my name: #{name_part}"
end

my_first_array.each.with_index do |name_part, index|
  puts "name part: #{name_part}"
  puts "index: #{index}"
end

```
Iterator methods:
- .each
- .each_with_index
- .map
- etc.

Loops:
- for
- while
- until

---

### Ruby conditionals

```ruby

number = 5

if number.between?(1, 10)
  puts "The number is between 1 and 10"
elsif number.between?(11, 20)
  puts "The number is between 11 and 20"
else
  puts "The number is bigger than 20"
end

```

---

### This & that
- Naming convention for methods & variables:
  - JS: `camelCase`
  - ruby: `snake_case`
- To see all methods for a string in terminal:
  - `'liza'.` + tab twice, or
  - `'liza'.methods`
- Find out the data type of something:
  - `'liza'.class` => string
  - `10.class` => integer
- Destructive (!) & non destructive methods using the bang (!)
  - See reading #6 for info
