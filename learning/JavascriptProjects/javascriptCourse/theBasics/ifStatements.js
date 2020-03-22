// else if statements

const password = 'p@sswo';

if(password.length >= 12 && password.includes('@')){
    console.log('That password is Strong!');
}else if(password.length >= 8 || password.includes('@') && password.length > 5){
    console.log('Your password is strong enough.');
}else if(password.length >= 5){
    console.log('Try again man!');
}else{
    console.log("You're not even trying!");
}