//function declaration
//hoisted

function greet(){
    console.log('hoisted');
}

// These declarations won't work in this location because they come before the non-hoisted function expression.
// speak();
// speak();
// speak();


// function expression
// not hoisted (if you typed this before the declared function, the declared function would still run first)

// requires a semicolon (one of the only times it's required)
const speak = function(){
    console.log('not hoisted!');
};

greet();
greet();
greet();

speak();
speak();
speak();