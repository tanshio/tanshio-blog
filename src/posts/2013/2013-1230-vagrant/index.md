---
title: "Vagrantで「Code CO_E_SERVER_EXEC_FAILURE」が出る場合の対処法"
date: "2013-12-17"
path: "/blog/2013/12/vagrant1-4でcentosのipアドレスが固定できない/"
type: "blog"
categories: ["環境構築"]
tags: ["Vagrant", "PHP"]
excerpt: "Vagrantで「Code CO_E_SERVER_EXEC_FAILURE」が出る場合の対処法"
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
