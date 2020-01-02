---
title: "NginxでPHPを動かすために"
date: "2013-12-17"
path: "/blog/2013/12/nginxでphpを動かすために/"
type: "blog"
categories: ["Programming", "環境構築"]
tags: ["PHP"]
excerpt: "NginxでPHPを動かすために"
---

Vagrantで動かしたCentOS6.4にNginxを入れ、いつもの様にPHPを動かそうと思ったら、Not Found.とか表示されたので解決策をメモ。

PHPはこちらを参考にremiでインストールしました。 CentOSにPHP5.5をインストール

## php-fpmの設定
php-fpmを動かす前に、php-fpmの設定をします。

```
sudo vi /etc/php-fpm.d/www.conf
user = nginx
group = nginx
```
ユーザーとグループをnginxに変更します。

## Nginxの設定

次にNginxの設定を行います。

```
sudo vi /etc/nginx/conf.d/default.conf
```

```
server {

    listen       80;
    server_name  localhost;

    #charset koi8-r;
    #access_log  /var/log/nginx/log/host.access.log  main;

    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
    }

    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }

    # proxy the PHP scripts to Apache listening on 127.0.0.1:80
    #
    #location ~ \.php$ {
    #    proxy_pass   http://127.0.0.1;
    #}

    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
    #
    location ~ \.php$ {
        root           /usr/share/nginx/html;
        fastcgi_pass   127.0.0.1:9000;
        fastcgi_index  index.php;
        fastcgi_param  SCRIPT_FILENAME  /usr/share/nginx/html$fastcgi_script_name;
        include        fastcgi_params;
    }

    # deny access to .htaccess files, if Apache's document root
    # concurs with nginx's one
    #
    #location ~ /\.ht {
    #    deny  all;
    #}
}
```
各々の設定に変更して下さい。

## 再起動

```
[vagrant@localhost ~]$ sudo /etc/rc.d/init.d/php-fpm restart
php-fpm を停止中:                                          [  OK  ]
php-fpm を起動中:                                          [  OK  ]
[vagrant@localhost ~]$ sudo /etc/init.d/nginx restart
nginx を停止中:                                            [  OK  ]
nginx を起動中:                                            [  OK  ]
```
再起動してphpinfoが動くか確認して下さい。

