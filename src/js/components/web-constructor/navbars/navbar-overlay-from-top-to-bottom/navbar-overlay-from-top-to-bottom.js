import * as $ from "jquery";

export const navbarTopToBottom = () => {
  if (
    $(".ttb-menu-item-has-children").length > 0 ||
    $(".ig-ttb-dropdown").length > 0
  ) {
    $(".ttb-menu-item-has-children").attr("aria-haspopup", "true");
    $(".ig-ttb-dropdown-toggle").on("click", (e) => {
      e.preventDefault();
    });
  }

  $("#ttb-navbar-toggler-js").on("click", function () {
    $(this).toggleClass("ig-ttb-nav-is-active");
    $("#ttb-main-nav-overlay").toggleClass("ttb-nav-is-open");
  });

  if ($(".ig-dropdown-arrow-icon__container--js").length > 0) {
    const viewportWidth = window.innerWidth;
    const largerScreen = () => {
      $(".ig-ttb-dropdown").on("mouseenter", function () {
        $(".ig-dropdown-arrow-icon").addClass("ig-dropdown-arrow-icon__open");
      });
      $(".ig-ttb-dropdown").on("mouseleave", function () {
        $(".ig-dropdown-arrow-icon").removeClass(
          "ig-dropdown-arrow-icon__open"
        );
      });
    };

    const smallerScreens = () => {
      $(".ig-ttb-dropdown").on("focusin", function () {
        if ($(this).hasClass("ig-dropdown-arrow-icon__open")) {
          $(".ig-dropdown-arrow-icon").removeClass(
            "ig-dropdown-arrow-icon__open"
          );
        } else {
          $(".ig-dropdown-arrow-icon").addClass("ig-dropdown-arrow-icon__open");
        }
      });
      $(".ig-ttb-dropdown").on("focusout", function () {
        if (
          $(".ig-dropdown-arrow-icon").hasClass("ig-dropdown-arrow-icon__open")
        ) {
          $(".ig-dropdown-arrow-icon").removeClass(
            "ig-dropdown-arrow-icon__open"
          );
        }
      });
    };

    if (viewportWidth >= 992) {
      largerScreen();
    } else {
      smallerScreens();
    }



  }
};

export const makeNavbarTogglerAccessiblettb = () => {
  if ($("#ttb-navbar-toggler-js").length > 0) {
    var menuToggle = document.querySelector("#ttb-navbar-toggler-js");
    var enterKeyCode = 13;
    var spaceKeyCode = 32;

    menuToggle.addEventListener("keyup", function (event) {
      if (event.keyCode == enterKeyCode || event.keyCode == spaceKeyCode) {
        if ($("#ttb-navbar-toggler-js").hasClass("ig-ttb-nav-is-active")) {
          $("#ttb-navbar-toggler-js").removeClass("ig-ttb-nav-is-active");
          $("#ttb-main-nav-overlay").removeClass("ttb-nav-is-open");
        } else {
          $("#ttb-navbar-toggler-js").addClass("ig-ttb-nav-is-active");
          $("#ttb-main-nav-overlay").addClass("ttb-nav-is-open");
        }
      }
    });
  }
};
