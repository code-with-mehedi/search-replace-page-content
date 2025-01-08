<?php
/**
 * Plugin Name: Search Replace in Gutenberg Page Editor
 * Description: Adds a sidebar to the block editor for search-and-replace page content.
 * Version: 0.1.0
 * Author: Mehedi Hasan
 * Text Domain: custom-sidebar-search-replace
 * License: GPL2+
 */

if (! defined('ABSPATH') ) {
    exit;
}

/**
 * Registers the sidebar plugin.
 *
 * @param mixed $hook The hook parameter used for registration.
 * 
 * @return void
 */
function srgpe_sidebar_search_replace_enqueue($hook)
{
    if ('post.php' === $hook || 'post-new.php' === $hook) {
        wp_enqueue_script(
            'custom-sidebar-search-replace-js',
            plugin_dir_url(__FILE__) . 'build/index.js',
            ['wp-plugins', 'wp-edit-post', 'wp-element', 'wp-components', 'wp-data'],
            filemtime(plugin_dir_path(__FILE__) . 'build/index.js'),
            true
        );
    }
}
add_action('admin_enqueue_scripts', 'srgpe_sidebar_search_replace_enqueue');
