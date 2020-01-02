---
title: "PHPでMySQL→JSON出力"
date: "2013-10-29"
path: "/blog/2013/10/phpでmysql→json出力/"
type: "blog"
categories: ["Programming"]
tags: ["PHP"] 
excerpt: "PHPでMySQL→JSON出力"
ogp: "./ogp.png"
---

FullCalendar用に書いていたスクリプトのメモ。allDayが面倒臭かったのと、FullCalendar人ごとにまとめるやり方が分からなかったので投げた。
Google Calendarがグループウェアみたいに使えれば最強なんだけどなあ。

```php{1,5-9}:title=gatsby-config.js
$dbh = new PDO("mysql:host=127.0.0.1;dbname=test", "root", "");
$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$stmt = $dbh -> query("SET NAMES utf8;");
$stmt = $dbh->prepare("SELECT event_id, parent_id, title, start, end, allday
                       FROM events");
$stmt->execute();
$events = array();

while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
    $eventArray['id'] = $row['event_id'];
    $eventArray['parent_id'] = $row['parent_id'];
    $eventArray['title'] = stripslashes($row['title']);
    $eventArray['start'] = $row['start'];
    $eventArray['end'] = $row['end'];
    if($row['start']==$row['end']){
        $eventArray['allDay'] = (boolean)1;
    }else{
        $eventArray['allDay'] = (boolean)$row['allday'];
    }
$events[] = $eventArray;
}

echo json_encode($events);
```
