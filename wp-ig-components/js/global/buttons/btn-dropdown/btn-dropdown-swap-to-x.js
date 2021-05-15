import {btnDropdownsRegisterActivization} from './shared-functions/btn-dropdowns-register-activization';

export const btnDropdownSwapToX = (collapseOthersInGroup = false, dataJsTriggerVal = 'btn-dropdown-swap-to-x', classToActivateBtn = "btn-dropdown-swap-to-x--active") => {
  btnDropdownsRegisterActivization(dataJsTriggerVal, classToActivateBtn , collapseOthersInGroup)
}