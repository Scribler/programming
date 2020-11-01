//Course version of counter
var counter = document.getElementById("counter");
var x = 0;

  // simply setting the variable makes the counter start on page load
var myCounter = setInterval(function(){x++; counter.innerHTML = x}, 1000);






// My own version of a timer
var myTimer;

function clock() {
  myTimer = setInterval(myClock, 1000);
  var c = 0;
  function myClock() {
    document.getElementById("demo").innerHTML = ++c;
    if (c == 50) {
      clearInterval(myTimer);
      alert("reached 50");
    }
  }
}


// timeout

var delayedWelcomeMessage = setTimeout(function(){
  document.getElementById("delay").innerHTML = "Welcome to our page!";
  console.log("Welcome message should have posted now");
}, 3000);

function confirmation(){
  console.log("button clicked, if before 3 seconds, then the timed message was prevented!");
}
