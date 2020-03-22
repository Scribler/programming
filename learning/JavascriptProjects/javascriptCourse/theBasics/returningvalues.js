// returning values

const calcArea = function(radius){
    return 3.14 * radius**2;
    // below is the inefficient way to do this.
    // let area = 3.14 * radius**2;
    // return area;
};
const area = calcArea(5);
console.log(area);



// arrow functions

// 'radius' doesn't need parentheses if there is only
// one parameter.

// basic way
// const theArea = (radius) => {
//     return 3.14 * radius**2;
// };

// This single line does the same thing as the 'basic way'. You also don't need to put 'return' or curly braces
const theArea = radius => 3.14 * radius**2;


const arrea = theArea(5);
console.log(arrea);

//ARROW FUNCTION VERSIONS
const greet = () => 'hello, world';

//ARROW FUNCTION VERSIONS
const bill = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
};

let gret = greet();
let bll = bill([10, 15, 30], 0.2);
console.log(gret);
console.log(bll);
