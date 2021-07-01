<?php

/**
 * ACF Date Picker의 기본 값 설정
 *
 * @author       Hansanghyeon
 * @copyright    Hansanghyeon <999@hyeon.pro>
 **/

add_filter('acf/load_field/name=start_project', function ($field) {
    $field['default_value'] = 'false';
    return $field;
});
