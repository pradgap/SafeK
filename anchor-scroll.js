$(document).ready(function(){
	$('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 400);
        return false;
    });
});