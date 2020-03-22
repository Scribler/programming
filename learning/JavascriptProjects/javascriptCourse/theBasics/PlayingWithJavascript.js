let shuffled = [];
let test = [1, 5, 3, 6, 8];

// How to sort numbers
console.log(test.sort(function(a, b){return b-a}));

while (shuffled.length <= 51){
    
    let randomCard = Math.round(Math.random() * 51);
    // This should get rid of any repeat cards
    if(shuffled.includes(randomCard)){
        continue;
    }else{
        shuffled.push(randomCard);
        // The comented out text below will console log the length of the array.
        // console.log(shuffled.length);
        if(shuffled.length == 51){
            console.log('Thats all!');
            // console.log(shuffled.sort(function(a, b){return a-b}));
            console.log(shuffled);
            // This logs them but in order just to check that they're all there.
            console.log(shuffled.sort(function(a, b){return a - b}));
            break;
        };
    };
};