---
title: "Xcode5.1にしたらgem installとpip installが動かない"
date: "2014-03-29"
path: "/blog/2014/03/xcode5-1-doesnt-use-gem/"
type: "blog"
categories: ["環境構築"]
tags: ["Ruby"]
excerpt: "Xcode5.1にしたらgem installとpip installが動かない"
ogp: "./ogp.png"
---

最近新しいGemやらインストールするということも少なくなってきたんだけど、ドキュメント・スニペットアプリの<a href="http://kapeli.com/dash" target="_blank">Dash</a>で自分のチートシートをつくろうと思い、gem install cheatsetと打ったらコケました。

色々と探してみたら最近アップデートしたXcode5.1のclangの扱いが変わってしまったみたい。エラーの内容は下記。

##エラー内容

```
% sudo gem install cheatset
Password:
Fetching: plist-3.1.0.gem (100%)
Successfully installed plist-3.1.0
Fetching: redcarpet-3.1.1.gem (100%)
Building native extensions.  This could take a while...
ERROR:  Error installing cheatset:
	ERROR: Failed to build gem native extension.

    /System/Library/Frameworks/Ruby.framework/Versions/2.0/usr/bin/ruby extconf.rb
creating Makefile

make "DESTDIR="
compiling autolink.c
compiling buffer.c
buffer.c:104:45: warning: passing 'const struct buf *' to parameter of type 'struct buf *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
        if (buf->size + 1 <= buf->asize || bufgrow(buf, buf->size + 1) == 0) {
                                                   ^~~
buffer.c:53:21: note: passing argument to parameter 'buf' here
bufgrow(struct buf *buf, size_t neosz)
                    ^
1 warning generated.
compiling houdini_href_e.c
compiling houdini_html_e.c
compiling html.c
compiling html_smartypants.c
compiling markdown.c
compiling rc_markdown.c
compiling rc_render.c
compiling stack.c
linking shared-object redcarpet.bundle
clang: error: unknown argument: '-multiply_definedsuppress' [-Wunused-command-line-argument-hard-error-in-future]
clang: note: this will be a hard error (cannot be downgraded to a warning) in the future
make: *** [redcarpet.bundle] Error 1


Gem files will remain installed in /Library/Ruby/Gems/2.0.0/gems/redcarpet-3.1.1 for inspection.
Results logged to /Library/Ruby/Gems/2.0.0/gems/redcarpet-3.1.1/ext/redcarpet/gem_make.out
```

## 解決方法

解決方法は、コマンドの前に以下のコマンドを付け加えてエラーを回避することでインストールすることができます。エラー回避は今後サポートされなくなるようですので対応待ちといったところでしょうか。

```
ARCHFLAGS=-Wno-error=unused-command-line-argument-hard-error-in-future
```

###例

```
sudo ARCHFLAGS=-Wno-error=unused-command-line-argument-hard-error-in-future gem install cheatset
```

---

以下の記事を参考にさせていただきました。<br><a href="http://2no.hatenablog.com/entry/2014/03/14/061952" target="_blank">【Mac】clang によるビルドエラー【Xcode 5.1】</a>
