export const registerButtonHamburgerMiddlePattySlidingOff = () => {
  var buttonHamburgerMiddlePattyOffScreen = document
    .querySelectorAll(`[data-js-trigger="btn-hamburger-middle-sliding-off"]`)
    .item(0);
 
  buttonHamburgerMiddlePattyOffScreen.addEventListener("click", function () {
    if (this.classList.contains("btn-hamburger-middle-sliding-off--active")) {
      this.classList.remove("btn-hamburger-middle-sliding-off--active");
    } else {
      this.classList.add("btn-hamburger-middle-sliding-off--active");
    }
  });
};
