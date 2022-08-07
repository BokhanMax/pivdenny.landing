// Slick Slider Video Carousel

$(function(){
  $('.video__carousel').slick({
	  lazyLoad: 'onDemand',
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  mobileFirst: true,
	  dots: true,
	  customPaging: function(slider, i) {
	  	return "<div class='square'></div>";
	  },
  });
});

// Smooth Scroll

$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});