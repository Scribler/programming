// Math Object

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.8;

console.log(Math.round(area));

// Floor always rounds down
console.log(Math.floor(area));

// Ceil always rounds up
console.log(Math.ceil(area));

// Trunc just removes the decimal
console.log(Math.trunc(area));




// random numbers

const random = Math.random();

// Between 0 and 1
console.log(random);
// 1 or 0
console.log(Math.round(random));

// Between 1 and 100
console.log(Math.round(random * 100));

// Between 1 and 1000
console.log(Math.round(random * 1000));
