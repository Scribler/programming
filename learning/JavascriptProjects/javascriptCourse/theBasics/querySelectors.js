// querySelector & querySelectorAll are the main ways to query the DOM
// innerHTML just used to clean up the look of the page.
const para = document.querySelector('p');
const error = document.querySelector('.error');
const error2 = document.querySelector('div.error');
const paras = document.querySelectorAll('p');
const errors = document.querySelectorAll('.error');

console.log('NEXT SECTION NEXT SECTION NEXT');


console.log(para.innerHTML)
console.log(paras.innerHTML);

console.log('NEXT SECTION NEXT SECTION NEXT');


console.log(error.innerHTML);
console.log(error2.innerHTML);
// Can treat the node list kind of like an array.  It isn't one but you can
// select the nodes using array notation.
errors.forEach(error => {
    console.log(error.innerHTML);
});
console.log('NEXT SECTION NEXT SECTION NEXT');

console.log(paras[0].innerHTML);
console.log(paras[1].innerHTML);
console.log(paras[2].innerHTML);
console.log('NEXT SECTION NEXT SECTION NEXT');


paras.forEach(para => {
    console.log(para.innerHTML);
});
console.log('NEXT SECTION NEXT SECTION NEXT');

//OTHER WAYS TO QUERY THE DOM

// get element by ID
const title = document.getElementById('page-title');
console.log(title);
console.log(title.innerHTML);


console.log('NEXT SECTION NEXT SECTION NEXT');
// get elements by their class name
const errorss = document.getElementsByClassName('error');
// this returns a Collection, NOT a node list.  You can't use
// for each on a collection.  This is why you would usually use
// a querySelector instead of selecting the element by it's
// name.
console.log(errorss);
console.log(errorss[1]);
// This code returns an error since this is a collection, not 
// a node list as explained above.
// errorss.forEach(error => {
//     console.log(error);
// });



console.log('NEXT SECTION NEXT SECTION NEXT');
// get elements by their tag name
const parasss = document.getElementsByTagName('p');

console.log(parasss);
console.log(parasss[1]);
