
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










