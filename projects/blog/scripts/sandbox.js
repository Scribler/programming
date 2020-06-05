var person = {fname:'Joe', lname:'Jameson', age:44, occupation:'Millwright'};

var text = "";
var x;



for(i = 0; i < 8; i++){
  console.log(i);
}


for(x in person){
  text += "<li>" + person[x] + "</li>" + "<br>";
}

document.getElementById('blogs').innerHTML = text;
console.log(text)


// TARGET -> LIST ITEMS (containing name)







