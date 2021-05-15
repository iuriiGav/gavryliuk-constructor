import {btnDropdownsRegisterActivization} from './shared-functions/btn-dropdowns-register-activization';

export const btnDropdownTransformXToUp = (collapseOthersInGroup = false, dataJsTriggerVal = 'btn-dropdown-transform-x-to-up', classToActivateBtn = "btn-dropdown-transform-x-to-up__arrow--active") => {
  btnDropdownsRegisterActivization(dataJsTriggerVal, classToActivateBtn , collapseOthersInGroup)
};