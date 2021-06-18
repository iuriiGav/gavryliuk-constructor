import { hideDropdownContentOnClickOutside } from "../../global-funtions/hide-dropdown-content-on-click-outside";

export const registerDmaFunctions = (trigger, dropdownIconActiveClass) => {
  openMainNav();
  dmaJsHoverOffOpenDropdown(dropdownIconActiveClass);
  dmaCloseOtherMenusOnKeyupOutside(trigger, dropdownIconActiveClass);
  openDropdownOnClickWhileHover(dropdownIconActiveClass);
  incrementZIndexOfDropdownListItems();
};

let dropdownOpen = false;

export const dmaJsHoverOffOpenDropdown = function (dropdownIconActiveClass) {
  const dropdownMenuItemWithHoverOff = document.getElementsByClassName("js--dma-hover-off");
  const numOfDropdowns = dropdownMenuItemWithHoverOff.length;
  const activizationClass = "dma-item-active";
  for (let i = 0; i < numOfDropdowns; i++) {
    const dropdownLabels = dropdownMenuItemWithHoverOff[i].getElementsByClassName("js--dma-dropdown-trigger");
    const dropdownLabelsArr = Array.from(dropdownLabels);

    for (let i = 0; i < dropdownLabelsArr.length; i++) {
      dropdownLabelsArr[i].addEventListener("click", function (e) {
        e.preventDefault();
        if (e.target !== this) {
          return;
        } else {
          for (var j = 0; j < dropdownLabelsArr.length; j++) {
            if (this != dropdownLabelsArr[j]) {
              dropdownLabelsArr[j].parentNode.classList.remove(activizationClass);
              dropdownLabelsArr[j].setAttribute("aria-expanded", "false");
              dropdownOpen = false;
            }
          }

          if (this.parentNode.classList.contains(activizationClass)) {
            this.parentNode.classList.remove(activizationClass);
            this.setAttribute("aria-expanded", "false");
            dropdownOpen = false;
          } else {
            this.parentNode.classList.add(activizationClass);
            this.setAttribute("aria-expanded", "true");
            hideDropdownContentOnClickOutside(this, activizationClass, "parent", dropdownIconActiveClass);
            dropdownOpen = true;
            console.log("dmaJsHoverOffOpenDropdown - else true");
          }
        }
      });
    }
  }
};

export const dmaCloseOtherMenusOnKeyupOutside = function (trigger, dropdownIconActiveClass) {
  const dmaBtns = document.getElementsByClassName(trigger);

  for (let i = 0; i < dmaBtns.length; i++) {
    dmaBtns[i].addEventListener("click", function (e) {
      if (e.target !== this) {
        return;
      } else {
        hideDropdownContentOnClickOutside(this, "dma-item-active", "parent", dropdownIconActiveClass);
        console.log("dmaCloseOtherMenusOnKeyupOutside");
      }
    });
  }
};

const openDropdownOnClickWhileHover = (dropdownIconActiveClass) => {
  const dropdownTriggerContainer = document.getElementsByClassName("js--dma-list-item");
  for (let i = 0; i < dropdownTriggerContainer.length; i++) {
    if (dropdownTriggerContainer[i].classList.contains("js--dma-has-dropdown")) {
      const triggerLink = dropdownTriggerContainer[i].getElementsByClassName("js--dma-link")[0];

      triggerLink.addEventListener("click", (e) => {
        e.preventDefault();
        hideDropdownContentOnClickOutside(triggerLink, "dma-item-active", "parent", dropdownIconActiveClass);

        if (!dropdownTriggerContainer[i].classList.contains("dma-item-active")) {
          dropdownTriggerContainer[i].classList.add("dma-item-active");
          triggerLink.setAttribute("aria-expanded", "true");
          dropdownOpen = true;
          console.log("openDropdownOnClickWhileHover");
        } else {
          dropdownTriggerContainer[i].classList.remove("dma-item-active");
          triggerLink.setAttribute("aria-expanded", "false");
          dropdownOpen = false;
        }

        const closeDropdownOnEscClick = (e) => {
          if (e.key === "Escape") {
            dropdownTriggerContainer[i].classList.remove("dma-item-active");
            triggerLink.setAttribute("aria-expanded", "false");
            dropdownOpen = false;
            triggerLink.classList.remove(dropdownIconActiveClass);
            triggerLink.focus();

            window.removeEventListener("keyup", closeDropdownOnEscClick);
          }
        };

        window.addEventListener("keyup", closeDropdownOnEscClick);
      });
    }
  }
};

const incrementZIndexOfDropdownListItems = () => {
  // this function is needed to make border hover effects, styled with :after
  // come through
  const dropdownContent = Array.from(document.getElementsByClassName("js--dma-hidden-content"));
  dropdownContent.map((dropdown) => {
    const listItems = dropdown.getElementsByTagName("li");
    let startingZIndex = 1;
    for (let i = listItems.length - 1; i >= 0; i--) {
      listItems[i].style.zIndex = startingZIndex;
      startingZIndex++;
    }
  });
};

const openMainNav = function () {
  const mainNavTrigger = Array.from(document.getElementsByClassName("js--main-nav-trigger"));
  const body = document.getElementsByTagName("body")[0];

  mainNavTrigger.map((trigger) => {
    trigger.addEventListener("click", function (e) {
      if (trigger.closest(".js--main-nav")) {
        console.log("openMainNav ");
        const mainNavbar = trigger.closest(".js--main-nav");
        mainNavbar.classList.toggle("dma-navbar-is-open");
        trigger.classList.add("js--main-nav-trigger-is-active");

        const openNavbarContainer = document.getElementsByClassName("js--dma-list")[0];

        const onCLickOutside = (event) => {
          if (openNavbarContainer.contains(event.target)) {
            return;
          } else if (
            event.target !== trigger &&
            event.target !== trigger.getElementsByClassName("js--sp-1")[0] &&
            event.target !== trigger.getElementsByClassName("js--sp-2")[0] &&
            event.target !== trigger.getElementsByClassName("js--sp-3")[0]
          ) {
            mainNavbar.classList.remove("dma-navbar-is-open");
            trigger.classList.remove("js--main-nav-trigger-is-active");
            trigger.classList.remove("btn-hamburger__general--active");
            trigger.setAttribute("aria-expanded", "false");
            body.removeEventListener("click", onCLickOutside);
          }
        };

        const hideOpenElementOnEscapeClick = (e) => {
          if (e.key === "Escape" && !dropdownOpen) {
            console.log("esc");
            mainNavbar.classList.remove("dma-navbar-is-open");
            trigger.classList.remove("js--main-nav-trigger-is-active");
            trigger.classList.remove("btn-hamburger__general--active");
            trigger.setAttribute("aria-expanded", "false");
            trigger.focus();
            body.removeEventListener("keyup", hideOpenElementOnEscapeClick);
          }
        };

        body.addEventListener("click", onCLickOutside);

        body.addEventListener("keyup", hideOpenElementOnEscapeClick);
      }
    });
  });
};
