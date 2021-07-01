<?php

/**
 * highlightjs 😎
 *
 * @author       Hansanghyeon
 * @copyright    Hansanghyeon <999@hyeon.pro>
 **/

add_filter('syntax_highlighting_code_block_styling', '__return_false');
add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style('highlighting code', 'https://hansanghyeon.github.io/highlight.js-custom/main.css');
});
