<?php
   /*
   Plugin Name: Javascript amazon link localiser
   Plugin URI: https://odd-one-out.serek.eu/amazon-ajax-javascript-link-localiser/
   Description: Javascript AJAX based amazon link localiser. Requires my Geo-ip plugin. Converts search links automaticaly and direct links if a match is found in the data attribute: data-amazon-asin="[de][uk][us]1234567890[ca]asinasin[]"
   Version: 1.0
   Author: Poul Serek
   Author URI: https://odd-one-out.serek.eu
   License: GPL2
   */

function add_12312312() {

        global $post;
        $post_contents = '';
        if ( is_singular() ) {
        	$post_contents = $post->post_content;
        }

	if ( strpos( $post_contents, 'www.amazon' ) !== false ) {
                wp_register_script( 'amazonAjaxLinkLocaliser-script',  plugin_dir_url( __FILE__ ) . 'assets/amazonAjaxLinkLocaliser.js' );
                wp_enqueue_script('amazonAjaxLinkLocaliser-script');
        }
}
add_action('wp_enqueue_scripts', 'add_12312312');

function defer_scripts( $tag, $handle, $src ){
    if ( $handle == 'amazonAjaxLinkLocaliser-script' ) {
        return "<script type='text/javascript' defer='defer' src='" . $src . "'></script>" . "\n";
    }

    return $tag;
}
add_filter( 'script_loader_tag', 'defer_scripts', 10, 3 );
