$(function () {
  $(".section-title").css({
    cursor: "pointer",
  });
  // hide .section elements
  $(".section-elements").hide();

  // slide down section elements when section title clicked
  $(".about-us__title").click(function () {
    $(".about-us__elements").slideToggle(function () {});
  });
});

/*DO NOT DELETE THIS- THIS IS WORKING JQUERY CODE TO BE REFACTORED!!* */
