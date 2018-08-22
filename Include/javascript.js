
$(document).ready(function () {

	// makes the board dropdown menu appear on hover
	$('ul.navbar-nav li.boards').hover(function() {
	  	$(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(100);
	}, function() {
	  	$(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(100);
	});

	//makes the accessories menu appear on hover
	$('ul.navbar-nav li.accessories').hover(function() {
	  	$(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(100);
	}, function() {
	  	$(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(100);
	});

	// increase and remove navbar size when dropdown-menu appears
	/*$('ul.navbar-nav li.accessories, ul.navbar-nav li.boards').on("mouseenter", function() {
		$('.navbar').addClass("increasepaddingacc")
	});

	$('ul.navbar-nav .dropdown-menu').on("mouseleave", function() {
		setTimeout(function() {
		$('.navbar').removeClass("increasepaddingacc");
   		}, 200);
	});*/


});
