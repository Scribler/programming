let hello = "hello world";


console.log(hello);
console.log('this is the first javascript lesson')

// There are many other things you can put other than '.onclick' relating to hover double click etc. etc.
document.getElementById("button2").onclick=function(){
  alert("You have just clicked me!");
}

document.getElementById("button1").onclick=function(){
  document.getElementById("facebook").innerHTML="<p>Facebook</p>";
}

document.getElementById("button3").ondblclick=function(){
  document.getElementById("apple").innerHTML="<h3>Hear is a list of cars</h3><ul><li>car 1</li><li>Car 2</li><li>CAR 3</li></ul>";
}

// these both will work, but the first one is propper. Get a program to check your code in vim
// window.alert("welcome to javascript");
// alert("welcome to javascript");

