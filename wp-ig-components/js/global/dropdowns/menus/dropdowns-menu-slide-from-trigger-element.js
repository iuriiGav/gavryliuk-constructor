export const dropdownMenuSlideFromTrigger = () => {
    var dropdownTriggerContainer = document.getElementsByClassName("js--dropdown-menu-slide-from-trigger-trigger");
    var dropdownContent = document.getElementsByClassName("dropdown-menu-slide-from-trigger__content-container");
  
    for (let i = 0; i < dropdownTriggerContainer.length; i++) {
      dropdownTriggerContainer[i].onclick = function () {
        if (dropdownContent[i].classList.contains("fade")) {
          dropdownContent[i].classList.remove("fade");
          dropdownContent[i].classList.add("fade_reverse");
        } else if (dropdownContent[i].classList.contains("fade_reverse")) {
          dropdownContent[i].classList.remove("fade_reverse");
          dropdownContent[i].classList.add("fade");
        } else {
          dropdownContent[i].classList.add("fade");
        }
      };
    }
  };