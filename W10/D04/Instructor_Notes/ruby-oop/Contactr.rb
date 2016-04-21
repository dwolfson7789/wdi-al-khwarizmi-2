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
    old_person
  end

  def delete(person)
    person
  end
end


class Person
  def initialize(name, number)
    @name = name
    @number = number
    @person = {name: @name, number: @number}
  end

  def get
    @person
  end
end

list = Contacts.new()

syed = Person.new("syed salahuddin", "2011112333")
drake = Person.new("drake", "2011112333")
meow = Person.new("meow", "2011112333")

list.add(syed)
list.add(drake)
list.add(meow)
contacts = list.get
contacts.each do |contact|
  puts contact.inspect
end
puts syed.get
