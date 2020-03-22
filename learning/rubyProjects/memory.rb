class Foo
  extend Memoize
  def the_meaning
    sleep 1
    42
  end

  memoize(the_meaning)
end


puts Gorp.the_meaning
puts Gorp.the_meaning
puts Gorp.the_meaning
puts Gorp.the_meaning
puts Gorp.the_meaning
puts Gorp.the_meaning
puts Gorp.the_meaning
puts Gorp.the_meaning
puts Gorp.the_meaning
puts Gorp.the_meaning
