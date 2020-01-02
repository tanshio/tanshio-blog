---
title: "VCCWにphpMyAdminとwordmoveを載っけたVCCW-pwを作った"
date: "2014-09-09"
path: "/blog/2014/09/vccw-pw/"
type: "blog"
categories: ["Products", "WordPress"]
tags: []
excerpt: "VCCWにphpMyAdminとwordmoveを載っけたVCCW-pwを作った"
ogp: "./ogp.png"
---

<time>2014-09-10 02:24</time>  

sshpassを入れ忘れていたので追加しました。
sudo yum install -y sshpass でsshpassがインストールできます。

---

## さよならVVV

最近までVVVというWordPressをローカルで構築するものをカスタマイズして使っていたんですが、VVVのカスタマイズがあまりにも面倒くさくて、かつバグりやすいのでChefの勉強がてらVCCWに出戻りしました 。

## VCCW is god

そしたらVCCWはまごうことなき神でした。僕の記憶に無いだけかもしれませんが、前まではWindowsで動かなかったり、Vagrantfile内でここまでできなかった気がしたので。これからWordPressを開発するのであれば離れられない気がします。プラグイン最初にインストールする設定が便利。

んで、VCCWをフォークし、個人的に欲しかったものをプラスしたVCCW-pwを作りました。

## VCCW-pw

<a href="https://github.com/tanshio/vccw" target="_blank">https://github.com/tanshio/vccw</a>

おもむろにgit cloneしてディレクトリを移動しvagrant upすれば動きます。

VCCWにphpMyAdminを追加し、rubyのバージョンを上げ、wordmoveを入れただけです。  
phpMyAdminはなんだかんだで便利。  
wordmoveはページ追加などの更新作業の時にローカルに環境ごと取り込めるので便利。wordmoveのFTPだとバグりやすいのでlftpはインストールしてません。SSHを推奨。

以下のcookbookを使わせていただきました。

<a href="https://github.com/fnichol/chef-rbenv" target="_blank">https://github.com/fnichol/chef-rbenv</a>
<a href="https://github.com/fnichol/chef-ruby_build" target="_blank">https://github.com/fnichol/chef-ruby_build</a>

あと、おまけでbrowsersyncを入れてあるのですが、プロキシのせいなのかロードに5秒ぐらいかかる。こういうものなのかな。

## Chef便利

Chefは2年ぐらい前に触れてからアレルギー的な感じで拒否反応を起こしてましたが、触れざるを得ない事情で触れて勉強してみたらそんなに難しく感じませんでした。  
自宅サーバーを構築したことある人だったらすぐ慣れそうな気がします。templateが便利すぎて唖然。多分Vagrantのおかげで簡単に思えたようにも思える。

## まとめ
ぶっちゃけWordPressはいろいろあれな感じに思えてはいるのですけど、Web制作を生業とするとこれからも長い間離れようがない気がしてるので、できるだけサクサク環境を構築できるものを使って、さっさと終わらせたいもんです。  
gitでデータベースも管理できたらそれだけでも楽なんですが＼(^o^)／
(versionpressとrevisrに期待を込めて)


