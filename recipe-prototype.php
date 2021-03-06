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

/**
 * Load all translations for our plugin from the MO file.
*/
add_action('init', 'devnel_recipe_prototype_load_textdomain');

function devnel_recipe_prototype_load_textdomain() {
    load_plugin_textdomain('devnel-recipe-prototype', false, basename(__DIR__) . '/languages');
}

/**
 * Enqueue JS and CSS
 *
 * @return void
 */
function devnel_recipe_prototype_register_block() {

    // automatically load dependencies and version
    $asset_file = include(plugin_dir_path(__FILE__) . 'build/index.asset.php');

    wp_register_script(
        "devnel-recipe-prototype",
        plugins_url('build/index.js', __FILE__),
        $asset_file['dependencies'],
        $asset_file['version']
    );

    wp_register_style(
        'devnel-recipe-prototype',
        plugins_url('style.css', __FILE__),
        array( ),
        filemtime(plugin_dir_path(__FILE__) . 'style.css')
    );

    register_block_type(
        'devnel/recipe-prototype', array(
        'style' => 'devnel-recipe-prototype',
        'editor_script' => 'devnel-recipe-prototype',
    ) );

    if (function_exists('wp_set_script_translations')) {
        /**
         * May be extended to wp_set_script_translations( 'my-handle', 'my-domain',
         * plugin_dir_path( MY_PLUGIN ) . 'languages' ) ). For details see
         * https://make.wordpress.org/core/2018/11/09/new-javascript-i18n-support-in-wordpress/
         */
        wp_set_script_translations('devnel-recipe-prototype', 'devnel');
    }

}
add_action('init', 'devnel_recipe_prototype_register_block');
