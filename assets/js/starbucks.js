/*DO NOT DELETE THIS- THIS IS WORKING JQUERY CODE TO BE REFACTORED!!* */
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

// function to manage behavior @ widths >768px
function wideScreen(browserWidth) {
  console.log(">= 768px...");
  $(function () {
    $(".section-elements").show();
  });
}

/*init function runs mobile first styles + jquery library @ page laod .
- will call the wideScreenfunction if browserWidth does not meet condition
*/
function init(browserWidth) {
  // run jqeury - ONLY if browser width to be less than 768px!
  if (browserWidth.matches) {
    console.log("browser < 768px");
    // run jquery + hide section elements
    $(function () {
      $(".section-elements").hide();
    });
  } else {
    wideScreen(browserWidth);
  }
}

/* create function to trigger jquery */

/* hide section elements if browser width < 768px +// show section
  elements when section title is clicked */

// about us
// $(".about-us__title").click(function () {
//   $(".about-us__elements").slideToggle(function () {});
// });

// careers
// $(".careers__title").click(function () {
//   $(".careers__elements").slideToggle(function () {});
// });

// social impact
// $(".social-impact__title").click(function () {
//   $(".social-impact__elements").slideToggle(function () {});
// });

// business partners
// $(".business-partners__title").click(function () {
//   $(".business-partners__elements").slideToggle(function () {});
// });

// order and pickup
// $(".order-pickup__title").click(function () {
//   $(".order-pickup__elements").slideToggle(function () {});
// });

/* media query list objbect stores media query"max-width:768px...
for mobile first */
let browserWidth = window.matchMedia("(max-width: 767px)");
// console.log(browserWidth);

// invoke function
init(browserWidth);
// runJquery(browserWidth);

// eventListener added to mediaQueryList object to listen for changes in browser width
browserWidth.addListener(init); // addListener() deprecated? what replaced it?
