---
title: "AWS CDKでAmplify Consoleの通知をSlackに送りたい！"
date: "2020-03-08"
path: "/blog/2020/03/amplify-notification-send-to-slack/"
type: "blog"
categories: ["環境構築", "AWS"]
tags: ["Node.js", "Lambda", "TypeScript"]
excerpt: "AWS CDKでAmplify Consoleの通知をSlackに送りたい！"
ogp: "./ogp.png"
---

最近主に何も考えずにデプロイできる Amplify Console でサイト作成したりアプリ作成したりしているのですが、AWS CDK を使うとサクッと Lambda との連携ができたのでメモしておきます。

## AWS CDK とは

AWSの魔境である CloudFormation をラップし、TypeScript や Python で環境構築できる非常に便利なツールです。

AWS の基礎力は必要ですが、GUIでポチポチやったり、つよつよにならない限りハードルが高いCloudFormation ではなくコードベースで環境がサクッと構築できますのでおすすめです。

導入も比較的簡単なので、おなじみクラスメソッドさんの [【コードでインフラ定義】CDKという異次元体験をさくっとやるのに便利なAWS公式Workshopの紹介](https://dev.classmethod.jp/cloud/aws/cdk-workshop-typescript/) で試してみてください。

## Amplify Console で 通知の設定をする

<p style="max-width: 250px">
<img src="./mail.png" alt="通知の設定">
</p>

AWS にログインして、メール通知→ Manage notifications から一旦とりあえずメールを設定します。  
これでビルド開始・終了でメールが届くようになります。

## AWS SNS の情報を控える

![snsの設定](sns.png)

AWS SNS の画面で、Amplify で作成されたIDとARNを控えます。

## Slack の設定

![slackの設定](webhooks.png)

Slack App を作成して Incoming Web hook をオンにして URL を発行してください。

![URLのコピー](webhooks2.png)

ウェブフックの URL も後で使うので控えておきます。

## CDK で Lambda を作成しデプロイする

とりあえずコードはここです。  
https://github.com/tanshio/amplify-sns-to-slack

クローンしたところと、`src/lambda/amplify/` で `yarn install` でインストール、  
`direnv` を使っているので、`.envrc.template` を `.envrc` にリネームして、 `direnv allow` で環境変数を有効化します。

AMPLIFY\_SNS\_ID が SNS の ID です  
AMPLIFY\_SNS\_ARN が SNS の ARN です


### CDK のデプロイ

`cdk deploy` でLambda をデプロイ。

### Lambda の 環境変数

![URLのコピー](lambda.png)

Lambda のページに行って、作成された Lambda に環境変数 `SLACK_WEBHOOK_URL` をセットします。

後は Amplify で再ビルドなどしてみてください。

<p style="max-width: 250px">
<img src="./slack.png" alt="Slack の通知">
</p>

Slack に通知がいきました！

あとは Amplify の通知から必要なければメールを削除してください。

## おわりに

Slack に通知が行くのは体験がいいのでおすすめです。  
CDK も 環境がサクッと作成できるのでぜひ触ってみてください。
