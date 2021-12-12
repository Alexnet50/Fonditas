$(document).ready(function() {
    $('.header-burger').click(function(event) {
        $('.header-burger,.header-nav').toggleClass('active');
        $('body').toggleClass('lock');
    })
})

$(document).ready(function() {
    $('.slick-slider').slick({
        dots: false,        
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 4,
        variableWidth: true,        
        responsive: [
          {
            breakpoint: 1124,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }          
        ]
      });
  });

  $(document).ready(function() {
    $('.slider-fondas').slick({
        dots: false,        
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 2,
        variableWidth: true, 
        arrows: true,       
        prevArrow: ('#arrow-left'),
        nextArrow: ('#arrow-right'),
        responsive: [
          {
            breakpoint: 1900,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 2,
              infinite: true,
              prevArrow: ('#arrow-left'),
              nextArrow: ('#arrow-right'),
              dots: true
            }
          },
          {
            breakpoint: 1124,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite: true,
              prevArrow: ('#arrow-left'),
              nextArrow: ('#arrow-right'),
              dots: true
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              prevArrow: ('#arrow-left-hid'),
              nextArrow: ('#arrow-right-hid')
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              prevArrow: ('#arrow-left-hid'),
              nextArrow: ('#arrow-right-hid')
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              prevArrow: ('#arrow-left-hid'),
              nextArrow: ('#arrow-right-hid')
            }
          }          
        ]
      });
  });


  var scrolled;
  window.onscroll = function() {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 1){
        $(".header .container-xl .background-xl").css({"background": "white"})
        $(".header-content .logo").css({"color": "black"})
        $(".header-content a").css({"color": "black"})
        $(".header-content a:visited").css({"color": "black"})
    }
    if(400 > scrolled){
        $(".header .container-xl .background-xl").css({"background": "#5EAE53"})
        $(".header-content .logo").css({"color": "white"})
        $(".header-content a").css({"color": "white"})
        $(".header-content a:visited").css({"color": "white"})         
    }
  }


  $(document).ready(function() {
    $('.hamburger').click(function(event) {
        $('.hamburger').toggleClass('is-active');
        $('body').toggleClass('lock');
        $('.header-nav').toggleClass('active');
        $('.header-buttons').toggleClass('active');
    })
})