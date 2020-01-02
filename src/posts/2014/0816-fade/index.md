---
title: "ページ遷移でフェードかけるだけのJavaScript作った"
date: "2014-08-16"
path: "/blog/2014/08/fade-page-dont-use-jqery/"
type: "blog"
categories: ["Frontend", "Programming", "Products"]
tags: ["JavaScript", "CSS"]
excerpt: "ページ遷移でフェードかけるだけのJavaScript作った"
ogp: "./ogp.png"
---

絶賛脱jQueryで墓穴を掘っている感ある今日このごろです。
いつまで続くのか分からない感ありますが、脱jQueryで作ったものをちまちま公開したいと思います。脱jQueryのせいで夏休みがなくなってる感あるので誰か使ってあげて下さい。

## ページ遷移でフェードかけるだけのJavaScript

**動作環境**  
transition使ってるためIE10以上（8以上にするかもしれませんがいつものようにしないと思います）

<a href="https://tanshio.net/demo/iefade/demo2.html" target="_blank">demo</a>

<script src="https://gist.github.com/tanshio/d14e7994e39c7c046f68.js"></script>


<script src="https://gist.github.com/tanshio/45551fc7f00f914a0cec.js"></script>

### オプション項目

```
	'duration': 1000, //何秒かけてフェードさせるか（大体）デフォルト1000
	'smp'     : false,//スマホに対応させるか。デフォルト false
	'selector': ['.mainNav','footer','article nav'],//position:fixedの要素。IEでフェードかからないため
	'noClass' : ['aaa'],//除外したいクラス名
	'noData'  : ['data-tabs','data-imagelightbox']//除外したい属性

```

一応内部アンカーは除外、クラスと属性も除外できるようにしてあります。
サイズは普通で4kb、minify版で2.4kbです

IEではなぜかposition:fixedかかってるものはフェードかからないため指定してあげる必要があります。面倒くさいですね。

たまに画面がちらつくのですが、多分データが重くないとちらつくみたい。その場合は直opacityかければと思ったんですけど、それでもちらついたりする場合があります。100%できるやり方があるのを知ってる方は教えて下さい。  
なにか問題などあったらコメント下さい。コードは適当なのでパブリックドメインでかまいません。

ぶっちゃけページ遷移でエフェクトかけるのはおすすめしません。pjaxでもたまにちらついて中身見えたりするサイトもあるので難しいのかも。

作ってみて改めて思うのはjQuery is 神
