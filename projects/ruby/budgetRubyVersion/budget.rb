#Goal -- Make the backend for a website and android app that will help me with
#staying on point with my budget.

class Expense
  INCOME = 1200
  attr_accessor :income, :amount
  def initialize(type)
    @type = type
    @income = income
    @amount = amount
  end
end

rent = Expense.new(700)
transportation = Expense.new(138)
phone = Expense.new(85)
groceries = Expense.new(250)
play = Expense.new(150)

Expense.each do |type|
  puts type, "=", @amount
end

  #find a way to do the below two operations while using classes. Something
  #has changed while trying to do this is a larger context.
expenses_total = rent.amount + transportation.amount + phone.amount + 
  groceries.amount + play.amount

adjusted_total = rent.income - expenses_total

puts "What is your total monthly income?"
print "> "
puts "Your income is $#{rent.income}."
puts "your expenses are: "

Expense.all_with_income .each do |expense|
  puts expense.income
end
puts "Adjusted total is: $#{adjusted_total}"
