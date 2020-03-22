class Publication
  attr_accessor :publisher, :title
end
class Magazine < Publication
  attr_accessor :editor
end
class Ezine < Magazine
end

eezee = Ezine.new
eezee.publisher = "Penguine guy"
eezee.editor = "Fred"
eezee.title = "Joe's Blog"

puts """The Ezine is #{eezee.title} by #{eezee.publisher}, and edited by #{eezee.editor}."""
puts "\n"
puts "These are the ancestors of Ezine"
puts Ezine.ancestors
puts "\n"
puts "These are the ancestors of Magazine"
puts Magazine.ancestors

