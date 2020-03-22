const para = document.querySelector('p');
const paras = document.querySelectorAll('p');
const content = document.querySelector('.content');
const people = ['mario', 'luigi', 'yoshi'];

// para.innerText = ' ninjas are awesome!';
paras.forEach(para => {
    console.log(para.innerText);
    // This change will not show up in the console.log because
    // it comes after the log.
    para.innerText += ' new text';
});

console.log(content.innerHTML);
content.innerHTML += '<h2>This is a new h2 tag</h2>';
console.log(content.innerHTML);
console.log(people);

// How to replace an item of an array.
// constant.splice(position, add/remove(1 or 0), arrayItemToAdd)

// In the example below, the lowercase versions of the items are being replaced by
// uppercase versions.
people.forEach(person => {
    people.splice(people.indexOf(person), 1, person.toUpperCase());
    console.log(people[people.indexOf(person.toUpperCase())], people.indexOf(person.toUpperCase()));
});
console.log(people);
people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});
console.log(people.indexOf('MARIO'));
// console.log(people);
// people.splice(0, 1, 'dog');
// console.log(people);
