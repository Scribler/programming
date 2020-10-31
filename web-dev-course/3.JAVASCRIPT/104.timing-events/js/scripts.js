
var counter = document.getElementById("counter");
// var counter = document.getElementById("counter").innerHTML;

var x = 0;
// var myCounter = setInterval(function(){x++; counter.innerHTML = x},1000);
// var myCounter = setInterval(function(){x++; counter.innerHTML = x},1000);

  var startCount = setInterval(function(){x++; counter.innerHTML = x},1000);
function startCounter(){
  var startCount = setInterval(function(){x++; counter.innerHTML = x},1000);
}

function stopCountTwo(){
  clearInterval(counter);
}
