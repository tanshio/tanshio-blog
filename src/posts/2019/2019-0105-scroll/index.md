---
title: "CSSでスクロールできる天地中央寄せレイアウト"
date: "2019-01-05"
path: "/blog/2019/01/cssでスクロールできる天地中央寄せレイアウト/"
type: "blog"
categories: ["Frontend"]
tags: ["CSS", "HTML"]
excerpt: "CSSでスクロールできる天地中央寄せレイアウト"
---

通常の天地中央寄せのやつだと、

```css
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

<figure class="wp-block-embed is-type-rich is-provider-codepen"><div class="wp-block-embed__wrapper"> https://codepen.io/tanshio-the-scripter/pen/VqXBEM </div></figure>[Codepen](https://codepen.io/tanshio-the-scripter/pen/VqXBEM)特に変なことはしていなく、縦に並べてコンテンツのmarginをautoにして中央に揃えただけなのですが、いろいろな局面で使えます。
