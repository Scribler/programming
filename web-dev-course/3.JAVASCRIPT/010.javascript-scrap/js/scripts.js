// VARIABLES

var counting = false;
var counter_feed = document.getElementById("number");
var counter_number = 0;
var counter;

// COUNTER FUNCTIONS

function forwardcount(){
  counter = setInterval(function(){
    counter_number++;
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






// CUSTOM COUNTER?



// ADD A COUNTER BUTTON WITH A PLACE TO ENTER A VALUE















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





