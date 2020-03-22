// arguments and parameters

// name is the parameter

//Giving default parameters ;)
const speak = function(name = 'luigi', time = 'night'){
    console.log(`Good ${time} ${name}!`);
}

// mario is an argument
speak('mario', 'morning');
speak();
speak('Steven', 'Day');
speak('Steven');


