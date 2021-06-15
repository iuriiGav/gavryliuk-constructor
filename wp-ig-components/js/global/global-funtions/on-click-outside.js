export const onClickOutside = function (elClass, callback) {
  const element = Array.from(document.getElementsByClassName(elClass));
  const body = document.getElementsByTagName("body");
  element.map(function (el) {
    setTimeout(() => {
      body[0].addEventListener("click", function (event) {
        if (!el.contains(event.target)) {
          callback();
        }
      });
    }, 1);
  });
};
