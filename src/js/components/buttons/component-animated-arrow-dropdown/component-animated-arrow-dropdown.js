
import * as $ from 'jquery';

export const componentAnimatedArrowDropdown = () => {
    if($( ".ig-dropdown-arrow-icon" ).length > 0) {

        $( ".ig-dropdown-arrow-icon" ).on("click", function(e) {
            e.preventDefault();
            $(this).toggleClass("ig-dropdown-arrow-icon__open");
          });

    }

}

