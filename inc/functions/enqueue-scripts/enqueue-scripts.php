<?php 

function ig_gav_scripts()
{

    // Main Stylesheet
    wp_enqueue_style('style', get_stylesheet_uri(), array(), '1.0.0');

    wp_enqueue_script('jquery');

    /** Load JS Files */
    wp_enqueue_script('scripts', get_template_directory_uri() . '/js/main.js', array('jquery'), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'ig_gav_scripts');