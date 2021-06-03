export const dropdownMenuAnimateItemsOneByOne = function (trigger, startingAnimationDuration, menuPreffix) {
  const ulWithDropdownContent = document.getElementsByClassName(trigger);

  for (let i = 0; i < ulWithDropdownContent.length; i++) {
    const numOfListItems = ulWithDropdownContent[i].getElementsByTagName("li");
    const numOfLiArr = Array.from(numOfListItems);
    let animationTiming = startingAnimationDuration;
    const animationDuration = numOfLiArr.length * startingAnimationDuration;

    numOfLiArr.map(function (li) {
      if (ulWithDropdownContent[i].classList.contains(`js--${menuPreffix}-animation-translate-y`)) {
        ulWithDropdownContent[i].classList.remove(`${menuPreffix}__hiddent-content--animated`);
        li.style.cssText = `animation: ${menuPreffix}__slideDown ${animationDuration}ms ${animationTiming}ms ease-in-out forwards;`;
        animationTiming += startingAnimationDuration;
      } else if (ulWithDropdownContent[i].classList.contains(`js--${menuPreffix}-animation-rotate-x`)) {
        ulWithDropdownContent[i].classList.remove(`${menuPreffix}__hiddent-content--animated`);
        li.style.cssText = `animation: ${menuPreffix}__rotateX ${animationDuration}ms ${animationTiming}ms ease-in-out forwards;`;
        animationTiming += startingAnimationDuration;
      } else if (ulWithDropdownContent[i].classList.contains(`js--${menuPreffix}-animation-translate-z`)) {
        ulWithDropdownContent[i].classList.remove(`${menuPreffix}__hiddent-content--animated`);
        li.style.cssText = `animation: ${menuPreffix}__rotateZ ${animationDuration}ms ${animationTiming}ms ease-in-out forwards;`;
        animationTiming += startingAnimationDuration;
      } else if (ulWithDropdownContent[i].classList.contains(`js--${menuPreffix}-animation-scale-z`)) {
        ulWithDropdownContent[i].classList.remove(`${menuPreffix}__hiddent-content--animated`);
        li.style.cssText = `animation: ${menuPreffix}__scaleZ ${animationDuration}ms ${animationTiming}ms ease-in-out forwards;`;
        animationTiming += startingAnimationDuration;
      } else if (ulWithDropdownContent[i].classList.contains(`js--${menuPreffix}-animation-translate-x`)) {
        ulWithDropdownContent[i].classList.remove(`${menuPreffix}__hiddent-content--animated`);
        li.style.cssText = `animation: ${menuPreffix}__translateX ${animationDuration}ms ${animationTiming}ms ease-in-out forwards;`;
        animationTiming += startingAnimationDuration;
      }
    });
  }
};
