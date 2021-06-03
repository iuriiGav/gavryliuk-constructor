export const activateElementOnSpaceOrEnterKeyClick = (elTrigger, acivationClass, acivationClassTarget = "parent") => {
  const triggers = document.getElementsByClassName(elTrigger);
  const triggersArr = Array.from(triggers);

  triggersArr.map((trigger) => {
    const enterKeyCode = 13;
    const spaceKeyCode = 32;

    trigger.addEventListener("keyup", function (event) {
      if (acivationClassTarget === "parent") {
        if (event.keyCode == enterKeyCode || event.keyCode == spaceKeyCode) {
          if (trigger.parentNode.classList.contains(acivationClass)) {
            trigger.parentNode.classList.remove(acivationClass);
            trigger.setAttribute("aria-expanded", "false");
          } else {
            trigger.parentNode.classList.add(acivationClass);
            trigger.setAttribute("aria-expanded", "true");
          }
        }
      } else if (acivationClassTarget === "this") {
        if (event.keyCode == enterKeyCode || event.keyCode == spaceKeyCode) {
          if (trigger.classList.contains(acivationClass)) {
            trigger.classList.remove(acivationClass);
            trigger.setAttribute("aria-expanded", "false");
          } else {
            trigger.classList.add(acivationClass);
            trigger.setAttribute("aria-expanded", "true");
          }
        }
      }
    });
  });
};
