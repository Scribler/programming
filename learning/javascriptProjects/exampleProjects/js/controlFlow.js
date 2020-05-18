// Control Flow LOOOOOOPS
//
// VARIABLES
let i = 0;
let j = 0;
let k = 3;
const names = ['shaun', 'mario', 'luigi', 'sam', 'carelton', 'davis', 'peterson'];

// for loops (counter variable is inside the declaration)

for(let i = 0; i < 5; i++){
  console.log(i, 'for loops do not get a semicollon after the curly braces!');
}

console.log('loop finished. This will not run till the loop is finished');


console.log(' ');
// for loop that doesn't count to a specific number

for (let i = 0; i < names.length; i++){
  console.log(i, names[i]);
  let html = `<div>${names[i]}</div>`
  console.log(html);
}
console.log(`names.length = ${names.length}.`);


console.log('each time we perform a code block it is called an iteration.');





// While Loop (counter variable is declared before the loop)
while(i < 5){
  console.log('in loop: ', i);
  i++;
}

console.log(' ');
while(j < names.length){
  console.log(names[j], j);
  j++;
}

console.log(' ');



// do while loops


do {
  console.log('value of k is: ', k);
  k++;
} while (k < 5);


console.log(' ');
