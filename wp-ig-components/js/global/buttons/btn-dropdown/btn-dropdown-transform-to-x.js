import {btnDropdownsRegisterActivization} from './shared-functions/btn-dropdowns-register-activization';

export const btnDropdownTransformToX = (collapseOthersInGroup = false, btnTriggerClass = 'js--btn-dropdown-trigger-transform-to-x', classToActivateBtn = "btn-dropdown-transform-to-x__arrow--active") => {
  btnDropdownsRegisterActivization(btnTriggerClass, classToActivateBtn , collapseOthersInGroup)
}