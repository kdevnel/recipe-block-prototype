<?php

function generateRecipeHTML($block_attributes, $content)
{
    ob_start(); ?>
    <div class="wp-block-devnel-recipe-prototype">
        <h2>test</h2>
        <p>test</p>
        <h3>Ingredients</h3>
        <ul class="ingredients"></ul>
        <h3>Method</h3>
        <ol class="method"></ol>
    </div>
<?php return ob_get_clean();
}
