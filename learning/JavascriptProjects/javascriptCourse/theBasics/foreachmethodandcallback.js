// callbacks & foreach
// callback functions are previously writen functions passed as parameters.

const myFunc = (callbackFunc, multiple) => {
    // do something
    let value = 50;
    console.log(callbackFunc(value) * 4);
};

myFunc(value => {
    value = value / 10;
    return value;
});

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

people.forEach((people, index) => {
    people = people.toUpperCase();
    // index is the location in the array.
    console.log(`${index} - Hello ${people}`);
});

//Below is the way to do it with a callback method.

const logPerson = (people, index) => {
    people = people.toUpperCase();
    console.log(`${index} -- Howdy doody ${people}!`);
};

people.forEach(logPerson);