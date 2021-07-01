<?php

/**
 * functions의 모든 wordpress hook 가져오기
 * 하위 폴더포함 모든 php hook!
 *
 * @author       Hansanghyeon
 * @copyright    Hansanghyeon <999@hyeon.pro>
 **/


$fileinfos = new RecursiveIteratorIterator(
    new RecursiveDirectoryIterator(plugin_dir_path(__FILE__)),
    RecursiveIteratorIterator::LEAVES_ONLY,
    RecursiveIteratorIterator::CATCH_GET_CHILD
);

foreach ($fileinfos as $pathname => $fileinfo) {
    if (!$fileinfo->isFile()) {
        continue;
    }
    if (strpos($pathname, '.php') !== false) {
        if (strpos($pathname, 'ignore') === false) {
            include_once($pathname);
        }
    }
}
