// function to open overlay, add it to the button's function which opens the overlay
// possible overlay names:
// 1. sliding-from-top-to-bottom
// 2. sliding-from-top-to-bottom--on-breakpoint
// 3. sliding-from-two-sides
// 4. sliding-from-two-sides--on-breakpoint

export const animateOverlay = (overlayName) => {
  const overlay = document.querySelectorAll(`[data-js-trigger="overlay"]`).item(0);
  if (overlay !== undefined) {
    overlay.classList.toggle(`overlay__${overlayName}--open`);
  }
};
