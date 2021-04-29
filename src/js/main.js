import {webConstructor} from './components/web-constructor/web-constructor';
import { registerButtons } from './components/buttons/buttons';



import {animateHamburgerBtnArrowAndRing} from '../../wp-ig-components/js/global/buttons/btn-hamburger__arrow-and-ring';



webConstructor();
registerButtons();

animateHamburgerBtnArrowAndRing('ig-fspnc-nav-is-open');



// from package

import {registerOFTSNavbarFunctions} from '../../wp-ig-components/js/navbars/nav-v2-ofts/ofts-all';


registerOFTSNavbarFunctions('ofts', 767, 'sliding-from-top-to-bottom')