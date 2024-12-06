<?php
/**
 * Plugin Name: Sidebar Search Replace
 * Description: Adds a sidebar to the block editor for search-and-replace functionality.
 * Version: 1.0.0
 * Author: Mehedi Hasan
 * License: GPL2+
 */

if (! defined('ABSPATH') ) {
    exit;
}

// Enqueue scripts and styles for the editor
function custom_sidebar_search_replace_enqueue($hook)
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
add_action('admin_enqueue_scripts', 'custom_sidebar_search_replace_enqueue');
