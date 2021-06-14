<?php 
// add options page with advanced custom fields plugin

if( function_exists('acf_add_options_page')) : 
    acf_add_options_page(
    
        array(
            'page_title' => 'Website Settings',
            'menu_title' => 'Website Settings',
            'menu_slug' => 'website-settings',
            'capability' => 'edit_posts',
        )
    );

    acf_add_options_sub_page(

        array(
            'page_title' => 'General Settings',
            'menu_title' => 'General',
            'parent_slug' => 'website-settings',

        )
        );

   
    acf_add_options_sub_page(

        array(
            'page_title' => 'Cover Images',
            'menu_title' => 'Covers',
            'parent_slug' => 'website-settings',

        )
        );
   

    endif;
