
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








