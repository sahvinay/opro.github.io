/*---------------------------------------------------------
* Template Name    : Kaylee | Responsive Personal Template
* Author           : CasanovasThemes
* Version          : 1.0
* Created          : April 2020
* File Description : Easing Scroll Options JS file
*----------------------------------------------------------
*/
$(document).ready(function() {
  "use strict";
  //---- Smooth Scrolling on click menu:----//
  if (window.innerWidth >1050) {
    var waitingTimeScroll = 0;
  }else{
    var waitingTimeScroll = 600;
  }
  //All the links:
  $('a[href^="#"]').on("click",smoothScroll);
  function smoothScroll(event) {
      event.preventDefault();
      var target = $(this.getAttribute('href'));
      if( target.length ) {
        setTimeout(function(){ 
          $('html, body').stop().animate({
              scrollTop: target.offset().top-0
          }, 2000, "easeInOutExpo");
        }, waitingTimeScroll);
      } 
      return false; 
  }
});