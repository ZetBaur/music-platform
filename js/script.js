$(document).ready(function () {

	

	$('.header__burger').on('click', function(){
		$('.header__list').slideToggle();
	});

	// =========== menu-items =========================


	$('.header__link').on("click", function (event) {
		$('.header__link').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});

	// =========== aside menu links  =========================


	$('.aside__content-title').on("click", function () {
		$(this).toggleClass('active');
	});


	// =========== aside-spoiler =========================



	
		$('.left-side__title, .projector__title, .bottom-row__title').click(function() {
		
			$(this).next().slideToggle(300);
		});

// ===========inner spoiler=====================================

		$('.note').click(function(event) {
			event.preventDefault();
		
			$(this).toggleClass('active').next().slideToggle(300);
		});
	// =========== upper-slider ====================

	$('.upper-slider').slick({

		prevArrow:'<button type="button" class="slick-prev"></button>',
		nextArrow:'<button type="button" class="slick-next"></button>',
		dots: true,
		autoplay:true,
		autoplaySpeed: 3000,
	  });

	// =========== second-slider ====================
	$('.lower-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow:'<button type="button" class="slick-prev"></button>',
		nextArrow:'<button type="button" class="slick-next"></button>',

		responsive: [
			{
			  breakpoint: 992,
			  settings: {
				slidesToShow: 1,
				
				
			  }
			}
			
		
		
		  ]
	  });
// =========================================

$('.player-item').click(function(event) {
	event.preventDefault();
	$('.player-item').removeClass('playing');
	$(this).toggleClass('playing');

});


// ==============bottom-row================================
$('.bottom-row__right-img').click(function(event) {
	event.preventDefault();
	$('.bottom-row__right-img').removeClass('active');
	$(this).toggleClass('active');

});
	

});