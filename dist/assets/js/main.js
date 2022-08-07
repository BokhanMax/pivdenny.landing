// Slick Slider Video Carousel

$(document).ready(function(){
  $('.video__carousel').slick({
	  slidesToShow: 3,
	  slidesToScroll: 2,
	  dots:true,
	  customPaging : function(slider, i) {
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