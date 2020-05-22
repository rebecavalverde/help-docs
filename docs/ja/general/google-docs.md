---
title: FlatをGoogleドキュメントやGoogleスライドで活用
ptitle: あなたのGoogleドキュメントやGoogleスライドに楽譜を追加する
description: G Suite用無料アドオンをお試しください。数クリックで、あなたのGoogleドキュメントやGoogleスライドにあらゆる楽譜を挿入できます。
nav: general
pid: gdocs
permalink: ja/general/flat-for-google-docs-music-notation.html
---

Flatのウェブベース楽譜作成ソフトを使って素早くあなたのドキュメントやプレゼン資料にスコアやタブ譜を作成しましょう。私達の [Google Docs and Google Slides](https://gsuite.google.com/marketplace/app/flat_for_docs/324260072797) 無料アドオンをご活用ください。

[![GoogleドキュメントやGoogleスライドに楽譜を追加](/help/assets/img/google-docs/music-notation.png)](https://gsuite.google.com/marketplace/app/flat_for_docs/324260072797)

## アドオンのインストール

[G Suite Marketplace](https://gsuite.google.com/marketplace/app/flat_for_docs/324260072797)上でアドオンをご利用頂けます。 あなたのGoogleアカウントへ[クリックしてインストール](https://gsuite.google.com/marketplace/app/flat_for_docs/324260072797) しましょう。

その後、ドキュメントやスライド上で**アドオン > Flat > Insert musical snippet**をクリックしてアドオンを起動します。

##ドキュメントでFlatを活用する

楽譜を作成するのにFlatアカウントを作成する必要はありません。無料アドオンを起動して、スコアに音符を入力して"Insert"をクリックするだけの操作です。エディター画面に関してヘルプが必要な場合は、[専用のヘルプをご確認ください](/help/en/music-notation-software/)。このアドオンは[ウェブ版 & 共同楽譜編集ソフト](https://flat.io)のライト版の位置づけで、専用ツールで利用可能な全ての機能が含まれているわけではありません。

## 編集ツールはどのように活用しますか？

[専用のヘルプページ](/help/en/music-notation-software/notation-features.html)で全てのツールについての説明や使い方をご確認頂けます。

## 楽譜の編集方法は？

挿入済みも楽譜を編集するには、画像を選択してアドオンを再度開きます。変更を有効化して更新したスコアを挿入するには、*編集*ボタンをクリックします。

![挿入済み楽譜の編集](/help/assets/img/google-docs/edit-music-notation.gif)

## 音楽の再生方法は？

ドキュメントに挿入した楽譜は画像のように作用しますが、再生機能はありません(挿入済み楽譜を選択してアドオンで再度開く事でで再生させる事はできます。)。将来的にGoogleドキュメント/スライドにオーディオやサウンド再生を含めた方が良いと思われる場合は、お気軽にプロダクトチームへ機能リクエストをお送りください (Help > Google ドキュメントのへｒプ > フィードバックを送信)。

## ヘルプが必要、またはフィードバックがある場合

**本アドオンに関してヘルプが必要な場合は、[google-docs@flat.io](mailto:google-docs@flat.io)**へお問合せください。本アドオンを気に入って頂けた場合は、ストア上でレビュー評価を頂き、お友達にシェアをお願い致します！

## アドオンを再認証するには？

作業中のドキュメントを修正する為に、アドオンを再認証するには:

<a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener">Googleアカウントであなたのアカウントへアクセスするアプリのリストを開き</a>、"Flat"へスクロールします。掲載されているアプリをクリックして、"アクセス権を削除"を選択してください。

![アドオンのアクセス権削除](/help/assets/img/google-docs/authz-remove.png)

作業中のGoogleドキュメント/スライドを再度開き、アドオンを再度起動します(*アドオン > Flat > Insert musical snippets*)。 そして、あなたのドキュメントに修正を行う為にアドオンのアクセス権を許可します:

![Flatアドオン許可](/help/assets/img/google-docs/authz-addon.png)

以上です。アドオンをご利用頂けるようになりました。

## Googleドキュメントアドオンに関する既知の問題点

### 既存のスニペットを編集できない

アドオン用に若干のストレージ容量を持つGoogleドキュメント内でオリジナルスコアファイルを保存しています。アドオンは小規模なスニペット用に設計されている為、挿入済みの大規模なスニペットや、一つのドキュメント内に多くのスニペットを持っている場合は編集する事ができません。オリジナルスコアを保存する方法を変更する事により、将来的には改善する予定です。

大規模なスコアに関しては、私達のメインプラットフォームの[flat.ioで無料アカウントを作成](https://flat.io)してください。このバージョンなら、大規模なスコア作業が可能で、自動保存機能も搭載されています。

### Brave Browser

本アドオンはFingerprinting Protection Modeによる動作しません。私達のコードは、Googleドキュメントではサードパーティとして実行され、 スコアをドキュメント上に画像としてエクスポートする為に、SVG や Canvas 機能を使用しますが、この機能はBraveによって標準でブロックされています。アドオンを有効にするには、一時的にFingerprinting Protectionを利用不可にする事ができます。

## アドオン修正履歴

### 2019-01-30

* New template: Ukulele Tabs
* Improved padding in inserted pictures
* Better firewall issues detection

### 2018-09-30

* Switch to our *.com domains to reduce the number of firewall issues

### 2018-07-13

* New editor