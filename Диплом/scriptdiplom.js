$('.slider').slick({
	infinite: true,
	dots: true,
	nextArrow: '.arrow_right', 
	prevArrow: '.arrow_left', 
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
	    {
	      breakpoint: 1179,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 760,
	      settings: {
	        slidesToShow: 1,
	      }
	    }
    ]
});

$(".btn").click(function() {
	$("#myPopup").css({'display' : 'block'});
	$("html").css({'overflow' : 'hidden'});
 });

$(".phone-icon").click(function() {
	$("#myPopup").css({'display' : 'block'});
 });

$(".feedback__button_delete").click(function() {
	$("#myPopup").css({'display' : 'none'});
	$("html").css({'overflow' : 'auto'});
 });

$('.menu-icon').click(function() { 
	$('.header-menu_hidden').slideToggle();
});