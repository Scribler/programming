
// creating an object "myPhone"
var myPhone = {
  make : "Apple",
  model : "Iphone 4",
  warranty : 12,
  color : "white"
};

window.console.log(myPhone);

// deleting a property of the object
delete myPhone.warranty;

window.console.log(myPhone);
window.console.log("My phone is an: " + myPhone.make);

myPhone.make = "Samsung";

window.console.log(myPhone.make);



//
//
//
//
//


// This var definition links the two objects
// CHANGES TO ONE OBJECT WILL CHANGE THE OTHER OBJECT AS WELL!
var myOtherPhone = myPhone;
window.console.log(myOtherPhone);


// This will actually change the model in the original object as well. 
myOtherPhone.model = "Iphone 5";
window.console.log(myPhone);
window.console.log(myOtherPhone);

window.console.log(window);
window.console.log(console);

function nope(){
  // If using "console" as a variable?
  // NO LONGER - use 'console.log();'
  // INSTEAD - use 'window.console.log();'
  var console = 42;
  try {
    // this won't work because 'console' has been shadowed by the previous variable
    console.log("you won't see this");
  } catch (e) {
  }
  try {
    window.console.log("you will see this");
  } catch (e) {
  }
}
nope();

//wiindow is the global variable in this case.  Although, it isn't always.  Aparently in NODEJS 'global' is the global variable, so don't bother to keep using window.console.log() that could bite you later on.


// console.log(console);
console.log('As long as console was only used as a variable in a function and not outside of the function, console.log will still work.  So there is no reason to use window.console.log() unless you are using it within a function that has console as a variable.  You do not need to worry about if it is used as a variable outside of a function because then it would disable "window.console.log();" as well as "console.log()" so it is irrelevant.');


//
//
//
//
//
//

// creating new object called 'myBananaPhone'
var myBananaPhone = new Object();

myBananaPhone.make = "Samsung";
myBananaPhone.model = "Galaxy S4";
myBananaPhone.waranty = 12;
myBananaPhone.color = "black";
myBananaPhone.waranty = 0;

console.log(myBananaPhone);

var mycar = new Object();

mycar.make = "Ford"
mycar.model = "mustang"
mycar.speed = 170;

console.log(mycar);

console.log(mycar.make);

// making objects using constructors
// first build the constructor.  In this case the constructor is 'phone' and it is a
// function that you call in order to make new 'PHONE' objects.
function phone(make, model, warranty, color){
  this.make = make;
  this.model = model;
  this.warranty = warranty;
  this.color = color;
  this.extendWarranty = function(x){
    // this.warranty = this.warranty + x;
    this.warranty += x; // This synax does the same as above but more efficiently
  }
  this.changeColor = function(y){
    this.color = y;
  }
}
//
//
//
//
//

// creating a new 'phone' object called 'myOldPhone'
var myOldPhone = new phone('apple', 'iphone5', 12, 'white');

console.log(myOldPhone);

myOldPhone.extendWarranty(12);
myOldPhone.changeColor('blue');

console.log(myOldPhone.warranty);
console.log(myOldPhone.color);

// changing the value of 'condition' for the 'myOldPhone' object
myOldPhone.condition = "like new";

console.log(myOldPhone.condition);


//
//
//
//
//



// this still creates an object, but all of the values will have a value of undefined
// var myBrothersPhone = new phone();
// console.log(myBrothersPhone);


var myBrothersPhone = new phone('apple', 'iphone 4', 6, 'black');
console.log(myBrothersPhone);

// use 'prototype' to add new values to the constructor.
phone.prototype.condition = 'new';
console.log(myBrothersPhone);

console.log(myBrothersPhone.condition);
console.log(myOldPhone.condition);

var testPhone = new phone();
console.log(testPhone.condition);


//
//
//
//

// ARRAYS

var shoppingList = ['bread', 'eggs', 'milk'];
// don't use a constructor for a list like this :P
// var shoppingList = new Array('bread', 'eggs', 'milk');

// document.getElementById('myParagraph').innerHTML += '<br />' + shoppingList;
// document.getElementById('myParagraph').innerHTML += '<br />' + shoppingList[0];
// document.getElementById('myParagraph').innerHTML += '<br />' + shoppingList[2];
// document.getElementById('myParagraph').innerHTML += '<br />' + shoppingList[1];


// you could do it this way, but it isn't very readable!!!
function si(x){
  document.getElementById('myParagraph').innerHTML += '<br />' + shoppingList[x];
}
si(1)
si(2)
si(0)

// This is better!!!
// While it IS a bit more verbose, the code itself and the variables used describe
// what the function actually does and is therefore much better.

function showResult(x){
  document.getElementById('myParagraph').innerHTML += '<br />' + x;
}

showResult(shoppingList[1]);
showResult(shoppingList[2]);
showResult(shoppingList[0]);
























