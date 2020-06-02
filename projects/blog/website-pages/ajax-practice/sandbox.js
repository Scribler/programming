// AJAX EXAMPLES



// This example uses an XMLHttpRequest

const verseChoose = document.querySelector('select');
const poemDisplay = document.querySelector('pre');
  

verseChoose.onchange = function() {
    const verse = verseChoose.value;
    updateDisplay(verse);
};

function updateDisplay(verse){

  verse = verse.replace(" ", "");
  verse = verse.toLowerCase();
  url = verse + ".txt";
  
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














