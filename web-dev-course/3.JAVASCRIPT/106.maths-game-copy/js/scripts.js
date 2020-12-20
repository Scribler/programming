// VARIABLES
var playing = false;
var score;
var time_remaining;
var action;
var actions;

var start_reset = document.getElementById("start-reset");
var time_feed = document.getElementById("time-value"); // display remaining time
var game_over_message = document.getElementById("finished");
var score_feed = document.getElementById("score-value"); // display running score
var correct_answer;
var correct_position;

var b1 = document.getElementById("box1");
var b2 = document.getElementById("box2");
var b3 = document.getElementById("box3");
var b4 = document.getElementById("box4");


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
function start_countdown(remaining_time){
  time_feed.innerHTML = remaining_time;
  playing = true;
  // swap_button();
  action = setInterval(function(){
    time_remaining -= 1;
    time_feed.innerHTML = time_remaining;

    if(time_remaining == 0){// game over
      stop_countdown();
      // hide("score");
      // hide("score-value");
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

// number generator
function numgen(y){ // use 9 instead of ten for numbers between 1 and 100
  var x;
  x = 1 + Math.round(Math.random() * y); // adding '1' at the begginning stops it from returning '0'
  return x;
}

// check wrong answers and re-role if necessary
function wrong_answer_checker(position, wrong_answer){
  if(wrong_answer == b1.innerHTML || wrong_answer == b2.innerHTML || wrong_answer == b3.innerHTML || wrong_answer == b4.innerHTML){ 
                // console.log("duplicate position: " + position);
                // console.log("duplicate answer: " + wrong_answer);
                // console.log("b1: " + b1.innerHTML);
                // console.log("b2: " + b2.innerHTML);
                // console.log("b3: " + b3.innerHTML);
                // console.log("b4: " + b4.innerHTML);
    wrong_answer = numgen(9) * numgen(9);
                // console.log("new wrong answer" + wrong_answer);
    wrong_answer_checker(position, wrong_answer);
  } else {
    document.getElementById("box" + position).innerHTML = wrong_answer; // fill one box with the wrong answer
  }
}

// generate questions and answers
function generate_qa(){
  var x = numgen(9); // first question number
  var y = numgen(9); // second question number
  var question = document.getElementById("question")
  correct_position = numgen(3); // position of correct answer

  correct_answer = x * y; //correct answer
  question.innerHTML = x + "X" + y;
  document.getElementById("box" + correct_position).innerHTML = correct_answer; // fill one box with the correct answer
  var answers = [correct_answer];
  console.log(answers);

  for(i = 1; i < 5; i++){ // generate wrong answers and place in other boxes
    if(i != correct_position){
      var wrong_answer;
      do{
        wrong_answer = numgen(9) * numgen(9); // generate wrong answer
        }
      while(answers.indexOf(wrong_answer) > -1);
      answers.push(wrong_answer);
      console.log(answers);
      console.log(answers.indexOf(wrong_answer));
      document.getElementById("box" + i).innerHTML = wrong_answer;
    }
  }
}



// MY OLD VERSION
  // for(i = 1; i < 5; i++){ // generate wrong answers and place in other boxes
    // if(i != correct_position){
      // var wrong_answer = numgen(9) * numgen(9); // generate wrong answer
      // wrong_answer_checker(i, wrong_answer);
    // } else {
      // continue;
    // }
  // }
// }








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
    time_remaining = 30; // countdown starting value
    hide("finished"); // hide gameover box
    start_countdown(time_remaining); // start countdown
    generate_qa(); // generate questions and answers
  }
}

// CHOSE AN ANSWER!





for(i = 1; i < 5; i++){
  // run 'check_answer()' for each answer button
  document.getElementById("box" + i).onclick = function(){
    if(playing == true){





      // NEED TO FIND A WAY TO CYCLE THROUGH THE DIFFERENT BOXES
      




      var tes = ("b" + i).innerHTML;
      check_answer(tes);
    } 
  }
}


function short_timer(id){ // sets a timeout for showing correct or wrong display
  if(id == "correct"){
    show(id, "inline");
    hide("wrong");
    setTimeout(function(){
      hide(id);
    }, 1000);
  } else {
    show(id, "inline");
    hide("correct");
    setTimeout(function(){
      hide(id);
    }, 1000);
  }
}


function check_answer(answer){ 
  console.log(answer);
  if(answer == correct_answer){
    score++;
    score_feed.innerHTML = score;
    short_timer("correct");
    generate_qa();
  } else {
    short_timer("wrong");
  }
}
// document.getElementById("box2").onclick = function(){
  // if(playing == false){
  // } else {
    // check_answer(b2.innerHTML);
  // }
// }
// document.getElementById("box3").onclick = function(){
  // if(playing == false){
  // } else {
    // check_answer(b3.innerHTML);
  // }
// }
// document.getElementById("box4").onclick = function(){
  // if(playing == false){
  // } else {
    // check_answer(b4.innerHTML);
  // }
// }








console.log("This is the Lesson Version");
