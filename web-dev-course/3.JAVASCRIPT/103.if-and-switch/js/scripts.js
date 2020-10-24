
function speeding(speed){
  document.getElementById("speed-assess").innerHTML += speed;
}


// If statements

var speed = 30;

if (speed > 70){
  console.log("You're going to fast!");
} else if (speed < 40){
  console.log("You're going to slow!");
} else {
  console.log("You're speed is fine");
}




function speedCheck(){
  var speed = document.getElementById("speed").value;
  var speedAssess = document.getElementById("speedAssess").innerHTML;
  if (speed > 70){
    document.getElementById("speedAssess").innerHTML = "You're going to fast!"
    console.log("You're going to fast!");
  } else if (speed < 40){
    document.getElementById("speedAssess").innerHTML = "You're going to slow!"
    console.log("You're going to slow!");
  } else {
    document.getElementById("speedAssess").innerHTML = "Your speed is fine"
    console.log("Your speed is fine");
  }
}


// switch statements

// could use this for a textbased game ?
function checkSeason(){
  var x = document.getElementById("season").value.toLowerCase();
  switch(x){
    case "summer":
      console.log("It is summer time!");
      break;
    case "winter":
      console.log("it is winter time!");
      break;
    case "spring":
      console.log("it is spring time!");
      break;
    case "autumn":
      console.log("it is autumn!");
      break;
    default:
      console.log("I do not recognize this!");
      break;
  }
}



//forLoops

let text = ""
let i;

// prints '0 - 4'
for(i = 0; i < 5; i++){
  // document.getElementById("myParagraph").innerHTML += i + "<br />";
  document.getElementById("myParagraph").innerHTML += i + " ";
}

// prints 7'squared' to 0 (decreasing)
for(i=7; i>0; i--){
  // document.getElementById("myParagraph").innerHTML += "<br />" + Math.pow(i,2);
  document.getElementById("myParagraph").innerHTML += " " + Math.pow(i,2);
}

var shoppingList = ["bread", "milk", "eggs"];

for(let i=0; i < shoppingList.length; i++){
  if(i === 0){
    // document.getElementById("myParagraph").innerHTML += "<br />" + shoppingList[i] + "<br />";
    document.getElementById("myParagraph").innerHTML += " " + shoppingList[i] + " ";
  } else {
  // document.getElementById("myParagraph").innerHTML += shoppingList[i] + "<br />";
  document.getElementById("myParagraph").innerHTML += shoppingList[i] + " ";
  }
}


var numList = [1, 2, 3];

for(i = 0; i < numList.length; i++){
  numList[i] += 12;
  console.log(numList);
}

// document.getElementById("myParagraph").innerHTML += "<br />" + numList
document.getElementById("myParagraph").innerHTML += " " + numList;

// While Loops

var j = 0;

while(j<5){
  // document.getElementById("while").innerHTML += "<br />" + j;
  document.getElementById("while").innerHTML += " " + j;
  j++;
}

var balance = 1000;
var itemsBought = 0;

function initiateGame(){
  while(balance>0){
    var itemPrice = Math.floor(Math.random()*100);
    if(itemPrice <= balance){
    itemsBought++
    balance -= itemPrice;
      document.getElementById("balance").innerHTML += " Item Price: $" + itemPrice + ", Current Balance: $" + balance + " , #";
    }
  }
  document.getElementById("balance").innerHTML += "<p>Items Bought: " + itemsBought + "</p>";
}

// Regular Expressions (regex)
// use it to validate a user input

//
// SEARCH
//
var str = "Atlanta";
// 'i' makes the pattern search case insensitive
// 'g' makes the pattern search case globally 
var pattern = /a/i;
var patterng = /a/g;
var patternl = /l/i;
// the case insensitive search below returns '0' - it means it found an 'a' at position '0' iin the variable
document.getElementById('regexSearch').innerHTML += "<br />" + "<h3>" + "Searches within the word 'Atlanta'." + "</h3>"
console.log(str.search(pattern));
document.getElementById('regexSearch').innerHTML += "Case insensitive search for 'a' returns: " + str.search(pattern) + "<br />";
// This global search should return '3', as it is case sensitive and returns a result for the position of the first LOWER CASE a.
console.log(str.search(patterng));
document.getElementById('regexSearch').innerHTML += "Global (case sensitive) search for 'a' returns: " + str.search(patterng) + "<br />";
// this search for 'l' should return '2'
console.log(str.search(patternl));
document.getElementById('regexSearch').innerHTML += "Case insensitive search for 'l' returns: " + str.search(patternl) + "<br />";

//
// MATCH
//

var matstr = "Atlanta"
var pattern2 = /a/i;
var pattern2g = /a/g;
var pattern2gi = /a/gi;

document.getElementById('regexMatch').innerHTML += "Case insensitive 'match' for 'a' in word 'Atlanta': " + matstr.match(pattern2) + "<br />";
document.getElementById('regexMatch').innerHTML += "<sub>This returns 'a,a' because there are 2 lower case a's in 'Atlanta'.</sub>" + "<br />";
document.getElementById('regexMatch').innerHTML += "Global 'match' for 'a' in word 'Atlanta': " + matstr.match(pattern2g) + "<br />";
document.getElementById('regexMatch').innerHTML += "<sub>This returns 'A,a,a' because the global search is now also case insensitive.</sub>" + "<br />";
document.getElementById('regexMatch').innerHTML += "Global, Case insensitive 'match' for 'a' in word 'Atlanta': " + matstr.match(pattern2gi);

//
// TEST
//

var tester = "Atlantic";
var patternTester = /a/g;

console.log(patternTester.test(tester));
























