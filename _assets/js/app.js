$(document).foundation();


// fade in page content divs on scroll
new WOW().init();

	    
// hamburger/brand scripts not for sham modal pages
if (!$('body').hasClass('sham-modal')) {
	
	// hamburger animation
	function togglescroll() {
	  $('body').on('touchstart');
	}
	
	$(document).ready(function() {
	  togglescroll()
	  $(".icon").click(function() {
	    $(".mobilenav").fadeToggle(500);
	    $(".top-menu").toggleClass("top-animate");
	    $("body").toggleClass("noscroll");
	    $(".mid-menu").toggleClass("mid-animate");
	    $(".bottom-menu").toggleClass("bottom-animate");
	  });
	});
	
	// hamburger color over dark/light panels
	var stickyOffset = $("#hamburger").offset();
	var $contentDivs = $(".content");
	$(document).scroll(function() {
		$contentDivs.each(function(k) {
			var _thisOffset = $(this).offset();
			var _actPosition = _thisOffset.top - $(window).scrollTop();
			if (_actPosition < stickyOffset.top && _actPosition + $(this).height() > 0) {
				$("#hamburger").removeClass("light dark").addClass($(this).hasClass("light") ? "light" : "dark");
				return false;
			}
		});
	});		
	
	// animate brand div on scroll
	$(document).scroll(function(){
		$('#brand').toggleClass('scrolled', $(this).scrollTop() > 1);
	});
}

// preloader
$(window).load(function() { 
	$("#preloader").delay(2000).fadeOut("slow"); 
})

// scroll to top
$('.up').click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 600);
    return false;
});

