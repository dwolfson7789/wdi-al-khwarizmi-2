class Iphone
      attr_accessor :model, :color, :memory
      # if @memory == "64GB"
      #   "shucks"
  end

my_phone = Iphone.new

my_phone.model = "iPhone 6S"
puts my_phone.model

my_phone.color = "white"
puts my_phone.color

my_phone.memory = "64GB"
puts my_phone.memory
