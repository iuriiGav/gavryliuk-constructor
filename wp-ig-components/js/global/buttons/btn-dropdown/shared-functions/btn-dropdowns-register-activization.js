export const btnDropdownsRegisterActivization = (dataJsTriggerVal, className, collapseOthersInGroup) => {
  const btns = document.querySelectorAll(`[data-js-trigger="${dataJsTriggerVal}"]`);
  const btnsCount = btns.length;
  const activizationClass = className;

  for (let i = 0; i < btnsCount; i++) {
    btns[i].onclick = function (e) {
      if (collapseOthersInGroup) {
        for (var j = 0; j < btnsCount; j++) {
          if (this != btns[j]) {
            btns[j].classList.remove(activizationClass);
          }
        }
      }
      this.classList.contains(activizationClass)
        ? this.classList.remove(activizationClass)
        : this.classList.add(activizationClass);
    };
  }
};
