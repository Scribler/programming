# => Apparently you CAN actually effect variables outside of a method.  
# => This is how.

def str_replace(str)
  str.replace("Boop boop, it's different now!... maybe?")
end

x = "dog"

puts x

str_replace(x)

puts x
