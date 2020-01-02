---
title: "SpookyJSでadwordsとスポンサードサーチとYDNのレポートをダウンロード"
date: "2014-06-15"
path: "/blog/2014/06/cpc-report-download-by-spookyjs/"
type: "blog"
categories: ["Marketing","Products", "Programming"]
tags: ["JavaScript", "Adwords"]
excerpt: "SpookyJSでadwordsとスポンサードサーチとYDNのレポートをダウンロード"
---

GoogleもYahooも広告配信レポートを現在APIでダウンロードすることができません。Google AdwordsではAPIで簡易的にレポートを作成できますが、インプレッションシェアなどの指標を指定することが出来ず、中途半端です。

メールで作られたよと報告はされるのですが、どうせなら送ってほしいものですよね。

というわけで全部ダウンロードするスクリプトを書いたのですが、私のMac Book Airちゃんがぶっ壊れてタイムマシーンで2週間前に戻ってしまい、危機感を覚えたのでここにメモしておきます。作業途中的な感じですが、わたくしの記憶力が普通の人間と同じぐらいであれば1週間後には出来上がっていると思います。

## ダウンロードスクリプト

<script src="https://gist.github.com/tanshio/045c1e1193f97cfa5e05.js"></script>

https://gist.github.com/tanshio/045c1e1193f97cfa5e05

## 使い方

要node.js、casperjs、spookyjs（package.jsonをあとで置いておきます）

最初の行のIDとかPassを自分のに変えて下さい。

## まとめ
いまのところスポンサードサーチしか動きません。UTF-8のCSVなのでExcelでそのまま開くことが出来ません。
