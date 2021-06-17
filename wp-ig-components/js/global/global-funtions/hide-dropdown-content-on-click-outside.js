export const hideDropdownContentOnClickOutside = (
  element,
  activizationClass,
  activizationClassTarget = "parent",
  dropdownIconActiveClass = ""
) => {
  const outsideClickListener = (event) => {
    if (activizationClassTarget === "parent") {
      if (element.parentNode.classList.contains(activizationClass) && !element.parentNode.contains(event.target)) {
        element.parentNode.classList.remove(activizationClass);
        element.setAttribute("aria-expanded", "false");
        element.classList.remove(dropdownIconActiveClass);
        removeClickListener();
      }
    } else if (activizationClassTarget === "this") {
      if (element.classList.contains(activizationClass) && !element.contains(event.target)) {
        element.classList.remove(activizationClass);
        element.setAttribute("aria-expanded", "false");
        element.classList.remove(dropdownIconActiveClass);
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
