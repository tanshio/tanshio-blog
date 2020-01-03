---
title: "MySQLで>が出た時の対処方法"
date: "2013-12-17"
path: "/blog/2013/12/php-arrow/"
type: "blog"
categories: ["Programming"]
tags: ["PHP"]
excerpt: "MySQLで>が出た時の対処方法"
ogp: "./ogp.png"
---

FullCalendar 用に書いていたスクリプトのメモ。allDay が面倒臭かったのと、FullCalendar 人ごとにまとめるやり方が分からなかったので投げた。
Google Calendar がグループウェアみたいに使えれば最強なんだけどなあ。

```php
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
