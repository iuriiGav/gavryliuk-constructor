export const activateElementOnSpaceOrEnterKeyClick = (elTrigger, acivationClass) => {
  const triggers = document.getElementsByClassName(elTrigger);
  const triggersArr = Array.from(triggers);

  triggersArr.map((trigger) => {
    const enterKeyCode = 13;
    const spaceKeyCode = 32;

    trigger.addEventListener("keyup", function (event) {
      if (event.keyCode == enterKeyCode || event.keyCode == spaceKeyCode) {
        if (trigger.parentNode.classList.contains(acivationClass)) {
          trigger.parentNode.classList.remove(acivationClass);
          trigger.setAttribute("aria-expanded", "false");
        } else {
          trigger.parentNode.classList.add(acivationClass);
          trigger.setAttribute("aria-expanded", "true");
        }
      }
    });
  });
};
