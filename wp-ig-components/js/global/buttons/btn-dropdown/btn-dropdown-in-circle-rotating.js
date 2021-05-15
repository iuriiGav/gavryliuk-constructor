import {btnDropdownsRegisterActivization} from './shared-functions/btn-dropdowns-register-activization';
export const btnDropdownInCircleRotating = (collapseOthersInGroup = false, btnTriggerClass = 'js--btn-dropdown-trigger-in-circle-rotating', classToActivateBtn = "btn-dropdown-in-circle-rotating--active") => {
  btnDropdownsRegisterActivization(btnTriggerClass, classToActivateBtn , collapseOthersInGroup)
}