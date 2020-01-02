---
title: "id属性はjsでグローバル変数化されるけどIEではそうもいかないっぽい"
date: "2014-06-08"
path: "/blog/2014/06/id-is-global/"
type: "blog"
categories: ["Frontend"]
tags: ["JavaScript"]
excerpt: "id属性はjsでグローバル変数化されるけどIEではそうもいかないっぽい"
---

最近のブラウザでは、HTMLのid属性が勝手にjavascriptのグローバル変数になってしまいます。  
hiddenのinput要素に、jsでvalueを設定しようとして、ケアレスミスで変数名を間違った時にIEの挙動がおかしいなあと思って調べてみました。

##サンプルコード
**HTML**
```

<input id="formText" type="text" value="">
```
**JS**

```

function test(){

	var text = document.getElementById("formText");
    
	if(formText){//ここで変数textを指定するべきだったのに、間違えてformのidを入れてしまった。
    	text.value = "サンプルテキスト";
    
    }

}
test();

```

んで、上記の場合はモダンブラウザで**動いてしまった**ので、IE系列で動かず四苦八苦しました。ちゃんと変数名を確認するべきだった・・・＼(^o^)／


##モダンブラウザのキャプチャ（FF29）
{<1>}![](https://tanshio.net/wp-content/uploads/yahoo_firefox2.gif)

（Chromeもキャプチャしたやつもあったんだけど、間違ってIEキャプチャしたやつで上書きしてしまい消失しました）

##IE11のキャプチャ
{<2>}![](https://tanshio.net/wp-content/uploads/yahoo_chrome.gif)

閉じタグがないものはグローバル変数化されないのかな？とも思って、imgタグにid=imageを振ってみて試してみたら、普通にimage.srcで画像のURLが取得できた。  
どうやらIEではinputなどの要素はグローバル変数化されないみたいで、そのルールが良くわからない。

##まとめ
idは勝手にグローバル変数化されるので、本当に必要な物以外はできるだけclassでコーディングしたいなと思いました。（小並感）
ぶっちゃけグローバル変数にするメリットが思いつかないんですが、なにかあるんですかね。

参考：<a href="http://qiita.com/nakajmg/items/c895105afae95bfa8fae" target="_blank">HTML内でIDをつけた要素はJavaScriptのグローバル変数に格納される</a>
