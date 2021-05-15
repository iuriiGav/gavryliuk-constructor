import {btnDropdownsRegisterActivization} from './shared-functions/btn-dropdowns-register-activization';
export const btnDropdownInCircleRotating = (collapseOthersInGroup = false, dataJsTriggerVal = 'btn-dropdown-in-circle-rotating', classToActivateBtn = "btn-dropdown-in-circle-rotating--active") => {
  btnDropdownsRegisterActivization(dataJsTriggerVal, classToActivateBtn , collapseOthersInGroup)
}