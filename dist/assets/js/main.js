// Slick Slider Video Carousel

$(function(){
  $('.video__carousel').slick({
	lazyLoad: 'onDemand',
	mobileFirst: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	mobileFirst: true,
	dots: true,
	responsive: [{
    breakpoint: 415,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1
    }
  }],
	customPaging: function(slider, i) {
		return "<div class='square'></div>";
	},
  });
});

// Smooth Scroll

// $(document).ready(function(){
//  $("a").on('click', function(event) {
//    if (this.hash !== "") {
//      event.preventDefault();
//      var hash = this.hash;
//      $('html, body').animate({
//        scrollTop: $(hash).offset().top
//      }, 800, function(){
//        window.location.hash = hash;
//      });
//    }
//  });
//});


// Animate

if ('IntersectionObserver' in window) {
	let iObserver = new IntersectionObserver(function(entries) {
		entries.forEach(function (currentValue, index) {
			if (currentValue.isIntersecting === true) {
				let cont = $(currentValue.target);
				if (!cont.hasClass('js--loaded')) {
								cont.addClass('js--loaded');
					cont.css('opacity', '1');
				}
			}
		})
	}, {threshold: [0]});

	$('div').each(function () {
		$(this).css('opacity', '0').css('transition', 'opacity 1s');
		iObserver.observe(this);
	});
} else {
	// по старинке
}