import {btnDropdownsRegisterActivization} from './shared-functions/btn-dropdowns-register-activization';
export const btnDropdownActiveReverse = (collapseOthersInGroup = false, dataJsTriggerVal = 'btn-dropdown-active-reverse', classToActivateBtn = "btn-dropdown-active-reverse--active") => {
  btnDropdownsRegisterActivization(dataJsTriggerVal, classToActivateBtn , collapseOthersInGroup)
}