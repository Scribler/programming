// if statements
const age = 25;
const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];
const password = 'p@ff';
const password2 = 'p$@ss';



if(age > 20){
  console.log('you are over 20 years old!');
}

console.log(' ');
if(ninjas.length > 3){
  console.log(ninjas.length);
  console.log("that's a lot of ninjas");
}

console.log(' ');

if(password.length >= 12){
  console.log('that password is mighty strong!');
} else if(password.length >= 8){
  console.log('that password is long enough!');
} else {
  console.log('that password is not long enough!');
}


console.log(' ');
// logical operators - OR || and AND &&


if(password2.length >= 12 && password2.includes('@' || '$')){
  console.log('that password is mighty strong!');
} else if(password2.length >= 8 || password2.includes('@') && password2.includes('$') && password2.length >=5){
  console.log('that password is long enough!');
} else if (password2.length >= 4 && password2.includes('@') || ('$')){
  console.log('that password is just baaaaarely strong enough!');
} else {
  console.log('that password is not long enough!');
}


console.log(' ');
// logical NOT (!)

// if user is false they are not logged in
let user = false;
// let user = !false;

if(user === false){
  console.log('user is not logged in!');
  console.log('the user must be logged in to continue');

} else {
  console.log('user is logged in!');
}


console.log(' ');
//break and continue

const scores = [50, 25, 0, 100, 20, 10];

for(let i = 0; i < scores.length; i++){

  console.log('your score; ', scores[i]);

  if (scores[i] === 100){
    console.log('you win!')
    break;
  }
}







