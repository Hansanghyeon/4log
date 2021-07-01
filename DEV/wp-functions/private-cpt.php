<?php

/**
 * 일 포스트타입의 글 모두 비공개로 설정
 *
 * @author       Hansanghyeon
 * @copyright    Hansanghyeon <999@hyeon.pro>\
 * @link         https://www.isitwp.com/force-custom-post-type-to-be-private/
 **/

// add_action('save_post', 'check_type_values', 10, 2);

function check_type_values($post_id, $post)
{
    global $defPassword;
    if ($post->post_type) {
        switch ($post->post_type) {
      case 'work':
        $post->post_status = 'private';
        $post->post_password = ('' == $post->post_password) ? $defPassword + $post->ID : $post->post_password;
        break;
    }
    }
    return;
}

// add_filter('default_content', 'set_default_values', 10, 2);

// function set_default_values($post_content, $post)
// {
//   global $defPassword;
//   if ($post->post_type)
//     switch ($post->post_type) {
//       case 'work':
//         $post->post_status = 'private';
//         $post->post_password = $defPassword + $post->ID;
//         break;
//     }
//   return $post_content;
// }
