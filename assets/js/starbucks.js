// $(function () {
//   $(".section-title").css({
//     cursor: "pointer",
//   });
//   // hide .section elements
//   $(".section-elements").hide();

//   // slide down section elements when section title clicked/toggled
//   $(".about-us__title").click(function () {
//     $(".about-us__elements").slideToggle(function () {});
//   });
// });

/*DO NOT DELETE THIS- THIS IS WORKING JQUERY CODE TO BE REFACTORED!!* */

/* create function to trigger jquery */
function runJquery(browserWidth) {
  // unhide section elements if browser width >= 768px
  if (browserWidth.matches) {
    $(".section-elements").show();
  } else {
    /* hide section elements if browser width < 768px +// show section
  elements when section title is clicked */
    $(".section-elements").hide();

    // about us
    $(".about-us__title").click(function () {
      $(".about-us__elements").slideToggle(function () {});
    });

    // careers
    $(".careers__title").click(function () {
      $(".careers__elements").slideToggle(function () {});
    });

    // social impact
    $(".social-impact__title").click(function () {
      $(".social-impact__elements").slideToggle(function () {});
    });

    // business partners
    $(".business-partners__title").click(function () {
      $(".business-partners__elements").slideToggle(function () {});
    });

    // order and pickup
    $(".order-pickup__title").click(function () {
      $(".order-pickup__elements").slideToggle(function () {});
    });
  }
}

/* media query list objbect stores media query"min-width:768px... */
const browserWidth = window.matchMedia("(min-width: 768px)");
// console.log(browserWidth);

// invoke runJquery function
runJquery(browserWidth);

// eventListener added to mediaQueryList object to listen for changes in browser width
browserWidth.addListener(runJquery); // addListener() deprecated? what replaced it?
