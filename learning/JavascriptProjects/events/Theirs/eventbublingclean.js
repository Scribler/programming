// li/ul variables
const listsecond = document.querySelectorAll('#listsecond');
const list = document.querySelectorAll('#listfirst');
const alllist = document.querySelectorAll('li');

const ul = document.querySelector('#firstul');
var items = document.querySelectorAll('#listfirst');

// button variables
const button = document.querySelector('#clickme');
const additem = document.querySelector('#additem');


// remaining variables
const complete = document.querySelector('#complete');
const restore = document.querySelector('#restore');
var backup = items;
let removed = []



// Adding the 'list' class to all the li tags.
alllist.forEach((list) => {
    list.classList.add('li');
});

// This toggles the list class on and off when you click the button.
// NOTE: the css is hard coded to the page now, so it doesn't actually change the class
button.addEventListener('click', () => {
    console.log('you clicked me');
    listsecond.forEach((list) => {
        list.classList.toggle('list');
    });
});

// PUTS A LINE THROUGH THE CLICKED ITEM
complete.addEventListener('click', () => {
    console.log('all completed');
    listsecond.forEach(item => {
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


listsecond.forEach((item) => {
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


additem.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'something new to do';
    ul.append(li);
    // ul.prepend(li);
});


// *CHECKING OFF ITEMS FROM THE LIST*
// This cycles all of the li tags
items.forEach(item => {
    // Adding a click event to an itteration
    item.addEventListener('click', e => {

        // BELOW IS THE 'NON CSS' WAY TO PUT A LINE THROUGH THE
        // LIST ITEM.
        // e.target.style.textDecoration = 'line-through';

        //Push the current li tag to a new array
        removed.push(e.target);

        //Delete current li tag from "items"(the ul)
        e.target.remove();

        // logging the removed tags
        console.log(removed);
    });
});

// *RESTORE BUTTON*

// Accessing the new array
restore.addEventListener('click', (e) => {
    removed.forEach(item => {
        // adding all items from Restore to ul.

        ul.innerHTML += item.outerHTML;
        item.remove();
        // items += (item.outerHTML);
        console.log(removed);
        // console.log(items);
        let secondtime = document.querySelectorAll('li');
        secondtime.forEach(item => {
            item.addEventListener('click', e => {
                // This commented out code was causeing it to
                // keep adding to the output instead of just
                // restoring, it was creating a new double and
                // outputting that as well.
                // removed.push(e.target);
                e.target.remove();
                console.log(removed);
            });
        });
    });
    
});
// removed.forEach(item => {
//     restore.addEventListener('click', e => {
//        items.add(item);
//     });
// });

//*****************

// WARNING WARNING WARNING ===>>> this code will not work on
// items that are added to the list later. The css must be
// present in the actual html document in the head.

// STANDARD CODE KEEP SEPARATE
// Adds the list class to the list
// const list = document.querySelectorAll('li');
// list.forEach((list) => {
//     list.classList.add('list');
// });
// STANDARD CODE KEEP SEPARATE
//*****************
