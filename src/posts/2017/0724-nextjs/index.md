---
title: "Next.jsとnetlifyでSSR対応のSPAを作る"
date: "2017-07-24"
path: "/blog/2017/07/next-jsとnetlifyでssr対応のspaを作る/"
type: "blog"
categories: ["Frontend", "Programming"]
tags: ["JavaScript", "Node.js"]
excerpt: "Next.jsとnetlifyでSSR対応のSPAを作る"
---

SPA(シングルページアプリケーション)的なサイトを作るとき、それがクライアントのサイトやコンテンツファーストなサイトであればSEOを気にしないわけにはいかないと思います。  
しかし、ReactでSSR(サーバーサイドレンダリング)するのは面倒くさい…そう思っていた頃が僕にもありました。

## Next.js@3 では静的サイト書き出しに対応

### Next.jsとは
Reactでサイト作るときに便利だよ〜と神に教えてもらったnpmパッケージで、Reactにありがちな導入のハードルがかなり低く、サクッとReactで動くサイトが作れるすぐれものです。

色々調べていったら、ベータ版であるバージョン3でエクスポート機能がついていました。これが救世主でした。

[Static HTML export](https://github.com/zeit/next.js#static-html-export)

上記ページを参考に、npm scriptsに

```
"build": "next build && next export"
```

を追加し、npm run buildを実行すると、outというディレクトリが作成されます。
そのディレクトリをアップすればSSR化されたReactで作られたサイトが公開できます。

画像などのアセットは、staticディレクトリをpackage.jsonと同じ場所に作成し、その中に配置してあげれば自動的にoutディレクトリ内にコピーされます。

これはnetlify使えば自動化できるのでは…？


## netlifyとの連携

### netlifyとは

いわゆる無料サーバー。特徴としては、

- GitHubやBitbucketにプッシュするとnetliftyで指定したコマンドを叩いてくれる
	- ブランチごとに色々できる
- SSL対応(Let’s Encrypt)
- HTTP/2 対応
- 独自ドメイン対応

などなど、最近の流行を取り入れながらなんでもできるすごいやつです。

要するに、Next.jsでSSRビルドするコマンドをnetlifyで叩いてあげればOKということですね。

### できた

URL:[https://salt.tanshio.net](https://salt.tanshio.net)  
レポジトリ：[https://github.com/tanshio/salt](https://github.com/tanshio/salt)

自分の作品集を載せるためのサイトを作ろうと思っていたので、何にも作品ないですがやってみました。

outディレクトリを公開ディレクトリとして指定しているだけで、サーバー側で何も設定する必要がなく、git pushするだけで反映されるのでかなり楽です。

## ハマったところや疑問があるところ

### Next.js

全部が全部SSRする必要がない場所は、
[dynamic-import](https://github.com/zeit/next.js/#dynamic-import)という機能を使ってSSRから除外する必要があります。  
windowオブジェクトやを使っている箇所は、windowオブジェクトがないためバグります。そのため上記設定が必要となります。

なんか同じJSを二回呼び出してる気がするんですが、これは私の設定のせいかもしれません。

### netlify

サーバーの速度は高速ではないです。
全く関係ないですが、cnameでハマりました。

{<1>}![](https://tanshio.net/wp-content/uploads/de33e08a8d8c3c9dba436483c9f05ca2.png)

最後のドットを付け忘れただけでした…

### おわりに

サーバーをこちらで用意せずにpushすればいいだけなので非常に楽！本当にこれにつきます。  
静的サイトをそのままアップすることもできるので、本当に安くお手軽にサイトを公開するときにnetlifyは非常に便利だと思いました。  

netlifyはAPIもあるので、連携してクライアントにも更新できるような仕組みがあればワークフローも変わるような気がしています。

なお、Vue派の方にはNext.jsをリスペクトしたようなNuxt.jsというものもあり、それでもSSRできますのでそれでやってみるのもいいかもしれません。

便利なものを使うとここまでストレスなくなるのか〜と関心してしまったので、2つとも非常におすすめです。


