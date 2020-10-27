
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
var patternTesterSecond = /z/g;

var result = (patternTester.test(tester));
var resultSecond = (patternTesterSecond.test(tester));

document.getElementById("regexTest").innerHTML += "<p>The result of running .test on the function will show if the function found a match and return a boolean. Now we will do a global, noncase-sensitive check for the letter 'a' in the word Atlantic. The result of the first test is: " + result + "</p>" + "<br />";
document.getElementById("regexTest").innerHTML += "<p>The result of running .test on the function will show if the function found a match and return a boolean. Now we will do a global, noncase-sensitive check for the letter 'z' in the word Atlantic. The result of the second test is: " + resultSecond + "</p>";

// using different types of tests

var third = "Atlanta";
var patternThird = /a/g;
document.getElementById("string").innerHTML = third;
document.getElementById("pattern").innerHTML = patternThird;
document.getElementById("search").innerHTML = third.search(patternThird);
document.getElementById("match").innerHTML = third.match(patternThird);
document.getElementById("test").innerHTML = patternThird.test(third);

//
// REGEX CONSTRUCTOR
//
// An easier way to create patterns for checking

// \n is 'linebreak'
var forth = "Atlanta3Wt\na456 78G892 1574%$##";

//this looks for lowercase letters from a-z
var patternForth = /[a-z]/g;
// the '^' symbole makes the search for anything that is not the specified group
// this looks for letters that are not a, t, or n 
// CAPITALS CAN BE FOUND BECAUSE THIS IS ONLY ABOUT EXCLUDING CERTAIN CHARACTERS
var patternForth = /[^atn]/g;

// looks for nubers from 4-7
var patternForth = /[4-7]/g;

//looks for numbers that are not 4 through 7
var patternForth = /[^4-7]/g;

// checks for 'digits' (numbers)
var patternForth = /\d/g;

// checks for alphanumeric characters
var patternForth = /\w/g;

// checks for NON-alphanumeric characters
var patternForth = /\W/g;

// checks for spaces
var patternForth = /\s/g;

// checks for a specific number of digits in a row
var patternForth = /\d{3}/g;

// Are these specific letters in this specific order, and if case-inspecific, it will judge case as well
var patternForth = /ta/gi;

// Is A the first character?
var patternForth = /^A/g

// linebreak?
var patternForth = /\n/g

// below is the way to create a pattern using RegEx.
// var patternFifth = new RegEx("a", "g");

document.getElementById("stringTwo").innerHTML = forth;
document.getElementById("patternTwo").innerHTML = patternForth;
document.getElementById("searchTwo").innerHTML = forth.search(patternForth);
document.getElementById("matchTwo").innerHTML = forth.match(patternForth);
document.getElementById("testTwo").innerHTML = patternForth.test(forth);


//
// ERRORS
//


try{
  document.getElementById("badCode").innerHTML = "sum(3, 4);";
sum(3, 4);
}
catch(err){
  // default behavior of catch will catch error objects when someting goes wrong
  
  // by default 'err' is an object if you don't 'throw' it something else.  if you threw it a string instead 
  // of letting it just catch errors, then you wouldn't call 'err.message' on it as is done below.
  
  // if you do not put '.message' after, then the description of the type of error will print before the 
  // message.
  // document.getElementById("errorMsg").innerHTML = err;
  document.getElementById("errorMsg").innerHTML = err.message;
}


// PASSWORD VALIDATION
function verifyPassword(){
  var pass1 = document.getElementById("password").value;
  var pass2 = document.getElementById("password2").value;
  var errorMessage = document.getElementById("error");
  var errorToThrow = "";
  try{
    if(pass1 != pass2){
      errorToThrow += "<br /> Your passwords don't match!";
    }
    if(pass1.length<6){
      errorToThrow += "<br /> Password too Short.";
    }
    if(/[A-Z]/g.test(pass1) == false){
      errorToThrow += "<br /> Password should include at least one capital letter.";
    }
    if(/\d/g.test(pass1) == false){
      errorToThrow += "<br /> Password should include at least one digit.";
    }
      throw errorToThrow;
  }
  catch(err){
    errorMessage.innerHTML = err;
  }
  document.getElementById("passwordCheck").innerHTML = pass2 || pass1;
}


// Color Picker

function chooseColor(){
  var color = document.getElementsByName('option');
  console.log(color);
  document.getElementById('color').innerHTML = color;
} 















