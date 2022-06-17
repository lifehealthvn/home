$(document).ready(function() {
	resizePanel();
	var carousel_change = $("#slide_home");
	carousel_change.owlCarousel({
		loop:true,
		items : 1,
		singleItem:true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplaySpeed: 1000,
		nav:true,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	});

	$('.project_sidebar').owlCarousel({
		loop:true,
		items : 1,
		singleItem:true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplaySpeed: 1000,
		nav:true,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	});
	$('.list_image_product').owlCarousel({
		loop:true,
		items : 1,
		singleItem:true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplaySpeed: 1000,
		nav:true,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	});

	$('#logo_partner').owlCarousel({
		navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		responsiveclass: true,
		margin: 30,
		autoplay: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			468: {
				items: 2,
				nav: true
			},
			768: {
				items: 4,
				nav: true
			},
			1000: {
				items: 5,
				nav: true,
				loop: true
			}
		}
	});
	$('.relate_product').owlCarousel({
		navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		responsiveclass: true,
		margin: 30,
		autoplay: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			468: {
				items: 2,
				nav: true
			},
			768: {
				items: 2,
				nav: true
			},
			1000: {
				items: 3,
				nav: true,
				loop: true
			}
		}
	});
	$('.list_news_home').owlCarousel({
		navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		responsiveclass: true,
		margin: 30,
		autoplay: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			468: {
				items: 2,
				nav: true
			},
			768: {
				items: 2,
				nav: true
			},
			1000: {
				items: 3,
				nav: true,
				loop: true
			}
		}
	});
});
$(window).resize(function() {
resizePanel();
});
/**
*
*/
function resizePanel() {
var w = $(window).width();
var h = $(window).height();
var dynamic_h = w*0.366;
$('.slider_panel').css('height', dynamic_h+'px');
}
