

$(function(){

	$('.header h1').fitText( 1.3, { minFontSize: 40 } );
	$('.header h2').fitText( 3.1, { minFontSize: 20 } );


	$('.more-info h3').fitText( 2, { minFontSize: 30 } );
	$('.more-info p').fitText( 2.5, { minFontSize: 20 } );

	$('.rate-display h2').fitText( 0.2, { matchMedia: 'only screen and (min-width: 768px)' } );

	$('.footer-bar').fitText( 3.3, { matchMedia: 'only screen and (min-width: 768px)', maxFontSize: 40 });

});

