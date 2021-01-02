console.log("Font-size is different because of javascript. It's not a css problem. ;)")
// Long Version
//
// $(document).ready(function(){ // check if page is loaded
  // $("p").hide(); // hide all paragraphs on page
// });


// Short Version
$(function(){ // check if page is loaded
  $("*").css("font-size", "16px");
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

$("tr:even").css("background-color", "#bbf362");
$("tr:odd").css("background-color", "#811c90");

$(":input").css("background-color", "#1da492");
$(":Submit").css("background-color", "#B094FE");

$("div:has(table)").css("background-color", "#AFFFF5");

});









// Wrong Version (doesn't check if page is loaded)
// $("p").hide(); // This does the same as above but isn't best practice
