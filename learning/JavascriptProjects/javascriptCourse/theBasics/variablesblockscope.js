//variables & block scope

let age = 30;
let name = 'Joe';


if(true){
    // using let gives it local scope only
    let age = 40;
    let vabil = 'vabil';
    // name = 'Sam' has global scope
    name = 'Sam'
    console.log('inside 1st code block:', age);
    console.log(name);

    if(true){
        let age = 50;
// Var ignores block scope entirely
        var boop = 'boop';
        console.log('inside 2nd code block: ', age);
    }
}

console.log('outside code block; ', age);
console.log(name, boop);

