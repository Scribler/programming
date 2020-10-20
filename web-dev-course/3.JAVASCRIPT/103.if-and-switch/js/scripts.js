
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
  document.getElementById("myParagraph").innerHTML += i + "<br />";
}

// prints 7'squared' to 0 (decreasing)
for(i=7; i>0; i--){
  document.getElementById("myParagraph").innerHTML += "<br />" + Math.pow(i,2);
}

var shoppingList = ["bread", "milk", "eggs"];

for(let i=0; i < shoppingList.length; i++){
  if(i === 0){
    document.getElementById("myParagraph").innerHTML += "<br />" + shoppingList[i] + "<br />";
  } else {
  document.getElementById("myParagraph").innerHTML += shoppingList[i] + "<br />";
  }
}


var numList = [1, 2, 3];

for(i = 0; i < numList.length; i++){
  numList[i] += 12;
  console.log(numList);
}

document.getElementById("myParagraph").innerHTML += "<br />" + numList 

// While Loops

var j = 0;

while(j<5){
  document.getElementById("while").innerHTML += "<br />" + j;
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
      document.getElementById("balance").innerHTML += "<p>Item Price: $" + itemPrice + ", Current Balance: $" + balance + "</p>";
    }
  }
  document.getElementById("balance").innerHTML += "<p>Items Bought: " + itemsBought + "</p>";
}









