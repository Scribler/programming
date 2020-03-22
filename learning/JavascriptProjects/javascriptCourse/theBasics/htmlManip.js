const ul = document.querySelector('.people');
const ol = document.querySelector('.things');

const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];
const things = ['car', 'hairbrush', 'toilet paper', 'dishsoap', 'bird'];

let html = '';
let listed = '';

people.forEach(person => {
// create html template
    html += `<li style="color: purple">${person}</li>`;
});

things.forEach(thing => {
    listed += `<li style="color: red">${thing}</li>`;
});

console.log(html);
console.log(listed);

ul.innerHTML = html;
ol.innerHTML = listed;