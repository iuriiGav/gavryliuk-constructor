    <!-- NAV NAME: Simple Navbar Top to Bottom
                   Options:
                   snttbc => collapse on breakpoint
                   snttb  =>  collapsed always
-->

<?php
    // $navbar_name = 'snttbc';
    $navbar_name = 'snttb';

    ?>

    <input class="ig-<?php echo $navbar_name; ?>-navbar-toggler__trigger" id="ig-<?php echo $navbar_name; ?>-nav-toggler" type="checkbox" data-js-trigger='<?php echo $navbar_name; ?>-navbar-toggler-checkbox' />

    <label class="ig-<?php echo $navbar_name; ?>-navbar-toggler" for="ig-<?php echo $navbar_name; ?>-nav-toggler" tabindex="0" data-js-trigger="<?php echo $navbar_name; ?>-navbar-toggler">
        <span class="ig-<?php echo $navbar_name; ?>-navbar-toggler__line"></span>
        <span class="ig-<?php echo $navbar_name; ?>-navbar-toggler__line"></span>
        <span class="ig-<?php echo $navbar_name; ?>-navbar-toggler__line"></span>
    </label>

    <?php
    // $args = array('navbar_name' => $navbar_name);
    // get_template_part('template-parts/web-constructor/navbars/navbar-expand-top-to-bottom/TEST--test-navbar', null, $args);
    ?>


    <nav class="ig-<?php echo $navbar_name; ?>-nav__container" data-js-trigger='<?php echo $navbar_name; ?>-navbar-container'>
        <h1 class="ig-<?php echo $navbar_name; ?>-nav-logo__text" tabindex="0">
            <a href="#">Simple Menu</a>
        </h1>
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