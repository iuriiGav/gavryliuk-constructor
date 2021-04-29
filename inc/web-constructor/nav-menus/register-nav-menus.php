<?php

function ig_gav_register_navwalker_for_constructor()
{ 
    // require_once get_template_directory() . '/inc/web-constructor/walkers/navbar-from-two-sides-full-screen/navbar-from-two-sides-full-screen-walker.php';
    // require_once get_template_directory() . '/inc/web-constructor/walkers/navbar-overlay-from-top-to-bottom/navbar-overlay-from-top-to-bottom-walker.php';
}
add_action('after_setup_theme', 'ig_gav_register_navwalker_for_constructor');

register_nav_menu('main-menu', esc_html__('Main menu'));
register_nav_menu('footer-menu', esc_html__('Footer menu'));