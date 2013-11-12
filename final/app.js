$(document).ready(function(){
	$('.one').click(function(){
		$('div.words').parent().removeClass('grid-35', 'grid-20').addClass('grid-70');
		$('div.first').css('font-size', '27px');
	});
	$('.two').click(function(){
		$('div.words').parent().removeClass('grid-70', 'grid-20').addClass('grid-35');
		$('div.first').css('font-size', '18px');
		$('div.second').css('display', '').css('font-size', '18px')
	});

	$('.three').click(function(){
		$('div.words').parent().removeClass('grid-35', 'grid-70').addClass('grid-20');
		/*$('div.third').css('display', '').css('font-size', '18px');
		$('div.second').css('display', 'auto');*/
	});
});