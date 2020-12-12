//
// NON REPEATING NUMBER GENERATOR
//

var x = document.getElementById("x");
var y = document.getElementById("y");
var z = document.getElementById("z");

function random_number(x){
  x.innerHTML = Math.round(Math.random *10);
}

random_number(x);
random_number(y);
random_number(z);




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












