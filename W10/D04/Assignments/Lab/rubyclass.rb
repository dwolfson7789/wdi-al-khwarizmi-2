class Person
  def initialize (name, number)
    # @name = name
    # @number = number
    @person = {name: name, number: number}
  end
  def get
    @person
end
# getting @person and setting name and number which belongs to person
# get and set!!!
def set_name (name)
    @person[:name]  = name

end
def set_number (number)
    @person[:number]  = number
end
some_person = Person.new("drew", "12312431234")
some_other_person = Person.new("ethan", "12312444234")
puts some_person.inspect
puts some_other_person.inspect
puts some_person.get
