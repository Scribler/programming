// Long Version
// $(document).ready(function(){ // check if page is loaded
  // $("p").hide(); // hide all paragraphs on page
// });

// Short Version
$(function(){ // check if page is loaded
  // $("p").hide(); // hide all paragraphs on page
  $("*").css("font-size", "18px");
  // $("div > p").css("text-align","center"); // center paragraphs that are children of divs
  // $("div ~ p").css("text-align","center"); // center paragraphs that are siblings of divs
  $("div p").css("text-align","center"); // center paragraphs that are siblings of divs
  $(".yellowbox").css("background-color", "purple");
  $("#great").css("background-color", "yellow");
  $(".orange").css("color", "orange");
  $("div.bluebox").css("font-family", "sans-serif");
  
  $("div:nth-child(2), div > div:last-child").css("color", "#74E2FE"); // effects the paragraph that is the first child of its container
  // $("div > div:last-child").css("text-decoration", "underline"); // effects the paragraph that is the first child of its container
});

// Wrong Version (doesn't check if page is loaded)
// $("p").hide(); // This does the same as above but isn't best practice
