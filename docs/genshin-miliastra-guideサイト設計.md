# サイト概要
サイト名：【原神】星々の幻境 自己流制作マニュアル
URL：https://chrossworks.github.io/genshin-miliastra-guide/
# サイトマップ（ページ構成）
- TOPページ
- このサイトについて
- 星々の幻境について
	- 星々の幻境とは
	- クリエイターレベルについて
	- 収益プログラムについて
	- 公式リンク一覧
- これから制作する方へ
	- 知識から学ぶ
		- 大まかな制作の流れ
		- 基礎知識
		- 操作方法
		- 制作の進め方のススメ
	- 作りながら学ぶ
		- チュートリアルパルクールについて
		- 1.　コインのプレハブを作る
		- 2.　コインでスコアが増える仕組みを作る
		- 3.　地形を作る
		- 4.　オブジェクトを配置する
		- 5.　ステージクリアのシステムを作る
		- 6.　タイマーを作る
		- 7.　UIを作る
		- 8.　細かい設定をする
- 機能説明
	- 地形制作
	- 環境設定
	- エンティティの配置
	- プレハブ制作
		- プレハブライブラリの基本的な使い方
		- オブジェクトプレハブ制作
		- 創造物プレハブ制作
		- 共通コンポーネント
			- カスタム変数
			- エフェクト再生
			- ユニット状態
			- オプションタブ
	- ノードグラフ制作（星々の箱庭）
		- サーバーノードグラフ
			- 実行ノード
			- イベントノード
			- フロー制御ノード
			- 検索ノード
			- 運算ノード
		- クライアントノードグラフ
- 制作FAQ
	- 上手く動作しない
		- テストプレイをしようとしたらエラーが出た
		- 天気や時間をいじっているのに反映されない
		- 敵が変な方向に攻撃する
	- 作り方が分からない
		- キャラ以外を操作したい
		- ランダム要素を取り入れたい
	- 用語が分からない
		- 基礎創造物と複雑な創造物とは
		- タイマーとグローバルタイマーの違いとは
		- クライアントノードとサーバーノードとは
		- 信号とは
- 制作実例紹介
	- ハイスピードラン
	- モンド風オートツアー
	- 魔術師の迷いの森
	- 元素反応防衛戦
- アップデート内容
	- Luna Ⅷ（7/1）
	- etc
- 制作ノウハウ
	- 幻境のアイデアの出し方
	- 幻境を多くの人に遊んでもらうには

# URL
/
/about
/about_miliastra
/about_miliastra/miliastra
/about_miliastra/creator_level
/beginner
/beginner/learn
/beginner/learn/general_flow
/beginner/learn/basic_knowledge
/beginner/build
/beginner/build/tutorial_miliastra
/beginner/build/coin
/beginner/build/score
/faq
/examples
# articles/のフォルダ構成
about.md
about_miliastra/miliastra.md
about_miliastra/creator_level.md
beginner/learn/general_flow.md
beginner/learn/basic_knowledge.md
beginner/build/tutorial_miliastra.md
beginner/build/coin.md
beginner/build/score.md
# 各フォルダの役割
- articlesに記事を作成し、そのmdを自動で変換して、websiteに反映
- websiteは表示のみを担当し、直接編集等は行わないが、TOPや各カテゴリーの親ページについては、website内にindex.astroを直接作成する
- docsはメモや案出し、ドラフト等用のフォルダ
- Templatesはobsidianで使用するテンプレート管理用のフォルダ
- rawはサイト掲載用の動画や画像の元データの置き場所で、格納後の削除や編集は行わない
- workは動画や画像の編集中データ格納用フォルダ
- exportに動画や画像を書き出して保存
　（WEBサイトで実際に使用する動画や画像はwebsite/public/assetsに格納）

# 実装済みcomponents
- ArticleCard
- Footer
- Header
- Search

# 将来追加したい機能
- パンくずリスト
- 前後の記事
- 関連記事
- 更新日表示
- 記事上部に記事の目次とページ内リンクの配置
　（全記事ではなく、長い記事のみ）
- アクセス解析
- サイト収益化

# 運用
- アイデア、ドラフト等をdocsに記載
- articlesに正式な記事のmdを格納
- VS Codeのターミナルにて、genshin-miliastra-guide/websiteでnpm run buildが無事完了することを確認
- github desktopでプッシュ
- パブリッシュブランチへ同期
- workflow完了を待つ
- 公開