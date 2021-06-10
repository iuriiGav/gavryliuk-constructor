import { hideDropdownContentOnClickOutside } from "../../global-funtions/hide-dropdown-content-on-click-outside";

export const dmaJsHoverOffOpenDropdown = function () {
  const dropdownMenuItemWithHoverOff = document.getElementsByClassName("js--dma-hover-off");
  const numOfDropdowns = dropdownMenuItemWithHoverOff.length;
  const activizationClass = "dma-item-active";
  for (let i = 0; i < numOfDropdowns; i++) {
    const dropdownLabels = dropdownMenuItemWithHoverOff[i].getElementsByClassName("js--dma-dropdown-trigger");
    const dropdownLabelsArr = Array.from(dropdownLabels);

    const hoverOffMenuListItems = dropdownMenuItemWithHoverOff[i].children;
    const hoverOffMenuListItemsArr = Array.from(hoverOffMenuListItems);

    hoverOffMenuListItemsArr.map((listItem) => {
      // for(let i = 0; i<listItem.children.length; i++) {
      //   if(listItem.children[i].classList.contains('dma__hiddent-content--animated')) {
      //     listItem.children[i].classList.remove('dma__hiddent-content--animated')
      //     listItem.children[i].classList.add('dma__hidden-content-on-click')
      //   }
      // }
    });

    for (let i = 0; i < dropdownLabelsArr.length; i++) {
      dropdownLabelsArr[i].addEventListener("click", function (e) {
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
