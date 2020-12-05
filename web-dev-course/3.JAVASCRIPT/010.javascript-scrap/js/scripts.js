// VARIABLES

var counting = false; // Program status
var counter_feed = document.getElementById("number"); // gets counter number 'div'
var counter_number = 0; // sets counter number to zero
var counter; // blank variable to set interval to (and enter into 'clearInterval afterwords')

// COUNTER FUNCTIONS

// count by ones
function forwardcount(){
  counter = setInterval(function(){
    counter_number++;
    counter_feed.innerHTML = counter_number;
    counting = true;
  }, 1000);
}

function count(x){
  counter = setInterval(function(){
    counter_number = x;
    counter_feed.innerHTML = counter_number;
    counting = true;
  }, 1000);
}


// FORWARD COUNTER

document.getElementById("forwards").onclick = function(){
  if(counting == true){
    console.log("Counter Already Running");
  } else {
    // forwardcount();
    counter = setInterval(function(){
      counter_number++;
      counter_feed.innerHTML = counter_number;
      counting = true;
    }, 1000);
  }
}

// BACKWARDS COUNTER


document.getElementById("backwards").onclick = function(){
  if(counting == true){
    console.log("Counter Already Running");
  } else {
    // forwardcount();
    counter = setInterval(function(){
      counter_number--;
      counter_feed.innerHTML = counter_number;
      counting = true;
    }, 1000);
  }
}

// TENS COUNTER

document.getElementById("tens").onclick = function(){
  if(counting == true){
    console.log("Counter Already Running");
  } else {
    // forwardcount();
    counter = setInterval(function(){
      counter_number = counter_number + 10;
      counter_feed.innerHTML = counter_number;
      counting = true;
    }, 1000);
  }
}

// SEVENS COUNTER

document.getElementById("sevens").onclick = function(){
  if(counting == true){
    console.log("Counter Already Running");
  } else {
    // forwardcount();
    counter = setInterval(function(){
      counter_number = counter_number + 7;
      counter_feed.innerHTML = counter_number;
      counting = true;
    }, 1000);
  }
}


// STOP COUNTER

document.getElementById("stop").onclick = function(){
  clearInterval(counter);
  counting = false;
}

// CLEAR COUNTER

document.getElementById("clear").onclick = function(){
  counter_number = 0;
  counter_feed.innerHTML = counter_number;
}







// CUSTOM COUNTER?



// ADD A COUNTER BUTTON WITH A PLACE TO ENTER A VALUE


var counter_num = 0;
var number_value = document.getElementById("value");
var actuator;
var coount;


// ACTIVATE ADD BUTTON
document.getElementById("add").onclick = function(){
	count("add", number_value);
}

// ACTIVATE SUBTRACT BUTTON
document.getElementById("subtract").onclick = function(){
	count("sub", number_value);
}

// ACTIVATE MULTIPLY BUTTON
document.getElementById("multiply").onclick = function(){
	count("mult", number_value);
}

// ACTIVATE DIVIDE BUTTON
document.getElementById("divide").onclick = function(){
	count("div", number_value);
}







function count(operation){
  coount = setInterval(function(){
    
    //add
    if(operation == "add"){
      actuator = number_value.value
      document.getElementById("result").innerHTML = counter_num;
			counter_num += parseInt(actuator);
    }
    //subtract
    if(operation == "sub"){
      actuator = number_value.value
      document.getElementById("result").innerHTML = counter_num;
			counter_num -= parseInt(actuator);
    }

    //multiply
     if(operation == "mult"){
      actuator = number_value.value
      document.getElementById("result").innerHTML = counter_num;
			counter_num *= parseInt(actuator);
    }

    //divide
     if(operation == "div"){
      actuator = number_value.value
      document.getElementById("result").innerHTML = counter_num;
			counter_num /= parseInt(actuator);
    }
  }, 1000);
}

document.getElementById("stopping").onclick = function(){
  clearInterval(coount);
}

// HTML














