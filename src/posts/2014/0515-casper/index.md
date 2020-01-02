---
title: "CasperJSでAdwordsのレポートを自動ダウンロード（仮）"
date: "2014-05-16"
path: "/blog/2014/05/adwords-report-download-by-casperjs/"
type: "blog"
categories: ["Marketing", "Programming"]
tags: ["Adwords", "Node.js", "JavaScript"]
excerpt: "CasperJSでAdwordsのレポートを自動ダウンロード（仮）"
ogp: "./ogp.png"
---

Adwordsのレポートはメールでcsvが送られてきません。csvさえメールで送られてくれれば何も言うことはないのですが、送られてこないのはどうしようもないので自分でやるしかないです。

PhantomJSは使ったことがあったのですが、CasperJSは使ったことがなかったため練習がてら使ってみました。

のちのちパッケージ化しようと思ってるのでサンプルだけおいときます。
サンプルはダウンロードしたcsvが文字化けします。対処方法は

<a href="https://github.com/n1k0/casperjs/issues/777">casperjs download file character encoding utf8 issue</a>を参考に該当箇所を書き換えて下さい。詳しくは次の記事でまとめると思います（多分）

##コード

```js
var casper = require('casper').create({
    pageSettings: {
        webSecurityEnabled: false
    }
});

casper.userAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.116 Safari/537.36 ');
casper.start("https://adwords.google.co.jp",function(){
    this.evaluate(function(id,password) {
        document.getElementById('Email').value = id;
		document.getElementById('Passwd').value = password;
        document.getElementById("gaia_loginform").submit();

    }, "googleアカウント名","googleパスワード");
});
casper.then(function(){
	this.wait(10000, function() {
        this.echo("ロード中");
    });
});

casper.then(function(){
    this.clickLabel('レポートとアップロード');
});

casper.then(function(){
	this.wait(10000, function() {
        this.echo("レポートとアップロードロード中");
    });
});


casper.then(function(){
    this.clickLabel('今すぐ作成');
});

casper.then(function(){
	this.wait(10000, function() {
        this.echo("レポート作成中");
    });

});


casper.then(function(){

	var param = this.evaluate(function() {
		return [document.getElementsByName("__rd")[0].value,document.getElementsByName("__rrd")[0].value,document.getElementsByName("__u")[0].value,document.getElementsByName("__c")[0].value,document.getElementsByName("token")[0].value]
	});

	var url ="https://adwords.google.com/cm/reportdownload?";

	this.download(url+"__rd="+param[0]+"&__rrd="+param[1]+"&__u="+param[2]+"&__c="+param[3]+"&token="+param[4], 'text.csv');
	this.echo("ダウンロードしました");
	// this.echo(url+"__rd="+test[0]+"&__rrd="+test[1]+"&__u="+test[2]+"&__c="+test[3]+"&token="+test[4]);
});

casper.run();

```

サイトリニューアルしたいのに全然できないのをどうにかしたい
