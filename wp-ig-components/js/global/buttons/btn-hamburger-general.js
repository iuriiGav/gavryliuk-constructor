// General starter function to animate the button

export function animateHamburgerButton(onClickCallback = false) {
  const btnHamburgerGeneral = Array.from(document.getElementsByClassName("js--btn-hamburger-general"));

  btnHamburgerGeneral.map((btn) => {
    btn.addEventListener("click", function () {
      if (onClickCallback) {
        onClickCallback(this);
      }

      btn.classList.toggle("btn-hamburger__general--active");
      if (btn.getAttribute("aria-expanded") == "false") {
        btn.setAttribute("aria-expanded", "true");
      } else {
        btn.setAttribute("aria-expanded", "false");
      }
    });
  });
}
