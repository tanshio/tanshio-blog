---
title: "日本語ユーザー名でVagrant upできない場合"
date: "2014-02-27"
path: "/blog/2014/02/nihongo-user-should-die/"
type: "blog"
categories: ["環境構築"]
tags: ["Vagrant"]
excerpt: "日本語ユーザー名でVagrant upできない場合"
ogp: "./ogp.png"
---

Windowsではユーザー名に日本語が使えるという致命的なバグ（バグをバグと見抜けない人は云々）があるので、そのせいで開発者は困る事があります。rubyとかカジュアルにプログラムできる言語で、はい完成！どうぞお試しください→なぜか動かないみたいなかんじで結構ハマります。んで、今回はVagrantでハマったので解決策をシェアします。

##問題点
環境は

* Windows7(64bit)  
* vagrant1.4.3  
* ruby 2.0.0-p451
* rubygems 2.2.2

で、ユーザーは日本語ユーザー名でした。  
最近までは動いていたので、何かがアップグレード（多分Vagrant）した時に日本語ユーザー名だと動かないように設定されてしまったんでしょう。environment.rbでjoin部分のエンコードおかしくなってたのでUTF-8を無理やり噛ませて日本語を通るように処理したのですが、今度はVirtualboxで日本語ユーザー名が弾かれて泣きました。

##解決策
環境変数にVAGRANT_HOMEを設定し、cドライブ直下に設定してあげればOK。  
例  
`c:\.vagrant.d`

環境変数あるんじゃねーかと思っていろいろ調べてたら発見しました。ぜひ公式サイトに掲載しておいてほしいものです。

WindowsだとおそらくCode CO_E_SERVER_EXEC_FAILUREというエラーが表示されるので、下記の対応をしてあげればVagrantは通常通り動くはずです。

[Vagrantで「Code CO_E_SERVER_EXEC_FAILURE」が出る場合の対処法 | たんしおどっとねっと](https://tanshio.net/vagrant%e3%81%a7%e3%80%8ccode-co_e_server_exec_failure%e3%80%8d%e3%81%8c%e5%87%ba%e3%82%8b%e5%a0%b4%e5%90%88%e3%81%ae%e5%af%be%e5%87%a6%e6%b3%95/)
