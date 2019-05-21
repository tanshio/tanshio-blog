---
title: "Google Spreadsheetを簡単にJSON化"
date: "2013-11-06"
path: "/blog/2013/11/google-spreadsheetを簡単にjson化/"
type: "blog"
categories: ["Programming"]
tags: ["Google Spread Sheet"] 
excerpt: "google-spreadsheetを簡単にjson化"
---

どうにかこうにかgoogle spreadsheetをjson化できたのでメモ
一般公開する必要があるけど気にしない方向で

見出し名は完全一致じゃないと動かないので気をつけてください。

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<title>demo</title>
<script type='text/javascript' src='//code.jquery.com/jquery-1.9.1.js'></script>

<script type='text/javascript'>//<![CDATA[
function importGSS(json) {
    for (i = 0; i < json.feed.entry.length; i++) {
        entry = json.feed.entry[i];
        $('#test').append('<div>' + entry.gsx$見出し1.$t + entry.gsx$見出し2.$t + entry.gsx$見出し3.$t + entry.gsx$見出し4.$t + entry.gsx$見出し5.$t +'</div>');

    }
}
//]]>

</script>


</head>
<body>
<div id="test">

</div>

<script src="http://spreadsheets.google.com/feeds/list/スプレッドシートのID/1/public/values?alt=json-in-script&amp;callback=importGSS"></script>

</body>
</html>
```

ここから参照しました [JSON data from google spreadsheet](http://stackoverflow.com/questions/16230760/json-data-from-google-spreadsheet)
