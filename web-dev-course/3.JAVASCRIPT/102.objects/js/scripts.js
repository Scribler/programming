console.log("hello world");

function greeting1(){
  window.alert('Hello');
}

// this calls the function. MUST HAVE PARENTHESIS OR NOTHING WILL HAPPEN
// greeting1();

// This also doesn't work. It prints out the content definition in the alert
// --- window.alert(greeting1);

function greeting2(firstname){
  window.alert('Hello ' + firstname + '!');
}

// greeting2('Steven');

function sum(a, b){
  return a+b;
}

let x = 3 + 7;

console.log(x);


