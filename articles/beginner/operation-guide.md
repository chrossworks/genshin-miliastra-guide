---
title: 操作方法
description: エディタの基本的な操作方法について記載しています
category: beginner
tags:
  - 初心者向け
published: true
updated: 2026-07-08
---

# 操作方法

本ページでは、エディタが大体使えるようになる、を目指して、大まかな操作方法を記載していきます。  
各機能における詳細な操作方法については、各機能のページにて記載します。  

### カメラ操作

<video controls playsinline preload="metadata" style="width: 100%; max-width: 960px; border-radius: 12px;">
  <source src="../../assets/beginner/learn/operation-guide/operation-camera.mp4">
</video>

| 動作        | 操作方法     |
| --------- | -------- |
| 前後左右の移動   | WASDキー   |
| 水平移動      | ホイールドラッグ |
| 上下の移動     | QEキー     |
| ズームイン・アウト | ホイール上下   |
| 回転        | 右ドラッグ    |

### オブジェクト操作

<video controls playsinline preload="metadata" style="width: 100%; max-width: 960px; border-radius: 12px;">
  <source src="../../assets/beginner/learn/operation-guide/operation-object-placement.mp4">
</video>

| 動作          | 操作方法                 |
| ----------- | -------------------- |
| 配置          | 左メニューからオブジェクト選択      |
| オブジェクトの選択   | 左クリック                |
| オブジェクトの複数選択 | Shift+左クリック<br>左ドラッグ |

※　オブジェクトを配置する際、**一度地面をクリックしてからオブジェクトを配置すると、y軸0の接地状態で配置することが出来ます。**  

<video controls playsinline preload="metadata" style="width: 100%; max-width: 960px; border-radius: 12px;">
  <source src="../../assets/beginner/learn/operation-guide/operation-object.mp4">
</video>
オブジェクトを選択した際、変形ツール（変換ツール）が表示され、それを操作することでオブジェクトを簡易的に操作することが可能です。  
（画面右側の値を変更することによって、値ベースでの変更も可能です）  
変形ツールには4種類（オールインワン、移動、回転、スケール）あり、これらは**Spaceキーで切り替えが可能**なので、見覚えのないものになっているときはSpaceキーを押してみてください。  

| 動作        | 操作方法                          |
| --------- | ----------------------------- |
| 移動        | 矢印をドラッグ（軸移動）<br>原点をドラッグ（自由移動） |
| 回転        | 円弧をドラッグ                       |
| スケール      | 立方体をドラッグ                      |
| 変形ツール切り替え | Spaceキー                       |

### ショートカット
知っておくと便利なショートカットです。  
<video controls playsinline preload="metadata" style="width: 100%; max-width: 960px; border-radius: 12px;">
  <source src="../../assets/beginner/learn/operation-guide/operation-object-command.mp4">
</video>

| 動作            | 操作方法     |
| ------------- | -------- |
| コピー           | ctrl+C   |
| ペースト          | ctrl+V   |
| オブジェクトのコピー＆移動 | alt+ドラッグ |
| 削除            | deleteキー |
| 保存            | ctrl+S   |
| 一つ戻る          | ctrl+Z   |
| 一つ進む          | ctrl+Y   |
※　保存については、ステージの大半のデータを保存、という感じです。  
　　プレハブ等一部のものは上記操作では保存されないので、注意してください。  

### 星々の箱庭
詳しくは星々の箱庭のページで記載しますが、とりあえずとっかかるための基本操作方法です。  
<video controls playsinline preload="metadata" style="width: 100%; max-width: 960px; border-radius: 12px;">
  <source src="../../assets/beginner/learn/operation-guide/operation-hakoniwa.mp4">
</video>
ホーム画面については、右クリックすればメニューが開いて、新規ノードグラフの作成や名前変更が出来、ダブルクリックで該当ノードグラフの編集画面に移行出来ます。  
ノードグラフ編集画面では、右クリックでノード一覧を開き、そこから新規ノードを作成出来ます。  
検索ボックスからノードを検索する際、**Enterを押してしまうとノード一覧が閉じてしまう**ので注意してください。  
ノード同士を紐づけることで、左のノードから順番に実行されます。  


