    <!-- NAV NAME: Full Screen Pushing Nav
                   Options:

                   $navbar_name: 
                   fspn (full screen nav with, always collapsed)
                   

                   $reverse:
                   false (navbar slides from left to right)
                   true (navbar slides from right to left) 




 
-->

    <?php
    $navbar_name = 'fspnc';
    $reverse = true;

    ?>

    <a class="btn-hamburger__arrow-and-ring <?php echo $reverse ? 'btn-hamburger__arrow-and-ring--reverse' : null ?> text-replace" data-js-trigger="btn-hamburger-arrow-and-ring">
        Menu
        <span class="btn-hamburger__arrow-and-ring__icon" aria-hidden="true"></span>
        <svg viewBox="0 0 54 54" aria-hidden="true" class="btn-hamburger__arrow-and-ring__svg-container">
            <circle class="btn-hamburger__arrow-and-ring__circle" fill="transparent" stroke-width="1" cx="27" cy="27" r="25" stroke-dasharray="157 157" stroke-dashoffset="157"></circle>
        </svg>
    </a>
    

    <div  class="ig-<?php echo $navbar_name?>-prenav__container">
        <div class="ig-<?php echo $navbar_name?>-prenav__wrapper <?php echo $reverse ? 'ig-' . $navbar_name . '-prenav__wrapper--reverse' : null ?>">
        
            <div class="ig-<?php echo $navbar_name?>-prenav__content">
                <h2 class="ig-<?php echo $navbar_name?>-prenav__title">Navigation</h2>
                <nav class="ig-<?php echo $navbar_name?>-nav__container">
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
<!-- <aside>

<h1>Placeholder for listen button</h1>
</aside> -->
                </nav>
            </div>
        </div>

    </div>

  
    <main class="ig-main__<?php echo $navbar_name?> <?php echo $reverse ? 'ig-main--reverse' : null ?>">
            <h1>Your content here</h1>
    </main>