function parallax(){
   title.style.top = -(window.pageYOffset / 5) + "px";
};
window.addEventListener("scroll", parallax, false);

$(".nav a").on("click", function() {
  var element = $(this).attr("href");
  var dist = $(element).offset().top;
  $("html, body").animate({"scrollTop": dist}, 1000);

  return false;
});
