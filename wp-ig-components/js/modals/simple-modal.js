export const simpleModal = (prefix = "") => {
  const modalTrigger = document.getElementsByClassName(`js--modal-trigger${prefix}`);
  const modalBtnClose = document.getElementsByClassName(`js--modal-btn-close${prefix}`);
  const backdropOverlay = document.getElementsByClassName(`js--modal-overlay-container${prefix}`);
  for (let i = 0; i < modalTrigger.length; i++) {
    modalTrigger[i].addEventListener("click", function () {
      trapFocusInsideModal(`js--modal-overlay-container${prefix}`);
      backdropOverlay[0].classList.add("modal-active");

      const closeBackdropOnEscapeBtn = (e) => {
        if (e.key === "Escape") {
          backdropOverlay[0].classList.remove("modal-active");
          window.removeEventListener("keyup", closeBackdropOnEscapeBtn);
        }
      };

      window.addEventListener("keyup", closeBackdropOnEscapeBtn);
    });
  }

  for (let i = 0; i < modalBtnClose.length; i++) {
    modalBtnClose[i].addEventListener("click", () => {
      backdropOverlay[0].classList.remove("modal-active");
      trapFocusInsideModal(`js--modal-overlay-container${prefix}`);
    });
  }

  backdropOverlay[0].addEventListener("click", function () {
    backdropOverlay[0].classList.remove("modal-active");
  });
};

const trapFocusInsideModal = (modalContainer) => {
  // add all the elements inside modal which you want to make focusable
  const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  const modal = document.getElementsByClassName(modalContainer); // select the modal by it's id

  const firstFocusableElement = modal[0].querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal
  const focusableContent = modal[0].querySelectorAll(focusableElements);
  const lastFocusableElement = focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal

  document.addEventListener("keydown", function (e) {
    let isTabPressed = e.key === "Tab" || e.keyCode === 9;

    if (!isTabPressed) {
      return;
    }

    if (e.shiftKey) {
      // if shift key pressed for shift + tab combination
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus(); // add focus for the last focusable element
        e.preventDefault();
      }
    } else {
      // if tab key is pressed
      if (document.activeElement === lastFocusableElement) {
        // if focused has reached to last focusable element then focus first focusable element after pressing tab
        firstFocusableElement.focus(); // add focus for the first focusable element
        e.preventDefault();
      }
    }
  });

  firstFocusableElement.focus();
};
