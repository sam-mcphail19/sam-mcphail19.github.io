$(window).on("load",function() {
  $(window).scroll(function() {
    $(".scroll-fade").each(function(){
      var y = $(this).offset().top - $(window).scrollTop() - $("#nav").height() - $(window).height()/15;
      var yWithOffset = (y - $(window).height()/5) / ($(window).height() - $(window).height()/3);
      var opacity = -(yWithOffset*yWithOffset) + 1;
  	  $(this).css("opacity", opacity);
      console.log($(this).get(0).tagName + " " + y + " " + opacity);
    });
  }).scroll(); //invoke scroll-handler on page-load
});
