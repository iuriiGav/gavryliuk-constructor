import { hideDropdownContentOnClickOutside } from "../../global-funtions/hide-dropdown-content-on-click-outside";

export const registerNavFunctions = (
  localizationWrapper,
  dropdownIconActiveClass,
  mainNavTriggerActiveClass,
  incrementZIndex = false
) => {
  openCloseMainNavOnClick(localizationWrapper, mainNavTriggerActiveClass);
  openDropdownOnClickWhileHover(localizationWrapper, dropdownIconActiveClass);
  if (incrementZIndex) {
    incrementZIndexOfDropdownListItems(localizationWrapper);
  }
};

let dropdownOpen = false;

const openDropdownOnClickWhileHover = (localizationWrapper, dropdownIconActiveClass) => {
  const menuContainer = document.getElementsByClassName(localizationWrapper)[0];
  const navItem = menuContainer.getElementsByClassName("js--nav-item");

  for (let i = 0; i < navItem.length; i++) {
    if (navItem[i].classList.contains("js--nav-item-has-dropdown")) {
      const triggerLink = navItem[i].getElementsByClassName("js--nav-link")[0];

      triggerLink.addEventListener("click", (e) => {
        e.preventDefault();
        hideDropdownContentOnClickOutside(triggerLink, "js--css--dropdown-is-open", "parent", dropdownIconActiveClass);

        const openDropdown = () => {
          navItem[i].classList.add("js--css--dropdown-is-open");
          triggerLink.setAttribute("aria-expanded", "true");
          triggerLink.classList.add(dropdownIconActiveClass);
          dropdownOpen = true;
        };

        const closeDropdown = () => {
          navItem[i].classList.remove("js--css--dropdown-is-open");
          triggerLink.setAttribute("aria-expanded", "false");
          triggerLink.classList.remove(dropdownIconActiveClass);
          dropdownOpen = false;
        };

        if (!navItem[i].classList.contains("js--css--dropdown-is-open")) {
          openDropdown();
        } else {
          closeDropdown();
        }

        const closeDropdownOnEscClick = (e) => {
          if (e.key === "Escape") {
            closeDropdown();
            triggerLink.focus();
            window.removeEventListener("keyup", closeDropdownOnEscClick);
          }
        };

        window.addEventListener("keyup", closeDropdownOnEscClick);
      });
    }
  }
};

const incrementZIndexOfDropdownListItems = (localizationWrapper) => {
  // this function is needed to make border hover effects, styled with :after
  // come through
  const menuContainer = document.getElementsByClassName(localizationWrapper)[0];
  const dropdownContent = Array.from(menuContainer.getElementsByClassName("js--dropdown-list"));
  dropdownContent.map((dropdown) => {
    const listItems = dropdown.getElementsByTagName("li");
    let startingZIndex = 1;
    for (let i = listItems.length - 1; i >= 0; i--) {
      listItems[i].style.zIndex = startingZIndex;
      startingZIndex++;
    }
  });
};

const openCloseMainNavOnClick = function (localizationWrapper, mainNavTriggerActiveClass) {
  const menuContainer = document.getElementsByClassName(localizationWrapper)[0];

  const mainNavTrigger = Array.from(menuContainer.getElementsByClassName("js--nav-trigger"));

  mainNavTrigger.map((trigger) => {
    trigger.addEventListener("click", function (e) {
      if (trigger.closest(".js--nav")) {
        const mainNavbar = trigger.closest(".js--nav");
        mainNavbar.classList.toggle("js--css--nav-is-open");
        trigger.classList.add("js--nav-trigger-is-active");
        trigger.classList.toggle(mainNavTriggerActiveClass);

        const openNavbarContainer = menuContainer.getElementsByClassName("js--nav-list")[0];

        const closeNavbar = (mainNavbarContainer, mainNavbarTrigger) => {
          mainNavbarContainer.classList.remove("js--css--nav-is-open");
          mainNavbarTrigger.classList.remove("js--nav-trigger-is-active");
          mainNavbarTrigger.classList.remove("btn-hamburger__general--active");
          mainNavbarTrigger.classList.remove(mainNavTriggerActiveClass);
          mainNavbarTrigger.setAttribute("aria-expanded", "false");
        };

        const onCLickOutside = (event) => {
          if (openNavbarContainer.contains(event.target)) {
            return;
          } else if (event.target !== trigger) {
            closeNavbar(mainNavbar, trigger);
            window.removeEventListener("click", onCLickOutside);
          }
        };

        window.addEventListener("click", onCLickOutside);

        const hideOpenElementOnEscapeClick = (e) => {
          if (e.key === "Escape" && !dropdownOpen) {
            closeNavbar(mainNavbar, trigger);
            trigger.focus();
            window.removeEventListener("keyup", hideOpenElementOnEscapeClick);
          }
        };

        window.addEventListener("keyup", hideOpenElementOnEscapeClick);
      }
    });
  });
};
