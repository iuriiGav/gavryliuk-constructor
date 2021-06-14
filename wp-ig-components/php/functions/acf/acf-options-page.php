<?php
// add options page with advanced custom fields plugin

if (function_exists('acf_add_options_page')) :
    acf_add_options_page(

        array(
            'page_title' => 'Website Settings',
            'menu_title' => 'Website Settings',
            'menu_slug' => 'website-settings',
            'capability' => 'edit_posts',
        )
    );

endif;
