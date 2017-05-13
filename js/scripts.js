

(function($){
	$(document).ready(function(){	
		$('#main-banner').each(function(){
			$(this).find('.bannerImage').hide();
			var _Bg = 'url('+ $(this).find('.bannerImage').attr('src') + ')';
			$(this).css("background-image", _Bg);
			$(this).find('.bannerImage').hide();
		});
		
	});

	$(document).ready(function(){	
		$('.category-banner').each(function(){
			$(this).find('.bannerImage').hide();
			var _Bg = 'url('+ $(this).find('.bannerImage').attr('src') + ')';
			$(this).css("background-image", _Bg);
			$(this).find('.bannerImage').hide();
		});

		 $('.nav-stacked a').hover(function (e) {
          e.preventDefault()
          $(this).tab('show')
       });
		   $('.menu-list a').each(function( ){
		   	var $this =$(this);
			$this.hover(function(){
			 var Src = $(this).data('src');
			 console.log(Src);
			 $(".img-part").find('img').attr('src', Src);
			})
			});

		
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


})(jQuery);

