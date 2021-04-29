


// General starter function to animate the button

export const animateHamburgerButton = () => {
  const btnHamburgerGeneral = document.querySelectorAll(`[data-js-trigger="btn-hamburger-general"]`).item(0);
  if (btnHamburgerGeneral !== undefined) {
    btnHamburgerGeneral.addEventListener("click", () => {
      btnHamburgerGeneral.classList.toggle("btn-hamburger__general--active");
    });
  }
};



