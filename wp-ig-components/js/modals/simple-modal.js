export const simpleModal = (prefix = "", preventBodyScroll = true) => {
  const modalTrigger = document.getElementsByClassName(`js--modal-trigger${prefix}`);
  const modalBtnClose = document.getElementsByClassName(`js--modal-btn-close${prefix}`);
  const backdropOverlay = document.getElementsByClassName(`js--modal-overlay-container${prefix}`);
  const modalContent = document.getElementsByClassName(`js--modal-content${prefix}`);
  let clickedBtn = null;

  // for esc key functionality:

  let escTargetOverlay = null;
  let escTargetContent = null;

  const closeModalOnEscBtnClick = (e) => {
    if (e.key === "Escape") {
      escTargetOverlay.classList.remove("modal-active");
      escTargetContent.classList.remove("modal-active");
      clickedBtn.focus();
      if (preventBodyScroll) {
        returnBodyScrollWhenModalIsClosed();
      }
      window.removeEventListener("keyup", closeModalOnEscBtnClick);
    }
  };

  for (let i = 0; i < modalTrigger.length; i++) {
    modalTrigger[i].addEventListener("click", function () {
      console.log("modal trigger clicked");

      clickedBtn = modalTrigger[i];
      trapFocusInsideModal(`js--modal-content${prefix}`);

      backdropOverlay[0].classList.add("modal-active");
      modalContent[0].classList.add("modal-active");

      escTargetOverlay = backdropOverlay[0];
      escTargetContent = modalContent[0];

      if (preventBodyScroll) {
        preventBodyScrollWhenModalIsOpen();
      }

      window.addEventListener("keyup", closeModalOnEscBtnClick);
    });
  }

  for (let i = 0; i < modalBtnClose.length; i++) {
    modalBtnClose[i].addEventListener("click", () => {
      backdropOverlay[0].classList.remove("modal-active");
      modalContent[0].classList.remove("modal-active");
      trapFocusInsideModal(`js--modal-content${prefix}`);
      clickedBtn.focus();
      if (preventBodyScroll) {
        returnBodyScrollWhenModalIsClosed();
      }
      window.removeEventListener("keyup", closeModalOnEscBtnClick);
    });
  }

  backdropOverlay[0].addEventListener("click", function () {
    backdropOverlay[0].classList.remove("modal-active");
    modalContent[0].classList.remove("modal-active");
    window.removeEventListener("keyup", closeModalOnEscBtnClick);
    clickedBtn.focus();
    returnBodyScrollWhenModalIsClosed();
  });

  const trapFocusInsideModal = (modalContainer) => {
    // add all the elements inside modal which you want to make focusable
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const modalContent = document.getElementsByClassName(modalContainer); // select the modal by it's id
    const firstFocusableElement = modalContent[0].querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal
    const focusableContent = modalContent[0].querySelectorAll(focusableElements);
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

  function getScrollXY() {
    var scrOfX = 0,
      scrOfY = 0;
    if (typeof window.pageYOffset == "number") {
      //Netscape compliant
      scrOfY = window.pageYOffset;
      scrOfX = window.pageXOffset;
    } else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
      //DOM compliant
      scrOfY = document.body.scrollTop;
      scrOfX = document.body.scrollLeft;
    } else if (
      document.documentElement &&
      (document.documentElement.scrollLeft || document.documentElement.scrollTop)
    ) {
      //IE6 standards compliant mode
      scrOfY = document.documentElement.scrollTop;
      scrOfX = document.documentElement.scrollLeft;
    }
    return [scrOfX, scrOfY];
  }

  const preventBodyScrollWhenModalIsOpen = () => {
    const body = document.body;

    body.classList.add("in-body-modal-active");

    const scrollY = getScrollXY()[1];
    const viewHeight = window.innerHeight;
    const contentHeight = modalContent[0].offsetHeight;

    modalContent[0].style.transform = "translateX(-50%)";

    modalContent[0].style.top = scrollY + (viewHeight - contentHeight) / 2 + "px";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
  };

  const returnBodyScrollWhenModalIsClosed = () => {
    const body = document.body;
    body.classList.remove("in-body-modal-active");

    const scrollY = body.style.top;

    body.style.position = "";
    body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  };
};
