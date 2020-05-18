// type conversion
let score = '100';
let score2 = 100;

console.log('"100" + 1 will only concatonate not add');
console.log(score + 1);
console.log('100 + 1');
console.log(score2 + 1);

console.log(' ');
console.log('score type before type conversion');
console.log(typeof score);

console.log(' ');
console.log('in order to use "100" in math it must be converted to an integer using type conversion');
score = Number(score);
console.log(score + 1);

console.log(' ');
console.log('score type after type conversion');
console.log(typeof score);

console.log(' ');
let result = (Number('hello'));
console.log('can numbers be turned into strings?');
result = String(score);
console.log(result, typeof result);
console.log('the answer is yes!');

console.log(' ');


let result3 = Boolean(100);
let result4 = Boolean(0);
console.log(result3, typeof result3);
console.log(result4, typeof result4);

let result5 = Boolean('0'); // any string relolves to true unless it is empty
let result6 = Boolean('');
console.log(result5, typeof result5);
console.log(result6, typeof result6);

console.log(' ');
