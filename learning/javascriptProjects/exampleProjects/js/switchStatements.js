// Switch Statements

const grade = 'A';

switch(grade){
    // each iteration must have break in it or the program will iterate through the following lines till the end of the block.
    // SWITCH STATEMENTS USE STRICT EQUALITY TO CHECK. TAKE NOTICE!
  case 'A':
    console.log('you got an A');
    break;
  case 'B':
    console.log('you got an B');
    break;
  case 'C':
    console.log('you got an C');
    break;
  case 'D':
    console.log('you got an D');
    break;
  case 'A':
    console.log('you got an E');
    brea;
  default:
    console.log('not a valid grade');
}

// using if statements (don't do this)

if(grade === 'A'){

} else if(grade === 'B'){

} else if(grade === 'C'){

} else if(grade === 'D'){

} else if(grade === 'E'){

} else {

}
// These rules also applies to const (but not to'var'. 'var' igonors block scope)
console.log(' ');
// variables and block scope
let age = 30; // global scope

// let age = 50; (This will throw an error because it is in the same scope)

if(true){
  let age = 40; // this doesn't throw an error because it has block scope
   // age = 40; (this would affect 'age' outside of the block because it is a command to 
   //           change age, NOT an original definition of age.)
  let name = 'shaun';
  console.log('inside code block ', age, name);
  if(true){
    let age = 50;
    console.log('inside second code block', age); // the nested block takes it's imediate 
                                                  // parent block's definition of age if 
                                                  // none is defined in the block.
    var test = 'this "var" variable ignores block scope';
  }
}

console.log(`outside codeblock ${age}, ${name}`);
console.log(name); // this doesn't work because name was defined in local scope and this is
                   // outside of the block
console.log(test);
console.log(' ');




















