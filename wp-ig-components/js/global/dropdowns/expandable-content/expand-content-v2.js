import { expandContentOnClick } from "./shared-functions/expand-content-on-click";

export const expandContentV2 = (
  expandContentTrigger = "js--expand-content-v2-trigger",
  closeExpandedOnFocusOut = "js--expand-content-v2-close-expanded-on-focus-out"
) => {
  expandContentOnClick(expandContentTrigger, closeExpandedOnFocusOut, "expand-content-v2--active");
};
