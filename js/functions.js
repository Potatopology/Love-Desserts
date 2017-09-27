var pContainerHeight = $('.slider').height();

$(window).scroll(function(){

	var wScroll = $(this).scrollTop();

	// Promoscope
	if(wScroll > $('.large-window').offset().top - $(window).height()){

		$('.large-window').css({'background-position':'center '+ (wScroll - $('.large-window').offset().top) +'px'});

		var opacity = (wScroll - $('.large-window').offset().top + 400) / (wScroll / 5);

		$('.window-tint').css({'opacity': opacity});

	}

});
