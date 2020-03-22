#This demonstrates that 1 is c's default, but if supplied it will take a
#different argument for "c".

def default_args(a, b, c=1)
  puts a, b, c
end

print "What's a?: "
a = gets.chomp
print "What's b?: "
b = gets.chomp
print "what's c?: "
c = gets.chomp


default_args(a, b, c)
