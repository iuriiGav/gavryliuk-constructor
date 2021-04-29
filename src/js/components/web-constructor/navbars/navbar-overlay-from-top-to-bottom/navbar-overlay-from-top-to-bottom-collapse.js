import * as $ from "jquery";

const BREAKPOINT_WIDTH = 992;
let VIEWPORT_WIDTH = window.innerWidth;

export const navbarTopToBottomCollapse = () => {
  if (
    $(".ttbc-menu-item-has-children").length > 0 ||
    $(".ig-ttbc-dropdown").length > 0
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

  if ($(".ig-ttbc-dropdown-menu").length > 0) {
    setWidthOfDropdownUL();
    changeDropdownClassesOnWindowResize();
  }
};

export const makeNavbarTogglerAccessiblettbcCollapse = () => {
  if ($("#ttbc-navbar-toggler-js").length > 0) {
    var menuToggle = document.querySelector("#ttbc-navbar-toggler-js");
    var enterKeyCode = 13;
    var spaceKeyCode = 32;

    menuToggle.addEventListener("keyup", function (event) {
      if (event.keyCode == enterKeyCode || event.keyCode == spaceKeyCode) {
        if ($("#ttbc-navbar-toggler-js").hasClass("ig-ttbc-nav-is-active")) {
          $("#ttbc-navbar-toggler-js").removeClass("ig-ttbc-nav-is-active");
          $("#ttbc-main-nav-overlay").removeClass("ttbc-nav-is-open");
        } else {
          $("#ttbc-navbar-toggler-js").addClass("ig-ttbc-nav-is-active");
          $("#ttbc-main-nav-overlay").addClass("ttbc-nav-is-open");
        }
      }
    });
  }
};

// Functions

const preventDefaultOnDropdownBtn = () => {
  $(".ttbc-menu-item-has-children").attr("aria-haspopup", "true");
  $(".ig-ttbc-dropdown-toggle").on("click", (e) => {
    e.preventDefault();
  });
};

const toggleNavOpenClass = () => {
  $("#ttbc-navbar-toggler-js").on("click", function () {
    $(this).toggleClass("ig-ttbc-nav-is-active");
    $("#ttbc-main-nav-overlay").toggleClass("ttbc-nav-is-open");
    setTimeout(() => {
      $(".ig-ttbc-main-nav-overlay").toggleClass("overflowY-scroll");
    }, 350);
  });
};

// dropdown icon behaviour



const dropdownIconBehaviourOnHover = () => {

 

  $(".ig-ttbc-dropdown").on("mouseenter", actionOnMouseIn)
  $(".ig-ttbc-dropdown").on("mouseleave", actionOnMouseLeave);
};




const dropdownIconBehaviourOnFocus = () => {


  $(".ig-ttbc-dropdown").on("focusin", actionOnFocusIn);
  $(".ig-ttbc-dropdown").on("focusout", actionOnFocusOut);
};

const setWidthOfDropdownUL = () => {
  if (VIEWPORT_WIDTH >= BREAKPOINT_WIDTH) {
    let maxWidth = 0;
    let $element;
    const navItemInDropdown = $(".ig-ttbc-dropdown-menu").children();
    navItemInDropdown.each(function () {
      $element = $(this);
      if ($element.width() > maxWidth) {
        maxWidth = $element.outerWidth();
      }
    });
    $(".ig-ttbc-dropdown-menu").css("width", `${maxWidth + 200}px`);
  }
};

const changeDropdownClassesOnWindowResize = () => {
$(window).on("resize", () => {
    console.log("resizing")
    $(".ig-ttbc-dropdown").off("mouseenter", actionOnMouseIn)
    $(".ig-ttbc-dropdown").off("mouseleave", actionOnMouseLeave);
  
    $(".ig-ttbc-dropdown").off("focusin", actionOnFocusIn);
    $(".ig-ttbc-dropdown").off("focusout", actionOnFocusOut);
    if(window.innerWidth < BREAKPOINT_WIDTH) {
        dropdownIconBehaviourOnFocus()
    } else {
        dropdownIconBehaviourOnHover()
    }
})
}
















////////////////////////////////////////////////////// event listeners ///////////////////////////////////

const actionOnFocusIn = () => {
    if (!$(".ig-ttbc-dropdown-menu").hasClass("ig-ttbc-dropdown__open-on")) {
        $(".ig-ttbc-dropdown-menu").addClass(
          "ig-ttbc-dropdown__open-on ig-ttbc-dropdown__open-on--click"
        );
      }
  
      if ($(this).hasClass("ig-dropdown-arrow-icon__open")) {
        $(".ig-dropdown-arrow-icon").removeClass("ig-dropdown-arrow-icon__open");
      } else {
        $(".ig-dropdown-arrow-icon").addClass("ig-dropdown-arrow-icon__open");
      }
}


const actionOnFocusOut = () => {
    if ($(".ig-ttbc-dropdown-menu").hasClass("ig-ttbc-dropdown__open-on")) {
        $(".ig-ttbc-dropdown-menu").removeClass(
          "ig-ttbc-dropdown__open-on ig-ttbc-dropdown__open-on--click"
        );
      }
  
      if ($(".ig-dropdown-arrow-icon").hasClass("ig-dropdown-arrow-icon__open")) {
        $(".ig-dropdown-arrow-icon").removeClass("ig-dropdown-arrow-icon__open");
      }
}

const actionOnMouseIn = () => {
       
    $(".ig-dropdown-arrow-icon").addClass("ig-dropdown-arrow-icon__open");
    $(".ig-ttbc-dropdown-menu").addClass(
      "ig-ttbc-dropdown__open-on ig-ttbc-dropdown__open-on--hover"
    );
}

const actionOnMouseLeave = () => {
$(".ig-dropdown-arrow-icon").removeClass("ig-dropdown-arrow-icon__open");
$(".ig-ttbc-dropdown-menu").removeClass(
  "ig-ttbc-dropdown__open-on ig-ttbc-dropdown__open-on--hover"
);
}