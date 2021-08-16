export const trapFocusInsideElement = (localizationWrapper = false) => {
  const elementWrapper = localizationWrapper ? document.getElementsByClassName(localizationWrapper)[0] : document;
  // add all the elements inside modal which you want to make focusable
  const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  const trappedFocusContainer = elementWrapper.getElementsByClassName("js--nav-list"); // select the modal by it's id
  const firstFocusableElement = trappedFocusContainer[0].querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal
  const focusableContent = trappedFocusContainer[0].querySelectorAll(focusableElements);
  const lastFocusableElement = focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal
  const navbarContainer = elementWrapper.getElementsByClassName("js--nav");

  const trapFocusInsideTheElementFn = (e) => {
    let isTabPressed = e.key === "Tab" || e.keyCode === 9;
    const navContainer = document.getElementsByClassName(localizationWrapper);
    if (!isTabPressed || navContainer[0].getAttribute("data-focus-trapped") === "false") {
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
  };

  document.addEventListener("keydown", trapFocusInsideTheElementFn);

  // firstFocusableElement.focus();
};
