# => This file deals with different ways to use 'dup' and 'freeze'
#
# => ATTENTION!!! -> Look up other more efficient ways to accomplish duplicating
# => and freezing

def change_string(str)
  str.replace("Poodle")
  puts str
end


greeting = "hello"
puts greeting

change_string(greeting.dup)

puts greeting

greeting.freeze

print "Hello World"
p "hello world"
puts "hello world world"
p "hello world world world"

#change_string method will still work on the duplicate if the original is
#frozen

#This works
change_string(greeting.dup)

#This doesn't
change_string(greeting)

#This doesn't either since clone will duplicate the frozen aspect as well
change_string(greeting.clone)

