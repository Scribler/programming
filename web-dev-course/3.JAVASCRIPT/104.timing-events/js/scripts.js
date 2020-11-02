// COURSE VERSION OF COUNTER
var counter = document.getElementById("counter");
var x = 0;

  // simply setting the variable makes the counter start on page load
var myCounter = setInterval(function(){x++; counter.innerHTML = x}, 1000);
var counterStop = setTimeout(function(){
  clearInterval(myCounter);
  document.getElementById("counterFinished").innerHTML = "Stoped Counter. It has exeded 50 seconds";
}, 51000);

// CHANGING BACKGROUND COLORS
var colors = ["\"$blue1\"", "\"$green1\"", "\"$yellow1\"", "\"$red1\""];
console.log(colors[1])
var x = 0;
var backgroundColors = setInterval(function(x){
  // document.getElementById("headerHeading").style.color = colors[x];
  x++;
  console.log(colors[x]);
  if(x > 3){
    x = 0;
  }
}, 1000);




// MY OWN VERSION OF A TIMER
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


// TIMEOUT

var delayedWelcomeMessage = setTimeout(function(){
  document.getElementById("delay").innerHTML = "Welcome to our page!";
  console.log("Welcome message should have posted now");
}, 3000);

function confirmation(){
  console.log("button clicked, if before 3 seconds, then the timed message was prevented!");
}


// WINDOW AND SCREEN OBJECTS

// need multiple calls for the different browsers
var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
var windowWidth= window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var screenHeight = window.screen.height; // This gets the hardware screen height, NOT the browser screen width
var screenWidth = window.screen.width; // This gets the hardware screen width, NOT the browser screen width

// logging window height and width
console.log(windowHeight);
document.getElementById("windowHeight").innerHTML = windowHeight;
console.log(windowWidth);
document.getElementById("windowWidth").innerHTML = windowWidth;

// logging screen height and width

console.log(screenHeight);
document.getElementById("screenHeight").innerHTML = screenHeight;
console.log(screenWidth);
document.getElementById("screenWidth").innerHTML = screenWidth;

// available height (hight minus windows task bar or top bar in mac, etc)

var availableScreenHeight = window.screen.availHeight;
console.log("Available screen height: " + availableScreenHeight);



// FOURDIVS



























