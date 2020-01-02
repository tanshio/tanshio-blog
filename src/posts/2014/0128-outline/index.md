---
title: "WordPressクラックプラグインに注意！そしてセキュリティ対策"
date: "2014-01-28"
path: "/blog/2014/01/outlineを消す弊害について考えよう/"
type: "blog"
categories: ["Frontend"]
tags: ["アクセシビリティ"]
excerpt: "WordPressクラックプラグインに注意！そしてセキュリティ対策"
---

最近、cssのoutlineを消去しているサイトが多いようです。 cssのoutlineとは一体どのようなものなのでしょうか？

## outlineが指定してある場合

![outline](outline.jpg)

outlineが指定、もしくはデフォルトの場合だと、タブキーで移動した場合、リンクを押した場合にリンクの周りに線がつきます。 これが邪魔な場合には、cssでoutline:0やoutline:noneで点線を抹消することができますが、これによる弊害もあります。

## outlineを消す弊害

タブキーなどでリンクを移動しようとした場合に、リンクを把握できないという弊害があります。キーボードでリンクを移動するという人々はそんなにいないかもしれません。   
 しかし、これがスマートフォンではない携帯電話だったらどうでしょうか。携帯はボタンでリンクを移動していく手法をとっています。もしこれでリンクを把握できない、となったらおそらくクレームが来てしまうのではないでしょうか。

## 終わりに

携帯ではcssのoutlineが無いためそのような懸念はありませんが、今後ウェアラブルデバイスが普及し、声で反応するデバイス、目で反応するデバイスが今のスマートフォンみたいに誰もが持つようになった時に、outlineは非常に重要な要素となるのではないかと私は考えています。   
 アクセシビリティを突き詰めて行くことは難しいですが、いろいろなデバイスでどのように見られるか、アクセスできるか、操作できるかというところからアクセシビリティを学ぶという方法もありかもしれません。