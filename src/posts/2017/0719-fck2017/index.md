---
title: "WordCamp Kyoto 2017に参加＆登壇してきました"
date: "2017-07-06"
path: "/blog/2017/07/wordcamp-kyoto-2017に参加＆登壇してきました/"
type: "blog"
categories: ["WordPress", "Event"]
tags: []
excerpt: "WordCamp Kyoto 2017に参加＆登壇してきました"
ogp: "./ogp.png"
---

WordCamp Kyoto 2017に参加してきました！  
仙台から夜行バスで12時間という快適な旅！！3時間おきぐらいに起こされたのできつかったです。

## スライド

https://speakerdeck.com/tanshio/wp-rest-apideshi-ji-he-gaxi-siifalse

WP REST APIをみんな使おう！って感じのスライドです。

(ギリギリまで作成してたのでタイポがあったりしますが＞＜)

## サンプルコード

あくまで簡単なサンプルコードです。使う場合はカスタマイズが必要になります。

### その場で検索

その場でインクリメンタルサーチできるコード  
(実際に快適に使うにはイベントを間引くなどが必要になります)

[https://gist.github.com/tanshio/4a4a9c1b7bb2db03049d8134029f2d99](https://gist.github.com/tanshio/4a4a9c1b7bb2db03049d8134029f2d99)

### 追加リスト

ボタンを押すとリストが追加されるコード
(戻ると消えるので、実際に快適に使うには履歴の保存などが必要になります。)

[https://gist.github.com/tanshio/021920dade446ebec395eac0b5aec960](https://gist.github.com/tanshio/021920dade446ebec395eac0b5aec960)

### WP REST API × Google Maps API　(要ACFのカスタムフィールド)

要Advanced Custom Fieldsと　ACF to WP REST API、緯度経度(latとlng)のカスタムフィールド

[https://gist.github.com/tanshio/029910a27359c6daf1074a4f2edfd8aa](https://gist.github.com/tanshio/029910a27359c6daf1074a4f2edfd8aa)

### その場で編集くん

※WPの投稿アクションで発動するもの、oEmbedなどは動きません。また、iframeは重くなるので埋め込むのに適していません。使用しているライブラリ、markedでDOM読み込むと改行部分にpタグが発生する場合があります。

[https://gist.github.com/tanshio/1623dc9c81c5d2eb42e98cf26b232cb8](https://gist.github.com/tanshio/1623dc9c81c5d2eb42e98cf26b232cb8)

### このSPAブログのコード(つくりかけ)
色々コードがやばいコードです  
[https://github.com/tanshio/tanshio-theme](https://github.com/tanshio/tanshio-theme)

## WPでSPAを作るべきか？

みんながみんな作れば作ればいいというわけではなく、フロントエンド大好きな人はやればいいと思います。  
ブログをSPA化しようとするとハードルが高いのと、WPのプラグインという資産をほぼ切ることになるのでフロントエンドが得意じゃない人に今すぐやれという勇気はないです。

メディアを運営しているならPWAを考えてやっといたほうが今後のためになる気はします。

## SEOについて

テーマを切り替えることについてなのですが、内部コンテンツが同じならGoogleのクローキングに当たらないと考えています。  
そもそもAMPもAMPじゃないページと内部コンテンツ変更することだってできますからね。神のさじ加減。

## APIおよびセキュリティについて
WP REST APIはセキュリティが〜という話をよく聞きますが、解消されていますしオープンソースの関係上セキュリティの問題はついてまわります。

わたしはこの世の全てのサイトは全部APIになれという過激派なので、APIの流れは必要だと思っていますがそうでない方もいるとは考えています。

WP REST APIを停止する方もいるとは思いますが、今後管理画面もプラグインもAPIベースのものが増えてくるなかで、いちいちホワイトリスト設定するのは面倒くさいと考えています。

もしAPIがいらない、不必要なら今後のWPの考えと異なる場合もあると思いますのでWP以外も検討してみてはどうでしょうか。



## 参加してみて

セッションをあまり聞く余裕がなかったので、まとめとはか他のサイトを見てもらうことにして、最後のLTでAlexa × WP REST API は未来感溢れてて提案できそうだな〜と思いました。

また、意外と反応をもらえたりして非常に嬉しかったです。反応がないとやる意味もないっちゃないですからね。

色んな人に会えて楽しかったです！
