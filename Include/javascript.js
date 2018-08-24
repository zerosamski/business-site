
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

	//hover over the accesoires and boards images, makes it little bit grayed out
	$('.flex').hover(function() {
       $(this).animate({opacity: 0.5}, 500);
   	}, function() {
       $(this).animate({opacity: 1.0}, 500);
   	});


	$('.flex').on('click', function() { // bind click event to all images
    	$(this).toggleClass('enlarged')
 });

	// for fun instead of putting links in the html images, did it with jquery function, click goes to failure.html
   	/* $('.flex').on( 'click',function(){
     window.location.href = "failure.html";
    });*/

});
