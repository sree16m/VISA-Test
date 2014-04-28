$(document).ready(function () {
	/* Add image to container B on click of image in container A */
	$('#containerA li').click (function() {
		var perName = $(this).attr('class').split(' ')[0];
		$(this).hide();
		$('#containerB ul').append('<li class="' +perName+ '"><span>' +perName+ '</span></li>');
		$('#containerB ul li').unbind("click");
		$('#containerB ul li').bind("click", function() {
			var per = $(this).attr('class').split(' ')[0];
			$('#containerA ul').find('li.' +per).show();
			$(this).remove();
		});
		
	});
	
	/* TODO: Remove images from container B on Reset */
});