$(window).on("load",function() {
  $(window).scroll(function() {
    $(".scroll-fade").each(function(){
      var y = $(this).offset().top - $(window).scrollTop() - $("#nav").height() - $(window).height()/15;
      var yWithOffset = (y - $(window).height()/6) / ($(window).height() - $(window).height()/2);
      var opacity = -(yWithOffset*yWithOffset) + 1;
  	  $(this).css("opacity", opacity);
    });
  }).scroll(); //invoke scroll-handler on page-load
});

$(window).on("load",function() {
  $(window).scroll(function() {
    $("#nav").each(function(){
      if($(window).scrollTop() != 0){
        if(!$(this).hasClass('shadow')){
          $(this).addClass('shadow');
        }
      } else {
        if($(this).hasClass('shadow')){
          $(this).removeClass('shadow');
        }
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});

(function($) {
  $.fn.visible = function(partial) {

      var t = $(this),
          w = $(window),
          viewTop = w.scrollTop(),
          viewBottom = viewTop + w.height(),
          top = t.offset().top,
          bottom = top + t.height()-10,
          compareTop = partial === true ? bottom : top,
          compareBottom = partial === true ? top : bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };

})(jQuery);

$(window).scroll(function(event) {
  $(".slide-in-right").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("slide-in-right-animation");
    }
  });
});

function scrollToElement(element){
  $('html, body').animate({
        scrollTop: $(element).offset().top - $("#nav").height()*2
    }, 600);
}

function scrollToTop(){
  $('html, body').animate({
        scrollTop: 0
    }, 600);
}
