const list = document.querySelectorAll('li');
const button = document.querySelector('button');
const complete = document.querySelector('#complete');
const restore = document.querySelector('#restore');


// Adding the 'list' class to all the li tags.
list.forEach((list) => {
    list.classList.add('list');
});

// This toggles the list class on and off when you click the button.
// button.addEventListener('click', () => {
//     console.log('you clicked me');
//     list.forEach((list) => {
//         list.classList.toggle('list');
//     });
// });

complete.addEventListener('click', () => {
    console.log('all completed');
    list.forEach(item => {
        if(item.classList.contains('complete') != true){
            item.classList.toggle('complete');
        };
    });
});

restore.addEventListener('click', () => {
    list.forEach((item => {
        item.classList.remove('complete');
    }));
});

const items = document.querySelectorAll('li');

items.forEach((item) => {
    // "e" is the event data you can do many things with it.
    // "e.target" is the same as "item" which is the target.
    item.addEventListener('click', e => {
        console.log(e);
        console.log(e.target);
        console.log(item);
        console.log('item clicked');
        // item.innerHTML = '';
        // item.classList.remove('list');
        // e.target.style.textDecoration = 'line-through';
        e.target.classList.toggle('complete');
    });
});