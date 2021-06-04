export const preventNavSubMenuFromGettingOffScreenLeftAndRight = function (dropdownTrigger) {
  const triggers = document.getElementsByClassName(dropdownTrigger);
  let originalMargins;
  for (let i = 0; i < triggers.length; i++) {
    triggers[i].addEventListener("mouseenter", () => {
      const marginAdjust = 100;
      const parentElement = triggers[i].parentNode;
      const navWidth = parentElement.offsetWidth;
      const position = getElementsPosition(triggers[i]);
      const triggerChildren = triggers[i].getElementsByTagName("ul");
      const triggerChildStyle = window.getComputedStyle(triggerChildren[0]);
      originalMargins = triggerChildStyle.getPropertyValue("margin");
      const thisWidth = triggerChildren[0].offsetWidth;

      const thisRight = position.left + thisWidth - marginAdjust;

      if (thisRight > navWidth) {
        triggerChildren[0].style.marginLeft = navWidth - thisRight + "px";
      }

      /// left
      const distanceFromScreenEdge = triggerChildren[0].getBoundingClientRect();

      if (distanceFromScreenEdge.left <= 0) {
        triggerChildren[0].style.marginLeft = Math.abs(distanceFromScreenEdge.left) + 10 + "px";
      }
    });

    triggers[i].addEventListener("mouseleave", () => {
      const triggerChildren = triggers[i].getElementsByTagName("ul");
      triggerChildren[0].style.margin = originalMargins;
    });
  }
};


const getElementsPosition = (targetEl) => {
  const cs = window.getComputedStyle(targetEl);
  const marginTop = cs.getPropertyValue("margin-top");
  const marginLeft = cs.getPropertyValue("margin-left");

  return {
    top: targetEl.offsetTop - parseFloat(marginTop),
    left: targetEl.offsetLeft - parseFloat(marginLeft),
  };
};
