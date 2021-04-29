export const animateArrowOnHover = (hoverTarget) => {
  hoverTarget.addEventListener("mouseenter", onMouseEnterHandler);
  hoverTarget.addEventListener("mouseleave", onMouseLeaveHandler);
};

export const animateArrowOnFocus = (focusTarget) => {
  focusTarget.addEventListener("focusin", onFocusInHandler);
  focusTarget.addEventListener("focusout", onFocusOutHandler);
};

export const swapFocusHoverOnResize = (target, breakpoint) => {

  window.addEventListener("resize", () => {
    if (window.innerWidth <= breakpoint) {
      target.removeEventListener("mouseenter", onMouseEnterHandler);
      target.removeEventListener("mouseleave", onMouseLeaveHandler);
      animateArrowOnFocus(target);
    } else {
      target.removeEventListener("focusin", onFocusInHandler);
      target.removeEventListener("focusout", onFocusOutHandler);
      animateArrowOnHover(target);
    }
  });
};




export const animateArrowInDropdoenItem = (navName, breakpoint) => {
  const btnDropdownIndicator = document.querySelectorAll(`[data-js-trigger="btn-dropdown-indicator"]`).item(0);
  const DROPDOWN_MENU_CONTAINER = document
    .querySelectorAll(`[data-js-trigger="${navName}-dropdown-container"]`)
    .item(0);

  if (btnDropdownIndicator !== undefined && btnDropdownIndicator !== null) {
    const viewportWidth = window.innerWidth;

    if (viewportWidth >= 992) {
      animateArrowOnHover(DROPDOWN_MENU_CONTAINER);
    } else {
      animateArrowOnFocus(DROPDOWN_MENU_CONTAINER);
    }

    swapFocusHoverOnResize(DROPDOWN_MENU_CONTAINER, breakpoint);
  }
};

const BTN_DROPDOWN_INDICATOR = document.querySelectorAll(`[data-js-trigger="btn-dropdown-indicator"]`).item(0);

const onMouseEnterHandler = () => {
  console.log(BTN_DROPDOWN_INDICATOR)
  BTN_DROPDOWN_INDICATOR.classList.add("ig-dropdown-arrow-icon__open");
};
const onMouseLeaveHandler = () => {
  BTN_DROPDOWN_INDICATOR.classList.remove("ig-dropdown-arrow-icon__open");
};

const onFocusInHandler = () => {
  if (!BTN_DROPDOWN_INDICATOR.classList.contains("ig-dropdown-arrow-icon__open")) {
    BTN_DROPDOWN_INDICATOR.classList.add("ig-dropdown-arrow-icon__open");
  }
};

const onFocusOutHandler = () => {
  if (BTN_DROPDOWN_INDICATOR.classList.contains("ig-dropdown-arrow-icon__open")) {
    BTN_DROPDOWN_INDICATOR.classList.remove("ig-dropdown-arrow-icon__open");
  }
};
