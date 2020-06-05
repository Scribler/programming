// AJAX EXAMPLES



// This example uses an XMLHttpRequest


// These constants store the query
const verseChoose = document.querySelector('select');
const poemDisplay = document.querySelector('pre');
 
// This function uses a callback function to display the verse.
verseChoose.onchange = function() {
    const verse = verseChoose.value;
    updateDisplay(verse);
};

function updateDisplay(verse){
//The three items below reformat the option name into a file name so that it can 
//pull it from the poem file THAT FILE IS CALLED      'url'
  verse = verse.replace(" ", "");
  verse = verse.toLowerCase();
  url = verse + ".txt";

//
  let request = new XMLHttpRequest();
  request.open('GET', url);
  request.responseType = 'text';

  request.onload = function(){
  poemDisplay.textContent = request.response;
  };

  request.send();
  };

updateDisplay('Verse 1');
verseChoose.value = 'Verse 1';

// This example uses 'Fetch' (it is simpler)














