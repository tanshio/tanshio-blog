---
title: "IEではposition:fixedかかったものは直でtransitionかけてあげる必要がある"
date: "2014-08-16"
path: "/blog/2014/08/ie-position-fixed-transition/"
type: "blog"
categories: ["Frontend", "Programming"]
tags: ["JavaScript", "CSS"]
excerpt: "IEではposition:fixedかかったものは直でtransitionかけてあげる必要がある"
---

bodyかhtmlに直接transitionかけてアニメーションさせることもあると思うのですが、IEではposition:fixedかけてあるものは除外されるようで困りました。

環境は、IE10、11です。

## IEでposition:fixedかかったものが無視されるデモ

<a href="https://tanshio.net/demo/iefade/demo.html" target="_blank">demo</a>


##直接かけてあげたデモ


<a href="https://tanshio.net/demo/iefade/demo2.html" target="_blank">demo2</a>



## 動画デモ

{<1>}![](https://tanshio.net/wp-content/uploads/ie-transition2.gif)

さすがのIEくん過ぎてもう僕は何を信じていいのかわからなくなりました。
