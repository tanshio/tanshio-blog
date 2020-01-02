---
title: "VagrantでWordPressを効率よく開発するためのVVV-smallを作りました"
date: "2014-02-27"
path: "/blog/2014/02/nihongo-user-should-die/"
type: "blog"
categories: ["環境構築", "Products"]
tags: ["Vagrant", "WordPress"]
excerpt: "VagrantでWordPressを効率よく開発するためのVVV-smallを作りました"
ogp: "./ogp.png"
---

**2014年9月1日、動かなかったのを修正しました。**


VagrantでWordPressを開発するときに使うものといえば、VVVかVCCW。  
VCCWは思想的に好みなのですが、Windowsで動かず複数人環境では導入できませんでした。  
VVVはIPアドレスで仮想環境にアクセスすると、vvv.devが優先となり、他に3つのWordPressが入っています。正直3つもいらないので削り、WordPressを1つにし、vvv.devをサブにしたVVV-smallを作成しました。日本語のWordPress最新版をダウンロードする設定にしてあります。

[VVV-small](https://github.com/tanshio/VVV-small)

##注意事項
vagrant haltの後vagrant upするとmysqlが落ちたままです。（reloadでも同じ）  
vagrant provisionをするか、SSHでsudo service mysql stop→sudo service mysql startで再起動させるなどしてください。（元々のVVVもそんな感じです。）

VVVがgoogle Public DNSを用いているため、ルーターなどの設定で許可されていない場合はコケます。

基本URLは、http://local.wordpress.dev  
フォルダはwww/wordpress-defaultです。テーマなどの変更はリロードすれば反映されます。

**ドキュメントについては時間がある時に書きます。**

##今後の予定

- Vagrantfileで色々できるようにする
- apache版を作る
- 私が使うWordPress基本プラグインを最初からインストールさせておく
- 作成中のテーマと連携させる。（Gruntなど使用）


