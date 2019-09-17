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

$(window).on("load",function() {
  $(window).scroll(function() {
    $("#nav").each(function(){
      console.log($(window).scrollTop());
      console.log($(this).css("background-color"));
      if($(window).scrollTop() != 0){
        if($(this).css("background-color") === 'rgba(0, 0, 0, 0)'){
          $(this).animate({
            backgroundColor: 'rgba(255, 255, 255, 1)'
          });
        } else {
          return;
        }
      } else {
        if($(this).css("background-color") === 'rgba(0, 0, 0, 0)'){
          return;
        } else {
          $(this).animate({
            backgroundColor: 'rgba(255, 255, 255, 1)'
          }, 200);
        }
      }
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
