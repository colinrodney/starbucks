// $(window).on({
//   load: function () {
//     const WIDTH = window.matchMedia("(max-width: 767px)");
//     if (WIDTH.matches) {
//       console.log("mobile");
//     } else {
//       console.log("non-mobile");
//     }
//   },
// });

function init(mql) {
  // if screen loads @ less than 768px
  if (mql.matches) {
    console.log("< 768px");
    $(function () {
      // about us
      $(".section-elements").hide();
      $(".about-us__title").on({
        click: function () {
          $(".about-us__elements").slideToggle();
        },
      });

      // careers
      $(".careers__title").on({
        click: function () {
          $(".careers__elements").slideToggle();
        },
      });
      // social impact
      $(".social-impact__title").on({
        click: function () {
          $(".social-impact__elements").slideToggle();
        },
      });
      // for business partners
      $(".business-partners__title").on({
        click: function () {
          $(".business-partners__elements").slideToggle();
        },
      });
      // order + pcikup
      $(".order-pickup__title").on({
        click: function () {
          $(".order-pickup__elements").slideToggle();
        },
      });
    });
  }
  // if screen loads @ greater than 768px
  else {
    console.log(">768px");
    // about us
    $(".section-elements").show();
    $(".section-title").off("click");

    // careers
    // social impact
    // for business partners
    // order + pcikup
  }
}

// MediaQueryList object
const mql = window.matchMedia("(max-width: 768px)");
console.log(mql);

// call init() function @ runtime
init(mql);

// add init function as listener for state change
mql.addEventListener("change", init);
