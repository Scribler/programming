var score = 0;
var answer = 0;
var question = 0;



// Change start/reset button functions
// - swap button name
// - make timer visible
// - generate first question
// - reset page
function btnswap(){
  //reload page on click
  if(document.getElementById("startReset").innerHTML == "Reset"){
    location.reload();
  // start game on click
  } else {
    // change button text to reset
    document.getElementById("startReset").innerHTML = "Reset";
    document.getElementById("startReset").classList.remove("start");
    document.getElementById("startReset").classList.add("reset");
    // make timer visible
    document.getElementById("time").classList.add("visible");
    // generate first question
    genquestion();
  }
}

// Show Countdown Timber box and display gameover box when time is up
function timerstart(){
  var counter = document.getElementById("remaining-time-value");
  var x = 60;
  var myCounter = setInterval(function(){
    x--;
    counter.innerHTML = x;
    if (x == 0){
      clearInterval(myCounter);
      document.getElementById("score").innerHTML = score + "!";
      document.getElementById("finished").classList.add("gamevisible");
    }
  }, 1000);
}

// Generate new Questions

var numgenerator = function(x){
  return Math.floor(Math.random() * x);
}

function genquestion(){
  //generate question and answers
  var x = numgenerator(11);
  var y = numgenerator(11);
  question = x + "x" + y;
  answer = x * y;
  // find a box to put the answer
  var answerboxnum = numgenerator(4);
  var answerbox = "a" + answerboxnum;
  console.log(answerbox);
  // display question
  document.getElementById("question").innerHTML = question;
  // display answer in a random answer box
  document.getElementById(answerbox).innerHTML = answer;

  //generate wrong answers
  // - generate wrong answer boxes
  var boxes = [0, 1, 2, 3];

  function wrongbox(x){
    boxes.splice(answerboxnum, 1);
    console.log(boxes);
  }
  wrongbox(answerboxnum);

  // - generate wrong answers and insert into boxes
  for(x = 0; x < boxes.length; x++){
    var a = numgenerator(11);
    var b = numgenerator(11);
    var boxnum = "a" + boxes[x];
    console.log(boxnum);
    var wronganswer = a*b;
    document.getElementById(boxnum).innerHTML = wronganswer;
  }

// Check validity of answer clicked
function questioncheck(x){
    var divcontent = document.getElementById(x).innerHTML;
    // compare contents of div to correct answer
    if(divcontent == answer){
      var rightAnswer = document.getElementById("correct");
      document.getElementById("tryagain").classList.remove("wrongvisible");
      rightAnswer.classList.add("correctvisible");
      // Correct Box - appears for one second on correct answer
      var clearverify = setTimeout(function(){
        var rightAnswer = document.getElementById("correct");
        rightAnswer.classList.remove("correctvisible");
        rightAnswer.classList.add("correct");
      }, 500)
      score = score + 10;
      document.getElementById("score-value").innerHTML = score;
      console.log(score);
      // Loads a new question after correct answer clicked
      genquestion();
    } else {
      // Try again box appears for one second on selectiong wrong answer
      var wrongAnswer = document.getElementById("tryagain");
      wrongAnswer.classList.add("wrongvisible");
      var clearverify = setTimeout(function(){
        var wrongAnswer = document.getElementById("tryagain");
        wrongAnswer.classList.remove("wrongvisible");
        wrongAnswer.classList.add("wrong");
      }, 1000)
    }
  console.log(answer);
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
