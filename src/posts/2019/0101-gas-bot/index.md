---
title: "Google Apps Scriptでリコールbotをつくる"
date: "2019-01-01"
path: "/blog/2019/01/gas-bot/"
type: "blog"
categories: ["環境構築"]
tags: ["Vim", "構築化", "ツール"]
excerpt: "Google Apps Scriptでリコールbotをつくる"
---

<!-- wp:paragraph -->
<p>2017年にストーブが爆発してからリコールというものに敏感になりました。<br>しかしながらリコールの情報元となるサイトが旧式のもので、RSSはおろかTwitterでの情報配信もしていなかったのでサクッとGASで作成してみました。<br>今だったらclaspを使うところですがそんなものは2017年にはなかったのでご了承下さい。<br>コードを利用、悪用して何があってもこちらは責任取れませんのでそこらへんよろしくお願いします。<br><br></p>
<!-- /wp:paragraph -->

<p>抜き出し元：<a href="http://www.recall.go.jp/new/" target="_blank">消費者庁のリコール情報サイト</a></p>

<!-- wp:paragraph -->
<p>ソースコード<br><a href="https://gist.github.com/tanshio/7d15486f44960a738805ce60122308e4" target="_blank">https://gist.github.com/tanshio/7d15486f44960a738805ce60122308e4</a></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
## 解説
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>GASでスクレイピングして、そのままTwitterに流しているだけです。<br>新規のものがない、2P目まで行ったらメールするようにしています。(2P目以降は飽きたので処理していません)<br>日付トリガーで19時ぐらいに毎日処理するようにしています。</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>  var twitterKeys= {
    TWITTER_CONSUMER_KEY: "TWITTER_CONSUMER_KEY",
    TWITTER_CONSUMER_SECRET: "TWITTER_CONSUMER_SECRET",
    TWITTER_ACCESS_TOKEN: "TWITTER_ACCESS_TOKEN",
    TWITTER_ACCESS_SECRET: "TWITTER_ACCESS_SECRET"    
  };</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>上記箇所は各々変更して下さい。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
## ライブラリ
<!-- /wp:heading -->

![](image.png)

<!-- wp:paragraph -->
<p>GASにはライブラリという機能があるのですが、上の3つを追加することで非常に効率的に開発ができました。<br></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><li>Moment→おなじみ日付処理</li><li>Parser→HTMLをパースするライブラリ。SheetのimportXMLが効かない場合はこれが便利。</li><li>Twitterlib→Twitterに流すもの。画像が流せるのが非常に便利</li></ul>
<!-- /wp:list -->

シートにはこんな感じで貯まっていきます。
![](87fe885a40d813bc9ee2a6b7921d3499.png)


## 作ったアカウント


<div class="wp-block-embed__wrapper">
<a href="https://twitter.com/recall_bot_" target="_blank">リコールbot</a>
</div>


<p>毎日安定運用しているので、GASはRSS吐いていないサイトを巡回する場合非常に便利！</p>

## おわりに

機械学習や統計とかのデータに使えそうだなと思って1年間放置していましたが、結局2018年は忙しすぎて何もできないままでした。自分の時間を増やして新しいことをどんどんやっていきたいです。
