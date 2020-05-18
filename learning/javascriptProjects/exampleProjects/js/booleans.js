// booleans
console.log(true, false, "true", "false");

console.log(' ');
// methods can return booleans
let email = 'luigi@thenetninja.co.uk';

let result = email.includes('@');
let result2 = email.includes('!');
let names = ['mario', 'luigi', 'toad'];

console.log(email);
console.log(' ');
console.log('contains "@"?');
console.log(result);
console.log('contains "!"?');
console.log(result2);
console.log(' ');

console.log(names);
console.log('does names contain "luigi"?');
let result3 = names.includes('luigi')
// prints  result 3 and the index of luigi in the names array
console.log(result3, `index[${names.indexOf('luigi')}]` );
console.log('does names contain "bob"?');
let result4 = names.includes('bob')
console.log(result4);

console.log(' ');
// comparison operators
let age = 25;

console.log('Is age == 25?');
console.log(age == 25);
console.log('Is age == 30?');
console.log(age == 30);
console.log('Is age != 30?     **note** - "!" means "not"');
console.log(age != 30);
console.log('Is age != 25?');
console.log(age != 25);
console.log('is age greater than 20?');
console.log(age > 20);
console.log('is age less than or equal to 20?');
console.log(age <= 25);

console.log(' ');

let name = 'shaun';

console.log('is name equal to "shaun"');
console.log(name == 'shaun');
console.log('is name equal to "Shaun"');
console.log(name == 'Shawn');
console.log('is name shaun greater than name crystal?');
console.log(name > 'crystal');
console.log('is name shaun greater than name Shaun?');
console.log(name > 'Shaun');
console.log('is name Crystal greater than name shaun?');
console.log(name > 'Crystal');
console.log('lowercase letters are "greater" than all uppercase letters.')

console.log(' ');
// Comparison
age1 = 25;

// loose comparison
console.log('loose comparison')
console.log('age == 25 & age == "25"');
console.log(age == 25);
console.log(age == '25');
console.log('age != 25 & age != "25"');
console.log(age != 25);
console.log(age != '25');


console.log(' ');
// strict comparison
console.log('strict comparison');
console.log('age === 25 & age === "25"');
console.log(age === 25);
console.log(age === '25');
console.log('age !== 25 & age !== "25"');
console.log(age !== 25);
console.log(age !== '25');


console.log(' ');
