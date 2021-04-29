// navbarExpandTopToBottom

export const registerSNTTBNavbarFunctions = (navName, dropdownOnClickOnly, breakpoint) => {
  const NAVBAR_TOGGLER = document.querySelectorAll(`[data-js-trigger="${navName}-navbar-toggler"]`);
  const DROPDOWN_MENU_CONTAINER = document.querySelectorAll(`[data-js-trigger="${navName}-dropdown-container"]`);

  if (NAVBAR_TOGGLER.length > 0) {
    addOverflowYToExpandedNavbar(navName);
    makeNavbarAccessibleByKeystrokes(navName);
    closeNavbarOnResize(navName, breakpoint);
  }

  if (DROPDOWN_MENU_CONTAINER.length > 0) {
    preventDefaultInDropdownAnchorTag(navName);
    if (dropdownOnClickOnly) {
      showDropdownOnClick(navName);
      closeDropdownOnClickOutsideDropdownMenu(navName);
    }
  }
};

//////////////////////////////////////////////FUNCTIONS///////////////////////////////////////////////

const addOverflowYToExpandedNavbar = (navName) => {
  const checkbox = document.querySelectorAll(`[data-js-trigger="${navName}-navbar-toggler-checkbox"]`).item(0);
  const navbarContainer = document.querySelectorAll(`[data-js-trigger="${navName}-navbar-container"]`).item(0);

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      setTimeout(() => {
        navbarContainer.style.overflowY = "auto";
      }, 500);
    } else {
      navbarContainer.style.overflowY = "hidden";
    }
  });
};

const preventDefaultInDropdownAnchorTag = (navName) => {
  const dropdownContainer = document.querySelectorAll(`[data-js-trigger="${navName}-dropdown-container"]`).item(0);
  const dropdownToggler = document.querySelectorAll(`[data-js-trigger="${navName}-dropdown-toggler"]`).item(0);
  dropdownToggler.addEventListener("click", (e) => {
    e.preventDefault();
  });

  dropdownContainer.setAttribute("aria-expanded", "true");
};

const makeNavbarAccessibleByKeystrokes = (navName) => {
  var navbarTogglerCheckbox = document
    .querySelectorAll(`[data-js-trigger="${navName}-navbar-toggler-checkbox"]`)
    .item(0);
  const NAVBAR_TOGGLER = document.querySelectorAll(`[data-js-trigger="${navName}-navbar-toggler"]`);

  var enterKeyCode = 13;
  var spaceKeyCode = 32;

  NAVBAR_TOGGLER.item(0).addEventListener("keyup", function (event) {
    if (event.keyCode == enterKeyCode || event.keyCode == spaceKeyCode) {
      var menuOpen = navbarTogglerCheckbox.checked;

      if (menuOpen) {
        navbarTogglerCheckbox.checked = false;
      } else {
        navbarTogglerCheckbox.checked = true;
      }
    }
  });
};

const showDropdownOnClick = (navName) => {
  const dropdownToggler = document.querySelectorAll(`[data-js-trigger="${navName}-dropdown-toggler"]`).item(0);
  const SUBMENU = document.querySelectorAll(`[data-js-trigger="${navName}-submenu"]`).item(0);

  dropdownToggler.addEventListener("click", (e) => {
    if (SUBMENU !== null) {
      SUBMENU.classList.toggle(`ig-${navName}-dropdown-menu__container--open`);
    }
  });
};

const closeDropdownOnClickOutsideDropdownMenu = (navName) => {
  const SUBMENU = document.querySelectorAll(`[data-js-trigger="${navName}-submenu"]`).item(0);

  document.onclick = function (e) {
    if (e.target.getAttribute("data-js-trigger") !== `${navName}-dropdown-toggler`) {
      SUBMENU.classList.remove(`ig-${navName}-dropdown-menu__container--open`);
    }
  };
};

const closeNavbarOnResize = (navName, breakpoint) => {
  window.addEventListener("resize", () => {
    if (window.innerWidth <= breakpoint) {
      const checkbox = document.querySelectorAll(`[data-js-trigger="${navName}-navbar-toggler-checkbox"]`).item(0);
  const navbarContainer = document.querySelectorAll(`[data-js-trigger="${navName}-navbar-container"]`).item(0);

      if (checkbox.checked) {
        setTimeout(() => {
          checkbox.checked = false;
          navbarContainer.style.overflowY = "hidden";
        }, 300);
      }
    }
  });
};
