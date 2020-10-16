
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

function checkSeason(){
  var x = document.getElementById("season").value;
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



