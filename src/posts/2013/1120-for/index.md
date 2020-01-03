---
title: "JavaScriptで連想配列のキーと値を取得する"
date: "2013-11-20"
path: "/blog/2013/11/javascript-for/"
type: "blog"
categories: ["Programming"]
tags: ["javaScript"]
excerpt: "JavaScriptで連想配列のキーと値を取得する"
ogp: "./ogp.png"
---

良く忘れるのでメモ

```js
var arr = {
  スタッフ1: "aaa@aaa.com",
  スタッフ2: "aaa+aaa@aaa.com",
  スタッフ3: "aaa+aaa2@aaa.com",
}
for (key in arr) {
  alert(key + " → " + arr[key])
}
```
