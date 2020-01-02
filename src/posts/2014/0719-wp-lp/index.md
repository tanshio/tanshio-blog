---
title: "WordPressの機能を使いつつLPを作る上でハマったこと"
date: "2014-07-19"
path: "/blog/2014/07/wordpress-and-lp/"
type: "blog"
categories: ["WordPress", "Programming"]
tags: ["PHP"]
excerpt: "WordPressの機能を使いつつLPを作る上でハマったこと"
ogp: "./ogp.png"
---

最近ランディングページ専門業者みたいになってるわたくしなのですが、先日WordPressの機能（Contactform7）を使いながらレスポンシブLPを作ったら壮大にハマったのでメモしておきます。

```
<?php require('相対パス/wp-blog-header.php'); ?>
```

通常はHTMLファイルに偽装したPHPファイルに上記のコードを読み込むことでWPの機能が使えるようになります。

## プラグインとの競合

通常、LPとWordPressで組まれたサイトの場合、CSS・JSは違うものを使うと思います。

```

<? php
	remove_action( 'wp_head', 'wp_enqueue_scripts', 9 );
?>

```

上のコードを入れればWPのスタイル、JSを除去できるのですが、ハマりました。

既存サイトがPCサイト向けのデザインの場合、スマホのために無理やりレスポンシブにするのではなく、Multi Device Switcherというプラグインを用いて別テーマで出力しています。こいつでハマりました。  
なぜかPCでもスマホでもフッターにスタイルとJSが埋め込みされてしまいました。

### Multi Device Switcherの除外設定

<script src="https://gist.github.com/tanshio/0adb1cf84ac76d56cda7.js"></script>

参考：<a href="http://ja.forums.wordpress.org/topic/13483" target="_blank">特定のURL、固定ページのみ「theme」を切り替える</a>

上記設定で、フッターにスタイルおよびJSが埋め込みされなくなります。多分上記解決コードがなかったら諦めてCGIフォーム使ってたと思います。

テーマ切り替えスイッチを使用している場合は表示されてしまうので、display:noneで非表示にしときましょう。

## 表示されていてもステータスコードは404という謎

普通LP作ったら広告出稿すると思うんですが、ブラウザでは表示されているのにステータスコードが404でした。そのため広告が不承認になってしまいてんやわんやでした。

{<1>}![](https://tanshio.net/wp-content/uploads/lp-404.png)

URLはドメイン/lpのような感じでした。

### 解決策

**index.htmlをつけたら大丈夫だった。**

URLがドメイン/lpのような感じだったので、おそらくWordPress側でデータが無いため404を返していたのだと思います。index.htmlはURL上すっきりしないのであまり好みじゃないのですが、そんなことも行ってられないのでこれで対応しました。  
これによりちゃんと広告が承認されました。

## まとめ
WPの機能におんぶにだっこでもいいのですが、それにより伴う時間のロスもそれなりに発生します。主にプラグインですが。。。  
このエントリが誰かのためになることを祈ります。（多分未来の自分）
