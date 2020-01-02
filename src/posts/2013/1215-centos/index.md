---
title: "CentOS 6.4にNginxをインストール"
date: "2013-12-15"
path: "/blog/2013/11/centos6-4-nginx/"
type: "blog"
categories: ["環境構築"]
tags: ["Vagrant", "CentOS"]
excerpt: "CentOS 6.4にNginxをインストール"
---

vagrantで設定したのでメモ

## リポジトリの登録

```
$ sudo rpm -ivh ＜＜URL＞＞
```
[http://nginx.org/en/linux_packages.html#stable](http://nginx.org/en/linux_packages.html#stable)  
上記のリンクから環境にあったリンクを右クリックでコピーし、↑の＜＜URL＞＞のところを書き換えて下さい

```
$ cat /etc/yum.repos.d/nginx.repo
```
で確認する

```
sudo yum install -y nginx
```
でインストールする

## サービスの起動

```
sudo service nginx start
```

## 自動起動するように設定する

```
sudo chkconfig nginx on
```

これでnginx環境を構築完了となります＼(^o^)／
