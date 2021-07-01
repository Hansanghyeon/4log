<?php

/**
 * Google Tag manager
 *
 * @author       Hansanghyeon
 * @copyright    Hansanghyeon <999@hyeon.pro>
 **/

function GTM_Script()
{
    ?>
<!-- Google Tag Manager -->
<script>
  (function(w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js'
    });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src =
      'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, 'script', 'dataLayer', 'GTM-KWF5GT8');
</script>
<!-- End Google Tag Manager -->
<?php
}

function GTM_BodyScript()
{
    ?>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KWF5GT8" height="0" width="0"
    style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
<?php
}

if (strpos(get_site_url(), 'local') === false) {
    add_action('wp_head', 'GTM_Script');
    add_action('wp_body_open', 'GTM_BodyScript');
}
