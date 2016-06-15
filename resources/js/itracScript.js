$(document).ready(function(){
	
	
	/* Have the text change */
	
(function() {

    var quotes = $(".quotes");
    var quoteIndex = -1;
    
    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(1000)
            .delay(1000)
            .fadeOut(1000, showNextQuote);
    }
    
    showNextQuote();
    
})();
	
	
	var speed = 500; // fade speed
	var autoswitch = true; // auto slider options
	var autoswitchSpeed = 4000;
	
	//Add initial active class
	
	$('.slide').first().addClass('active');
	
	//Hide all slides
	
	$('.slide').hide();
	
	//show first slide
	
	$('.active').show();
	
	//
	
	$('.left-button').on('click',function(){
						
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':last-child')){
			$('.slide').first().addClass('active');
			
		}else{
			$('.oldActive').next().addClass('active');
		}
		
		$('oldActive').removeClass('oldActive');
		$('slide').fadeOut(speed);
		$('.active').fadeIn(speed);
		
		
	});
	
	
	//previous
	
		$('.right-button').on('click',function(){
						
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':first-child')){
			$('.slide').last().addClass('active');
			
		}else{
			$('.oldActive').prev().addClass('active');
		}
		
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
		
		
	});
	
	if(autoswitch==true){
			setInterval(function(){
					$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':last-child')){
			$('.slide').first().addClass('active');
			
		}else{
			$('.oldActive').next().addClass('active');
		}
		
		$('oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
				
			},autoswitchSpeed);
		}
	

	
	$('.js--header-logo').waypoint(function(direction){
					   
	$('.js--header-logo').addClass('animated fadeIn');			   
					   
}, {
	offset:'50%'
});
	
	
});