<?php

/**
 *
 * 사용할 리스트 목록 참고
 * https://github.com/mkaz/code-syntax-block#languages
 * https://prismjs.com/#supported-languages
 *
 * @author       Hansanghyeon
 * @copyright    Hansanghyeon <999@hyeon.pro>
 **/

add_filter('mkaz_code_syntax_language_list', function () {
    return  array(
    "bash" => "Bash / Shell",
    "html" => "HTML",
    "javascript" => "JavaScript",
    "json" => "JSON",
    "php" => "PHP",
    "jsx " => "React JSX ",
    "sass" => "Sass",
    "typescript" => "typescript",
    "vim" => "vim",
  );
});
