// VARIABLES
let age = 25;
let year = 2019;
const points = 100;
var score = 75;

// 'let' & 'const' examples
console.log(age, year);

age = 30;  // re-defines age as 30

console.log(age);
console.log(points);
// FUNCTION DEFINITION
function scoreTest(score){
  if(score == 666){
    console.log('The beast commeth!');
  } else {
    console.log('hmmm... nothing special');
  };
};


// 'var' examples & function test
console.log(score);
scoreTest(score);

score = 666;

console.log(score); // This doesn't throw an error like const
                    // Be carefule though var IS universal scope.

scoreTest(score);




// NOTES
//
//>> ex.1) points = 200; <This in incorrect. It will throw an 
//>> error.



