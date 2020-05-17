// VARIABLES
let ninjas = ['shaun', 'ryu', 'chun-li'];
let ages = [20, 25, 30, 35];
let random = ['shaun', 'crystal', 30, 20];

// EXPERIMENTING

console.log('log ninjas array, then position[1] of the array');
console.log(ninjas);
console.log(ninjas[1]);

console.log(' ');
console.log('updats position[1] to be "ken"');
ninjas[1] = 'ken' // updates position[1] in the array
console.log(ninjas);
console.log(' ');


console.log('log "ages" array then ages[2]');
console.log(ages);
console.log(ages[2]);
console.log(' ');


console.log('log random array');
console.log(random);
console.log(' ');

console.log('log random array index[0]');
console.log(random[0]);
console.log(' ');


console.log('log "ninjas.length"');
console.log(ninjas.length);



console.log(' ');
// ARRAY METHODS


// join
console.log('ninjas array joined with commas');
let join_result = ninjas.join(',');
console.log(join_result);

console.log(' ');
// indexOf
console.log('index of chun-li')
let ind_result = ninjas.indexOf('chun-li');
console.log(ind_result);
console.log(' ');

// CONCAT
console.log('concat ninjas with "ken" & "crystal"');
let con_result = ninjas.concat(['ken', 'crystal']);
console.log(con_result);

console.log(' ');
// *******NOTE***** push and pop are destructive.  They change the original value.
// PUSH
console.log('push "ken" on the end of the array "ninjas"');
console.log(ninjas);
let pushed_result = ninjas.push('ken');
console.log(pushed_result);
console.log(ninjas);
console.log(' ');

// POP
console.log('pop something off of ninjas?');
console.log(ninjas);
let popped_result = ninjas.pop();
console.log(popped_result);
console.log(ninjas);
console.log(' ');
