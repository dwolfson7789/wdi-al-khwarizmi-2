class Monkey
  # call the attribute accessor easy way to call
 attr_accessor :name, :species, :foods_eaten
  def initialize(name, species)
   @name = name.capitalize
   @species = species
   @foods_eaten = []
 end

 def eat(food)
   if food.start_with?("a","e","i","o","u")
   else
     @foods_eaten << food
   end
 end

 def introduce
   return "Hi, I'm #{@name}. My species is #{@species} and I have eaten #{@foods_eaten}."
 end
end

# solution 2
# class Monkey
#
#     attr_accessor :name, :species
#     @@all = []
#
#     def initialize(name, species)
#       @name = name
#         @species = species
#       puts "Creating #{self.name}"
#       @@all.push(self)
#     end
#
#     def full_name
#       return "#{@name.capitalize} #{@species.capitalize}"
#     end
#
#     def Monkey.all
#       return @@all
#     end


# SOLUTION 3 main
class Monkey

 attr_accessor :name, :species, :foods_eaten
 def initialize name, species
   @name = name
   @species = species
      @foods_eaten = []
 end

 def full_detail
    return '#{@name.capitalize}, #{@species.capitalize}, #{@foods_eaten.capitalize}'
 end
end
