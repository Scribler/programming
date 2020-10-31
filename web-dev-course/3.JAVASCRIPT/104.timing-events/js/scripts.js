
var counter = document.getElementById("counter");
var x = 0;
var myCounter = setInterval(function(){x++; counter.innerHTML = x}, 1000);

function restartCounter() {
  var myCounter = setInterval(function(){x++; counter.innerHTML = x}, 1000);

  function restopCounter(x) {
    if(document.getElementById("stop").click == true){
      clearInterval(myCounter);
    }
  }
}



// timeout


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
