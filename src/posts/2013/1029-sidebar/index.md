---
title: "All in One Sidebarでダウンロードマネージャをサイドバーに表示する"
date: "2013-10-29"
path: "/blog/2013/10/all-in-one-sidebar/"
type: "blog"
categories: ["環境構築"]
tags: ["Firefox"] 
excerpt: "All in One Sidebarでダウンロードマネージャをサイドバーに表示する方法"
ogp: "./ogp.png"
---

いつだかからFirefoxでダウンロードマネージャが新しくなり、なんでもかんでもAll in One Sidebarにぶち込んでる俺といたしましては、サイドバーに表示しようと思っても別ウィンドウで出てきやがったりするのでとてつもなく不便でございました。しかし解決策があったのでメモ。

about:configを開き、

```
browser.download.useToolkitUI
```

をtrueにするだけで終わり

![sidebar](./sidebar.jpg)

これで充実したサイドバーライフに
