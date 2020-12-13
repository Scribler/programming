















//
// NON REPEATING NUMBER GENERATOR
//
var getx = document.getElementById("x");
var gety = document.getElementById("y");
var getz = document.getElementById("z");

var x = generator();
var y;
var z;

//
// FUNCTIONS
//


function generator(){
  var operand = Math.round(Math.random() * 10);
  return operand;
}

function ychecker(){
  if(y == x){
      y = generator();
      ychecker();
  } else {
      gety.innerHTML = y;
  }
}

function zchecker(){
  if(z == x || z == y){
      z = generator();
      zchecker();
  } else {
      getz.innerHTML = z;
  }
}
//
// PROGRAM
//



// generate x and push it to html
x = generator();
getx.innerHTML = x;


// generate x and y
y = generator();
z = generator();

// test y and z to make sure they are not repeats of x or eachother
ychecker();
zchecker();













//
// COUNTER
//

// VARIABLES
var counting = false;
var counter_num = 0;
var number_value = document.getElementById("value");
var actuator;
var counter;

// FUNCTIONS

function count(operation){
  counting = true;
  counter = setInterval(function(){
  actuator = number_value.value
  //add
  if(operation == "add"){
    counter_num += parseInt(actuator);
    document.getElementById("number").innerHTML = counter_num;
  } 
  //subtract
  if(operation == "sub"){
    counter_num -= parseInt(actuator);
    document.getElementById("number").innerHTML = counter_num;
  }

  //multiply
   if(operation == "mult"){
      counter_num *= parseInt(actuator);
      document.getElementById("number").innerHTML = counter_num;
    }

  //divide
   if(operation == "div"){
      counter_num /= parseInt(actuator);
      document.getElementById("number").innerHTML = counter_num;
    }
  }, 1000);
}

function stop(){
  clearInterval(counter);
  counting = false;
}

// BUTTONS

// activate add button
document.getElementById("add").onclick = function(){
  stop();
	count("add", number_value);
}

// activate subtract button
document.getElementById("subtract").onclick = function(){
  stop();
	count("sub", number_value);
}

// activate multiply button
document.getElementById("multiply").onclick = function(){
  stop();
	count("mult", number_value);
}

// activate divide button
document.getElementById("divide").onclick = function(){
  stop();
	count("div", number_value);
}

// STOP COUNTER



document.getElementById("stop").onclick = function(){
  clearInterval(counter);
  counting = false;
}

// CLEAR COUNTER

document.getElementById("clear").onclick = function(){
  counter_num= 0;
  number.innerHTML = counter_num;
}












