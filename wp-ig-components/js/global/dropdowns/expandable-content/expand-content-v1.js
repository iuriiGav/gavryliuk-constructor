export const expandContentV1 = () => {
  const expandTrigger = document.querySelectorAll(`[data-js-trigger="expand-content-v1-trigger"]`);
  const numOfExpandElements = expandTrigger.length;
  const expandingClass = "expand-content-v1__inner-content--is-open";
  for (let i = 0; i < numOfExpandElements; i++) {
    expandTrigger[i].onclick = function (e) {
      for (var j = 0; j < numOfExpandElements; j++) {
        if (this != expandTrigger[j]) {
          expandTrigger[j].parentNode.classList.remove(expandingClass);
        }
      }
      this.parentNode.classList.contains(expandingClass)
        ? this.parentNode.classList.remove(expandingClass)
        : this.parentNode.classList.add(expandingClass);
    };
  }
};
