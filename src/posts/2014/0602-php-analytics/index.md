---
title: "Google AnalyticsでIPやCookieを判別できるようにする「PHPAnalyticsIP」を作った"
date: "2014-06-02"
path: "/blog/2014/06/phpanalyticsip/"
type: "blog"
categories: ["Marketing", "Frontend", "Programming", "Products"]
tags: ["Analytics", "Node.js", "JavaScript"]
excerpt: "Google AnalyticsでIPやCookieを判別できるようにする「PHPAnalyticsIP」を作った"
---

**2014年12月5日に動かなかったプログラムを修正しました。**  
タイプミスによりうまく動かなかったものを修正しました。

**2014年7月21日に設定を変更しました。**  
セッションごとにcookieが変更されてしまうものを修正しました。

Google Analyticsといえば、多分世界で一番使われている解析ツール。  
最高に便利なのですが、これがあればもっといいのになあと思う機能の一つに生ログがあります。残念ながらAnalyticsには1人1人を追跡する機能がないです。大体のサイトでコンバージョンとなる、フォームから送られてくるデータと照らし合わせ、特定する場合に、カスタムセグメント地獄に陥りやすく手間になります。  
Analyticsはグループ化したデータを見るのに最適ですが、1人1人のデータを見るのには工夫が必要となります。

## IPとCookieをAnalyticsで見られるようにしよう

IPとCookieをAnalyticsで見られるようにするサイトとして、<a href="http://lfll.blog73.fc2.com/blog-entry-258.html" target="_blank">AnalyticsIP</a>さんがあります。しかしながら、クロスドメインとなってしまうため、Safari（Win・Mac・iPhone・Ipad）と一部アンドロイド端末（多分）でIPでは判別できてもCookieで判別することが出来ません。  
スマホが普及してますし、かつスマホの場合IPがコロコロ変わりやがるのでCookieが取得できないのはどうしたものか。。。というわけで作りました。

## PHPAnalyticsIP

<a href="https://github.com/tanshio/phpAnalyticsIP" target="_blank">https://github.com/tanshio/phpAnalyticsIP</a>（<a href="https://github.com/tanshio/phpAnalyticsIP/archive/master.zip">zip</a>）



### 機能

オリジナルであるAnalyticsIPさんのメソッド名を拝借させていただきました。PHP版とJS版の2パターンあります。

#### setAnalytics.getIP()
→ex. XXX.XXX.XXX.XXX  
IPアドレスを返します。
JS版では対応していません。

#### setAnalytics.getCookie()
→MD5 hash  
ハッシュ化してユニーク化しているつもりのものを返します。  
JS版ではランダムな文字列2つくっつけてユニーク化しているつもりです。

#### setAnalytics.getAccessTime()
→ex. 2014/05/28 12:04:42
ページを開いた時間を返します。

なんかバグとかあったらコメント下さい。

---

### ファイル

色んなパターンに備えた結果ファイルが多いです。用途によってどれか一つをお使い下さい。

#### PHP版

- analytics.php
- analytics.min.php（minify）
- analytics.tag.php（タグマネージャー用）
- analytics.tag.min.php（タグマネージャー用minify）

**オプション**
PHP版では、なんでもいいのでパラメーターを渡すとセキュアなクッキーを発行します。
```
<script type="text/javascript" src="./analytics.php?s=X"></script>
```
独自SSLを使用している場合のみ有効。フォームだけ共有SSLなどではCookieで特定することができなくなります。

#### JS版

JSではIPが取得できません。PHPを使えない、IPが取得できなくても良い場合や、アクセス時間がブラウザの時刻でもまあいいかという人はこちらをどうぞ。

- analytics_cookie.js
- analytics_cookie.min.js（minify）
- analytics_cookie.tag.js（タグマネージャー用）
- analytics_cookie.tag.min.js（タグマネージャー用minify）

---

### 設定

#### Analytics（ユニバーサルアナリティクス）の設定

Analyticsの設定からカスタムディメンションを選び、下記のように3つ追加します。**インデックス番号が重要**となります。

![カスタムディメンション](https://tanshio.net/wp-content/uploads/Google_Analytics.png)

3つとも名前だけ違うのみで設定は同じです。
![カスタムディメンションの設定](https://tanshio.net/wp-content/uploads/custom_dimension.png)

#### Google Tag Managerの設定

Google Tag Managerを使用している場合、データレイヤー変数を3つ追加する、イベントの追加、カスタムディメンションの設定、ルールの変更をしなくてはなりません。難しい用語ばかりですが下記の通り設定すればうまくいくはずです。使用していない場合は飛ばして下さい。

##### データレイヤー変数の追加

Google Tag Managerでは何でもかんでもマクロというもので管理しています。このマクロに、データレイヤー変数を3つ追加します。

![](https://tanshio.net/wp-content/uploads/Google_Tag_Manager_macro.png)

上記のような画面（なんでもいいのでマクロをクリックして、マクロをコピーするのが楽です）で上のような感じで

- setIP
- setCookie
- setAccessTime

3つ作成して下さい。名前は固定です。

##### イベントの追加

![](https://tanshio.net/wp-content/uploads/Google_Tag_Manager_event.png)

先ほどのマクロの追加と同じように、マクロのタイプを**カスタムイベント**に設定してマクロ名を**setAnalytics_event**として追加します。

##### カスタムディメンションの設定

![](https://tanshio.net/wp-content/uploads/Google_Tag_Manager_custom.png)

Google Tag Managerのタグの設定メニューから、詳細設定→カスタムディメンションで設定します。
Analyticsで設定したカスタムディメンションのインデックス番号に合わせて、どれがIPでどれがCookie、どれがアクセス時間として設定するのか各自設定して下さい。

##### ルールの変更

![](https://tanshio.net/wp-content/uploads/Google_Tag_Manager.png)

Google Tag Managerではルールを設定することにより、どういった条件でタグを発火させるのかを設定することが出来ます。

ここではさきほど設定した、**setAnalytics_event**というイベントが発動した瞬間にAnalyticsを呼び出す設定にしています。

以上でGoogle Tag Managerの設定は終わりです。

---

### コードの埋め込み場所

ファイルをHTMLの指定した場所に埋め込んで下さい。

#### ユニバーサルアナリティクスの場合
Analyticsのタグの前において下さい。できればAnalyticsで発行されたタグを</body>の前に置き、ファイルを<body>直下に埋め込むとAnalyticsにデータが送信されます。

**例**
```js
<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-XXXXXXX-X', 'XXXXXXXXX');

// 追加箇所ここから
//dimensionXは設定したインデックス番号を書き換えてください。
ga('set', 'dimensionX', setAnalytics.getIP());
ga('set', 'dimensionX', setAnalytics.getCookie());
ga('set', 'dimensionX', setAnalytics.getAccessTime());
// 追加箇所おわり

ga('send', 'pageview');

</script>
```
**IPアドレスのインデックス番号が1**、**Cookieが2**、**アクセス時間が3**の場合は下記のとおりです。

```js
ga('set', 'dimension1', setAnalytics.getIP());
ga('set', 'dimension2', setAnalytics.getCookie());
ga('set', 'dimension3', setAnalytics.getAccessTime());
```

#### Google Tag Managerの場合
Google Tag Managerで発行されたタグの下に置いて下さい。公開設定を行っていればトラッキングされているはずです。

##まとめ
![](https://tanshio.net/wp-content/uploads/Google_Analytics_page.png)

うまくトラッキングされていればセカンダリディメンションに表示されます。あとはカスタムレポートなどで色々見ることが出来ます。

何が便利って、APIで絞ることにより1人1人のデータが簡単に取得できることです。
![](https://tanshio.net/wp-content/uploads/Google_spreadsheet.png)

コンバージョンを集計するフォームにhiddenでCookieの値を入れることにより、上記のようにGmailに届いたらスプレッドシートに自動的に入力されているなんてことも可能です。フォームの値もスプレッドシートに入れることも頑張ればできます。これについては今後書くかも。

取得率は現在99.9%なので今流行のビッグデータとしても使えるかもしれませんね！！それではより良い解析ライフを〜＼(^o^)／
