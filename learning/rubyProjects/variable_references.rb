# => Variables contain references to objects. They ARE NOT the actual objects
# => they refer to.

a = "gorp"

# => Here b is actually refering to what "a" refers to ("gorp") This is why when
# => a changes it doesn't change b.
b = a

a = "stuff"

# => In the end variables are basically just names for objects.
puts a
puts b



# => In the following case however, both c and d end up being the same because
# the actual object that the variables are refering to is changed which is
# different than linking a variable to a different object which is what happened
# above.

c = "BOOP"

d = c

d.replace("Bork")

puts c
puts d
