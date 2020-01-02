---
title: "HTML・CSS初心者のための環境構築（Grunt編）"
date: "2014-02-21"
path: "/blog/2014/02/a-beginner-might-want-to-start-grunt/"
type: "blog"
categories: ["Frontend"]
tags: ["効率化"]
excerpt: "HTML・CSS初心者のための環境構築（Grunt編）"
ogp: "./ogp.png"
---

WEB制作会社以外、いわゆるインハウスでWEBスタッフを雇う場合、余程でない限りHTMLやCSSなどの基礎知識がない人がほとんどです。その場合どのような環境構築をしてあげるかでその人のスキルアップの速度、やる気の度合いが異なります。  
最初は人に合わせて基礎的にメモ帳から～とか、本を差し出すなどして勉強しましょう！とかそういう感じやっていったのですが、よほどやる気がある人の場合でないとなにがわからないのかすらわからないまま挫折してしまいます。  
私が受け持っている会社のほとんどが、これからインハウスでノウハウを蓄積していきたいという考えであり、WEBスタッフを雇い、マネジメントが本業ではない私が（なぜか）結構な人数に教えるという立場だったのですが、2013年に2人、2014年で既に1人やめて結構凹みました。で、それを糧にし、これだったら行けるんじゃないかという初心者のための環境を構築してみたところ、現在私が教えている初心者4人中4人で反応がいいのでシェアします。

##私が思う初心者のための環境構築

初心者の場合、まずはじめに結果を見せてあげるということが一番重要になると思います。
そのために最初は既存のサイトを開き、開発者ツールでHTMLやCSSをいじってもらうということをやってもらっていました。しかし、それだとHTMLとCSSを分離しているという認識がついてこない、というジレンマに陥りました。

仕方がないのでなにかしらエディター（Dreamweaverがあればプレビューパネルを用いるのですが、崩れるので却下）をインストールし、保存、ブラウザで開くとHTMLでいじった結果が反映されるね、という感じで教えていたのですが1個変えるたびにリロードしないと反映されないのですかと言われ、。。。そうですよと言うような感じでした。

##初心者こそGruntやLivereloadツールを使おう

2012年～2013年の私は、最先端の技術というものは選ばれし人々しか使ってはいけないと勝手に思い込んでいました。LivereloadはWebSocketに精通している人しか使ってはならない！node.jsはjavascript使える人しか触ってはならないという堅苦しい考えの持ち主で、今思うと本当にアホです。

自分にとってストレスフリーな環境を教えてあげるということは、相手にとってメリットはあってもデメリットは押し付けがましくて私がウザイぐらいであまりないな、とようやく最近気づきました。  
HTMLやCSSをいじる上で、ブラウザをリロードしなくてもいいという環境を提供してあげるということだけで、「ああこれはこうなっているんだな」という基本が非常に身につけやすくなります。本に書いてあるHTMLコードを手打ちし、保存。もしくはサイトに掲載してあるコードをコピペ、いじって保存。それだけで済みます。

シングルディスプレイの場合は、Alt+Tab、MacだったらCommand+Tabでブラウザとエディタの切り替えというショートカットキーを教えてあげることでマウスに触れずコードに触れるというエンジニアライクな手法を身に付けることができ、HTML・CSS初心者が陥りがちなストレスを軽減させてあげることができます。

##初心者のためのpackage.jsonとGruntfile.js

基本的には私が設定するのですが、家でもやりたい！という人のためにpackage.jsonとGruntfile.jsを提供しています。

###階層  
Gruntフォルダ ┳  package.json  
　　　　　　　　　┃  
　　　　　　　　　┣  Gruntfile.js     
　　　　　　　　　┃            
　　　　　　　　　┗testフォルダ┳ index.html  
　　　　　　　　　　　　　　　　　　　┃  
　　　　　　　　　　　　　　　　　　　┗  styles　━  main.css

testフォルダ以下が監視されるので、testフォルダ以下は別に上の構成ではなくてもかまいせん。

###package.json
<pre>{
  "name": "grunt-first",
  "version": "0.0.0",
  "description": "first",
  "main": "index.js",
  "scripts": {
    "first": "echo \"Error: no first specified\" && exit 1"
  },
  "author": "tanshio",
  "license": "ISC",
  "devDependencies": {
    "grunt": "~0.4.2",
    "grunt-este-watch": "~0.1.15",
    "grunt-contrib-connect": "~0.6.0"
  }
}
</pre>

##Gruntfile.js

<pre>'use strict';
module.exports = function (grunt) {
  grunt.initConfig({
   　connect: {
            options: {
                port: 9000,
                livereload: 35729,
                hostname: '127.0.0.1'
            },
            livereload: {
                options: {
                    open: true,
                    base: ['test']
                }
            },
        },
    esteWatch: {
            options: {
                dirs: ['./test/**'],
                livereload: {
                        extensions: ['js','css','html'],
                        enabled: true,
                        port: 35729
                 }
            }
          }
  });
　　grunt.loadNpmTasks('grunt-contrib-connect');
　　grunt.loadNpmTasks('grunt-este-watch');
　　grunt.registerTask(
  　　'default',
  　　['connect','esteWatch']
　　);
  grunt.util.linefeed = '\n';
};</pre>

全て最小設定です。
最初にnode.js最新版をインストールし、指定フォルダでnpm init、Gruntフォルダにtestフォルダを作成し、そこにHTMLファイルやCSSファイルをぶち込み、コマンドプロンプトで指定フォルダに移動し、gruntとコマンドを打てばLivereload環境は構築されます。  

Macの場合はフォルダに新規ターミナルタブの設定、Windowsの場合コマンドプロンプトで作業フォルダを設定してあげるとベターです。  
Gruntを扱うことで黒い画面への耐性も若干付きます。なんだかんだで若干ハードルが高いので最初はやはりすべて設定してあげることになると思います。

##まとめ

HTML・CSSであったり、javascript、PHPなどといったWEBの仕組みを覚えるための環境構築を整えてあげることにより、新しく入ったスタッフであったり新入社員のスキルアップ、モチベーションは左右されます。新しく入門してきた人にこそ新しいツールは伝えるべきですし、そこからまた自分のストレスを軽減する方法を見いだせるかもしれません。次はEmmet LiveStyleかな。
