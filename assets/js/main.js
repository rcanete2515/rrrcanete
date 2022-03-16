$(document).ready( function() {

  AOS.init();

  $('.first-button').on('click', function () {
    $('.animated-icon1').toggleClass('open');
  });

  $('.second-button').on('click', function () {
    $('.animated-icon2').toggleClass('open');
  });

  $('.third-button').on('click', function () {
    $('.animated-icon3').toggleClass('open');
  });



$('a[href^="#"]:not([data-toggle]):not([data-slide])').click(function () {
        
  if ($(window).width() >= 1200) {

      $('html, body').animate({
          scrollTop: $($(this).attr('href')).offset().top - 20
      }, 500);

  } else {

      $('html, body').animate({
          scrollTop: $($(this).attr('href')).offset().top - 30
      }, 500);

  }

  return false;

});


$('nav a[href^="#"]:not([data-toggle]):not([data-slide])').click(function () {
        
  $(".navbar-nav").find(".active").removeClass("active");
  $(this).parent().addClass("active");
  $(".navbar").find(".collapse").removeClass("in");

  if ($(window).width() <= 1199) {
      $('.navbar-toggler').trigger('click');
      
  } 

  $(".navbar-toggle").addClass("collapsed");

  return false;

});



// header scroll animation        
  var scroll_start = 0;
  var startchange = $('#startchange');
  var offset = startchange.offset();
  if (startchange.length){
    $(document).scroll(function() { 
    scroll_start = $(this).scrollTop();
    if ( $(window).width() >= 1200 ) {
      if(scroll_start > offset.top) {
        $("nav").addClass('navslide');

      } else {
        $("nav").removeClass('navslide');
      }
    }
    });
  }

  var sectionIds = $('a.nav-link');

  $(document).scroll(function(){
      sectionIds.each(function(){

          var container = $(this).attr('href');
          var containerOffset = $(container).offset().top;
          var containerHeight = $(container).outerHeight();
          var containerBottom = containerOffset + containerHeight;
          var scrollPosition = $(document).scrollTop();
  
          if(scrollPosition < containerBottom - 30 && scrollPosition >= containerOffset - 30){
              $(this).addClass('active');
          } else{
              $(this).removeClass('active');
          }
  
  
      });
  });

});

