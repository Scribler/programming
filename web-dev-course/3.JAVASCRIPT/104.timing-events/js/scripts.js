console.log("hello World!")

var delayedMessage = document.getElementById("three-second-message").innerHTML += "Three seconds have passed!";

var counter = document.getElementById("counter");
var x = 0;
var myCounter = setInterval(function(){x++; counter.innerHTML = x},1000);


