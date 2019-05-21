---
title: "WordPress3.9でTypePad 絵文字 for TinyMCEが動かない場合の解決策"
date: "2014-04-28"
path: "/blog/2014/04/move-typepad-emoji-for-tinymce/"
type: "blog"
categories: ["WordPress"]
tags: ["WordPress プラグイン", "バグ"]
excerpt: "WordPress3.9でTypePad 絵文字 for TinyMCEが動かない場合の解決策"
---

WordPressを用いてクライアント側でブログなどを更新してもらう場合、賑やか感を出すためにTypePad 絵文字 for TinyMCEというプラグインを導入しています。

WPが3.9にアップデートされたと同時に、WordPressのビジュアルエディタであるTinyMCEのバージョンもアップデートされ、TypePad 絵文字 for TinyMCEが動かなくなってしまいました。  
症状としては、絵文字のポップアップが出るもののクリックしても絵文字が挿入されないというものです。

原因としては、window.tinyMCE.execCommandというメソッドが動かなくなったためです。  
代替としてwindow.tinyMCE.execInstanceCommandが用意されていますので、それを用いることで今まで通り絵文字が挿入可能となります。

##解決策

###InsertEmoji.jsのコードを修正

/wp-content/plugin/typepad-emoji-for-tinymce/InsertEmoji.js

のコードを少し修正します。

<pre>
window.tinyMCE.execCommand('mceInsertContent', false, icontag);
</pre>
をコメントアウト、もしくは削除し、

<pre>
window.tinyMCE.execInstanceCommand('content', 'mceInsertContent', false, icontag);
</pre>

を追加します。

###参考コード

<pre>
function init() {
    if (tinymce.isIE) {
      tinyMCE.get('content').focus();
      tinyMCE.activeEditor.windowManager.bookmark = tinyMCE.activeEditor.selection.getBookmark();
    }
	tinyMCEPopup.resizeToInnerSize();
}

function emojiinsert(line, icon) {

	var icontag;
	icontag = '<img src="'+tpademojidomain+'icons/'+line+'/'+icon+'" width="16" height="16" style="margin-left:3px; margin-right:3px; vertical-align:middle;">';

    if (parent.tinymce.isIE) {
      parent.tinyMCE.activeEditor.focus();
      parent.tinyMCE.activeEditor.selection.moveToBookmark(parent.tinymce.EditorManager.activeEditor.windowManager.bookmark);
    }

	window.tinyMCE.execInstanceCommand('content', 'mceInsertContent', false, icontag);
  //window.tinyMCE.execCommand('mceInsertContent', false, icontag);

	tinyMCEPopup.editor.execCommand('mceRepaint');
	tinyMCEPopup.close();
	return;
}


</pre>

参考:<a href="http://qiita.com/nakakaz11/items/f018c30fa0df5b4bc6d4" target="_blank">WordPress3.9でTypePad 絵文字 for TinyMCE 記事に挿入できないとき</a>

###キャッシュのクリア、もしくはリロードする

ブラウザにキャッシュが残っていると動作しないので、コードを変更した後ブラウザのキャッシュをクリアするか、  
**ドメイン名/wp-content/plugins/typepad-emoji-for-tinymce//InsertEmoji.js**  
上記URLにアクセスしリロードすることで投稿画面から今までどおり絵文字が挿入されます。
