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


