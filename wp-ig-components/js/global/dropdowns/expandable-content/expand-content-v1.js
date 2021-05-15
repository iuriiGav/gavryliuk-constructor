export const expandContentV1 = (
  dataJsTrigger = "expand-content-v1-trigger",
  dataJsCollapse = "expand-content-v1-collapse-neighbours"
) => {
  const expandTrigger = document.querySelectorAll(`[data-js-trigger="${dataJsTrigger}"]`);
  const numOfExpandElements = expandTrigger.length;
  const collapseNeighbours =
    document.querySelectorAll(`[data-js-collapse="${dataJsCollapse}"]`).item(0) !== null &&
    document.querySelectorAll(`[data-js-collapse="${dataJsCollapse}"]`).item(0) !== undefined;
  const expandingClass = "expand-content-v1__inner-content--is-open";
  for (let i = 0; i < numOfExpandElements; i++) {
    expandTrigger[i].onclick = function (e) {
      if (collapseNeighbours) {
        for (var j = 0; j < numOfExpandElements; j++) {
          if (this != expandTrigger[j]) {
            expandTrigger[j].parentNode.classList.remove(expandingClass);
          }
        }
      }
      this.parentNode.classList.contains(expandingClass)
        ? this.parentNode.classList.remove(expandingClass)
        : this.parentNode.classList.add(expandingClass);
    };
  }
};
