require_relative 'dungeon_classes'
require_relative 'dungeon_database'

player1 = Player.new
player1.attack = "1"
player1.speed = "1"

print "What's your name?: "
player1.name = gets.chomp
puts "Your name is #{player1.name}"
puts "Your stats are, ATTACK: #{player1.attack}, SPEED: #{player1.speed}"
