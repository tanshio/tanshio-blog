---
title: "Vagrant環境でPHPによるアップロードが出来ない時の対処方法"
date: "2013-12-22"
path: "/blog/2013/12/vagrant-php-upload/"
type: "blog"
categories: ["環境構築"]
tags: ["Vagrant", "PHP"]
excerpt: "Vagrant環境でPHPによるアップロードが出来ない時の対処方法"
ogp: "./ogp.png"
---

Vagrant環境でPHPによるアップロードが出来ない時の対処方法としてメモ

環境  
- OS X Maverick  
- Vagrant1.4  
- Centos6.4

Chownで設定できないので焦ったけど、設定できないものだったようで。 Vagrantfileに以下の様な感じで共有フォルダにグループ・属性をあてはめてやればOK。

```
config.vm.synced_folder "www/", "/vagrant/www" , :owner=> 'vagrant', :group=>'nginx', :mount_options => ['dmode=775']
```
