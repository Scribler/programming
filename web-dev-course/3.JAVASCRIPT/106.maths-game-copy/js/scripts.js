// VARIABLES
var playing = false;
var time_left = 2;
var score;
var time_counter;

var time_feed = document.getElementById("remaining-time-value"); // display remaining time
var game_over_message = document.getElementById("finished");
var score_feed = document.getElementById("score-value"); // display running score
// var game_over_score_feed = document.getElementById("game-over-score-value"); // display final score



// FUNCTIONS
function start_countdown(){
  time_feed.innerHTML = time_left;
  time_counter = setInterval(function(){
  
    // yes -> continue
    time_left--;
    time_feed.innerHTML = time_left;

    // no -> gameover
    if(time_left == 0){
      stop_countdown();
    }
  }, 1000)
}

function stop_countdown(){
  clearInterval(time_counter);
  // game_over_score_feed.innerHTML = score;
  game_over_message.innerHTML = "<p>Game Over</p><p>Your Score Is: " + score + "</p>";
  document.getElementById("finished").style.display = "flex";
}



// APPLICATION



// CLICK START / RESET BUTTON

document.getElementById("start-reset").onclick = function(){
  // if we are playing?
  if(playing == true){
    location.reload(); //reload page


  //if we are not yet playing?
  } else {
    
    // set playing to true
    
    playing = true;
    

    // set score to 0
    // NOTE "score" and "score-value" must have different names or the javascript won't work.
    
    score = 0;
    score_feed.innerHTML = score;


    // change button name and style to 'reset game'
    
    document.getElementById("start-reset").innerHTML = "Reset Game";
    document.getElementById("start-reset").classList.add("reset");
    document.getElementById("start-reset").classList.remove("start");
    

    // show countdownbox
    
    document.getElementById("time").style.display = "flex";


    // start countdown
      // time left?
    start_countdown();
  }
}




// if we click on the start/reset? *
    // if we are playing? *
        // reload page *

    // if we are not playing? *
        // set score to 0 *
        // show countdownbox *
        // reduce time by 1s in loops *
        // time left? *
            // yes -> continue *
            // no -> gameover *
        // change button to reset *
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
