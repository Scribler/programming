require_relative "stacklike"
class Suitcase
end

class Cargo_Hold
  include Stacklike

  def load_suitcase_and_report(obj)
    print "Loading suitcase : #"
    puts "#{obj}"
    add_to_stack(obj)
  end

  def unload
    print "Unloading suitcase: #"
    puts take_from_stack
  end
end

Husky_Jet = Cargo_Hold.new
bag1 = Suitcase.new
bag2 = Suitcase.new
bag3 = Suitcase.new

Husky_Jet.load_suitcase_and_report(bag1)
Husky_Jet.load_suitcase_and_report(bag2)
Husky_Jet.load_suitcase_and_report(bag3)


# Shows an error, but the program works because Husky_Jet.unload is a method
# call.
p "First bag unloaded: "
first_unloaded = Husky_Jet.unload
p "Second bag unloaded: "
second_unloaded = Husky_Jet.unload
p "Third bag unloaded: "
third_unloaded = Husky_Jet.unload


