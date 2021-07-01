<?php

/**
 * ACP를 로컬스토리지에서 관리하기
 *
 * @author       Hansanghyeon
 * @copyright    Hansanghyeon <dandan9509@gmail.com>
 */

add_filter('acp/storage/file/directory', function () {
    // Use a writable path, directory will be created for you
    // return wp_upload_dir() . '/acp-settings';
});
