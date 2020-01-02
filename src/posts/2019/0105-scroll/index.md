---
title: "CSSでスクロールできる天地中央寄せレイアウト"
date: "2019-01-05"
path: "/blog/2019/01/cssでスクロールできる天地中央寄せレイアウト/"
type: "blog"
categories: ["Frontend"]
tags: ["CSS", "HTML"]
excerpt: "CSSでスクロールできる天地中央寄せレイアウト"
ogp: "./ogp.png"
---

通常の天地中央寄せのやつだと、

```css:title=aaa.css
.center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.center {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```
みたいな感じになると思うのですが、この場合何が悲しいってはみ出したところがスクロールできないことなんですよね。  
多分皆さんもうご存知だとは思いますが頻繁に使うので共有します。  
ハンバーガーメニューみたいなモーダル型の内部が縦に長いやつに重宝します。

<iframe height="500px" width="500px" scrolling="no" title=" Overflowing center layout" src="https://codepen.io/tanshio-the-scripter/embed/VqXBEM?height=265&theme-id=default&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">See the Pen <a href='https://codepen.io/tanshio-the-scripter/pen/VqXBEM'> Overflowing center layout</a> by Shota Tanno(<a href='https://codepen.io/tanshio-the-scripter'>@tanshio-the-scripter</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>

特に変なことはしていなく、縦に並べてコンテンツのmarginをautoにして中央に揃えただけなのですが、いろいろな局面で使えます。
