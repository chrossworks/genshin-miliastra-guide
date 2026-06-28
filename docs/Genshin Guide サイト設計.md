# サイトマップ（ページ構成）
- TOPページ
- このサイトについて
- 星々の幻境とは
- これから制作する方へ
	- 大まかな制作の流れ
	- 基礎知識
	- 操作方法
	- 制作の進め方のススメ
- 機能説明
	- 地形制作
	- オブジェクトの配置
	- プレハブ制作
	- etc
- よくある失敗
	- テストプレイをしようとしたらエラーが出た
	- 天気や時間をいじっているのに反映されない
	- 敵が変な方向に攻撃する
	- etc
- 制作実例紹介
	- ハイスピードラン
	- モンド風オートツアー
	- 魔術師の迷いの森
	- etc
- アップデート内容
	- Luna Ⅷ（7/1）アップデート
	- etc
- 収益化について
	- 収益を得る方法
	- ヒラメキ応援プログラム
	- クリエイター創作大会
	- 制作攻略法募集コンテスト
	- etc

# URL
/
/about
/about_miliastra
/beginner
/beginner/general_flow
/beginner/basic_knowledge
/features
/features/terrain
/features/prefab
# articles/のフォルダ構成
index.md
about.md
about_miliastra.md
beginner/index.md
beginner/general_flow.md
beginner/basic_knowledge.md
features/index.md
features/terrain.md
features/prefab.md

# website/の役割
articlesはwebsiteの外で、articlesにあるmdを自動で変換してwebsiteに反映するイメージ
記事の内容は必ずarticlesで管理する
websiteは表示のみ担当

# 将来追加したい機能
- サイト収益化

# 運用
アイデア
↓
docs/
↓
ChatGPTで相談
↓
articles/
↓
GitHubへPush
↓
Astro
↓
公開