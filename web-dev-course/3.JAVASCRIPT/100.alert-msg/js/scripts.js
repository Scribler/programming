let hello = "hello world";


//
// ALERT MESSAGES AND BASIC FUNCTIONS
//

console.log(hello);
console.log('this is the first javascript lesson')

// There are many other things you can put other than '.onclick' relating to hover double click etc. etc.
document.getElementById("button1").onclick = function(){
  alert("You have just clicked me!");
}

document.getElementById("button2").onclick = function(){
  document.getElementById("facebook").innerHTML="<p>Facebook</p>";
}

document.getElementById("button3").ondblclick = function(){
  document.getElementById("apple").innerHTML="<h3>Hear is a list of cars</h3><ul><li>car 1</li><li>Car 2</li><li>CAR 3</li></ul>";
}

// these both will work, but the first one is propper. Get a program to check your code in vim
// window.alert("welcome to javascript");
// alert("welcome to javascript");



//
// CHANGING STYLES WITH JAVASCRIPT LESSON
// 




document.getElementById("button4").onclick = function(){
  document.getElementById("facebook").style.width = '200px'; 
  document.getElementById("facebook").style.backgroundColor = 'rgba( 26, 203, 135, 0.1 )'; 
}

document.getElementById("button4").ondblclick = function(){
  document.getElementById("facebook").style.width = '';
  document.getElementById("facebook").style.backgroundColor = ''; 
}


// STYLES HAVE A DIFFERENT FORMAT WHEN YOU ARE CHANGING THEM IN JAVASCRIPT

document.getElementById("button5").onclick = function(){
  document.getElementById("apple").style.fontFamily = 'monospace';
  document.getElementById("apple").style.fontSize = '3em';
}

document.getElementById("button5").ondblclick = function(){
  document.getElementById("apple").style.fontFamily = '';
  document.getElementById("apple").style.fontSize = '';
}


//
// VARIABLES AND DATATYPES LESSON
//


                        // DON'T START HERE! 

      // You already accomplished your coding goal! CONGRATS!



          // SET UP NODE AND SASS AND PUT IT ON HEROKU!


























