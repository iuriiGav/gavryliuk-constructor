export const btnDropdownSwapToX = () => {
  const btn = document.querySelectorAll(`[data-js-trigger="btn-dropdown-swap-to-x"]`).item(0);
  if (btn !== undefined && btn !== null) {
    btn.addEventListener("click", () => {
      btn.classList.toggle("btn-dropdown-swap-to-x--active");
    });
  }
};
