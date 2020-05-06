#This is practice with making new objects

ticket = Object.new

def ticket.date
  21/9/16
end
def ticket.venue
  "Big place"
end
def ticket.event
  "Big Ass Concert"
end
def ticket.price
  9.90
end
def ticket.seat
  "3rd row, seat 9"
end

def ticket.available?
  tickets_available = File.open("temp.dat", "r"){|tickets| tickets.read.to_i}
  if tickets_available >= 1
    true
  else
    false
  end
end

print "Information required?: "
choice = gets.chomp
if ticket.respond_to?(choice)
  #could also use regular .send but it's less secure. There's also .public_send
  #which doesn't alow it to access the objects private methods.
  puts ticket.__send__(choice)
elsif
  print "Did not understand request. Try again.: "
else
  exit(0)
end
