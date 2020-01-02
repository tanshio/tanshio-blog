---
title: "Xcode5でローカライズ"
date: "2013-11-11"
path: "/blog/2013/11/xcode5/"
type: "blog"
categories: ["Programming"]
tags: ["mac", "Xcode"] 
excerpt: "Xcode5でローカライズ"
ogp: "./ogp.png"
---

Xcode5でローカライズしようと思ったけど、ローカライズできなくていろいろと悩んだのでメモ。  
 Xcode4までと設定が変わった？（というか自分の設定ミスかも）。  
 プロジェクト名をクリックし、Localizationの部分にjapaneseを追加するだけなんだけど、どこにもLocalizationが表示されてなくて焦った。

環境はOS X Mavericks  
 Xcode5.01（5.02でも検証済みです。）

![Xcode5でローカライズ設定1](sample.xcodeproj.png)

上の丸部分をクリックすると現れるのであった。ちゃんちゃん。
![Xcode5でローカライズ設定2](https://tanshio.net/wp-content/uploads/sample.xcodeproj2.png)

あとはLocalize native development regionにJapanを追加でおｋ（もしくはシミュレータの環境設定で日本語にする）。  
 これでXcode5環境でのローカライズは完了です。
