const dmaAnimateEachItem = function () {
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

dmaAnimateEachItem();

const dmaJsHoverOffOpenDropdown = function () {
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
              dropdownLabelsArr[j].classList.remove(activizationClass);
            }
          }

          if (this.classList.contains(activizationClass)) {
            this.classList.remove(activizationClass);
          } else {
            this.classList.add(activizationClass);
            hideOnClickOutside(this, activizationClass);
          }
        }
      });
    }
  }
};

dmaJsHoverOffOpenDropdown();

function hideOnClickOutside(element, activizationClass) {
  const outsideClickListener = (event) => {
    if (element.classList.contains(activizationClass) && !element.contains(event.target)) {
      element.classList.remove(activizationClass);
      removeClickListener();
    }
  };

  const removeClickListener = () => {
    document.removeEventListener("click", outsideClickListener);
  };

  document.addEventListener("click", outsideClickListener);
}
