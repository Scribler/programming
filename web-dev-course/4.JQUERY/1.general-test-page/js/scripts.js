
// Long Version
//
// $(document).ready(function(){ // check if page is loaded
  // $("p").hide(); // hide all paragraphs on page
// });


// Short Version
$(function(){ // check if page is loaded
  $("*").css("font-size", "18px");
  // $("div > p").css("text-align","center"); // center paragraphs that are children of divs
  $("div ~ p").css("text-align","center"); // center paragraphs that are siblings of divs
  // $("div p").css("text-align","center"); // center paragraphs that are siblings of divs

// Selecting a 'class'
  $(".yellowbox").css("background-color", "purple");
// Selecting a 'id'
  $("#great").css("background-color", "yellow");
  $(".orange").css("color", "orange");

// Selecting bluebox of div
  $("div.bluebox").css("font-family", "sans-serif");

// Selecting two separate elements to apply the same styling
// effects the paragraph that is the first child of its container
  $("div:nth-child(2), div > div:last-child").css("color", "#74E2FE");

// Effects the paragraph that is the first child of its container
  // $("div > div:last-child").css("text-decoration", "underline"); 

// select anything with an 'href'
  $("[href]").css("color", "red");
  $("a").css({
    color: "aqua",
    backgroundColor: "black"
  });

// list items
  $("li:first-child, li:last-child").css({
    backgroundColor: "grey",
    color: "yellow"
  });
});









// Wrong Version (doesn't check if page is loaded)
// $("p").hide(); // This does the same as above but isn't best practice
