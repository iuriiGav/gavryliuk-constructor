<?php 

// Available Names Influenced By this Walher
// ofts, oftsc, snttb, snttbc
//
//
//


class navbar_dropdown_walker extends Walker_Nav_menu
{


  private $current_item;
  private $dropdown_menu_alignment_values = [
    'dropdown-menu-start',
    'dropdown-menu-end',
    'dropdown-menu-sm-start',
    'dropdown-menu-sm-end',
    'dropdown-menu-md-start',
    'dropdown-menu-md-end',
    'dropdown-menu-lg-start',
    'dropdown-menu-lg-end',
    'dropdown-menu-xl-start',
    'dropdown-menu-xl-end',
    'dropdown-menu-xxl-start',
    'dropdown-menu-xxl-end'
  ];

  function start_lvl(&$output, $depth = 0, $args = array())
  {


    //=========CHANGE NAME HERE
    $navbar_name = 'fspnc';
    //========================//
    $dropdown_menu_class[] = '';
    foreach($this->current_item->classes as $class) {
      if(in_array($class, $this->dropdown_menu_alignment_values)) {
        $dropdown_menu_class[] = $class;
      }
    }
    $indent = str_repeat("\t", $depth);
    $submenu = ($depth > 0) ? ' sub-menu' : '';
    $output .= "\n$indent<ul data-js-trigger='" . $navbar_name . "-submenu' aria-label='submenu' class=\"ig-" . $navbar_name . "-dropdown-menu__list$submenu " . esc_attr(implode(" ",$dropdown_menu_class)) . " depth_$depth\">\n";
  }

  function start_el(&$output, $item, $depth = 0, $args = array(), $id = 0)
  {
    //=========CHANGE NAME HERE
    $navbar_name = 'fspnc';
    //========================//
    $this->current_item = $item;

    $indent = ($depth) ? str_repeat("\t", $depth) : '';

    $li_attributes = $args->walker->has_children ? 'data-js-trigger="' . $navbar_name . '-dropdown-container"' : '';
    $class_names = $value = '';

    $classes = empty($item->classes) ? array() : (array) $item->classes;

    $classes[] = ($args->walker->has_children) ? 'ig-' . $navbar_name . '-dropdown-menu__container ig-' . $navbar_name . '-dropdown-menu__list-item' : '';
    $classes[] = 'ig-' . $navbar_name . '-nav__list-item';
    $classes[] = 'ig-' . $navbar_name . '-nav__list-item-' . $item->ID;
    $attributes[] = 'data-tt="sd"';
    if ($depth && $args->walker->has_children) {
      $classes[] = 'ig-' . $navbar_name . '-dropdown-menu__container  ig-dropdown-menu-end';
    }

    $class_names =  join(' ', apply_filters('nav_menu_css_class', array_filter($classes), $item, $args));
    $class_names = ' class="' . esc_attr($class_names) . '"';

    $id = apply_filters('nav_menu_item_id', 'ig-' . $navbar_name . 'menu-item-' . $item->ID, $item, $args);
    $id = strlen($id) ? ' id="' . esc_attr($id) . '"' : '';

    $output .= $indent . '<li ' . $id . $value . $class_names . $li_attributes . '>';

    $attributes = !empty($item->attr_title) ? ' title="' . esc_attr($item->attr_title) . '"' : '';
    $attributes .= !empty($item->target) ? ' target="' . esc_attr($item->target) . '"' : '';
    $attributes .= !empty($item->xfn) ? ' rel="' . esc_attr($item->xfn) . '"' : '';
    $attributes .= !empty($item->url) ? ' href="' . esc_attr($item->url) . '"' : '';

    $active_class = ($item->current || $item->current_item_ancestor) ? 'ig-active' : '';
    $attributes .= ($args->walker->has_children) ? ' class="ig-' . $navbar_name . '-nav__link' . $active_class . '"'. 'data-js-trigger="' . $navbar_name . '-dropdown-toggler"' : ' class="ig-' . $navbar_name . '-nav__link' . $active_class . '"';

    $item_output = $args->before;
    $item_output .= ($depth > 0) ? '<a class=" ig-' . $navbar_name . '-dropdown-menu__link"' . $attributes . '>' : '<a' . $attributes . '>';
    $item_output .= $args->link_before . apply_filters('the_title', $item->title, $item->ID) . $args->link_after;
    $item_output .= '</a>';
    $item_output .= $args->after;

    $output .= apply_filters('walker_nav_menu_start_el', $item_output, $item, $depth, $args);
  }
}