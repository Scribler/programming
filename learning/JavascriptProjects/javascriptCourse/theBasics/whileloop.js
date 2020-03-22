let i = 0;
let b = 0;
const names = ['shaun', 'dale', 'deavon', 'dave'];

while(i <= 5){
    if(i == 5){
        console.log('In last loop', i);
        break;
    };
    console.log('in loop', i);
    i++;
    
}

while(b <= names.length){
    if(b == names.length){
        console.log('No more names');
        break;
    }
    console.log(names[b]);
    b++;
}