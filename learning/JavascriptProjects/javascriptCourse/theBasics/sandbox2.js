let score = '100';
console.log(typeof(score));

score = Number(score);

// must convert 'score' to a number ^ or it will just display 1001 instead of 101.
console.log(score + 1);
console.log(typeof(score));

// BELOW ARE WAYS TO CONVERT THINGS INTO number, string, and boolean. 

let result = Number('hello');
let otherResult = String(50);

console.log(result, typeof result);
console.log(otherResult, typeof otherResult);

// Commented out example would return 'true'  These are examples
// Of 'truthy', and 'falsie' elements.
// let resultt = Boolean(100);
// let resultt = Boolean(0);
// let resultt = Boolean('0');
let resultt = Boolean('');


console.log(resultt, typeof resultt);
