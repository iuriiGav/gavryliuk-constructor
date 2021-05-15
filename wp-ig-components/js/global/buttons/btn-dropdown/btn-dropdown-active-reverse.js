import {btnDropdownsRegisterActivization} from './shared-functions/btn-dropdowns-register-activization';
export const btnDropdownActiveReverse = (collapseOthersInGroup = false, btnTriggerClass = 'js--btn-dropdown-trigger-active-reverse', classToActivateBtn = "btn-dropdown-active-reverse--active") => {
  btnDropdownsRegisterActivization(btnTriggerClass, classToActivateBtn , collapseOthersInGroup)
}