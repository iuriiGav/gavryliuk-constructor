export const expandContentV1 = () => {
  const expandTrigger = document.querySelectorAll(`[data-js-trigger="expand-content-v1-trigger"]`);
  let i = 0;
  const len = expandTrigger.length;

  for (; i < len; i++) {
    expandTrigger[i].onclick = function (e) {
      for (var j = 0; j < len; j++) {
        if (this != expandTrigger[j]) {
          expandTrigger[j].parentNode.className = expandTrigger[j].parentNode.className.replace(
            / expand-content-v1__inner-content--is-open/i,
            ""
          );
        }
      }
      var cn = this.parentNode.className;
      this.parentNode.className = ~cn.search(/expand-content-v1__inner-content--is-open/i)
        ? cn.replace(/ expand-content-v1__inner-content--is-open/i, "")
        : cn + " expand-content-v1__inner-content--is-open";
    };
  }
};
