$(function () {
  $(".section-title").css({
    cursor: "pointer",
  });
  // hide .section elements @ page load
  $(".section-elements").hide();

  // slide down section elements when section title clicked
  $(".section-title").click(function () {
    $(".section-elements").slideToggle(function () {});
  });
});

// something..
// let x = window.innerWidth;
// console.log(x);
