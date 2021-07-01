<?php

/**
 * TOC용 목차 위젯영역 생성
 *
 * @author       Hansanghyeon
 * @copyright    Hansanghyeon <999@hyeon.pro>
 **/

function wpblog_widget()
{
    register_sidebar(array(
      'name' => __('글 첫번째 영역', 'wpb'),
      'id' => 'content_first', // unique-sidebar-id
      'description' => '',
      'class' => '',
      'before_widget' => '<li id="%1$s" class="widget %2$s">',
      'after_widget' => '</li>',
      'before_title' => '<h2 class="widgettitle">',
      'after_title' => '</h2>',
    ));
}

add_action('widgets_init', 'wpblog_widget');
