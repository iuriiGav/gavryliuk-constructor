export const hideDropdownContentOnClickOutside = (element, activizationClass, activizationClassTarget = "parent") => {
  const outsideClickListener = (event) => {
    if (activizationClassTarget === "parent") {
      if (element.parentNode.classList.contains(activizationClass) && !element.parentNode.contains(event.target)) {
        element.parentNode.classList.remove(activizationClass);
        element.setAttribute("aria-expanded", "false");
        removeClickListener();
      }
    } else if (activizationClassTarget === "this") {
      if (element.classList.contains(activizationClass) && !element.contains(event.target)) {
        element.classList.remove(activizationClass);
        element.setAttribute("aria-expanded", "false");
        removeClickListener();
      }
    }
  };

  const removeClickListener = () => {
    document.removeEventListener("click", outsideClickListener);
  };

  document.addEventListener("click", outsideClickListener);
};

// files that depend on this function:
// dropdowns-menu-animated.js