$(document).ready(function() {
	$('.Menu img').click(function(){
		$('.menuSlide').toggleClass('slideOpen');
		$(this).toggleClass('fadeHide');
		$('.menuSlide img').toggleClass('fadeHide');
	});
});