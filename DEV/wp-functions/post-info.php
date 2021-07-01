<?php

/**
 * 조건부 더보기 버튼 제거
 *
 * @package      hapas
 * @author       Hansanghyeon
 * @copyright    Hansanghyeon <dandan9509@gmail.com>
 **/

function excerpt_read_more_link($output)
{
    // 초기화
    $output = preg_replace('/&hellip; <\s*a[^>]*>.*?<\s*\/\s*a>/', null, $output);
    $output = preg_replace('/<p>/', null, $output);
    $output = preg_replace('/<\/p>/', null, $output);
    // global $post;
    // if ($post->post_type != 'custom_post_type')
    // {
    //   $output .= '<p><a href="'. get_permalink($post->ID) . '">read more</a></p>';
    // }
    return $output;
}
add_filter('the_excerpt', 'excerpt_read_more_link');
