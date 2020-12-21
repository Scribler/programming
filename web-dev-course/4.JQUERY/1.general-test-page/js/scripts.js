// Long Version
$(document).ready(function(){ // check if page is loaded
  $("p").hide(); // hide all paragraphs on page
});

// Short Version
$(function(){ // check if page is loaded
  $("p").hide(); // hide all paragraphs on page
});

// Wrong Version (doesn't check if page is loaded)
$("p").hide(); // This does the same as above but isn't best practice
