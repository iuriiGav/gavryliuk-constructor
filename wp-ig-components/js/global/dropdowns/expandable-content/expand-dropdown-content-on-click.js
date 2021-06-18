export const expandDropdownContentOnClick = function (
  functionLimitingContainer,
  expandContentTrigger,
  expandingClass,
  onlyOneItemExpandedAtATime = false,
  dropdownIconContainer = false,
  dropdownIconActiveClass = ""
) {
  // Arguments:
  // functionLimitingContainer --> this is a class that wraps all of the elements of the section and making the scope
  //                               of this function local to that wrapper class
  //
  // expandContentTrigger -------> element that is responsible for openning the content (button, heading, icon etc)
  //
  // onlyOneItemExpandedAtATime -> default false. Default: when one content is already opened and you open another
  //                               all the open dropdowns stay visible. When set to true, only one dropdown stays open
  //                               while others are being closed.
  //
  // expandingClass -------------> class which is added to the .js--card-collapse-expand'
  //
  // dropdownIconContainer ------> class that targets dropdown icon (if it exists) and adds an active class to it on click
  //                               to show that the dropdown is expanded
  //
  // dropdownIconActiveClass ----> class that makes dropdown icon change on activation

  const functionalityContainer = document.getElementsByClassName(functionLimitingContainer)[0];

  const expandTrigger = functionalityContainer.getElementsByClassName(expandContentTrigger);

  for (let i = 0; i < expandTrigger.length; i++) {
    // listen to click on dropdown trigger and define constants that are shared across the fucntion
    expandTrigger[i].addEventListener("click", function (e) {
      const cardContainer = this.closest(".js--card-collapse");
      const closeExpandedContentBtn = Array.from(cardContainer.getElementsByClassName("js--card-collapse-close-btn")); //add close btn functionality
      const expandableContent = cardContainer.getElementsByClassName("js--card-collapse-expand");

      // closeDropdown function triggers closing of the dropdown on click outside, click on close btn, esc btn etc.
      const closeDropdown = (expandedContentTarget, expandTrigger, elementContainsDropdowIcon) => {
        expandedContentTarget.classList.remove(expandingClass);
        expandTrigger.setAttribute("aria-expanded", "false");
        if (dropdownIconContainer !== false) {
          const dropdownIcon = Array.from(elementContainsDropdowIcon.getElementsByClassName(dropdownIconContainer));
          dropdownIcon.map((icon) => {
            icon.classList.remove(dropdownIconActiveClass);
          });
        }
      };

      // if clicked on close btn
      if (closeExpandedContentBtn.length > 0) {
        const closeExpandableContentOnBtnClose = () => {
          closeDropdown(expandableContent[0], expandTrigger[i], cardContainer);
        };
        closeExpandedContentBtn.map((btn) => {
          btn.addEventListener("click", closeExpandableContentOnBtnClose);
        });
      }

      // if other expanded dropdown should be closed when another one opens
      if (onlyOneItemExpandedAtATime !== false) {
        for (var j = 0; j < expandTrigger.length; j++) {
          if (this != expandTrigger[j]) {
            const otherCardsContainer = expandTrigger[j].closest(".js--card-collapse");
            const otherCardsExpandableContent = otherCardsContainer.getElementsByClassName("js--card-collapse-expand");
            closeDropdown(otherCardsExpandableContent[0], expandTrigger[j], otherCardsContainer);
          }
        }
      }

      // basic functionality to toggle expandable content on click on dropdown trigger
      if (expandableContent[0].classList.contains(expandingClass)) {
        closeDropdown(expandableContent[0], expandTrigger[i], cardContainer);
        expandableContent[0].classList.remove(expandingClass);
        expandTrigger[i].setAttribute("aria-expanded", "false");
      } else {
        expandableContent[0].classList.add(expandingClass);
        expandTrigger[i].setAttribute("aria-expanded", "true");

        // if there is a dropdown icon, toggle betweeb active and inactive classes to change dropdown icon look
        if (dropdownIconContainer !== false) {
          const dropdownIcon = Array.from(cardContainer.getElementsByClassName(dropdownIconContainer));
          dropdownIcon.map((icon) => {
            icon.classList.toggle(dropdownIconActiveClass);
          });
        }

        // close drodpowns if clicked outside
        const closeDropdownOnClickOutside = (e) => {
          if (
            !cardContainer.contains(e.target) &&
            !e.target.classList.contains(expandContentTrigger) &&
            !e.target.classList.contains("js--card-collapse-close-btn")
          ) {
            closeDropdown(expandableContent[0], expandTrigger[i], cardContainer);
            window.removeEventListener("click", closeDropdownOnClickOutside);
          }
        };
        window.addEventListener("click", closeDropdownOnClickOutside);

        // close drodpowns if pressed ESC button
        const closeDropdownOnEsc = (e) => {
          if (e.key === "Escape") {
            closeDropdown(expandableContent[0], expandTrigger[i], cardContainer);
            window.removeEventListener("keyup", closeDropdownOnEsc);
          }
        };
        window.addEventListener("keyup", closeDropdownOnEsc);
      }
    });
  }
};
