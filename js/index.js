// // control the auto refresh rate -> 1000 = 1 second
var refreshRate = 60000; // 30 seconds


// Automatically reload the browser
setInterval(function() {
   window.location.reload();
}, refreshRate);

// Hide the images on load
$('#cover-img').hide();

// Get a random image from Unsplash and fade it in on load
$('#cover-img').css({
  // serves a random image from this collection on Unsplash.com
  'background-image': 'url(https://source.unsplash.com/collection/430468/1600x900)'
}).fadeIn(1500);