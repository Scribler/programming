# => If obj.talk wasn't there the else case would activate.  obj responds to
# => .talk now that I've given it that functionality.
obj = Object.new
def obj.talk
  puts "talk talk"
end
if obj.respond_to?("talk")
  obj.talk
else
  puts "This object doesn't understand the talk method"
end


gorp = Object.new
def gorp.talk
  puts "Gorp can now talk"
end

puts "#{"\n"}THIS IS JUST A SPACER"
puts "\n"

if gorp.respond_to?("talk")
  gorp.talk
  puts "\n"
else
  puts "This object doesn't understand the talk method"
end
