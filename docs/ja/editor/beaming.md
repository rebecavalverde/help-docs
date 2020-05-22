---
title: 音符の連桁
description: 連桁の自動化設定と手動設定
nav: editor
pid: notes-beaming
permalink: ja/music-notation-software/notes-beaming.html

action.beaming: true
action.toggleForceBeam: true
action.toggleForceUnbeam: true
---

## 概要

| 機能 | ツールバー | アイコン |
|:--------|:--------|:-----|
| [カスタム自動連桁](#custom-automatic-beaming-premium-feature) | **音符** | ![カスタム自動連桁](https://prod.flat-cdn.com/img/icons/editorActions/beamPolicy.svg){:.tb} |
| [連桁の強制](#manual-notes-beaming-free-feature) | **音符** | ![連桁の強制](https://prod.flat-cdn.com/img/icons/editorActions/beam.svg){:.tb} |
| [連桁の解除](#manual-notes-beaming-free-feature) | **音符** | ![連桁の解除](https://prod.flat-cdn.com/img/icons/editorActions/unbeam.svg){:.tb} |
{:.feat.index}

## 連桁とは何？

連桁はリズムのグループを示す為に複数の連続する音符をつなぐ際に使用される平行、または斜めの線です。Flatの標準では、拍ごとに自動的に連桁が設定されます。カスタム自動連桁の設定を変更する事で簡単にカスタマイズする事ができ、または手動で連桁の設定や解除を行う事もできます。

## カスタム自動連桁（プレミアム機能）

連桁を手動で設定したくない場合には、楽譜全体に独自の自動連桁ルールを設定して適用する事ができ、または音符を複数選択する事で特定のスコアに適用する事ができます。

活用例:

* **4/4**の場合、Flatの標準設定では "**1 + 1 + 1 + 1**" が連桁ルールとして、1拍ごとに連桁が使用されます。これを "**2 + 2**"に変更した場合、8分音符が4つ毎に連桁されます(つまり2拍)。
* **6/8**の場合は、最も一般的な記譜としては8分音符を3つ毎に (**3 + 3**)、または2つ毎に (**2 + 2 + 2**)グループ分けします。

以下は簡単なデモとなります。 **6/8** の場合に **3 + 3 + 3** から **2 + 2**へ連桁を変更し、その後カスタムルールを **1 + 3 + 2**に変更しています。

![自動連桁ルール](/help/assets/img/editor/beaming.gif)

## 手動で連桁を設定する (無料機能)

自動連桁の代わりに、強制的に連桁を指定したり、解除したりする事もできます。音符を一つ選ぶ、連桁を指定すると、指定した音符の次の音符とともに連桁が適用されます。同様に、複数の音符を選択して、*連桁にする*をクリックする事で、複数の音符に対して同時に素早く連桁する事ができます。

![連桁の追加/解除](/help/assets/img/editor/force-beam.gif)
