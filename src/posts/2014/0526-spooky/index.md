---
title: "SpookyJSで楽々テスト&スクレイピング"
date: "2014-05-26"
path: "/blog/2014/05/spookyjs/"
type: "blog"
categories: ["Frontend", "Programming"]
tags: ["Node.js", "JavaScript"]
excerpt: "SpookyJSで楽々テスト&スクレイピング"
ogp: "./ogp.png"
---

最近はスマホとかマルチデバイスに対応するのが当たり前になってきて、javascriptやデザインのテストが面倒になってきました。全ページのブレークポイントに合わせたキャプチャを取りたい、ログイン→いろんな操作をした後のキャプチャを取りたいなどなど。そこで便利なのがSpookyJSです。

私はデータを分析するときなど、スクレイピングして情報収集する場合がほとんどです。通常であればrubyのnokogiriなどでスクレイピングするのですが、ajaxを使っているサイトの場合は非常に面倒くさいです。そこ便利なのがでSpookyJSです。

ステマみたいな感じで始まりましたが、結構便利でしたので共有したいと思います。

##SpookyJSとはなんぞや

SpookyJSは、テストやブラウザ操作などで有名なPhantomJS、CasperJSの機能をnode.jsで一部使えるようにしたパッケージです。CasperJSのeachなどグルグル回せる機能、cickeLabelという指定されたテキストをクリックする機能など、結構便利な機能が使えなくなってます。しかしながらそれはjsカバーしちゃえば良い話。

###SpookyJSのインストール

ここではMac環境での動作を想定しています。（恐らくWindowsでも動くとは思いますが、検証していません。）

最初にPhantomJSとCasperJSをインストールしましょう。

```
brew install phantomjs
```

```
brew install casperjs --devel
```

インストールが終わったら、SpookyJSをインストールしましょう。インストールしたいディレクトリに移動し、

```
npm install spookyjs
```

でインストールは完了です。

##SpookyJSの使い方

大体は<a href="http://docs.casperjs.org/en/latest/index.html" target="_blank">casperjsのリファレンス</a>を見ればどうにか理解できるはず。

大体使うメソッドは決められているので大雑把に説明します。

###利用例

ここでは、サイトをキャプチャし、２秒毎にタイトルを１つずつログ出力します。

####コード
```js
try {
    var Spooky = require('spooky');
} catch (e) {
    var Spooky = require('../lib/spooky');
}

var x = require('spooky').selectXPath;

var spooky = new Spooky({
        child: {
            transport: 'http'
        },
        casper: {
            logLevel: 'debug',
            verbose: true
        }
    },
    function (err) {
        if (err) {
            e = new Error('Failed to initialize SpookyJS');
            e.details = err;
            throw e;
        }
        spooky.userAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.116 Safari/537.36 ');

        spooky.start('https://tanshio.net');

        spooky.then(function () {
            var j = 0;
            this.capture('tanshio.png');

            for (var i = 0; i < 10; i++) {
                // emit("hello",i);
                this.wait(2000, function() {  
                    var title = this.evaluate(function(j){
                        return document.getElementsByClassName("entry-title")[j].textContent;
                    },j);
                    j++;

                    emit("hello",title);
                });
                
                
            }
        });


    spooky.run(function(){

        this.exit();
    });
});


spooky.on('error', function (e, stack) {
    console.error(e);

    if (stack) {
        console.log(stack);
    }
});

/*
// Uncomment this block to see all of the things Casper has to say.
// There are a lot.
// He has opinions.
spooky.on('console', function (line) {
    console.log(line);
});
*/

spooky.on('hello', function (greeting) {
    console.log(greeting);
});

spooky.on('log', function (log) {
    if (log.space === 'remote') {
        console.log(log.message.replace(/ \- .*/, ''));
    }
});
```
spookyオブジェクトを作り、後はその中に上から下に沿って実行されていくイメージです。
上のコードは  
**start→then**  
で終わっていますが、  
**start→then→then→then**  
などロード後、処理後につなぎ合わせて実行することができます。

**wait**を使うことで、処理を指定秒遅延させることができます。
上のコードはループ内でwaitしているためthis.waitとなっていますが、spooky.wait(function(){処理})で
start→then→wait→thenのようにつなぎ合わせることができます。処理的にはsetTimeoutみたいな感じ。

**evaluate**を使用すれば、ヘッドレスブラウザでjavascriptを動作させることが可能になります。evaluateは値を返せるので、変数で格納し利用することが可能です。また、引数を扱う場合は以下のようにすることで引数として値を渡すことができます。
```js
            this.evaluate(function(id,password) {
                    document.getElementById('Email').value = id;
                    document.getElementById('Passwd').value = password;
                    document.getElementById("gaia_loginform").submit();

            }, "あいでぃー","ぱすわーど");
```
**capture**でその画面をキャプチャすることができます。

####emitで関数を使用する

通常、ログを出力する際にはconsole.log()で出力すると思うのですが、Spookyオブジェクト内では動かない模様。

```js
spooky.on('hello', function (greeting) {
    console.log(greeting);
});
```

SpookyJSのサンプルからの引用ですが、spooky.on()で関数を作り、emit()で呼び出す処理が必要になります。

##おわりに
ajaxサイトのテストなどでかなり便利。APIがないためログインしてcsvを持ってこないといけないようなサイトだと、SpookyJSでダウンロードまで自動化できるので便利です。これについては次回の記事でまとめると思います。（多分）

参考サイト：<a href="http://thesportsbusiness.jp/archives/189" target="_blank"></a>
