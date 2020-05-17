// VARIABLES
let ninjas = ['shaun', 'ryu', 'chun-li'];
let ages = [20, 25, 30, 35];
let random = ['shaun', 'crystal', 30, 20];

// EXPERIMENTING

console.log(ninjas);
console.log(ninjas[1]);
ninjas[1] = 'ken' // updates position[1] in the array
console.log(ninjas);


console.log(ages);
console.log(ages[2]);


console.log(random);
console.log(random[0]);


console.log(ninjas.length);


// ARRAY METHODS

let result = ninjas.join(',');
console.log(result);
