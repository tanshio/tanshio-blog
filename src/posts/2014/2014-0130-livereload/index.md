---
title: "WPでもRailsでもPhalcon PHPでもなんでもLivereload"
date: "2014-01-30"
path: "/blog/2014/01/livereload-isnt-stressful/"
type: "blog"
categories: ["環境構築"]
tags: []
excerpt: "WPでもRailsでもPhalcon PHPでもなんでもLivereload"
---

もはや、WPでもなんでもかんでもLivereloadなしじゃ生きられない体になってしまいました。ほんとうに有難いので共有します。

gruntやLivereloadツールさえあればどうとでもなります。導入などは他のサイトさんなどを見てください。

SERVER_ADDRはサーバーのIPアドレス   
 script srcのところに入ってるのはlivereloadのポートとなります。

```php
<?php if($_SERVER['SERVER_ADDR'] == '192.168.50.4'): ?>         
<script>         
 document.write(         
 '<script src="http://127.0.0.1:35729/livereload.js?snipver=1"></' +         
 'script>'         
 )         
</script>         
<?php endif; ?>       
```

PHPであればフッターなどの共通部分に貼ってあげてください。   
 WPだったらwp_footerにひっかければfunction.phpに書くだけで済みますね＼(^o^)／   
 仮想環境や、テスト環境だとかなり捗ります。
