export const animateBtnDropdownSlideToUp = () => {
  const btn = document.querySelectorAll(`[data-js-trigger="btn-dropdown-transform-x-to-up"]`).item(0);
  if (btn !== undefined && btn !== null) {
    btn.addEventListener("click", () => {
      btn.classList.toggle("btn-dropdown-transform-x-to-up__arrow--active");
    });
  }
};