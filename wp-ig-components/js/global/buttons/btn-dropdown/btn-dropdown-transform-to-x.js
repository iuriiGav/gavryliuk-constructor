export const btnDropdownTransformToX = () => {
  const btn = document.querySelectorAll(`[data-js-trigger="btn-dropdown-transform-to-x"]`).item(0);
  if (btn !== undefined && btn !== null) {
    btn.addEventListener("click", () => {
      btn.classList.toggle("btn-dropdown-transform-to-x__arrow--active");
    });
  }
};
