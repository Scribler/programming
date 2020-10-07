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


var x = 3;
window.console.log(x);

var y;
y = 5;
window.console.log(y);

var z;
window.console.log('The value of z is ' + z);
z = x + y;
window.console.log('the type of z is ' + typeof(z));

window.console.log('The value of z is ' + z);
window.console.log('the type of z is ' + typeof(z));
z = x + ' ' +  y;

window.console.log('The value of z is ' + z);
window.console.log('the type of z is ' + typeof(z));


var greeting = "hello";
var firstname = "john";
var message = greeting + " " + firstname;
window.console.log("the value of message is: " + message + ".");
window.console.log("the value of message is: " + typeof(message)+ ".");

var check =(x == 3);
var check =(x == 5);
window.console.log("the value of check is: " + check);
window.console.log("the value of check is: " + typeof(check));



var myArray = [1,2,3];
window.console.log(myArray);
window.console.log(typeof(myArray)); //Array is an object



//
// CHANGE HTML USING VARIABLES
//


var color = 'rgb(118, 149, 68)';

document.getElementById("button6").onclick = function(){
  document.getElementById("secondfacebook").style.backgroundColor = color;
}

var x;
x = Math.round(Math.random()*256);
window.alert(x);

var x, y, z, appleColor;

document.getElementById('button7').onclick = function(){
  x = Math.round(Math.random()*256);
  y = Math.round(Math.random()*256);
  z = Math.round(Math.random()*256);
  appleColor = 'rgb(' + x + ', ' + y + ', ' + z + ')';
  document.getElementById('secondapple').style.backgroundColor = appleColor;
  document.getElementById('secondapple').innerHTML = '<p>' + appleColor + '</p>';
}





                        // DON'T START HERE! 

      // You already accomplished your coding goal! CONGRATS!



          // SET UP NODE AND SASS AND PUT IT ON HEROKU!


























