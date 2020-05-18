---
title: データとインフラストラクチャー
description: Flatを提供するインフラストラクチャーに関する情報
nav: general
pid: data-infra
copyright: true
permalink: ja/general/data-infrastructure.html
---

私達のプラットフォームはFlatを動作させる為に、複数のクラウドプロバイダーやサブプロセッサを使用しています。ベストなパフォーマンス、セキュリティ、サービスを提供する為に、これらのプロバイダーやデータセンターは複数の地域に配置されています。私達は、データに関しても複数地域に複製しています。

## ドメイン名

ファイアーウォールやプロキシサーバー設定の制限を使用している場合は、あなたやあなたのネットワーク管理者は、期待通りのFlatや関連サービスの動作を確実にする為に、特定のドメインをホワイトリストとして許可する必要があります。

Flatや関連サービス用にこれらのドメインを許可してください:

```
https://*.flat.io
https://*.flat-cdn.com
https://*.flat-embed.com
```

## インフラストラクチャー プロバイダー

Flatは本番環境のインフラストラクチャーに次のプロバイダーを使用しています。

| プロバイダー と 国 | ホスト国 |
|:--------------------------|:-----------------------|
| Amazon Web Services Inc. (US) | US |
| DigitalOcean LLC. (US) | US, NL |
| OVH UK Ltd. (UK) | CA, FR |
| Wasabi Technologies, Inc. (US) | US, NL |

また、私達は、私達の静的なアプリコンテンツを提供する為に、補助的にCDNプロバイダーを使用しています(ユーザー情報やユーザーコンテンツは全く含まれません)。

## サブプロセッサ

最善の状態で私達のサービスを提供する為に、以下のようなサブプロセッサを使用しています。それぞれご確認頂く事ができ、それらを通して何を提供しているかについての短い説明文もご覧いただけます。

| サブプロセッサ名 | サービス | 使用と国 |
| ------------------|:--------|:------|
| Amazon Web Services Inc. | IaaS provider | We use Amazon Web Services for their data storage and email service (in the US). |
| DigitalOcean LLC. | IaaS provider | We use Digital Ocean for their compute and data storage (in the US and the Netherlands). |
| OVH UK Ltd. | IaaS provider | We use OVH for their data storage (in France and Canada). |
| Wasabi Technologies, Inc. | IaaS provivder | We use Wasabi for their data storage (in the US and the Netherlands). | 
| Google LLC. | PaaS/SaaS provider | We use Google for G Suite, Google Cloud, Firebase, Fabric and Google Analytics. |
| FrontApp, Inc. | SaaS provider | We use FrontApp for our support tool. |
| Stripe, Inc. | Payment provider | We use Stripe to process payments on the platform. |
| PayPal Holdings, Inc. | Payment Provider | We use Paypal to process payments on the platform. |
| Xero (UK) Ltd. | SaaS provider | We use Xero for the accounting and invoicing of our company. |
