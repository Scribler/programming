// FUNCTIONS (REUSABLE CODE BLOCKS) OBJECT

// FUNCTION DECLARATION

greet(); // functions are hoisted to the top of the file by the interpreter which is why 
         // this still runs.

//speak(); // Function Expressions are not hoisted, so this will not run.

function greet(){
  console.log('hello there');
}

greet();

// FUNCTION EXPRESSION

const speak = function(){
  console.log('this is a function expression. It needs a semicolon after it :P');
};

speak();





console.log(' ');
// ARGUMENTS AND PARAMETERS

// note the use of default arguemtns.
const speak2 = function(name = 'enter a name', age = 'enter an age'){ // name and age are parameters. bob and 12 are       
                                    // arguments.

  console.log(`${name} is a minion. He is ${age}`);
};

speak2();
speak2('dave');
speak2('bob', 12);



console.log(' ');
// RETURNING VALUES
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
// REGULAR FUNCTIONS 

const calcArea2 = function(radius){
  return 3.14 * radius**2;
};


console.log(' ');
// ARROW FUNCTIONS

const calcArea3 = radius => { // radius would have parenthesis if more than one prameters.
  return 3.14 * radius**2;
};

console.log(calcArea3(5));


// The most basic of arrow functions. This shows that it is basically just a simplified 
// function expression. REMEMBER YOUR SEMICOLONS!
const foo = () => {
  console.log('bar');
};

foo();



// HIGHER ORDER FUNCTIONS AND NESTING
const bar = [1, 2, 3, 4, 5];
let foobar = bar.map(num => num * 2);

console.log(foobar);

const myFunc = age => age * 2;
const largeFunc = (firstFunc, age) => firstFunc(age + 10);

console.log(largeFunc(myFunc, 10));















