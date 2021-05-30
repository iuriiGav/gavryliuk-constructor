export const expandContentOnClick = function (expandContentTrigger, closeExpandedOnFocusOut, expandingClass) {
  const expandTrigger = document.getElementsByClassName(expandContentTrigger);
  const numOfExpandElements = expandTrigger.length;
  const collapseNeighbours = document.getElementsByClassName(closeExpandedOnFocusOut).length > 0;
  console.log(collapseNeighbours);

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