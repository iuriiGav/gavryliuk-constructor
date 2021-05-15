import { expandContentOnClick } from './shared-functions/expand-content-on-click';

export const expandContentV1 = (
  expandContentTrigger = "js--expand-content-v1-trigger",
  closeExpandedOnFocusOut = "js--expand-content-v1-close-expanded-on-focus-out"
) => {
  expandContentOnClick( expandContentTrigger, closeExpandedOnFocusOut, "expand-content-v1__inner-content--is-open")
};