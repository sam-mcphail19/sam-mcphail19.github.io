$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
	var windowTop = $(this).scrollTop();
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
	  var objectTop = $(this).offset().top;
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
	  if(objectTop < windowTop){ //object goes out of view (scrolling up)
	    if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      } else { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
	  }
    });
  }).scroll(); //invoke scroll-handler on page-load
});