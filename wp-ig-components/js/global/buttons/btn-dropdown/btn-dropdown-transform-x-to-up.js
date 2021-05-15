import {btnDropdownsRegisterActivization} from './shared-functions/btn-dropdowns-register-activization';

export const btnDropdownTransformXToUp = (dataJsTriggerVal = 'btn-dropdown-transform-x-to-up', collapseOthersInGroup = false, classToActivateBtn = "btn-dropdown-transform-x-to-up__arrow--active") => {
  btnDropdownsRegisterActivization(dataJsTriggerVal, classToActivateBtn , collapseOthersInGroup)
};