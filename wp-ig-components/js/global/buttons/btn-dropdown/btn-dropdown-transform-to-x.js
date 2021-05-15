import {btnDropdownsRegisterActivization} from './shared-functions/btn-dropdowns-register-activization';

export const btnDropdownTransformToX = (collapseOthersInGroup = false, dataJsTriggerVal = 'btn-dropdown-transform-to-x', classToActivateBtn = "btn-dropdown-transform-to-x__arrow--active") => {
  btnDropdownsRegisterActivization(dataJsTriggerVal, classToActivateBtn , collapseOthersInGroup)
}