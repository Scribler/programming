// VARIABLES
var playing = false;
var score;
var time_remaining;
var action;

var start_reset = document.getElementById("start-reset");
var time_feed = document.getElementById("time-value"); // display remaining time
var game_over_message = document.getElementById("finished");
var score_feed = document.getElementById("score-value"); // display running score
var correct_answer;
var correct_position;


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
  playing = false;
  swap_button(); // change button name and style to 'reset game'
  // start_reset.innerHTML = "Start";
  // start_reset.classList.add("start");
  // start_reset.classList.remove("reset");
}

// show element
function show(id, style){
  document.getElementById(id).style.display = style;
}

// hide element
function hide(id){
  document.getElementById(id).style.display = "none";
}

function numgen(y){ // use 9 instead of ten for numbers between 1 and 100
  var x;
  x = 1 + Math.round(Math.random() * y); // adding '1' at the begginning stops it from returning '0'
  return x;
}

// generate questions and answers
function generate_qa(){
  var x = numgen(9); // first question number
  var y = numgen(9); // second question number
  var question = document.getElementById("question")
  correct_position = numgen(3);

  correct_answer = x * y; //correct answer
  question.innerHTML = x + "X" + y;
  document.getElementById("box" + correct_position).innerHTML = correct_answer; // fill one box with the correct answer

  for(i = 1; i < 5; i++){ // generate wrong answers and place in other boxes
    if(i !== correct_position){
      var wrong_answer = numgen(9) * numgen(9);
      while(wrong_answer == correct_answer){ // stops program from making a 'wrong' answer the same as the correct answer
        var wrong_answer = numgen(9) * numgen(9);
      }
      


      //
      //
      // PROGRAM SHOULD NOT MAKE TWO WRONG ANSWERS THAT ARE THE SAME
      //
      // solve the issue here (                   )
      //
      //







      document.getElementById("box" + i).innerHTML = wrong_answer; // fill one box with the wrong answer
    }

  }
  

  // wrong_answers();
}






// need to make 


// function wrong_answers(){
  // var positions = [0, 1, 2, 3];
  // positions.splice(correct_position, 1);
  // console.log(positions);
// }
//
// wrong_answers();















generate_qa();

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
    hide("finished"); // hide gameover box
    start_countdown(); // start countdown
    generate_qa(); // generate questions and answers
  }
}

console.log("This is the Lesson Version");


