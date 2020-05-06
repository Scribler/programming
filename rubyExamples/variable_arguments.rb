#An example of how variable arguments work.  They take the least priority.
#Other arguments are filled if there aren't enough.

def variable_arguments(a, b, *c, d)
  p a, b, c, d
end

variable_arguments(1, 2, 3, 4, 5, 6, 7)

puts "\n"

variable_arguments(1, 2, 3)
