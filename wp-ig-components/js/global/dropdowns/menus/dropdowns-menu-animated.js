import { hideDropdownContentOnClickOutside } from "../../global-funtions/hide-dropdown-content-on-click-outside";

export const registerDmaFunctions = (trigger) => {
  dmaJsHoverOffOpenDropdown();
  dmaCloseOtherMenusOnKeyupOutside(trigger);
  openDropdownOnClickWhileHoverIsActive();
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
        console.log("clicked");
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

const openDropdownOnClickWhileHoverIsActive = () => {
  const dropdownTriggerContainer = document.getElementsByClassName("js--dma-list-item");
  for (let i = 0; i < dropdownTriggerContainer.length; i++) {
    if (dropdownTriggerContainer[i].classList.contains("js--dma-has-dropdown")) {
      dropdownTriggerContainer[i].addEventListener("click", (e) => {
        e.preventDefault();
        dropdownTriggerContainer[i].classList.add("dma-item-active");
      });
    }
  }
};
