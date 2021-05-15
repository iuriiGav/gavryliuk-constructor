export const expandContentV2 = (
  dataJsTrigger = "expand-content-v2-trigger",
  dataJsCollapse = "expand-content-v2-collapse-neighbours"
) => {
  const expandTrigger = document.querySelectorAll(`[data-js-trigger="${dataJsTrigger}"]`);
  const collapseNeighbours =
    document.querySelectorAll(`[data-js-collapse="${dataJsCollapse}"]`).item(0) !== null &&
    document.querySelectorAll(`[data-js-collapse="${dataJsCollapse}"]`).item(0) !== undefined;
  const numOfExpandElements = expandTrigger.length;
  const expandingClass = "expand-content-v2--active";

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
