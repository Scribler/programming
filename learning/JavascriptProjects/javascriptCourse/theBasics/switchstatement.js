//Long(wrong) way using else if statements
// if(grade === 'A'){

// } else if (grade === 'B'){

// } else if (grade === 'C'){

// } else if (grade === 'D'){

// } else if (grade === 'E'){

// } else {

// }


// switch statements
// MUST USE 'BREAK' OR IT WILL RUN THE REMAINING CASES
// AS WELL.
const grade = 'E';

switch(grade){
    case 'A':
        console.log('You got an A!');
        break;
    case 'B':
        console.log('You got an B!');
        break;
    case 'C':
        console.log('You got an C!');
        break;
    case 'D':
        console.log('You got an D!');
        break;
    case 'E':
        console.log('You got an E!');
        break;
    default:
        console.log('not a valid grade');
        break;
}