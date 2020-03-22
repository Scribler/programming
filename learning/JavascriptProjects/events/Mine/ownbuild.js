// first list
const numbered = document.querySelectorAll('.numbered');
let numberedul = document.querySelector('#numberedul');
let numremove = [];
let numberedOrigin = numbered;

// buttons
const restore = document.querySelector('#restore');
const additem = document.querySelector('#additem');
const restoreoriginal = document.querySelector('#restoreoriginal');

// second list
const lettered = document.querySelectorAll('.lettered');
const letteredul = document.querySelector('#letteredul');

additem.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'something new to do';
    numberedul.prepend(li);
});

numberedul.addEventListener('click', e => {
    console.log(e);
    if(e.target.tagName === 'LI'){
        numremove.push(e.target);
        console.log(numremove);
        e.target.remove();
    };
});

restore.addEventListener('click', () => {
    numremove.forEach(item => {
        numberedul.prepend(item);
    });
});
//
// Restore's the original order.
//
// !!!PROBLEM!!!  SHOULD REMOVE THE NON ORIGINAL ENTRIES.  please fix.
// 
restoreoriginal.addEventListener('click', () => {
    numberedOrigin.forEach(item => {
        numberedul.append(item);
    });
});

console.log(numberedOrigin);
