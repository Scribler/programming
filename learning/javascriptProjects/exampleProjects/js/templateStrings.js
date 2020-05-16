// variables
const title = 'Best Reads of 2019';
const author = 'Mario';
const likes = 30;

// ***EXAMPLES*** 


// Concatenation Way
let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes.';
console.log(result);

// Template String Way
let result1 = `The blog called ${title} by ${author} has ${likes} likes.`;
console.log(result1);

// Creating HTML templates
let html = `
  <h2>#{title}</h2>
  <p>By ${author}</p>
  <span>This blog has ${likes} likes.</span>
  `;
console.log(html);



