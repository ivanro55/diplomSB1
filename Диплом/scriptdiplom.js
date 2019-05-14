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
	$("html").css({'overflow' : 'hidden',  'margin-right' : '17px'});
 });

$(".phone-icon").click(function() {
	$("#myPopup").css({'display' : 'block'});
 });

$(".feedback__button_delete").click(function() {
	$("#myPopup").css({'display' : 'none'});
	$("html").css({'overflow' : 'auto', 'margin-right' : '0' });
 });

$('.menu-icon').click(function() { 
	$('.header-menu_hidden').slideToggle();
});

$(function(){
  $("#user-phone").mask("+7(999) 999-99-99");
});
