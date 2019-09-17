$(window).on("load",function() {
  $(window).scroll(function() {
    $(".scroll-fade-large").each(function(){
      var y = $(this).offset().top - $(window).scrollTop() - $("#nav").height() - $(window).height()/15;
      var yWithOffset = (y - $(window).height()/6) / ($(window).height() - $(window).height()/2);
      var opacity = -(yWithOffset*yWithOffset) + 1;
  	  $(this).css("opacity", opacity);
    });
  }).scroll(); //invoke scroll-handler on page-load
});

$(window).on("load",function() {
  $(window).scroll(function() {
    $(".scroll-fade-small").each(function(){
      var y = $(this).offset().top - $(window).scrollTop() - $("#nav").height();
      var yWithOffset = (y - $(window).height()/2) / ($(window).height()/7 - $(window).height()/2);
      var opacity = -(yWithOffset*yWithOffset) + 1;
  	  $(this).css("opacity", opacity);
    });
  }).scroll(); //invoke scroll-handler on page-load
});

$(document).ready(function (){
    $("#link").click(function (){
        $('html, body').animate({
            scrollTop: $("#div1").offset().top
        }, 2000);
    });
});
