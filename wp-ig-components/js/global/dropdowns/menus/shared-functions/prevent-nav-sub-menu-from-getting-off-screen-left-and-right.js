export const preventNavSubMenuFromGettingOffScreenLeftAndRight = function (dropdownTrigger) {
  const dropdownTriggers = document.getElementsByClassName(dropdownTrigger);
  let originalMargins = null;
  let dropdownTriggerAndContainer = null;
  let dropdownHiddenContentContainer = null;
  let ulNavContainer = null;
  let dropdownHiddenContentContainerWidth = null;
  let dropdownHiddenContentContainerPositionLeftDiscardingAnimation = null;

  for (let i = 0; i < dropdownTriggers.length; i++) {
    dropdownTriggers[i].addEventListener("mouseenter", (e) => {
      dropdownTriggerAndContainer = e.target;

      if (!dropdownTriggerAndContainer.parentElement.classList.contains("js--dma-hover-off")) {
        adjustPositionOfDropdownIfItIsOffScreen(dropdownTriggerAndContainer);
      }
    });

    dropdownTriggers[i].addEventListener("mouseleave", (e) => {
      if (!dropdownTriggerAndContainer.parentElement.classList.contains("js--dma-hover-off")) {
        dropdownHiddenContentContainer.style.margin = originalMargins;
      }
    });

    dropdownTriggers[i].addEventListener("click", function (e) {
      if (dropdownTriggerAndContainer !== this) {
        return;
      } else {
        dropdownTriggerAndContainer = e.target.parentElement;
        if (!this.classList.contains("dma-trigger-clicked")) {
          adjustPositionOfDropdownIfItIsOffScreen(dropdownTriggerAndContainer);
          setTimeout(() => {
            this.classList.add("dma-trigger-clicked");
            window.addEventListener("click", removeTrggerClickedOnClickOutside);
          }, 10);
        }

        if (this.classList.contains("dma-trigger-clicked") && dropdownHiddenContentContainer !== null) {
          dropdownHiddenContentContainer.style.margin = originalMargins;
          this.classList.remove("dma-trigger-clicked");
        }
      }
    });

    const removeTrggerClickedOnClickOutside = (e) => {
      if (!e.target.parentElement.classList.contains("dma-trigger-clicked")) {
        const clickedTrigger = document.getElementsByClassName("dma-trigger-clicked");
        for (let i = 0; i < clickedTrigger.length; i++) {
          if (clickedTrigger[i].classList.contains("dma-trigger-clicked")) {
            clickedTrigger[i].getElementsByClassName("dma__hiddent-content")[0].style.margin = originalMargins;
            clickedTrigger[i]
              .getElementsByClassName("dma__hiddent-content")[0]
              .style.setProperty("--js-dma-shaped-dropdown-after-margin", `0`);
            clickedTrigger[i].classList.remove("dma-trigger-clicked");
          }
        }
        window.removeEventListener("click", removeTrggerClickedOnClickOutside);
      }
    };

    dropdownTriggers[i].addEventListener("keyup", function (e) { 
      const enterKeyCode = 13;
      const spaceKeyCode = 32;

      if (e.keyCode == enterKeyCode || e.keyCode == spaceKeyCode) {
        dropdownTriggerAndContainer = e.target.parentElement;
        if (!this.classList.contains("dma-trigger-clicked")) {
          adjustPositionOfDropdownIfItIsOffScreen(dropdownTriggerAndContainer);
          setTimeout(() => {
            this.classList.add("dma-trigger-clicked");
            window.addEventListener("click", removeTrggerClickedOnClickOutside);
          }, 10);
        }

        if (this.classList.contains("dma-trigger-clicked") && dropdownHiddenContentContainer !== null) {
          dropdownHiddenContentContainer.style.margin = originalMargins;
          this.classList.remove("dma-trigger-clicked");
        }
      }
    });
  }

  const adjustPositionOfDropdownIfItIsOffScreen = (dropdownTriggerAndContainer) => {
    dropdownHiddenContentContainer = dropdownTriggerAndContainer.getElementsByTagName("ul").item(0);
    const hiddenContentPosition = dropdownHiddenContentContainer.getBoundingClientRect();
    const hiddenContentComputedStyles = window.getComputedStyle(dropdownHiddenContentContainer);
    originalMargins = hiddenContentComputedStyles.getPropertyValue("margin");
    ulNavContainer = dropdownTriggerAndContainer.parentElement;
    dropdownHiddenContentContainerWidth = hiddenContentComputedStyles.getPropertyValue("width");

    dropdownHiddenContentContainerPositionLeftDiscardingAnimation = getElementPositionLeftAfterAnimationFinished(
      dropdownHiddenContentContainer,
      hiddenContentPosition,
      dropdownHiddenContentContainerWidth
    );

    if (ulNavContainer.classList.contains("dma--centered-dropdown")) {
      if (hiddenContentPosition.left <= 0) {
        // console.log("hiddenContentPosition.left <= 0");
        dropdownHiddenContentContainer.style.marginLeft = Math.abs(hiddenContentPosition.left) + 10 + "px";

        dropdownHiddenContentContainer.style.setProperty(
          "--js-dma-shaped-dropdown-after-margin",
          `0 0 0 ${-Math.abs(hiddenContentPosition.left) + 10}px`
        );
      }

      if (
        dropdownHiddenContentContainer.classList.contains("js--dma-animate-each-item") &&
        hiddenContentPosition.right > window.innerWidth
      ) {
        // console.log(
        //   'dropdownHiddenContentContainer.classList.contains("js--dma-animate-each-item") && hiddenContentPosition.right > window.innerWidth'
        // );

        dropdownHiddenContentContainer.style.marginLeft =
          -Math.abs(hiddenContentPosition.right - window.innerWidth + 28) + "px";
        dropdownHiddenContentContainer.style.setProperty(
          "--js-dma-shaped-dropdown-after-margin",
          `0 0 0 ${hiddenContentPosition.right - window.innerWidth + 28}px`
        );
      } else if (
        !dropdownHiddenContentContainer.classList.contains("js--dma-animate-each-item") &&
        hiddenContentPosition.right + parseFloat(dropdownHiddenContentContainerWidth) / 2 > window.innerWidth
      ) {
        // console.log("!dropdownHiddenContentContainer.classList.contains(.....");

        dropdownHiddenContentContainer.style.marginLeft =
          -Math.abs(
            hiddenContentPosition.right + parseFloat(dropdownHiddenContentContainerWidth) / 2 - window.innerWidth + 28
          ) + "px";
      }
    } else if (
      dropdownHiddenContentContainerPositionLeftDiscardingAnimation + parseFloat(dropdownHiddenContentContainerWidth) >
      window.innerWidth
    ) {
      dropdownHiddenContentContainer.style.marginLeft =
        -Math.abs(
          dropdownHiddenContentContainerPositionLeftDiscardingAnimation +
            parseFloat(dropdownHiddenContentContainerWidth) -
            window.innerWidth +
            28
        ) + "px";
    } else if (
      dropdownHiddenContentContainer.classList.contains("js--dma-animate-each-item") &&
      hiddenContentPosition.right > window.innerWidth
    ) {
      dropdownHiddenContentContainer.style.marginLeft =
        -Math.abs(hiddenContentPosition.right - window.innerWidth + 28) + "px";
    }
  };
};

const getElementPositionLeftAfterAnimationFinished = (
  dropdownHiddenContentContainer,
  hiddenContentPosition,
  dropdownHiddenContentContainerWidth
) => {
  if (dropdownHiddenContentContainer.classList.contains("dma-animation__rotate-y")) {
    return hiddenContentPosition.left - parseFloat(dropdownHiddenContentContainerWidth) / 2;
  } else if (dropdownHiddenContentContainer.classList.contains("dma-animation__scale-up")) {
    return hiddenContentPosition.left - parseFloat(dropdownHiddenContentContainerWidth) / 2;
  } else if (dropdownHiddenContentContainer.classList.contains("dma-animation__translate-z")) {
    return hiddenContentPosition.left;
  } else if (dropdownHiddenContentContainer.classList.contains("dma-animation__rotate-x")) {
    return hiddenContentPosition.left;
  } else if (dropdownHiddenContentContainer.classList.contains("dma-animation__scale-down")) {
    return hiddenContentPosition.left;
  }
};
