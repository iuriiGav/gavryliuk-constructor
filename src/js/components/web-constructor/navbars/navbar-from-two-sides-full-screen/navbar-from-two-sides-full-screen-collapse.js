import * as $ from "jquery";

const BREAKPOINT_WIDTH = 992;
let VIEWPORT_WIDTH = window.innerWidth;

export const navbarFromTwoSidesFullScreenCollapse = () => {
  if (
    $(".ftsc-menu-item-has-children").length > 0 ||
    $(".ig-ftsc-dropdown").length > 0
  ) {
    preventDefaultOnDropdownBtn();
  }

  toggleNavOpenClass();

  if ($(".ig-dropdown-arrow-icon__container--js").length > 0) {
    if (VIEWPORT_WIDTH >= BREAKPOINT_WIDTH) {
      dropdownIconBehaviourOnHover();
    } else {
      dropdownIconBehaviourOnFocus();
    }
  }

  if ($(".ig-ftsc-dropdown-menu").length > 0) {
    setWidthOfDropdownUL();
    changeDropdownClassesOnWindowResize();
  }
};

export const makeNavbarTogglerAccessibleftscCollapse = () => {
  if ($("#ftsc-navbar-toggler-js").length > 0) {
    var menuToggle = document.querySelector("#ftsc-navbar-toggler-js");
    var enterKeyCode = 13;
    var spaceKeyCode = 32;

    menuToggle.addEventListener("keyup", function (event) {
      if (event.keyCode == enterKeyCode || event.keyCode == spaceKeyCode) {
        if ($("#ftsc-navbar-toggler-js").hasClass("ig-ftsc-nav-is-active")) {
          $("#ftsc-navbar-toggler-js").removeClass("ig-ftsc-nav-is-active");
          $("#ftsc-main-nav-overlay").removeClass("ftsc-nav-is-open");
        } else {
          $("#ftsc-navbar-toggler-js").addClass("ig-ftsc-nav-is-active");
          $("#ftsc-main-nav-overlay").addClass("ftsc-nav-is-open");
        }
      }
    });
  }
};

// Functions

const preventDefaultOnDropdownBtn = () => {
  $(".ftsc-menu-item-has-children").attr("aria-haspopup", "true");
  $(".ig-ftsc-dropdown-toggle").on("click", (e) => {
    e.preventDefault();
  });
};

const toggleNavOpenClass = () => {
  $("#ftsc-navbar-toggler-js").on("click", function () {
    $(this).toggleClass("ig-ftsc-nav-is-active");
    $("#ftsc-main-nav-overlay").toggleClass("ftsc-nav-is-open");
    setTimeout(() => {
      $(".ig-ftsc-main-nav-overlay").toggleClass("overflowY-scroll");
    }, 350);
  });
};

// dropdown icon behaviour



const dropdownIconBehaviourOnHover = () => {

 

  $(".ig-ftsc-dropdown").on("mouseenter", actionOnMouseIn)
  $(".ig-ftsc-dropdown").on("mouseleave", actionOnMouseLeave);
};




const dropdownIconBehaviourOnFocus = () => {


  $(".ig-ftsc-dropdown").on("focusin", actionOnFocusIn);
  $(".ig-ftsc-dropdown").on("focusout", actionOnFocusOut);
};

const setWidthOfDropdownUL = () => {
  if (VIEWPORT_WIDTH >= BREAKPOINT_WIDTH) {
    let maxWidth = 0;
    let $element;
    const navItemInDropdown = $(".ig-ftsc-dropdown-menu").children();
    navItemInDropdown.each(function () {
      $element = $(this);
      if ($element.width() > maxWidth) {
        maxWidth = $element.outerWidth();
      }
    });
    $(".ig-ftsc-dropdown-menu").css("width", `${maxWidth + 200}px`);
  }
};

const changeDropdownClassesOnWindowResize = () => {
$(window).on("resize", () => {
    console.log("resizing")
    $(".ig-ftsc-dropdown").off("mouseenter", actionOnMouseIn)
    $(".ig-ftsc-dropdown").off("mouseleave", actionOnMouseLeave);
  
    $(".ig-ftsc-dropdown").off("focusin", actionOnFocusIn);
    $(".ig-ftsc-dropdown").off("focusout", actionOnFocusOut);
    if(window.innerWidth < BREAKPOINT_WIDTH) {
        dropdownIconBehaviourOnFocus()
    } else {
        dropdownIconBehaviourOnHover()
    }
})
}
















////////////////////////////////////////////////////// event listeners ///////////////////////////////////

const actionOnFocusIn = () => {
    if (!$(".ig-ftsc-dropdown-menu").hasClass("ig-ftsc-dropdown__open-on")) {
        $(".ig-ftsc-dropdown-menu").addClass(
          "ig-ftsc-dropdown__open-on ig-ftsc-dropdown__open-on--click"
        );
      }
  
      if ($(this).hasClass("ig-dropdown-arrow-icon__open")) {
        $(".ig-dropdown-arrow-icon").removeClass("ig-dropdown-arrow-icon__open");
      } else {
        $(".ig-dropdown-arrow-icon").addClass("ig-dropdown-arrow-icon__open");
      }
}


const actionOnFocusOut = () => {
    if ($(".ig-ftsc-dropdown-menu").hasClass("ig-ftsc-dropdown__open-on")) {
        $(".ig-ftsc-dropdown-menu").removeClass(
          "ig-ftsc-dropdown__open-on ig-ftsc-dropdown__open-on--click"
        );
      }
  
      if ($(".ig-dropdown-arrow-icon").hasClass("ig-dropdown-arrow-icon__open")) {
        $(".ig-dropdown-arrow-icon").removeClass("ig-dropdown-arrow-icon__open");
      }
}

const actionOnMouseIn = () => {
       
    $(".ig-dropdown-arrow-icon").addClass("ig-dropdown-arrow-icon__open");
    $(".ig-ftsc-dropdown-menu").addClass(
      "ig-ftsc-dropdown__open-on ig-ftsc-dropdown__open-on--hover"
    );
}

const actionOnMouseLeave = () => {
$(".ig-dropdown-arrow-icon").removeClass("ig-dropdown-arrow-icon__open");
$(".ig-ftsc-dropdown-menu").removeClass(
  "ig-ftsc-dropdown__open-on ig-ftsc-dropdown__open-on--hover"
);
}