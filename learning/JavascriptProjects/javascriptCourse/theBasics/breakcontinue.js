// break and continue

const scores = [50, 25, 0, 30, 100, 20, 10];

for(let i = 0; i < scores.length; i++){

    //This breaks out of the current loop and continues
    //with the next iteration.
    if(scores[i] === 0){
        continue;
    }
    
    console.log('your score: ', scores[i]);

    if (scores[i] === 100){
        console.log('Congrats, you got the top score!');
        break;s
    }
}