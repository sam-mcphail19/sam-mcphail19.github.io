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

$(document).ready(function (){
    $("#link").click(function (){
        $('html, body').animate({
            scrollTop: $("#div1").offset().top
        }, 2000);
    });
});

(function($) {
  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */
  $.fn.visible = function(partial) {

      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height()-10,
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;

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
