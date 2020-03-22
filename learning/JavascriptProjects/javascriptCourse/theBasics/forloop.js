// For loops

for(let i = 0; i < 5; i++){
    console.log(`The number is ${i}`);
    if(i == 4){
        console.log('That was the number 4 loop');
    }
}// No semicolon here for loops ;)

const names = ['sean', 'mario', 'luigi', 'samuel', 34, 'Quequeg'];
// Each loop is called an 'Itteration'
for(let i = 0; i <= names.length; i++){
    if(i == names.length){
        console.log('There are no more names in the array.');
        break;
    };
    // console.log(`My name is ${names[i]}`);
    let html = `<div>${names[i]}</div>`;
    console.log(html);

}