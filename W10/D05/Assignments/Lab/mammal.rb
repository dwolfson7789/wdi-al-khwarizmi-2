def Mammal
  def breathe

    puts "inhale and exhale"

  end
end

class Cat < Mammal
    def speak

        puts "meow"

    end
end

snuggles_the_cat = Cat.new
puts snuggles_the_cat.breathe
puts snuggles_the_cat.speak
