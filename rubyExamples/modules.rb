# 'require_relative' is used instead of 'relative' so that it will look in the
# same directory as the current file. Otherwise it would look in the ruby
# directory.
require_relative "fiddlingModule"

class ModuleTest
  # If 'prepend' is used in place of 'include' the probram will use the module
  # 'fiddlingModule''s version of report.  I'm using include in this example to
  # test out the 'super' function. and because of that it acutally IS using the
  # "fiddlingModule" version of report. Very very cool. :)
  include FirstModule
  def report
    puts "This is from ModuleTest."
    puts "Using Super"
    super
    puts "Well, there you have it."
  end
end
# Creating a new instance of ModuleTest
darp = ModuleTest.new
# using the method from the included module
darp.report
