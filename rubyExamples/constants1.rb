class Player
  PROFESSIONS = ["plummer", "carpenter", "farmer"]
  def get_info
    puts "What's your name? "
    print "> "
    @name = gets.chomp
    puts "What's your profession? "
    print "> "
    @profession = gets.chomp
    puts "\n"
    puts "Your name is #{@name}."
    if PROFESSIONS.include? (@profession)
    puts "you are a #{@profession.capitalize}."
    else
      raise ArgumentError, "Unknown profession: #{@profession}"
# => None of this will actually work since the raise Argument Error script comes
# => before it.
#      puts "would you like to add this to the list of current professions?"
#      puts "yes or no? (y/n)"
#      print "> "
#      answer = gets.chomp
#      puts "You answered #{answer}"
    end
  end
end

player_1 = Player.new
# => This prints out the constant 'PROFESSIONS'lof the class 'Player'
puts Player::PROFESSIONS
puts Math::PI
player_1.get_info

