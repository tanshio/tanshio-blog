---
title: "macで設定を忘れてしまいがちなファイル群"
date: "2013-11-06"
path: "/blog/2013/11/macで設定を忘れてしまいがちなファイル群/"
type: "blog"
categories: ["環境構築"]
tags: ["mac"] 
excerpt: "macで設定を忘れてしまいがちなファイル群の一覧"
---

## macの設定ファイルはたくさんある

os x marvericksにしたら私のmac book airちゃんの環境がイかれたのでメモ

- .bashsrc
- .bash_login
- .bash_profile
- .zlogin
- .zshrc

2013/11/09追記

- .npmrc

ちなみにホームディレクトリ（Finderではユーザー名）のところにあります。

/etc/ディレクトリにも2つあるので追記

- bashrc
- profile

ここに書いた覚えがないのに設定で書かれるとPATHが崩れちゃう。

どうやらPATHがめちゃくちゃになってしまったっぽいので全部いれなおすことにした。
