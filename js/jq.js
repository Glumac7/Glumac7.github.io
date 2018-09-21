function parallax(name, value = .5) {

	var parallaxElements = $(name),
    parallaxQuantity = parallaxElements.length;

	$(window).on('scroll', function () {

	window.requestAnimationFrame(function () {

		for (var i = 0; i < parallaxQuantity; i++) {
			var currentElement =  parallaxElements.eq(i);
			var scrolled = $(window).scrollTop();
				
				currentElement.css({
				'transform': 'translate3d(0,' + scrolled * + value + 'px, 0)'
				});
			}
		});
	});
}

$(document).ready(() =>
{	
	if ($('body').width() >= 991) 
	{
		parallax("#bg", .5);
		parallax("#main-headline", .35);
	}
	
	
	$("#loader").attr('class', 'puff-out-center');

	setTimeout(() =>{

		$("#loader").css({display: "none"});
		$("body").addClass('puff-in-center');
		$("nav").css({display: "flex"});
		$("main").css({display: "block"});
		setTimeout(() =>{$("body").removeClass('puff-in-center');},700);
	}, 700); 
	

	/*SCROLL DOWN BUTTON!*/
	$("a").on('click', function(event) 
	{
	    if (this.hash !== "") 
	    {
	      event.preventDefault();
	      var hash = this.hash;

	      $('html, body').animate(
	      {
	        scrollTop: $(hash).offset().top
	      }, 635, function()
	      {
	        window.location.hash = hash;
	      });
	    } 
	});

	
	$(window).scroll(function() 
	{
		/*ABOUT ME ANIMATIONS!*/
		/*--------------------*/
		/*VARIALBLE DECLARATION!*/
		$body_width = $('body').width();
		$body_height = $('body').height();

		/*IF NOT ON MOBILE!*/
	    if($(this).scrollTop() >= $body_height - 150 && $body_width > 800)
	    {
	    	/*ADD A CLASS TO A SPECIFIC SKILL BAR!*/
	    	for(var i = 1 ; i < 9 ; i++)
	    	{
	    		$(".progress:nth-child("+ i +")").children("div.progress-bar").addClass('prog' + i + '');
	    	}

			$('.progress').css({'display':'flex'});/*DISPLAY THE PROGRESS BARS!*/
	    	$('#skill-bar').addClass('fadeInRight');/*ADD AN ANIMATION TO THE SKILL BAR!*/
	    	$('#about-img').addClass('fadeInLeft');/*ADD AN ANIMATION TO THE IMAGE!*/
	    	$('#about-img, .about_me').css({'visibility': 'visible'});/*DISPLAY THE IMAGE AND THE TEXT BENEATH IT!*/
	    	$('.about_me').addClass('fadeInUp');/*ADD AN ANIMATION TO THE TEXT BENEATH THE IMAGE!*/

	    	
	    }
	    /*********************************************/
	    /*VARIALBLE DECLARATION!*/
		$about_height = $('#about').height() + $body_height;

	    /*PROJECTS ANIMATIONS!*/
	    if($(this).scrollTop() >= $about_height - 150 && $body_width > 800)
	    {
	    	$("#project-container").css({"opacity": "1"});
	    	$("div#project-container").addClass('fadeInUp');
	    }
	    /*********************************************/
	    /*ADD A CLASS TO A SPECIFIC CONTACT BUTTON!*/
	    $contact_height = $('#projects').height() + $about_height;

		if ($(this).scrollTop() >= $contact_height - 150) 
		{
			$("#map").addClass('fadeLeft');
			$("#map2").addClass('fadeRight');
		}
		if ($(this).scrollTop() >= $contact_height + 100) 
		{
		    for(var i = 1 ; i < 9 ; i++)
	    	{
	    		$(".icons:nth-child("+ i +")").addClass('fadeUp').css({"animation-delay": i/10+"s"});
	    	}
		}
   	});

	/*PROJECTS HOVER ANIMATION!*/
	if($('body').width() < 991)
	{
		$("figure").addClass("hover");
	}
  	else	
  	{
  		$(".hover").mouseleave(
			function () 
			{
	 			$(this).removeClass("hover");
			}
		);
  	}
});