export const dmaAnimateEachItem = function () {
  const dmaMenu = document.getElementsByClassName("js--dma-animate-each-item");
  const numOfMenus = dmaMenu.length;

  for (let i = 0; i < numOfMenus; i++) {
    const numOfListItems = dmaMenu[i].getElementsByTagName("li");
    const numOfLiArr = Array.from(numOfListItems);
    let animationTiming = 60;
    const animationDuration = numOfLiArr.length * 60;

    numOfLiArr.map(function (li) {
      if (dmaMenu[i].classList.contains("js--dma-animation-translate-y")) {
        dmaMenu[i].classList.remove("dma__hiddent-content--animated");
        li.style.cssText = `animation: slideDown ${animationDuration}ms ${animationTiming}ms ease-in-out forwards;`;
        animationTiming += 60;
      } else if (dmaMenu[i].classList.contains("js--dma-animation-rotate-x")) {
        dmaMenu[i].classList.remove("dma__hiddent-content--animated");
        li.style.cssText = `animation: rotateX ${animationDuration}ms ${animationTiming}ms ease-in-out forwards;`;
        animationTiming += 60;
      } else if (dmaMenu[i].classList.contains("js--dma-animation-translate-z")) {
        dmaMenu[i].classList.remove("dma__hiddent-content--animated");
        li.style.cssText = `animation: rotateZ ${animationDuration}ms ${animationTiming}ms ease-in-out forwards;`;
        animationTiming += 60;
      } else if (dmaMenu[i].classList.contains("js--dma-animation-scale-z")) {
        dmaMenu[i].classList.remove("dma__hiddent-content--animated");
        li.style.cssText = `animation: scaleZ ${animationDuration}ms ${animationTiming}ms ease-in-out forwards;`;
        animationTiming += 60;
      } else if (dmaMenu[i].classList.contains("js--dma-animation-translate-x")) {
        dmaMenu[i].classList.remove("dma__hiddent-content--animated");
        li.style.cssText = `animation: translateX ${animationDuration}ms ${animationTiming}ms ease-in-out forwards;`;
        animationTiming += 60;
      }
    });
  }
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
            hideDropdownContentOnClickOutside(this, activizationClass);
          }
        }
      });
    }
  }
};

function hideDropdownContentOnClickOutside(element, activizationClass) {
  const outsideClickListener = (event) => {
    if (element.parentNode.classList.contains(activizationClass) && !element.parentNode.contains(event.target)) {
      element.parentNode.classList.remove(activizationClass);
      element.setAttribute("aria-expanded", "false");
      removeClickListener();
    }
  };

  const removeClickListener = () => {
    document.removeEventListener("click", outsideClickListener);
  };

  document.addEventListener("click", outsideClickListener);
}
