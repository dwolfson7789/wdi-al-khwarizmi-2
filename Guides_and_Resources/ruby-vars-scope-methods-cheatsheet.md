# Ruby 102

### Variables & scope & methods in ruby

**Global variable**
- Look like: `$a_variable`
- Available everywhere within your Ruby script.

**Local variables**
- Look like: `a_variable`
- Unlike instance variables, local vars are associated with a particular scope. As long as you’re in that scope, you’ll have access to them.
- Local variables change and get replaced with every new scope.
- The scope of a local var depends on various things.

**Constant**
- local scope
- Can't be changed. In other words, they are "read only"
- ALL_CAPS_SNAKE_CASE: `NAME = 'liza'`


**Instance variables**
- Look like: `@a_variable`
- Instance variables are associated with a particular object. As long as you’re in that object, you have access to them.
- Available only within a specific object, across all methods in a class instance. Not available directly from class definitions.
- Instance variables are available only for instances of a class.
- Instance variables change and get replaced with every new object.
- Instance variables are bound to an instance of a class and form the "state" of an object. Every instance of a class has a different set of instance variables.

**Instance Methods**
- called on instances
- can reference instance vars
- can reference class vars


**Class variables**
- Look like: `@@name`
- are available to both class methods and instance methods.
- It is almost always a bad idea to use a class variable to store state. There are only a very few valid use cases where class variables are the right choice.
- Available from the class definition and any sub-classes. Not available from anywhere outside.

**Class methods**
- Define with `self.` before the method name: `self.say_hello`
- Called on the class: `User.say_hello`
- Can reference class variables
- Can't reference instance methods or variables

### Visualization of scope in Ruby

![](http://natashatherobot.com/wp-content/uploads/variable-scope-ruby.jpg)


---
### Getter & Setter

- "Getter" methods are methods whose sole purpose is to **return** the value of a particular instance variable
- "Setter" methods are methods whose sole purpose is to **set** the value of a particular instance variable
