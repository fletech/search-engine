<?php

/*
  Plugin Name: SearchEngine - PonchoDigital
  Version: 1.0
  Author: Facundo @ PonchoDigital
  Author URI: https://github.com/fletech
*/

if( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

class BoilerPlate {
  function __construct() {
    add_action('init', array($this, 'onInit'));
  }

  function onInit() {
    wp_register_script('makeUpANameHereScript', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element', 'wp-editor'));
    wp_register_style('makeUpANameHereStyle', plugin_dir_url(__FILE__) . 'build/index.css');
    
    register_block_type('makeupnamespace/make-up-block-name', array(
      'render_callback' => array($this, 'renderCallback'),
      'editor_script' => 'makeUpANameHereScript',
      'editor_style' => 'makeUpANameHereStyle'
    ));
  }

  function renderCallback($attributes) {
    if (!is_admin()) {
      wp_enqueue_script('boilerplateFrontendScript', plugin_dir_url(__FILE__) . 'build/frontend.js', array('wp-element'));
      wp_enqueue_style('boilerplateFrontendStyles', plugin_dir_url(__FILE__) . 'build/index.css');

    }

    ob_start(); ?>

    <div class="root my-unique-plugin-wrapper-class"><pre style="display: none;"><?php echo wp_json_encode($attributes) ?></pre></div>
    <?php return ob_get_clean();
    
    
  }

  function renderCallbackBasic($attributes) {
    return '<div class="entry-frontend my-unique-plugin-wrapper-class"> </div>';
  }
}

$boilerplate = new BoilerPlate();