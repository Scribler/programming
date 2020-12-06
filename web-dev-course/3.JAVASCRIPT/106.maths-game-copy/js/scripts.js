// VARIABLES
var playing = false;
var score;
var time_remaining;
var action;

var start_reset = document.getElementById("start-reset");
var time_feed = document.getElementById("time-value"); // display remaining time
var game_over_message = document.getElementById("finished");
var score_feed = document.getElementById("score-value"); // display running score

//
//
// FUNCTIONS
//
//

//Swap start/reset button
function swap_button(){
  if(playing == true){
    start_reset.innerHTML = "Reset Game";
    start_reset.classList.add("reset");
    start_reset.classList.remove("start");
  } else {
    start_reset.innerHTML = "Start";
    start_reset.classList.add("start");
    start_reset.classList.remove("reset");
  }
}



// Start countdown (TERMINATE when 0)
function start_countdown(){
  time_feed.innerHTML = time_remaining;
  playing = true;
  // swap_button();
  action = setInterval(function(){
    time_remaining -= 1;
    time_feed.innerHTML = time_remaining;

    if(time_remaining == 0){// game over
      stop_countdown();
    }
  }, 1000)
}

// Stop countdown
function stop_countdown(){ // game over
  clearInterval(action);
  game_over_message.innerHTML = "<p>Game Over</p><p>Your Score Is: " + score + "</p>";
  show("finished", "flex");
  hide("timer");
  hide("correct");
  hide("wrong");
  swap_button(); // change button name and style to 'reset game'
}

// show element
function show(element_name, style){
  document.getElementById(element_name).style.display = style;
}

// hide element
function hide(element_name){
  document.getElementById(element_name).style.display = "none";
}

// generate questions and answers
function generate_qa(){

}

//
//
// APPLICATION
//
//

// BUTTON -- CLICK START / RESET BUTTON
document.getElementById("start-reset").onclick = function(){
  if(playing == true){ // if we are playing?
    location.reload(); //reload page

  } else { //if we are not yet playing?
    playing = true; // set playing to true
    swap_button(); // change button name and style to 'reset game'
    score = 0; // set score to 0
    score_feed.innerHTML = score;
    show("timer", "flex"); // show countdownbox
    time_remaining = 4; // countdown starting value
    start_countdown(); // start countdown
    generate_qa(); // generate questions and answers
  }
}

console.log("This is the Lesson Version");


