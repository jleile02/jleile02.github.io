//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");

//An image to overlay
$overlay.append($image);

//Add overlay
$("body").append($overlay);
  //A caption

//Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  //Update overlay with the image linked in the link
  $image.attr("src", imageLocation);
  
  //Show the overlay.
  $overlay.show();
  
  //Get child's alt attribute and set caption


});

//When overlay is clicked
$overlay.click(function(){
  //Hide the overlay
  $overlay.hide();
});


$option.prop({
  'selected' : true
});


function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
    // gradiant background slides..../
const slides = document.querySelectorAll('.slide');

let active = 0;

function change(){
  active++;
  active = active%slides.length;
  slides.forEach((slide, index) => {
    if (index === active){
      slide.style.zIndex = 0;
      slide.style.opacity = 1;
    } else if (index === active - 1){
      slide.style.zIndex = -1;
      slide.style.opacity = 1;
    } else {
      slide.style.opacity = 0;
      slide.style.zIndex = -2;
    }
  });
}

change();

setInterval(change, 4500);