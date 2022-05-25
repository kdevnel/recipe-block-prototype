<?php

/**
 * Plugin's bootstrap file to launch the plugin.
 *
 * @package devnel\Recipe_Prototype
 * @author Kyle Nel (@kdevnel)
 * @license GPL2+
 *
 * @wordpress-plugin
 * Plugin Name: Recipe Block Prototype
 * Plugin URI:  https://devnel.blog
 * Description: A prototype for a recipe block that saves data to post meta
 * Version:     0.0.1
 * Author:      Kyle Nel
 * Author URI:  https://devnel.blog
 * Text Domain: devnel
 * Domain Path: /languages
 * License:     GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 */

//  Exit if accessed directly.
defined('ABSPATH') || exit;

class DevnelRecipePrototype
{
    function __construct()
    {
        add_action('init', [$this, 'devnel_recipe_prototype_register_block']);
        add_action('init', [$this, 'devnel_recipe_prototype_load_translation']);
    }

    /**
     * Load all translations for our plugin from the MO file and register script translation.
     */
    function devnel_recipe_prototype_load_translation()
    {
        load_plugin_textdomain('devnel-recipe-prototype', false, basename(__DIR__) . '/languages');

        if (function_exists('wp_set_script_translations')) {
            /**
             * May be extended to wp_set_script_translations( 'my-handle', 'my-domain',
             * plugin_dir_path( MY_PLUGIN ) . 'languages' ) ). For details see
             * https://make.wordpress.org/core/2018/11/09/new-javascript-i18n-support-in-wordpress/
             */
            wp_set_script_translations('devnel-recipe-prototype', 'devnel');
        }
    }

    /**
     * Register block
     *
     * @return void
     */
    function devnel_recipe_prototype_register_block()
    {
        register_block_type(__DIR__, array(
            'render_callback' => [$this, 'renderCallback'],
        ));
    }

    function renderCallback($attributes)
    {
        echo ("We will replace this soon");
    }
}

$devnelRecipePrototype = new DevnelRecipePrototype();
