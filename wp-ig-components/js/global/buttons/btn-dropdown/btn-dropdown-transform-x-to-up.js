import {btnDropdownsRegisterActivization} from './shared-functions/btn-dropdowns-register-activization';

export const btnDropdownTransformXToUp = (collapseOthersInGroup = false, btnTriggerClass = 'js--btn-dropdown-trigger-transform-x-to-up', classToActivateBtn = "btn-dropdown-transform-x-to-up__arrow--active") => {
  btnDropdownsRegisterActivization(btnTriggerClass, classToActivateBtn , collapseOthersInGroup)
};