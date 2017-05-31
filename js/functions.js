$(document).ready(function() {

  // Function to lazily load in alternate images on home page slider
  function lazyHero(){
    document.querySelectorAll('section.hero figure.slideshow div').forEach(function(slide, iterator){
      // Don't lazily load the first slide, only later ones
      if (iterator < 3) {
        // Create the delay based on current loop iteration
        setTimeout(function(){
          // Do the magic
          slide.style.backgroundImage = "url("+ slide.getAttribute('data-image-src') +")";
        }, iterator*1000)
      }
    });
  }

  // Animate in next/prev thingy
  function nextPrevHandler(){
    // Grab the elements
    var element = document.querySelector('.featured-image');
    var nextPrev = document.querySelector('.previous-next');
    // If element is off the top of the viewport
    if (element.getBoundingClientRect().bottom < 0) {
      nextPrev.classList.add('visible');
    } else {
      nextPrev.classList.remove('visible');
    }
  }

  // Function to load in images
  function lazyLoadHandler(){
    // Lazy-loading images
    document.querySelectorAll('article.category-tile div.image-holder').forEach(function(element){
      // If the image is in view, load it in
      if (element.getBoundingClientRect().top > 0 && document.documentElement.clientHeight > element.getBoundingClientRect().top ) {
        // Do the magic
        element.style.backgroundImage = "url("+ element.getAttribute('data-image-src') +")";
        // Add the class to fade in the newly loaded image
        if (element.classList == "image-holder") {
          element.classList.add('loaded');
        }
      }
    })
  }

  // Initial actions on page load
  lazyLoadHandler();
  lazyHero();

  // // Scroll event handler for multiple functions
  window.addEventListener('scroll', function(){
    lazyLoadHandler();
    nextPrevHandler();
  })

});
