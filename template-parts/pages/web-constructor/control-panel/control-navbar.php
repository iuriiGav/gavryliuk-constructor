
<?php

if( have_rows('constructor_navbar_menu_choices') ):
$i = 1;
    while( have_rows('constructor_navbar_menu_choices') ) : the_row(); 

        $choice = get_sub_field('choice');
        ?>

<section class="navbar-choices">
<input type="radio" id="<?php echo sanitize_title($choice)?>" name="navbar-choices" value="<?php echo sanitize_title($choice)?>" <?php echo $i === 1 ? 'checked' : null ?>>
<label for="<?php echo sanitize_title($choice)?>"><?php esc_html_e($choice, 'gavryliuk-portfolio') ?></label><br>
</section>

<?php
$i++;
    endwhile;


endif;