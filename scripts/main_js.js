$(document).ready(function() {
	$('h1').click(function(event) {
		$('p').slideUp().slideDown();
	});
	$('h2').click(function(event) {
		$('p').toggleClass('test_orange');
	});

	$('h4').click(function(event) {
		$('p').slideToggle();
	});

	
});