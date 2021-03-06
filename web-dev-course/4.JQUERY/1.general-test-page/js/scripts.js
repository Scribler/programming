// LONG VERSION - same as: "$(function(){});"
$(document).ready(function(){ // check if page is loaded
});

// WRONG VERSION(doesn't check if page is loaded)
// $("p").hide(); // This does the same as above but isn't best practice

// SHORT VERSION
$(function(){ // check if page is loaded

  $("#disappear").click(function(){ // MAKES ALL PARAGRAPHS DISSAPEAR WHEN BUTTON CLICKED
    $("p").hide(); // hide all paragraphs on page
  });

  $("*").css("font-size", "16px");
  // $("div > p").css("text-align","center"); // center paragraphs that are children of divs
  $("div ~ p").css("text-align","center"); // center paragraphs that are siblings of divs
  // $("div p").css("text-align","center"); // center paragraphs that are siblings of divs

  $(".yellowbox").css("background-color", "purple"); // Selecting a 'class'

  // $("#facebook").css("background-color", "blue"); // Selecting a 'id'
  
  $("#facebook").css({
    'background-color' : 'blue',
    'color' : 'white',
    'padding' : '4px',
    'border' : '3px solid black',
  }); // Selecting a 'id' and adding multiple attributes
  

  $("#apple").css("background-color", "white"); // Selecting a 'id'
  $("#microsoft").addClass("jadd"); // Selecting a 'id'
  $(".orange").css("color", "orange");

  $("div.bluebox").css("font-family", "sans-serif"); // Selecting bluebox of div

  // Selecting two separate elements to apply the same styling
  // effects the paragraph that is the first child of its container
  $("div:nth-child(2), div > div:last-child").css("color", "#74E2FE");

  // Effects the paragraph that is the first child of its container
  $("div > div:last-child").css("text-decoration", "underline");

  $("[href]").css("color", "red"); // select anything with an 'href'
  $("a").css({
    color: "aqua",
    backgroundColor: "black"
  });

  $("li:first-child, li:last-child").css({ // list items
    backgroundColor: "grey",
    color: "yellow"
  });

// TABLES
  $("div:has(table)").css("background-color", "#D4FFFB");
  $("div:has(table)").css("text-align", "center");
  $(".brownbox").css("display", "flex");
  $(".brownbox").css("flex-direction", "column");
  $(".brownbox").css("align-items", "center");
  $(".brownbox").css("justify-content", "space-between");

  $("tr:even").css("background-color", "#bbf362"); // table row's even numbers set color
  $("tr:odd").css("background-color", "#9AFFBD"); // table row's odd numbers set color
  $("th").css("background-color", "yellow"); // table row's odd numbers set color

  $(":input").css("background-color", "#1da492");
  $(":Submit").css("background-color", "#B094FE");


});

console.log("Javascript is working to end");


console.log("Stop What You are doing. Are you Going to use this in real life?");
