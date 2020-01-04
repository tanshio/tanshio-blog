---
to: src/posts/<%= date.substr(0, 4) %>/<%= ("0"+date.substr(5, 2)).slice(-2) %><%= ("0"+date.substr(8, 2)).slice(-2) %>-<%= slug %>/index.md
---
<%
 year = date.substr(0, 4)
 month = date.substr(5, 2)
 d = date.substr(8, 2)
%>---
title: "<%= title %>"
date: "<%= date %>"
path: "/blog/<%= year %>/<%= month %>/<%= slug %>/"
type: "blog"
categories: [<%- categories.map(c=> `"${c}"`).join(', ') %>]
tags: [<%- tags.map(t=> `"${t}"`).join(', ') %>]
excerpt: "<%= title %>です"
ogp: "./ogp.png"
---

