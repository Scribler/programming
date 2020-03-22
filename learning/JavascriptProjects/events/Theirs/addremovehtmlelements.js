const ul = document.querySelector('ul');
// The below code would remove 'ul' and all the components that
// it contains. ==>
// ul.remove();

var items = document.querySelectorAll('li');
var backup = items;
const button = document.querySelector('#additem');
const restore = document.querySelector('#restore');
let removed = []
console.log(items);


// THIS MAKES THE 'BUTTON' ADD THE QUOTED TEXT TO UL
// BELOW IS Another way.
// button.addEventListener('click', () => {
//     ul.innerHTML += '<li>something new</li>';
//     items.outerHTML += '<li>something new</li>'
// });

// ALSO MAKES BUTTON ADD A NEW LI TO THE UL
// This also let you adjust styles lie li.style('style here')
// It gives you more power over the element before posting it.
// append
// prepend
button.addEventListener('click', () => {
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
