def wipeFile
  File.truncate("temp.dat", 0)
end
def addnum
  numFile = File.open("temp.dat", "a")
  puts "What's the first number you want to add?: "
  print "> "
  num = $stdin.gets.chomp
  numFile.puts num
  numFile.close
  readfile = open("temp.dat", "r")
  puts readfile.read
  readfile.close
  puts "Would you like to add another number? (Y/N)"
  print "> "
  choice = $stdin.gets.chomp.upcase
  if choice == "Y"
    addnum
  elsif choice == "N"
    changenum
  elsif
    addnum
  else choice == "q"
    exit(0)
  end
end

def changenum
  changed = []
  gorp = File.open("temp.dat", "r")
  changed.push(|i|)
  print changed
  poop = ["fart", "dirty one", "painful"]
  print poop
end

wipeFile
addnum
