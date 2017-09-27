var pContainerHeight = $('.slider').height();

$(window).scroll(function(){

	var wScroll = $(this).scrollTop();

	// Landing Elements
	if(wScroll > $('.clothes-pics').offset().top - ($(window).height() / 1.2)) {

		$('.clothes-pics figure').each(function(i){

			setTimeout(function(){
				$('.clothes-pics figure').eq(i).addClass('is-showing');
			}, (700 * (Math.exp(i * 0.14))) - 700);
		});

	}
});
