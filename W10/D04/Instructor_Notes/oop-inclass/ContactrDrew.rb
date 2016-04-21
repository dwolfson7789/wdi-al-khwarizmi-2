class Contacts
  def initialize()
    @contacts = []
  end

  def add(person)
    @contacts << person
  end

  def get
    @contacts
  end

  def update(old_person, new_person)
    idx = @contacts.index(old_person)
    @contacts[idx] = new_person
  end

  def delete(person)
    @contacts.delete(person)
  end
end

class Person
  def initialize(name, number)
   @person = {name: name, number: number}
 end

 def get
   @person
 end

 def set_name(name)
   @person[:name] = name
 end

 def set_number(number)
   @person[:number] = number
 end
end

contact_list = Contacts.new()
# this returns an array of contacts

puts "welcome  to contactr"
puts "enter a choice: 1. to add, 2. delete, 3. update, 4. get all contacts, 5. to end program"
choice = gets
contacts = contact_list.get
# go under the menu item add
syed = Person.new("syed salahuddin", "2011112333")

while choice.chomp != "2"
  puts " add things"
  if choice.chomp == "1"
    contacts.add do |contact|
      puts contact.get
    end
    puts "do you want to continue? if not press 2"
    choice = contact.add(person)
  end
end



while choice.chomp != "5"
  puts "do the things"
  if choice.chomp == "4"
    contacts.each do |contact|
      puts contact.get
    end
    puts "do you want to continue? if not press 5"
    choice = gets.chomp
  end
end
