//VARIABLES
var playing = false;
var score;



// if we click on the start/reset?
document.getElementById("start-reset").onclick = function(){
    // if we are playing?
  if(playing == true){
    console.log("you are playing")
    location.reload(); //reload page
  } else {
    console.log("you are not playing")
    score = 0;
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




// ********* change (ctrl u and ctrl d) to (ctrl k and ctrl j) *********
//
//
//
// THIS WILL STOP CONSTANT UNDO ERRORS!!!!!







console.log("This is the Lesson Version");
