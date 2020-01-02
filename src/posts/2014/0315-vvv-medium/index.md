---
title: "VagrantでWordPressを速攻デプロイできるVVV-mediumを作りました"
date: "2014-03-15"
path: "/blog/2014/03/vvv-medium/"
type: "blog"
categories: ["Products", "環境構築"]
tags: ["効率化", "WordPress"]
excerpt: "VagrantでWordPressを速攻デプロイできるVVV-mediumを作りました"
ogp: "./ogp.png"
---

**2014年9月1日wordmoveを用いるときに使うrubyがおかしかったのを修正**  
**2014年8月31日動かなかったのを修正**

VVVをフォークした<a href="https://tanshio.net/vagrant%E3%81%A7wordpress%E3%82%92%E9%96%8B%E7%99%BA%E3%81%99%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AEvvv-small%E3%82%92%E4%BD%9C%E3%82%8A%E3%81%BE%E3%81%97%E3%81%9F/">VVV-small</a>に、wordmoveを加え、若干手間はかかりますがスマホにも対応したVVV-mediumを作成しました。

<a href="https://github.com/tanshio/VVV-medium" target="_blank">VVV-medium</a>

VVV-smallとのファイルの違いは、provision.shとVagrantfileのみです。

## インストール方法

インストール方法は、

<pre>
git clone https://github.com/tanshio/VVV-medium フォルダ名
</pre>

でクローンし、vagrant upしてください。  
ruby1.9.3、Rubygemのアップデート、wordmoveのインストール、sshpass、lftpのインストール、Movefileの作成、その他設定などを実行します。

## スマホ対応

ローカルネットワークからのアクセスを許可し、Wi-Fi環境であればVagrantで構築したWordPressにスマホを直接アクセスさせることができます。

Windowsであればコマンドプロンプトでipconfig、Macであればifconfigでローカルネットワークを調べ、使えるIPアドレスをセットしてあげることでスマホからアクセスさせることができます。

**Vagrantfile 82行目から**
<pre>
  config.vm.network :private_network, ip: "192.168.50.4"
    
  # public_network
  # mac ifconfig / win ipconfig 
  # cd /srv/www/wordpress-default
  # wp search-replace local.wordpress.dev 192.168.**.**
  # Other PC and smartphone can access http://192.168.**.**/
  #config.vm.network :public_network, ip: "192.168.**.**"
</pre>

上記private_networkを指定している行をコメントアウトし、public _networkのところのコメントを外し、IPを使えるIPアドレスに変え、vagrant upします。（もしくはprovisionやreload）

その後、
<pre>
cd /srv/www/wordpress-default
</pre>
でwordpressのインストール場所に移動し、
<pre>
wp search-replace local.wordpress.dev 使えるIPアドレス
</pre>
でVagrantのWordPressをIPアドレスで見られるようにします。

{<1>}![](https://tanshio.net/wp-content/uploads/IMG_3027.png)

以上で上記のようにIPアドレスでアクセスさせることができます。  
GruntなどのWebsocketを用いているLivereloadツールであれば、設定すればPC・スマホ共にライブリロードがかかります。

<a href="https://tanshio.net/livereload-isnt-stressful/" target="_blank">なんでもかんでもLivereload</a>

IPアドレスでの運用はおすすめされていないかもしれませんが便利です。

**注意**  
WindowsでGruntやGulpなどのnode.js軍団を用いる場合は注意が必要です。  Windowsではパス名の長さに制限があるため、できるだけ浅い階層でnpm installしたほうがよいでしょう。node_module/～/node_moduleみたいなかんじで下層にディレクトリが作成されまくることがあり、その場合node.jsは動作しません。Macでは動きます。

## wordmoveについて

<a href="https://tanshio.net/wordmove/" target="_blank">wordmoveについてはこちらを参照ください。</a>

## おわりに

やはりvagrant upやreloadした時にmysqlが落ちてるのでvagrant sshをしてsudo service mysql startしてあげてください。
作ってる最中にVagrant Shareとか出来てしまいましたが、ローカルで済ませたい場合はオススメです。  
なにかありましたらご連絡ください。
