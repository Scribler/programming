const link = document.querySelector('a');
const heading = document.querySelector('#page-title');
const mssg = document.querySelector('p');
const paragraphs = document.querySelectorAll('p');



// Changing the website and text for the hyperlink
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.thenetninja.co.uk');
link.innerText = 'The Net Ninja Website';
console.log(link.getAttribute('href'));


// changing the class.  Combined with CSS this gets even more powerfull.
console.log(mssg.getAttribute('class'));
// should display 'error'
mssg.setAttribute('class', 'success')
console.log(mssg.getAttribute('class'));
// should display success.
mssg.setAttribute('style', 'color: green');
paragraphs.forEach(paragraph => {
    paragraph.setAttribute('style', 'color: red');
});
console.log(paragraphs);



// Giving the main heading a style of BLUE, then a margin of 40px.
// ***IMPORTANT*** ->> USING THE "SET ATTRIBUTE" METHOD TOTALY WRITES OVER THE
// PREVIOUS STYLE.  This means that it resets the color when you change the Margin
// To fix this you must use the "style" method.
heading.setAttribute('style', 'color: blue');
heading.setAttribute('style', 'margin: 40px');
console.log(heading.style);
console.log(heading.style.color);
// See!  doing this doesn't rewrite the rest of the css like the other method does.
heading.style.color = 'orange';
heading.style.color = 'crimson';
//font-size is done using camelcase
heading.style.fontSize = '55';
// an empty quote is a way to remove a style
heading.style.margin = '';
