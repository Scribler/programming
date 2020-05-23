let firstNames = ['John', 'Henry', 'Dale', 'Colin', 'Greg', 'Toby'];
let surNames = ['Jacobs', 'Earnhart', 'Cummings', 'Fritz'];
let strangeNames = ['Dorps', 'Quorps', 'Smellington', 'Frrrrp', 'haha', 'somethingelse'];
// function to send a greeting to whomever's name is typed in.
const greet = (name) => {
  console.log('hello ' + name);
  console.log(' ');
};

// function to match a list of first names with a list of last names.
// lets try injecting this into an unordered list.
const matchNames = (first, last) => {
  let f = 0;
  let l = 0;
  while(f < first.length && l < last.length){
    console.log(`<li>Try this name: ${first[f]} ${last[l]}</li>`);
    l++
      if(l >= last.length) {
        f++
        l = 0;
        console.log(' ');
        console.log(' ');
      };
    };
  };

// FUNCTION DECLARATIONS
greet('Steven');
matchNames(firstNames, surNames);
matchNames(firstNames, strangeNames);






