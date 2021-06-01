export const dropdownMenuSimpleAppearTrigger = (collapseOthersInGroup = false) => {
  const trigger = document.getElementsByClassName("js--dropdown-menu-simple-appear-trigger");
  const triggerCount = trigger.length;
  const activizationClass = "dropdown-menu-simple-appear--active";

  for (let i = 0; i < triggerCount; i++) {
    trigger[i].addEventListener("click", function (e) {
      if (collapseOthersInGroup) {
        for (var j = 0; j < triggerCount; j++) {
          if (this != trigger[j]) {
            trigger[j].parentNode.classList.remove(activizationClass);
            trigger[j].setAttribute("aria-expanded", "false");
          }
        }
      }
      if (this.parentNode.classList.contains(activizationClass)) {
        this.parentNode.classList.remove(activizationClass);
        this.setAttribute("aria-expanded", "false");
      } else {
        this.parentNode.classList.add(activizationClass);
        this.setAttribute("aria-expanded", "true");
      }
    });
  }
};
