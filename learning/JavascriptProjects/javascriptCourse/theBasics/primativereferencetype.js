// primative values

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// This only changes "scoreOne" because when "scoreTwo" was created
// it made a new entry on the stack.  It created a new separate 
// entity based upon scoreOne, not linked to scoreOne.
// I FINALLY UNDERSTAND!!!!  I need to ask why more often.
scoreOne = 100

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);




// reference values

const userOne = { name: 'ryu', age: 30 };
const userTwo = userOne;

console.log(userOne, userTwo);

// This changes both because objects are stored on the heap. When
// user two is created it just makes a pointer to the object created
// by user one!
userOne.name = 'tom';
userOne.age = 45;

console.log(userOne, userTwo);
