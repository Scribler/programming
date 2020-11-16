console.log('hello World');

function btnswap(){
  if(document.getElementById("startReset").innerHTML == "Reset"){
    document.getElementById("startReset").innerHTML = "Start";
    document.getElementById("startReset").classList.remove("reset");
    document.getElementById("startReset").classList.add("start");
  } else {
    document.getElementById("startReset").innerHTML = "Reset";
    document.getElementById("startReset").classList.remove("start");
    document.getElementById("startReset").classList.add("reset");
  }
}



























































































