# - Converts each Celcius temp to Kelvin (add 273.15)

# This section clears the files for use.
def cleanFile
  puts "Cleaning starting files"
  File.open("temp.dat", "w"){|file| file.truncate(0)}
  File.open("kelvin.dat", "w"){|file| file.truncate(0)}
end

#This method asks for input and saves it to a file.

def addTemp
  print "What temp do you want to add to the database?: "
  #Opens file, then asks for input which it then saves to the file
  File.open("temp.dat", "a+"){ |somefile| somefile.puts $stdin.gets.chomp}
  puts "Database contains these values: "
  #Opens file and reads the content.
  File.open("temp.dat", "r"){ |somefile| puts somefile.read }
  #This section asks user whether they want to continue to the next part of the
  #program or not.
  print "Would you like to add another temp? (Y/N): "
  choice = $stdin.gets.chomp.capitalize
  if choice == "Y"
    addTemp
  elsif choice == "N"
    convertTemp
    exit(0)
  else
    addTemp
  end
end


# - Converts each Celcius temp to Kelvin (add 273.15)
def convertTemp
  puts "Now I will convert the temperatures from Celcius to Kelvin."
  temps = []
  fileRead =  open("temp.dat", "r")
  fileRead.rewind
  fileRead.each do |temp| temps.push (temp.to_i + 273.15)
  end
  fileRead.close
  puts "Here are your temperatures:"
  puts temps, "\n"
  File.open("kelvin.dat", "a+"){|kelvin_file| kelvin_file.puts temps}
  puts "And here is the contents of the new file made for those temps."
  File.open("kelvin.dat", "r"){|kelvin| puts kelvin.read}
end

cleanFile
addTemp
