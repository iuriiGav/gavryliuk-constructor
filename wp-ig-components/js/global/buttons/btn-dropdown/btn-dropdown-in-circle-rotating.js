export const btnDropdownInCircleRotating = () => {
  const btn = document.querySelectorAll(`[data-js-trigger="btn-dropdown-in-circle-rotating"]`).item(0);
  if (btn !== undefined && btn !== null) {
    btn.addEventListener("click", () => {
      btn.classList.toggle("btn-dropdown-in-circle-rotating--active");
    });
  }
};
