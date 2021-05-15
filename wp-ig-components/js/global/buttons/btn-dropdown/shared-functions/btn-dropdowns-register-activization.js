export const btnDropdownsRegisterActivization = (btnTriggerClass, className, collapseOthersInGroup) => {
  const btns = document.getElementsByClassName(btnTriggerClass);
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
