export const btnDropdownActiveReverse = () => {
  const btn = document.querySelectorAll(`[data-js-trigger="btn-dropdown-active-reverse"]`).item(0);
  if (btn !== undefined && btn !== null) {
    btn.addEventListener("click", () => {
      btn.classList.toggle("btn-dropdown-active-reverse__container--active");
    });
  }
};
