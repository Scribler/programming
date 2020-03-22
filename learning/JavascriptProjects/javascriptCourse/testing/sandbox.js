console.log('test');

var letters = [];

var word = 'FreeCodeCamp';

var rword = '';

//put letters of word into stack
for (var i = 0; i < word.length; i++) {
   letters.push(word[i]);
};
console.log(letters);

// pop off the stack in reverse order
for (var i = 0; i < word.length; i++) {
   rword += letters.pop();
};

// log result
console.log(rword);
