<?php

function generateRecipeHTML($recipeId)
{
    $recipePost = new WP_Query(array(
        'post_type' => 'family_recipe_book',
        'p' => $recipeId,
    ));

    while ($recipePost->have_posts()) {
        $recipePost->the_post();
        ob_start(); ?>
        <div class="recipe-container">
            <div class="recipe-container__text">
                <h2><?php echo esc_html(get_the_title()); ?></h2>
                <p><?php echo wp_trim_words(get_the_content(), 30); ?></p>
                <p><strong><a href="<?php the_permalink(); ?>">See the full <?php echo esc_html(get_the_title()); ?> recipe &raquo;</a></strong></p>
            </div>
        </div>
<?php
        wp_reset_postdata();
        return ob_get_clean();
    }
}
