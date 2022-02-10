$(function () {
  $(".section-title").css({
    cursor: "pointer",
  });
  // hide .section elements
  $(".section-elements").hide();

  // slide down section elements when section title clicked
  $(".section-title").click(function () {
    $(".section-elements").slideToggle(function () {});
  });
});
