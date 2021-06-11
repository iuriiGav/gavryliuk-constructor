import { animateArrowInDropdoenItem } from "../../global/buttons/dropdown-arrow-icon";

export const registerOFTSNavbarFunctions = (navName, breakpoint, overlayName) => {
  const DROPDOWN_MENU_CONTAINER = document
    .querySelectorAll(`[data-js-trigger="${navName}-dropdown-container"]`)
    .item(0);

  if (DROPDOWN_MENU_CONTAINER !== undefined) {
    preventDefaultOnDropdown(navName);
  }

  animateHamburgerBtnAndOverlay(navName, overlayName);
  makeOFTSNavbarAccessible();
  const btnDropdownIndicator = document.querySelectorAll(`[data-js-trigger="btn-dropdown-indicator"]`).item(0);
  if (btnDropdownIndicator !== undefined && btnDropdownIndicator !== null) {
  
    animateArrowInDropdoenItem(navName, breakpoint);
  }
};

//////////////////FUNCTIONS //////////////////////////////////

const preventDefaultOnDropdown = (navName) => {
  const DROPDOWN_MENU_CONTAINER = document
    .querySelectorAll(`[data-js-trigger="${navName}-dropdown-container"]`)
    .item(0);
  const dropdownToggler = document.querySelectorAll(`[data-js-trigger="${navName}-dropdown-toggler"]`).item(0);

  if (DROPDOWN_MENU_CONTAINER !== undefined && DROPDOWN_MENU_CONTAINER !== null) {
    DROPDOWN_MENU_CONTAINER.setAttribute("aria-haspopup", "true");
  }

  if (dropdownToggler !== undefined && dropdownToggler !== null) {
    dropdownToggler.addEventListener("click", (e) => {
      e.preventDefault();
    });
  }
};

export const animateHamburgerBtnAndOverlay = (navName, overlayName) => {
  const btnHamburgerGeneral = document.querySelectorAll(`[data-js-trigger="btn-hamburger-general"]`).item(0);
  const overlay = document.querySelectorAll(`[data-js-trigger="overlay"]`).item(0);
  if (btnHamburgerGeneral !== undefined && btnHamburgerGeneral !== null) {
    btnHamburgerGeneral.addEventListener("click", () => {
      btnHamburgerGeneral.classList.toggle("btn-hamburger__general--active");
      if (overlay !== undefined) {
        overlay.classList.toggle(`overlay__${overlayName}${navName === "oftsc" ? "--on-breakpoint" : ""}--open`);
        const dropdownToggler = document.querySelectorAll(`[data-js-trigger="${navName}-nav__container"]`).item(0);
        if (!dropdownToggler.classList.contains("ig-oYa")) {
          setTimeout(function () {
            dropdownToggler.classList.add("ig-oYa");
          }, 300);
        } else {
          dropdownToggler.classList.remove("ig-oYa");

        }
      }
    });
  }
};

export const makeOFTSNavbarAccessible = () => {
  const btnHamburgerGeneral = document.querySelectorAll(`[data-js-trigger="btn-hamburger-general"]`).item(0);
  const overlay = document.querySelectorAll(`[data-js-trigger="overlay"]`).item(0);

  if (btnHamburgerGeneral !== undefined && btnHamburgerGeneral !== null) {
    var enterKeyCode = 13;
    var spaceKeyCode = 32;

    btnHamburgerGeneral.addEventListener("keyup", function (event) {
      if (event.keyCode == enterKeyCode || event.keyCode == spaceKeyCode) {
        if (btnHamburgerGeneral.classList.contains("btn-hamburger__general--active")) {
          btnHamburgerGeneral.classList.remove("btn-hamburger__general--active");
          overlay.classList.remove("overlay__sliding-from-two-sides--open");
        } else {
          btnHamburgerGeneral.classList.add("btn-hamburger__general--active");
          overlay.classList.add("overlay__sliding-from-two-sides--open");
        }
      }
    });
  }
};

