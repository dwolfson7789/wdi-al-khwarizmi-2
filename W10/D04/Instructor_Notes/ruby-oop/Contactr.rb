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
  # update
  def update(old_person, new_person)
    # find old object and update to new object
    idx = @contacts.index(old_person)
    @contacts[idx] = new_person
  end
  # delete
  def delete(person)
    @contacts.delete(person)
  end
end


class Person
  def initialize(name, number)
    @name = name
    @number = number
    @person = {name: @name, number: @number}
  end
  # get name and number
  def get
    @person
  end
  # set name and number
  def set_name(name)
    @person[:name] = name
  end

  def set_number(number)
    @person[:number] = number
  end
end

# this area below is to just test some stuff
list = Contacts.new()

syed = Person.new("syed salahuddin", "2011112333")
drake = Person.new("drake", "2011112333")
meow = Person.new("meow", "2011112333")

list.add(syed)
list.add(drake)
list.add(meow)
list.update(syed, drake)
contacts = list.get

contacts.each do |contact|
  puts contact.get
end

# command line crud!
puts "add contact"
puts "add name"
name = gets
puts "add number"
number = gets
list.add(Person.new(name.chomp, number.chomp))

contacts.each do |contact|
  puts contact.get
end

puts "welcome to contactr!"
puts "enter a choice: 1. to add, 2. delete, 3. update, 4. get all contacts, 5. to end program"
choice = gets
while choice.chomp != "5"
  puts "do the things"
end
