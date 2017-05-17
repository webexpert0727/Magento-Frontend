(function($){

  $(".input-number-wrap .fa").on("click", function() {

    var $button = $(this);
    var oldValue = $button.parent('.input-number-wrap').find("input").val();
    

    if ($button.hasClass('fa-plus')) {
      var newVal = parseFloat(oldValue) + 1;
    } else {
     // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }
    }

    $button.parent().find("input").val(newVal);

  });
  $(document).ready(function(){ 
    $('#main-banner').each(function(){
      $(this).find('.bannerImage').hide();
      var _Bg = 'url('+ $(this).find('.bannerImage').attr('src') + ')';
      $(this).css("background-image", _Bg);
      $(this).find('.bannerImage').hide();
    });
    
  });

$('.shop-color li').each(function(){
            var DD = $(this).find('label').data('color');
            $(this).find('label').css('backgroundColor', DD);
        });

     $('.nav-stacked a').hover(function (e) {
          e.preventDefault()
          $(this).tab('show')
       });
       $('.menu-list a').each(function(){
        var $this =$(this);
      $this.hover(function(){
       var Src = $(this).data('src');
       console.log(Src);
       $(".img-part").find('img').attr('src', Src);
      })
      });

$('.user a').click(function(){
    $('.user-information').slideDown("300");
});
 $('.close2').click(function(){
        $('.user-information').slideUp(300);
 });

 $('.user1 a').click(function(){
    $('.user-information1').slideDown("300");
});
 $('.close2').click(function(){ 
        $('.user-information1').slideUp(300);
 });
    


  $(document).on("scroll", function(){
    if($(document).scrollTop() > 100){
      $("#header").addClass("shrink");
      //updateSliderMargin();
    }
    else
    {
      $("#header").removeClass("shrink");
      //updateSliderMargin();
    }
  });


$('.tours-expand').magnificPopup({
      type: 'inline',
      closeBtnInside:true, 
      preloader: true
      
    });  





$(document).ready(function() {
   $('.smheight').matchHeight();



      

});
var scrollTop = $(".scrollTop");

  $(window).scroll(function() {

    var topPos = $(this).scrollTop();

    if (topPos > 100) {
      $(scrollTop).css("opacity", "1");

    } else {
      $(scrollTop).css("opacity", "0");
    }

  }); // scroll END

  //Click event to scroll to top
  $(scrollTop).click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;

  });


  


   
// $('#tabbed-nav').zozoTabs({
//     animation: {
//         duration: 600,
//         effects: "slideV",
//         easing: "easeInQuad",
//         type: "css"
//     }    
// });


   $('ul.accordion').accordion();

$('#mm').sidr({
      name: 'sidr',
      displace :false,
      side: 'right' // By default
    });

    $('#mm2').sidr({
      name: 'sidr2',
      displace :false,
      side: 'right' // By default
    });

    $('.close-sidr').click(function(){
      $.sidr('close', 'sidr');
      $.sidr('close', 'sidr2');
    });



     $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });

$('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
      arrows: false,
    dots: false,
    vertical:true,
    centerMode: false,
    focusOnSelect: true
  });

$('.product-slider').owlCarousel({
          loop:true,
          animateIn: 'fadeIn',
          animateOut: 'fadeOut',
          margin:0,
          nav:true,
          dots:false,
          navText:["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"],
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:2,
                  margin:0,
              },
              1000:{
                  items:4
              }
          }
      });



})(jQuery);



