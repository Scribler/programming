// Change start/reset button from 'start' to 'reset' and back
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

// if we click on the start/reset?
    // if we are playing?
        // reload page

    // if we are not playing?
        // set score to 0
        // show countdownbox
        // reduce time by 1s in loops
        // time left?
            // yes -> continue
            // no -> gameover
        // change button to reset
        // generate new Q&A

// if we click on answer box
    // if we are playing?
        // correct answer
            // yes?
                // Increase score by 1
                // show correct box for 1s
                // generate new Q&A
            // no?
                // show try again for 1s












































































console.log("Javascript is loading to the end!")
