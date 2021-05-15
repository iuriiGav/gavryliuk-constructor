import { btnDropdownsRegisterActivization } from "./shared-functions/btn-dropdowns-register-activization";
export const btnDropdownSwapToX = (
  collapseOthersInGroup = false,
  btnTriggerClass = "js--btn-dropdown-trigger-swap-to-x",
  classToActivateBtn = "btn-dropdown-swap-to-x--active"
) => {
  btnDropdownsRegisterActivization(btnTriggerClass, classToActivateBtn, collapseOthersInGroup);
};
