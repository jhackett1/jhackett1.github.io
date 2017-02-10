$(document).ready(function() {
  // Check if the featured image container is in view, and if not, make the next-previous navigation visible
  $(window).scroll(function() {
    // Calculate vars
    var bottom_of_hero = $(".featured-image").offset().top + $(".featured-image").outerHeight();
    var top_of_screen = $(window).scrollTop();
    // Act on vars
    if(bottom_of_hero < top_of_screen){
        $(".previous-next").addClass("visible");
    } else{
        $(".previous-next").removeClass("visible");
    }
  });
});
