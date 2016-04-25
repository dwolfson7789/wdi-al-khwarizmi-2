# HOMEWORK

## PART 1:

Do the "Library DB" lab.

Draw out a complete ERD for everything shown

**BONUS** (after completing Part 2): Draw out an ERD for Facebook. At a minimum, you'd need tables for
  * Users
  * Posts
  * Comments

How would you handle Likes? (You might need to read up on Join Tables in Liza's docs she pushed today.)

## PART 2:

Let's model what's going on in our library database in Ruby.

We're going to need two classes:
* `Author`
* `Book`

Each will an `initialize` method (of course). Authors will need all the properties specified in the schema.sql file: `id`, `name`, `nationality`, and `birth_year`. Remember `id` has to be UNIQUE. Maybe you can do this by creating a class variable and then generating a local variable from it? (i.e., `$ID` and `@id`...?)

Books will need everything specified in schema.sql as well: `id`, `title`, `publication_date`, and `author_id`. To create a new book, you should pass in an entire author to `Book.new`, not just the ID, and then in your `initialize` method you can grab the id of the book's author and set the book's `author_id` to that.

Books should have a `retitle` method which does just that: retitles the book.

Create at least three Authors and give each Author two books. Retitle two of the books. e.g.
```ruby
shakespeare = Author.new "William Shakespeare", "UK", 1564
# should create a new Author instance with appropriate properties

hamlet = Book.new "Hamlet", 1603, shakespeare
#should create a new Book instance with appropriate titles

hamlet.rename "Just Make Up Your Goddamn Mind, Dude"
#will rename Hamlet accordingly
```
**BONUS** If you have time: create a Category class (for genres like `science fiction`, `romance`, `biography`, `history`, `science`, etc.)

What's the relationship between Book and Category? one-to-one, one-to-many, or many-to-many?

Make it so that Books don't need to have any Categories when they're created (although you could pass them in if you like). But Book should have an `add_category` method to do just that....
