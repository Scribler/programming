class Ticket
  def initialize(venue,date)
    @venue = venue
    @date = date
    puts "New Ticket Instance Generated. Venue -> #{@venue} Date -> #{@date}"
    puts "Venue -> #{@venue}"
    puts "Date  -> #{@date}"
  end
# => A setter method for setting and changing the 'price' of each ticket.
# => THE SIGNIFICANCE BEING that 'price=' including the '=' sign is the name,
# and yet it will let you access it with 'price = ###' which looks really nice
# and functional
#  def price=(amount)
#    if (amount * 100).to_i == amount * 100
#      @price = amount
#    else
#      puts "price is malformed"
#    end
#  end
attr_reader :venue, :date
attr_accessor :price, :discount_price
# => reduces price by the percent of the given number
  def discounted_price(percent)
    @discount_price = @price * (100 - percent.to_f) / 100.0
  end
end

def Ticket.most_expensive(*tickets)
  tickets.max_by(&:price)
end

# => Creating the two new tickets and printing their state's
strange_hall = Ticket.new("Strange Hall", "01,02,2016")
big_hall = Ticket.new("Big Hall", "03,03,2017")
puts "TWO EVENTS."
puts "\n"
puts "FIRST ->  #{strange_hall.venue}, #{strange_hall.date}."
puts "SECOND ->  #{big_hall.venue}, #{big_hall.date}"
puts "\n"

# => The nice way to reset the instance variables
strange_hall.price = 44
big_hall.price = 77

# => printing the results
puts "first price = $#{"%.2f" % strange_hall.price}"
puts "SECOND PRICE = $#{"%.2f" % big_hall.price}"
puts "\n"
puts "FIRST discounted price = $#{"%.2f" % strange_hall.discounted_price(25)}"
puts "SECOND discounted price = $#{"%.2f" % big_hall.discounted_price(25)}"
puts "\n"

# => Reseting the price for the 'strange_hall' ticket.
strange_hall.price = 100
# => Using sprintf (format)** to format the number to a float to 2 decimal
# => places.
puts "FIRST PRICE RAISED = $#{"%.2f" % strange_hall.price}"

highest = Ticket.most_expensive(strange_hall,big_hall)
puts "The highest priced ticket is: #{highest.venue}, at $#{highest.price}"
puts "\n"



puts "What would you like to change the percent discount too?"
print "> "
discount = $stdin.gets.chomp
puts "The new discount percent is %#{discount}."
puts "\n"
puts "First Discounted = #{"%.2f" % strange_hall.discounted_price(discount)}"
puts "Second Discounted = #{"%.2f" % big_hall.discounted_price(discount)}"
puts "\n"
puts "First price = #{"%.2f" % strange_hall.price}"
puts "First discounted price #{"%.2f" % strange_hall.discount_price}"
puts "Second price = #{"%.2f" % big_hall.price}"
puts "Second discount price = #{"%.2f" % big_hall.discount_price}"
