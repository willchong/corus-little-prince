$(document).ready(function() {

// 	var resizedHeight = $('.video').width();
// 	resizedHeight = resizedHeight*(635/992);
// 	$('.video').css('height', resizedHeight);

// 	var resizedWidth = $('.video').width();
// 	resizedWidth = resizedWidth*(703/992);
// 	$('.video-footer-container').css('width', resizedWidth);
	
	
	$(".nav-button").click(function(e) {
	    e.preventDefault();
	    var p = $(this).parent();
	    if (p.attr('href') == "rules.pdf") {
	        window.open('rules.pdf', '_blank');
	    } else {
	        window.location.href = p.attr('href');
	    }
	});

});

// $(window).on('resize', function() {

// 	var resizedHeight = $('.video').width();
// 	resizedHeight = resizedHeight*(635/992);
// 	$('.video').css('height', resizedHeight);

// 	var resizedWidth = $('.video').width();
// 	resizedWidth = resizedWidth*(703/992);
// 	$('.video-footer-container').css('width', resizedWidth);

// });

