export const cardcToggleExpand = function (
  collapseOthersInGroup = false,
  togglerBtnActivationClass = false,
  togglerTrigger = "js--cardc-has-expand-toggler"
) {
  const expandableAreaToggler = document.getElementsByClassName(`${togglerTrigger}`);
  const expandableAreaTogglerCount = expandableAreaToggler.length;
  const activizationClass = "js--cardc-has-expand--is-open";

  for (let i = 0; i < expandableAreaTogglerCount; i++) {
    expandableAreaToggler[i].addEventListener("click", function (e) {
      if (collapseOthersInGroup) {
        for (var j = 0; j < expandableAreaTogglerCount; j++) {
          if (this != expandableAreaToggler[j]) {
            const openedExpandsContentParent = expandableAreaToggler[j].closest(".js--cardc-has-expand");

            openedExpandsContentParent.classList.remove(activizationClass);

            if (togglerBtnActivationClass) {
              expandableAreaToggler[j].classList.remove(togglerBtnActivationClass);
            }
          }
        }
      }

      const contentParent = this.closest(".js--cardc-has-expand");
      contentParent.classList.contains(activizationClass)
        ? contentParent.classList.remove(activizationClass)
        : contentParent.classList.add(activizationClass);
    });
  }
};