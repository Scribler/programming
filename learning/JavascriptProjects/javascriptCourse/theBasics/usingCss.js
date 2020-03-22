// ADD / REMOVE / TOGGLE classes for manipulating classes.


// errorSecond = document.querySelector('body > div:nth-child(4) > p.error');

// console.log(errorSecond);
// errorSecond.setAttribute('class', 'success');

const content = document.querySelector('h1');
const paragraphs = document.querySelectorAll('p');
const article = document.querySelector('article');
const title = document.querySelector('h2');

// returns a colection which you can't foreach.  Must convert to an
// array first using the 'Array' method as shown below.
// console.log(article.children);
// console.log(Array.from(article.children));
// Array.from(article.children).forEach((child) => {
//     child.classList.add('article-element');
// });
console.log(title.parentElement);
console.log(title.parentElement.parentElement);
console.log(title.nextElementSibling);
console.log(title.previousElementSibling);
// chaining
console.log(title.nextElementSibling.parentElement.children);




console.log(content.classList);
// This will not override hardcoded css that is in the HTML
content.classList.add('error');
content.classList.remove('error');
content.classList.add('success');


paragraphs.forEach(paragraph => {
    // INSTEAD of "innerHTML", you could also use ".textContent" or ."innerTEXT"
    // .innerTEXT only gets the (DISPLAYED) text
    // .textContent gets (All) text whether it is desplayed or not.
    if(paragraph.innerHTML.includes('error')){
        paragraph.classList.add('error');
        console.log(paragraph.textContent);
    }
    if (paragraph.innerHTML.includes('success')){
        paragraph.setAttribute('class', 'success');
        console.log(paragraph.textContent);
    }
});

content.classList.toggle('test');
// content.classList.toggle('test');
