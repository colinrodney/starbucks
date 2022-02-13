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
  }

  // hide section elements if browser width < 768px
  else {
    $(".section-elements").hide();
  }
}

/* media query list objbect */
const browserWidth = window.matchMedia("(min-width: 768px)");
// console.log(browserWidth);

// invoke runJquery function
runJquery(browserWidth);

// eventListener added to mediaQueryList object to listen for changes in browser width
browserWidth.addListener(runJquery); // addListener() deprecated? what replaced it?
