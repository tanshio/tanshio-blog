
import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import { Ogp } from './'
import { withA11y } from '@storybook/addon-a11y'
import { withScreenshot } from 'storycap'

export default {
  title: 'Atoms/Ogp-posts',
  component: Ogp,
  decorators: [
    withKnobs,
    withA11y,
    withScreenshot,
  ],
  parameters: {
    componentSubtitle: 'Ogp',
    screenshot: {
      skip: false,
    },
  },
}

  export const Primary0 = () => {
  return (
    <Ogp
      title={
        'CoreServerでWordPressが「すでにインストールされています」と表示され動かない場合'
      }
    />
  )
}
Primary0.story = {
  parameters: {
    screenshot: {
      variants: {
        '2013/2013-1022-coreserver': {},
      },
    },
  },
}


  export const Primary1 = () => {
  return (
    <Ogp
      title={
        '早速OS X Mavericksを入れてみた'
      }
    />
  )
}
Primary1.story = {
  parameters: {
    screenshot: {
      variants: {
        '2013/2013-1023-Mavericks': {},
      },
    },
  },
}


  export const Primary2 = () => {
  return (
    <Ogp
      title={
        'PHPでMySQL→JSON出力'
      }
    />
  )
}
Primary2.story = {
  parameters: {
    screenshot: {
      variants: {
        '2013/2013-1029-php-mysql': {},
      },
    },
  },
}


  export const Primary3 = () => {
  return (
    <Ogp
      title={
        'All in One Sidebarでダウンロードマネージャをサイドバーに表示する'
      }
    />
  )
}
Primary3.story = {
  parameters: {
    screenshot: {
      variants: {
        '2013/2013-1029-sidebar': {},
      },
    },
  },
}


  export const Primary4 = () => {
  return (
    <Ogp
      title={
        'Google Spreadsheetを簡単にJSON化'
      }
    />
  )
}
Primary4.story = {
  parameters: {
    screenshot: {
      variants: {
        '2013/2013-1106-gs': {},
      },
    },
  },
}


  export const Primary5 = () => {
  return (
    <Ogp
      title={
        'macで設定を忘れてしまいがちなファイル群'
      }
    />
  )
}
Primary5.story = {
  parameters: {
    screenshot: {
      variants: {
        '2013/2013-1106-mac': {},
      },
    },
  },
}


  export const Primary6 = () => {
  return (
    <Ogp
      title={
        'Xcode5でローカライズ'
      }
    />
  )
}
Primary6.story = {
  parameters: {
    screenshot: {
      variants: {
        '2013/2013-1111-xcode': {},
      },
    },
  },
}


  export const Primary7 = () => {
  return (
    <Ogp
      title={
        'JavaScriptで連想配列のキーと値を取得する'
      }
    />
  )
}
Primary7.story = {
  parameters: {
    screenshot: {
      variants: {
        '2013/2013-1120-for': {},
      },
    },
  },
}


  export const Primary8 = () => {
  return (
    <Ogp
      title={
        'CentOS 6.4にNginxをインストール'
      }
    />
  )
}
Primary8.story = {
  parameters: {
    screenshot: {
      variants: {
        '2013/2013-1215-centos': {},
      },
    },
  },
}


  export const Primary9 = () => {
  return (
    <Ogp
      title={
        'VagrantでGuestAdditionsの自動更新をする'
      }
    />
  )
}
Primary9.story = {
  parameters: {
    screenshot: {
      variants: {
        '2013/2013-1215-vagrant': {},
      },
    },
  },
}


  export const Primary10 = () => {
  return (
    <Ogp
      title={
        'MySQLで>が出た時の対処方法'
      }
    />
  )
}
Primary10.story = {
  parameters: {
    screenshot: {
      variants: {
        '2013/2013-1217-mysql': {},
      },
    },
  },
}


  export const Primary11 = () => {
  return (
    <Ogp
      title={
        'NginxでPHPを動かすために'
      }
    />
  )
}
Primary11.story = {
  parameters: {
    screenshot: {
      variants: {
        '2013/2013-1217-nginx': {},
      },
    },
  },
}


  export const Primary12 = () => {
  return (
    <Ogp
      title={
        'Vagrant1.4でCentOSのIPアドレスが固定できない'
      }
    />
  )
}
Primary12.story = {
  parameters: {
    screenshot: {
      variants: {
        '2013/2013-1217-vagrant': {},
      },
    },
  },
}


  export const Primary13 = () => {
  return (
    <Ogp
      title={
        'Vagrant環境でPHPによるアップロードが出来ない時の対処方法'
      }
    />
  )
}
Primary13.story = {
  parameters: {
    screenshot: {
      variants: {
        '2013/2013-1222-vagrant': {},
      },
    },
  },
}


  export const Primary14 = () => {
  return (
    <Ogp
      title={
        'Vagrantで「Code CO_E_SERVER_EXEC_FAILURE」が出る場合の対処法'
      }
    />
  )
}
Primary14.story = {
  parameters: {
    screenshot: {
      variants: {
        '2013/2013-1230-vagrant': {},
      },
    },
  },
}


  export const Primary15 = () => {
  return (
    <Ogp
      title={
        '午年なのでCSS3でマキバオー作った'
      }
    />
  )
}
Primary15.story = {
  parameters: {
    screenshot: {
      variants: {
        '2014/2014-0103-makibao': {},
      },
    },
  },
}


  export const Primary16 = () => {
  return (
    <Ogp
      title={
        'WordPress上でMarkdownならSplitdownがもうちょいという話'
      }
    />
  )
}
Primary16.story = {
  parameters: {
    screenshot: {
      variants: {
        '2014/2014-0103-splitdown': {},
      },
    },
  },
}


  export const Primary17 = () => {
  return (
    <Ogp
      title={
        '週刊少年ジャンプ公式サイトがロングシャドウデザインな件'
      }
    />
  )
}
Primary17.story = {
  parameters: {
    screenshot: {
      variants: {
        '2014/2014-0107-longshadow': {},
      },
    },
  },
}


  export const Primary18 = () => {
  return (
    <Ogp
      title={
        'これがないと仕事にならない有料wordpressプラグイン3選'
      }
    />
  )
}
Primary18.story = {
  parameters: {
    screenshot: {
      variants: {
        '2014/2014-0112-wp': {},
      },
    },
  },
}


  export const Primary19 = () => {
  return (
    <Ogp
      title={
        'まだまだ終わらない？これからのIE6、7、8対策'
      }
    />
  )
}
Primary19.story = {
  parameters: {
    screenshot: {
      variants: {
        '2014/2014-0118-ie': {},
      },
    },
  },
}


  export const Primary20 = () => {
  return (
    <Ogp
      title={
        'WordPressクラックプラグインに注意！そしてセキュリティ対策'
      }
    />
  )
}
Primary20.story = {
  parameters: {
    screenshot: {
      variants: {
        '2014/2014-0125-wp-crack': {},
      },
    },
  },
}


  export const Primary21 = () => {
  return (
    <Ogp
      title={
        'WordPressクラックプラグインに注意！そしてセキュリティ対策'
      }
    />
  )
}
Primary21.story = {
  parameters: {
    screenshot: {
      variants: {
        '2014/2014-0128-outline': {},
      },
    },
  },
}


  export const Primary22 = () => {
  return (
    <Ogp
      title={
        'WPでもRailsでもPhalcon PHPでもなんでもLivereload'
      }
    />
  )
}
Primary22.story = {
  parameters: {
    screenshot: {
      variants: {
        '2014/2014-0130-livereload': {},
      },
    },
  },
}


  export const Primary23 = () => {
  return (
    <Ogp
      title={
        'Ghostの管理画面を再現したWordPressプラグイン「Gust」が凄い'
      }
    />
  )
}
Primary23.story = {
  parameters: {
    screenshot: {
      variants: {
        '2014/2014-0204-gust': {},
      },
    },
  },
}


  export const Primary24 = () => {
  return (
    <Ogp
      title={
        '中途半端なフルスタックエンジニアそしてグロースハッカーになろう'
      }
    />
  )
}
Primary24.story = {
  parameters: {
    screenshot: {
      variants: {
        '2014/2014-0212-fullstack': {},
      },
    },
  },
}


  export const Primary25 = () => {
  return (
    <Ogp
      title={
        'Macで古いプリンターが使えない時はGutenPrintを使おう'
      }
    />
  )
}
Primary25.story = {
  parameters: {
    screenshot: {
      variants: {
        '2014/2014-0216-gutenprint': {},
      },
    },
  },
}


  export const Primary26 = () => {
  return (
    <Ogp
      title={
        '2014年ぼくのWordPressさいきょう高速開発ツール'
      }
    />
  )
}
Primary26.story = {
  parameters: {
    screenshot: {
      variants: {
        '2014/2014-0218-saikyo': {},
      },
    },
  },
}


  export const Primary27 = () => {
  return (
    <Ogp
      title={
        'クリエイティブに生きる'
      }
    />
  )
}
Primary27.story = {
  parameters: {
    screenshot: {
      variants: {
        '2014/2014-0220-creative': {},
      },
    },
  },
}


  export const Primary28 = () => {
  return (
    <Ogp
      title={
        'HTML・CSS初心者のための環境構築（Grunt編）'
      }
    />
  )
}
Primary28.story = {
  parameters: {
    screenshot: {
      variants: {
        '2014/2014-0221-grunt': {},
      },
    },
  },
}


  export const Primary29 = () => {
  return (
    <Ogp
      title={
        '日本語ユーザー名でVagrant upできない場合'
      }
    />
  )
}
Primary29.story = {
  parameters: {
    screenshot: {
      variants: {
        '2014/2014-0227-vagrant': {},
      },
    },
  },
}


  export const Primary30 = () => {
  return (
    <Ogp
      title={
        'VagrantでWordPressを効率よく開発するためのVVV-smallを作りました'
      }
    />
  )
}
Primary30.story = {
  parameters: {
    screenshot: {
      variants: {
        '2014/2014-0306-vvv-small': {},
      },
    },
  },
}


  export const Primary31 = () => {
  return (
    <Ogp
      title={
        'VagrantでWordPressを速攻デプロイできるVVV-mediumを作りました'
      }
    />
  )
}
Primary31.story = {
  parameters: {
    screenshot: {
      variants: {
        '2014/2014-0315-vvv-medium': {},
      },
    },
  },
}


  export const Primary32 = () => {
  return (
    <Ogp
      title={
        'wordmoveでローカルのWordPressを速攻デプロイ'
      }
    />
  )
}
Primary32.story = {
  parameters: {
    screenshot: {
      variants: {
        '2014/2014-0315-wordmove': {},
      },
    },
  },
}


  export const Primary33 = () => {
  return (
    <Ogp
      title={
        '黒歴史でやる気を出そう'
      }
    />
  )
}
Primary33.story = {
  parameters: {
    screenshot: {
      variants: {
        '2014/2014-0318-kurorekishi': {},
      },
    },
  },
}


  export const Primary34 = () => {
  return (
    <Ogp
      title={
        'Xcode5.1にしたらgem installとpip installが動かない'
      }
    />
  )
}
Primary34.story = {
  parameters: {
    screenshot: {
      variants: {
        '2014/2014-0329-xcode': {},
      },
    },
  },
}


  export const Primary35 = () => {
  return (
    <Ogp
      title={
        'Adwords認定試験に挑戦してみた'
      }
    />
  )
}
Primary35.story = {
  parameters: {
    screenshot: {
      variants: {
        '2014/2014-0413-adwords': {},
      },
    },
  },
}


  export const Primary36 = () => {
  return (
    <Ogp
      title={
        'Androidの実機検証・デバッグならRemote TestKit WEB版がオススメ'
      }
    />
  )
}
Primary36.story = {
  parameters: {
    screenshot: {
      variants: {
        '2014/2014-0417-remote': {},
      },
    },
  },
}


  export const Primary37 = () => {
  return (
    <Ogp
      title={
        'なぜ私はFirefoxを使うのか'
      }
    />
  )
}
Primary37.story = {
  parameters: {
    screenshot: {
      variants: {
        '2014/2014-0419-firefox': {},
      },
    },
  },
}


  export const Primary38 = () => {
  return (
    <Ogp
      title={
        'WordPress3.9でTypePad 絵文字 for TinyMCEが動かない場合の解決策'
      }
    />
  )
}
Primary38.story = {
  parameters: {
    screenshot: {
      variants: {
        '2014/2014-0426-tiny': {},
      },
    },
  },
}


  export const Primary39 = () => {
  return (
    <Ogp
      title={
        'CasperJSでAdwordsのレポートを自動ダウンロード（仮）'
      }
    />
  )
}
Primary39.story = {
  parameters: {
    screenshot: {
      variants: {
        '2014/2014-0515-casper': {},
      },
    },
  },
}


  export const Primary40 = () => {
  return (
    <Ogp
      title={
        'SpookyJSで楽々テスト&スクレイピング'
      }
    />
  )
}
Primary40.story = {
  parameters: {
    screenshot: {
      variants: {
        '2014/2014-0526-spooky': {},
      },
    },
  },
}


  export const Primary41 = () => {
  return (
    <Ogp
      title={
        'Google AnalyticsでIPやCookieを判別できるようにする「PHPAnalyticsIP」を作った'
      }
    />
  )
}
Primary41.story = {
  parameters: {
    screenshot: {
      variants: {
        '2014/2014-0602-php-analytics': {},
      },
    },
  },
}


  export const Primary42 = () => {
  return (
    <Ogp
      title={
        'id属性はjsでグローバル変数化されるけどIEではそうもいかないっぽい'
      }
    />
  )
}
Primary42.story = {
  parameters: {
    screenshot: {
      variants: {
        '2014/2014-0608-id': {},
      },
    },
  },
}


  export const Primary43 = () => {
  return (
    <Ogp
      title={
        'SpookyJSでadwordsとスポンサードサーチとYDNのレポートをダウンロード'
      }
    />
  )
}
Primary43.story = {
  parameters: {
    screenshot: {
      variants: {
        '2014/2014-0615-spooky-adwords': {},
      },
    },
  },
}


  export const Primary44 = () => {
  return (
    <Ogp
      title={
        'JSON.parseとJSON.stringifyでらくらく配列のディープコピー'
      }
    />
  )
}
Primary44.story = {
  parameters: {
    screenshot: {
      variants: {
        '2014/2014-0706-json': {},
      },
    },
  },
}


  export const Primary45 = () => {
  return (
    <Ogp
      title={
        'WordPressの機能を使いつつLPを作る上でハマったこと'
      }
    />
  )
}
Primary45.story = {
  parameters: {
    screenshot: {
      variants: {
        '2014/2014-0719-wp-lp': {},
      },
    },
  },
}


  export const Primary46 = () => {
  return (
    <Ogp
      title={
        'ページ遷移でフェードかけるだけのJavaScript作った'
      }
    />
  )
}
Primary46.story = {
  parameters: {
    screenshot: {
      variants: {
        '2014/2014-0816-fade': {},
      },
    },
  },
}


  export const Primary47 = () => {
  return (
    <Ogp
      title={
        'IEではposition:fixedかかったものは直でtransitionかけてあげる必要がある'
      }
    />
  )
}
Primary47.story = {
  parameters: {
    screenshot: {
      variants: {
        '2014/2014-0816-fixed': {},
      },
    },
  },
}


  export const Primary48 = () => {
  return (
    <Ogp
      title={
        '単にPhotoshopでポリゴンスタイルっぽい画像を作る方法'
      }
    />
  )
}
Primary48.story = {
  parameters: {
    screenshot: {
      variants: {
        '2014/2014-0817-polygon': {},
      },
    },
  },
}


  export const Primary49 = () => {
  return (
    <Ogp
      title={
        'VCCWにphpMyAdminとwordmoveを載っけたVCCW-pwを作った'
      }
    />
  )
}
Primary49.story = {
  parameters: {
    screenshot: {
      variants: {
        '2014/2014-0909-vccw': {},
      },
    },
  },
}


  export const Primary50 = () => {
  return (
    <Ogp
      title={
        '写真素材をGoogle Spreadsheetでらくらく共有'
      }
    />
  )
}
Primary50.story = {
  parameters: {
    screenshot: {
      variants: {
        '2014/2014-0915-spreadsheet': {},
      },
    },
  },
}


  export const Primary51 = () => {
  return (
    <Ogp
      title={
        'iOS8でvwとvhが動かないし開発者ツールは動かないしで困った'
      }
    />
  )
}
Primary51.story = {
  parameters: {
    screenshot: {
      variants: {
        '2014/2014-0923-ios8': {},
      },
    },
  },
}


  export const Primary52 = () => {
  return (
    <Ogp
      title={
        'ほんとうにあのサイトが小4の作ったものだったら'
      }
    />
  )
}
Primary52.story = {
  parameters: {
    screenshot: {
      variants: {
        '2014/2014-1123-sho4': {},
      },
    },
  },
}


  export const Primary53 = () => {
  return (
    <Ogp
      title={
        'SVGスプライト(symbol)でposition:absoluteを使うとIEでずれる'
      }
    />
  )
}
Primary53.story = {
  parameters: {
    screenshot: {
      variants: {
        '2014/2014-1206-svg-symbol': {},
      },
    },
  },
}


  export const Primary54 = () => {
  return (
    <Ogp
      title={
        'IEにも対応したレスポンシブSVGの作り方'
      }
    />
  )
}
Primary54.story = {
  parameters: {
    screenshot: {
      variants: {
        '2014/2014-1207-responsive-svg': {},
      },
    },
  },
}


  export const Primary55 = () => {
  return (
    <Ogp
      title={
        'さよなら2014年'
      }
    />
  )
}
Primary55.story = {
  parameters: {
    screenshot: {
      variants: {
        '2014/2014-1231-good-bye': {},
      },
    },
  },
}


  export const Primary56 = () => {
  return (
    <Ogp
      title={
        'WelcartでAdvanced Custom Fieldsを使うブックマークレットを作った'
      }
    />
  )
}
Primary56.story = {
  parameters: {
    screenshot: {
      variants: {
        '2015/2015-0315-welcart': {},
      },
    },
  },
}


  export const Primary57 = () => {
  return (
    <Ogp
      title={
        'Photoshop CC 2015 + GuideGuideでアートボードごとにガイドを引くと便利'
      }
    />
  )
}
Primary57.story = {
  parameters: {
    screenshot: {
      variants: {
        '2015/2015-0622-photoshop': {},
      },
    },
  },
}


  export const Primary58 = () => {
  return (
    <Ogp
      title={
        '探してもわからないということ'
      }
    />
  )
}
Primary58.story = {
  parameters: {
    screenshot: {
      variants: {
        '2016/2016-0204-think': {},
      },
    },
  },
}


  export const Primary59 = () => {
  return (
    <Ogp
      title={
        'SVGとVueでアバター的なものを作る'
      }
    />
  )
}
Primary59.story = {
  parameters: {
    screenshot: {
      variants: {
        '2016/2016-1212-svg-vue': {},
      },
    },
  },
}


  export const Primary60 = () => {
  return (
    <Ogp
      title={
        'WordBench Nagano vol.6 に参加するために長野に行ってきました'
      }
    />
  )
}
Primary60.story = {
  parameters: {
    screenshot: {
      variants: {
        '2017/2017-0706-wb-nagano': {},
      },
    },
  },
}


  export const Primary61 = () => {
  return (
    <Ogp
      title={
        'WordCamp Kyoto 2017に参加＆登壇してきました'
      }
    />
  )
}
Primary61.story = {
  parameters: {
    screenshot: {
      variants: {
        '2017/2017-0719-fck2017': {},
      },
    },
  },
}


  export const Primary62 = () => {
  return (
    <Ogp
      title={
        'FRONTEND CONFERENCE 2017 に参加するために大阪に行ってきました'
      }
    />
  )
}
Primary62.story = {
  parameters: {
    screenshot: {
      variants: {
        '2017/2017-0719-frontend-osaka': {},
      },
    },
  },
}


  export const Primary63 = () => {
  return (
    <Ogp
      title={
        'Next.jsとnetlifyでSSR対応のSPAを作る'
      }
    />
  )
}
Primary63.story = {
  parameters: {
    screenshot: {
      variants: {
        '2017/2017-0724-nextjs': {},
      },
    },
  },
}


  export const Primary64 = () => {
  return (
    <Ogp
      title={
        'Universal Ctags を使って Vim でコードジャンプする'
      }
    />
  )
}
Primary64.story = {
  parameters: {
    screenshot: {
      variants: {
        '2017/2017-0815-ctags': {},
      },
    },
  },
}


  export const Primary65 = () => {
  return (
    <Ogp
      title={
        'Karabiner-Elementsで複数キー設定やアプリごとにキーバインド設定をする'
      }
    />
  )
}
Primary65.story = {
  parameters: {
    screenshot: {
      variants: {
        '2017/2017-0815-karabiner': {},
      },
    },
  },
}


  export const Primary66 = () => {
  return (
    <Ogp
      title={
        'Google Apps Scriptでリコールbotをつくる'
      }
    />
  )
}
Primary66.story = {
  parameters: {
    screenshot: {
      variants: {
        '2019/2019-0101-gas-bot': {},
      },
    },
  },
}


  export const Primary67 = () => {
  return (
    <Ogp
      title={
        'Gutenbergを使うなら、むやみにAPI内の要らないデータを削除するのはやめよう'
      }
    />
  )
}
Primary67.story = {
  parameters: {
    screenshot: {
      variants: {
        '2019/2019-0103-gutenberg': {},
      },
    },
  },
}


  export const Primary68 = () => {
  return (
    <Ogp
      title={
        '1文字ずつspanで囲むVue ComponentとPHP'
      }
    />
  )
}
Primary68.story = {
  parameters: {
    screenshot: {
      variants: {
        '2019/2019-0104-span': {},
      },
    },
  },
}


  export const Primary69 = () => {
  return (
    <Ogp
      title={
        'CSSでスクロールできる天地中央寄せレイアウト'
      }
    />
  )
}
Primary69.story = {
  parameters: {
    screenshot: {
      variants: {
        '2019/2019-0105-scroll': {},
      },
    },
  },
}


  export const Primary70 = () => {
  return (
    <Ogp
      title={
        '2018年頻繁に使ったnpmライブラリ3つ'
      }
    />
  )
}
Primary70.story = {
  parameters: {
    screenshot: {
      variants: {
        '2019/2019-0106-library': {},
      },
    },
  },
}
