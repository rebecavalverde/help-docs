---
title: 小節線とリピート記号
permalink: ja/music-notation-software/barlines.html
description: 複縦線とリピートをFlatで追加する
nav: editor
pid: barlines

action.barline: true
action.toggleDoubleBarline: true
action.toggleLeftRepeatBarline: true
action.toggleRightRepeatBarline: true
---

## 概要

| 機能 | ツールバー | アイコン | 標準キーボードショートカット |
|:--------|:--------|:-----|:------------------|
| 複縦線 | **小節** | ![Double barline](https://prod.flat-cdn.com/img/icons/editorActions/barlineDouble.svg){:.tb} |  |
| 小節線左リピート | **小節** | ![Left barline repeat](https://prod.flat-cdn.com/img/icons/editorActions/barlineRepeatLeft.svg){:.tb} | <span class="kbs-multi"><span class="kb-container"><span class="kb">[</span></span></span> |
| 小節線右リピート | **小節** | ![Right barline repeat](https://prod.flat-cdn.com/img/icons/editorActions/barlineRepeatRight.svg){:.tb} | <span class="kbs-multi"><span class="kb-container"><span class="kb">]</span></span></span> |
{:.feat}

## 小節リピートとは何ですか？

リピート小節はスコアの１つ以上の小節の繰り返しを意味します。
左右の小節リピート記号を使って、リピートする対象のスコアのセクションを囲みます。一度小節線右側のリピートに到達すると、リピートで囲まれた小節は1回以上繰り返し演奏されます。

スコアの最初の小節までリピートによって戻る場合は、小節線左のリピートは省略しても問題ありません。

小節リピートは入れ子構造で使用される事もあります。この場合、入れ子構造のリピート記号は、一度目のみ使用され、その後そのセクションは一度限り演奏されます。

## 複縦線の用途は何ですか？

複縦線はスコアのセクションが切り替わる事を示す為に使用されます。慣例的には、調が変わる際にも複縦線を表示するように要求される事もあります。

## Flatで小節線を使用するには？

リピート小節線や、複縦線ツールは、*小節* メニューから簡単に追加、変更する事ができます。

選択した小節で小節線をワンクリックすると小節線が追加されます。
もう一度クリックすると記号は削除されます。

変更は矛盾が無いようにスコアの全てのパート適用されます。

![小節線](/help/assets/img/editor/barlines.gif)


