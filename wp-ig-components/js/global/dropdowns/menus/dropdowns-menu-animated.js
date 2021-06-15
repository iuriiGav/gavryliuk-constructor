import { hideDropdownContentOnClickOutside } from "../../global-funtions/hide-dropdown-content-on-click-outside";

export const registerDmaFunctions = (trigger) => {
  dmaJsHoverOffOpenDropdown();
  dmaCloseOtherMenusOnKeyupOutside(trigger);
  openDropdownOnClickWhileHover();
  incrementZIndexOfDropdownListItems();
};

export const dmaJsHoverOffOpenDropdown = function () {
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
            }
          }

          if (this.parentNode.classList.contains(activizationClass)) {
            this.parentNode.classList.remove(activizationClass);
            this.setAttribute("aria-expanded", "false");
          } else {
            this.parentNode.classList.add(activizationClass);
            this.setAttribute("aria-expanded", "true");
            hideDropdownContentOnClickOutside(this, activizationClass, "parent");
          }
        }
      });
    }
  }
};

export const dmaCloseOtherMenusOnKeyupOutside = function (trigger) {
  const dmaBtns = document.getElementsByClassName(trigger);

  for (let i = 0; i < dmaBtns.length; i++) {
    dmaBtns[i].addEventListener("click", function (e) {
      if (e.target !== this) {
        return;
      } else {
        hideDropdownContentOnClickOutside(this, "dma-item-active", "parent");
      }
    });
  }
};

const openDropdownOnClickWhileHover = () => {
  const dropdownTriggerContainer = document.getElementsByClassName("js--dma-list-item");
  for (let i = 0; i < dropdownTriggerContainer.length; i++) {
    if (dropdownTriggerContainer[i].classList.contains("js--dma-has-dropdown")) {
      const triggerLink = dropdownTriggerContainer[i].getElementsByClassName("js--dma-link")[0];

      triggerLink.addEventListener("click", (e) => {
        e.preventDefault();
        hideDropdownContentOnClickOutside(triggerLink, "dma-item-active", "parent");

        if (!dropdownTriggerContainer[i].classList.contains("dma-item-active")) {
          dropdownTriggerContainer[i].classList.add("dma-item-active");
          triggerLink.setAttribute("aria-expanded", "true");
        } else {
          dropdownTriggerContainer[i].classList.remove("dma-item-active");
          triggerLink.setAttribute("aria-expanded", "false");
        }
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
