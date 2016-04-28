def longest_word sentanct
  words= str.split('')
  long= ""
  a.each do |word|
  if word.length > long.length
  long = word
  end
  end
  long

end


solution 2
#
# def longest_word(str)
#   words = str.split(' ')
#   longest_str = []
#   return longest_str.max
# end


solution 3
# def longest_word sentance
#   sentance.split('').max_by {|x| x.length}
# end
