<?php
/**
 * 파일 업로드 확장자 허가
 *
 * @package      upload media type allow
 * @author       Hansanghyeon
 * @copyright    Hansanghyeon <dandan9509@gmail.com>
**/

function my_myme_types($mime_types)
{
    $mime_types['alfredworkflow'] = 'application/alfred';     // Adding .alfredworkflow

    // unset( $mime_types['xls'] );  // Remove .xls extension
    // unset( $mime_types['xlsx'] ); // Remove .xlsx extension
    return $mime_types;
}
add_filter('upload_mimes', 'my_myme_types');
