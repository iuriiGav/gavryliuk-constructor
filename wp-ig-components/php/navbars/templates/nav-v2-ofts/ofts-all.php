    <!-- NAV NAME: Overlay from two sides
                   Options:

                   $navbar_name: 
                   ofts (full screen nav with, always collapsed)
                   oftsc (full screen nav, collapses on breakpoint)

                   Options for overlay: 
                   $overlay_option = 
                   1. sliding-from-top-to-bottom
                   2. sliding-from-two-sides



        Disable Overlay by setting --color-overlay to transparent
-->

    <?php
    $navbar_name = 'ofts';
    $overlay_option = 'sliding-from-top-to-bottom';
    $overlay_class = null;

    if ($overlay_option === 'sliding-from-two-sides' && $navbar_name === 'ofts') :

        $overlay_class = 'overlay__sliding-from-two-sides';

    elseif ($overlay_option === 'sliding-from-two-sides' && $navbar_name === 'oftsc') :

        $overlay_class = 'overlay__sliding-from-two-sides--on-breakpoint';

    elseif ($overlay_option === 'sliding-from-top-to-bottom' && $navbar_name === 'ofts') :

        $overlay_class = 'overlay__sliding-from-top-to-bottom';

    elseif ($overlay_option === 'sliding-from-top-to-bottom' && $navbar_name === 'oftsc') :

        $overlay_class = 'overlay__sliding-from-top-to-bottom--on-breakpoint';

    endif;

    ?>

    <!-- commented out for test only, return when done -->

    <!-- <div class="btn-hamburger__general <?php echo $navbar_name === 'oftsc' ? 'btn-hamburger__general--on-breakpoint' : null ?>" tabindex="0" data-js-trigger="btn-hamburger-general">
        <span></span>
        <span></span>
        <span></span>
    </div> -->







    <a id='test-btn' class="btn-hamburger__arrow-and-ring text-replace" data-js-trigger="btn-hamburger-arrow-and-ring">
        Menu
        <span class="btn-hamburger__arrow-and-ring__icon" aria-hidden="true"></span>
        <svg viewBox="0 0 54 54" aria-hidden="true" class="btn-hamburger__arrow-and-ring__svg-container">
            <circle class="btn-hamburger__arrow-and-ring__circle" fill="transparent" stroke-width="1" cx="27" cy="27" r="25" stroke-dasharray="157 157" stroke-dashoffset="157"></circle>
        </svg>
    </a>


  

    <div class=" <?php echo $overlay_class  ?>" data-js-trigger="overlay">
        <nav class="ig-<?php echo $navbar_name; ?>-nav__container" data-js-trigger="<?php echo $navbar_name; ?>-nav__container">

            <?php

            wp_nav_menu(array(
                'theme_location' => 'main-menu',
                'container' => false,
                'menu_class' => '',
                'fallback_cb' => '__return_false',
                'items_wrap' => '<ul id="%1$s" class="ig-' . $navbar_name . '-nav__list %2$s">%3$s</ul>',
                'depth' => 2,
                'walker' => new navbar_dropdown_walker()
            ));
            ?>

        </nav>
    </div>