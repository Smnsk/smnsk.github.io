function parallax(){
   title.style.top = -(window.pageYOffset / 4) + "px";
};
window.addEventListener("scroll", parallax, false);

$(".nav a").on("click", function() {
  var element = $(this).attr("href");
  var dist = $(element).offset().top;
  $("html, body").animate({"scrollTop": dist}, 1000);
  return false;
});

$(".nav a").eq(0).addClass("active");

$(window).scroll(function() {
  var scrollPos = $(this).scrollTop();
	    $('.nav a').each(function () {
	        var currLink = $(this);
	        var refElement = $(currLink.attr("href"));
	        if (refElement.offset().top -5 <= scrollPos) {
	            $('.nav a').removeClass("active");
	            currLink.addClass("active");
	        }
	    });
});

$("input.date").on("change", function() {

	var slideId = "."+$(this).attr("id"),
		posX = $(slideId).offset().left,
		offset = $(document).width() - $(slideId).width(),
		left = (-1 * posX) + offset;

	$(".timeline-story").css({
		"margin-left": left+"px"
	});
});
