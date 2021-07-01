<?php

/**
 * 서버사이드 렌더링 코드블럭 구성
 *
 * @author       Hansanghyeon
 * @copyright    Hansanghyeon <999@hyeon.pro>
 **/


// Relevanssi 멀티 검색
add_filter('relevanssi_modify_wp_query', 'rlv_set_orderby');
function rlv_set_orderby($query)
{
    $query->set('orderby', array(
        'relevance' => 'desc',
        'post_date' => 'desc',
    ));
    return $query;
}
