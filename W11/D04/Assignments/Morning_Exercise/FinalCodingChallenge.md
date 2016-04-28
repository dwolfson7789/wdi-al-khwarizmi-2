# YOUR FINAL CODING CHALLENGE !!!

I really shouldn't have to say this but:

no Googling; if you're stuck pseudocode it out.

***Using Ruby***, please write a method to do the following: take in one parameter, a string, called `sentence`, and return the longest word in that sentence.

E.g., if the name of our method is `longest_word` then

`longest_word "I am going to miss Ethan's coding challenges sooo much"` should return `"challenges"`

If you finish that, then below you'll find a version of our Ruby RPG Character class that we created last week. I've also created an Item class, shown below as well.

Write methods for the Character class to add an item to its inventory, remove a specified item from inventory, and if you have time, to buy an item and sell an item as well.

```ruby
class Character
  @@ID = 1
  def initialize name, game_class, level = 1, stats, inventory = [], money = 0
    @name = name
    @game_class = game_class
    @hit_points = self.increase_hit_points game_class
    @level = level
    @stats = stats
    @inventory = inventory
    @money = money
    @id = @@ID
    @@ID += 1
  end

  def increase_hit_points game_class
    case game_class
    when fighter
      @hit_points += 10
    when thief
      @hit_points += 8
    when wizard
      @hit_points += 6
    end
  end

  def level_up
    @level += 1
  end

  def improve_stat stat
    @stat[:stat] += 1
  end
end

class Item
  @@ID = 1

  def initialize name, value
    @name = name
    @value = value
    @id = @@ID
    @@ID += 1
  end
end

```
