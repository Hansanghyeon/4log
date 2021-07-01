<?php

/**
 * 요약글에 <p> 태그 제거
 *
 * @author       Hansanghyeon
 * @copyright    Hansanghyeon <dandan9509@gmail.com>
 */

function wpsites_disable_self_pingbacks(&$links)
{
    foreach ($links as $l => $link) {
        if (0 === strpos($link, get_option('home'))) {
            unset($links[$l]);
        }
    }
}

add_action('pre_ping', 'wpsites_disable_self_pingbacks');
