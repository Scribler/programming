// COURSE VERSION OF COUNTER
var counter = document.getElementById("counter");
var x = 0;

  // simply setting the variable makes the counter start on page load
var myCounter = setInterval(function(){x++; counter.innerHTML = x}, 1000);
var counterStop = setTimeout(function(){
  clearInterval(myCounter);
  document.getElementById("counterFinished").innerHTML = "Stoped Counter. It has exeded 50 seconds";
}, 51000);


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


// CHANGING BACKGROUND COLORS


// DOESN'T WORK
// THESE COLORS HAVE TO BE HEXIDEC OR EQUIV. SASS VARIABLES WILL NOT WORK
// var colors = ["\"$blue1\"", "\"$green1\"", "\"$yellow1\"", "\"$red1\""];
// console.log(colors[1])
// var x = 0;
// var backgroundColors = setInterval(function(x){
  // document.getElementById("headerHeading").style.color = colors[x];
  // x++;
  // console.log(colors[x]);
  // if(x > 3){
    // x = 0;
  // }
// }, 1000);
// ^DOESN'T WORK

// COLORS CAN-NOT BE SASS VARIABLES
// This will rotate through these colors and stop on the last one.
backgroundColors = ['#74E668', '#39378F', '#C9383F', '#CDA939','#e8e8e8'];
var y = 0;
var backgroundRotate = setInterval(function(){
  if(y === -1){
    clearInterval(this);
  } else {
    y++;
    document.getElementById('articleColor').style.backgroundColor = backgroundColors[y];
    if(y >= 4){
      y = -1;
    }
  }
},1000);

// $header-background: #e8e8e8// dark grey
// $green1: #74E668; // green
// $blue1: #39378F; // blue
// $red1: #C9383F; // red
// $yellow1: #CDA939; // yellow


// FOURDIVS

// px is added to the value:  calculated # + "px" = #px
//
// this is the manual long way, but it can also be done with a for loop.
// document.getElementById("div1").style.width = window.innerWidth / 4 - 10 + "px";
// document.getElementById("div1").style.height = window.innerHeight + "px";
//
// document.getElementById("div2").style.width = window.innerWidth / 4 - 10 + "px";
// document.getElementById("div2").style.height = window.innerHeight + "px";
//
// document.getElementById("div3").style.width = window.innerWidth / 4 - 10 + "px";
// document.getElementById("div3").style.height = window.innerHeight + "px";
//
// document.getElementById("div4").style.width = window.innerWidth / 4 - 10 + "px";
// document.getElementById("div4").style.height = window.innerHeight + "px";

// same as above but using for loop

for(i = 1; i < 5; i++){
document.getElementById("div" + i).style.width = window.innerWidth / 4 - 20 + "px";
  document.getElementById("div" + i).style.height = window.innerHeight = 190 + "px";
}


// ALERT BOXES

var acceptCookies = window.confirm("Please confirm you want to accept cookies?")
// window.alert(acceptCookies);

if(acceptCookies == true){
  console.log("Cookies Accepted");
  document.getElementById("cookies").innerHTML = "yes";
  window.alert(acceptCookies + ": " + "We will collect your cookies");
} else {
  console.log("We will not collect your cookies");
  document.getElementById("cookies").innerHTML = "no";
  window.alert(acceptCookies + ": " + "We will not collect your cookies");
}
console.log("acceptCookies is: " + acceptCookies);


// get user input from alert box


var visitor = prompt("please enter your name");
// make sure the name is capitalized before pushing it to the rest of the code
visitor = visitor.charAt(0).toUpperCase() + visitor.slice(1) 

window.alert("Hi " + visitor + ", we wish you a nice experience on our page. Don't forget to like us on Facebook!");

document.getElementById("name").innerHTML = visitor;

// COOKIES

window.alert(document.cookie);
// document.cookie = "username = buenosdia; SameSite=Lax";
// document.cookie = "age = 33; SameSite=Lax";
// document.cookie = "country= Spain; SameSite=Lax";
//
// alert(document.cookie);
//
//
// var mycookie = document.cookie.split(';');
//
// window.alert(mycookie);
//
// for(i=0; i<mycookie.length; i++){
  // document.getElementById("cookieStuff").innerHTML += mycookie[i] + "<br />";
// }


// even after the above is commented out the below call will work, because the cookies are stored in the browser.
var cookieTest = document.cookie;
document.getElementById("cookieStuff").innerHTML = cookieTest;











































