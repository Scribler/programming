// Functions (reusable code blocks) object

// Function Declaration

greet(); // functions are hoisted to the top of the file by the interpreter which is why 
         // this still runs.

//speak(); // Function Expressions are not hoisted, so this will not run.

function greet(){
  console.log('hello there');
}

greet();

// Function Expression

const speak = function(){
  console.log('this is a function expression. It needs a semicolon after it :P');
};

speak();





console.log(' ');
// arguments and parameters

// note the use of default arguemtns.
const speak2 = function(name = 'enter a name', age = 'enter an age'){ // name and age are parameters. bob and 12 are       
                                    // arguments.

  console.log(`${name} is a minion. He is ${age}`);
};

speak2();
speak2('dave');
speak2('bob', 12);





console.log(' ');
// returning values
const speak3 = function(name = 'luigi', time = 'night'){
  console.log(`good ${time} ${name}`);
};

speak3('dale', 'day');

const calcArea = function(radius){
  return 3.14 * radius**2;
};

const area = calcArea(5);
console.log(area);


console.log(' ');
// regular functions

const calcArea2 = function(radius){
  return 3.14 * radius**2;
};


console.log(' ');
// arrow functions

const calcArea3 = radius => { // radius would have parenthesis if more than one prameters.
  return 3.14 * radius**2;
};

console.log(calcArea3(5));



