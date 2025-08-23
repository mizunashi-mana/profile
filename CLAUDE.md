# CLAUDE.md

このファイルは、Claude Codeが使用するプロジェクト固有の設定とコンテキストを含んでいます。

## プロジェクト構造

- `src/` - メインのソースコード
  - `asset/` - 静的アセット（画像、アイコンなど）
  - `styles/` - CSSスタイル
  - `main.ts` - メインエントリーポイント
  - `markdown.ts` - Markdown関連の機能
  - `*.md` - Markdownコンテンツファイル

## 開発環境

- TypeScript
- Webpack
- Tailwind CSS
- PostCSS

## セットアップコマンド

```bash
npm install    # 依存関係のインストール
npm run build  # プロダクションビルド
npm run dev    # 開発サーバー起動
npm run preview # プロダクションプレビュー
```

## 技術スタック

- **フレームワーク**: Astro
- **スタイリング**: Tailwind CSS
- **アイコン**: Font Awesome (CDN経由)
- **言語**: TypeScript

## 注意事項

- 本プロジェクトはプロフィールサイトです
- WebpackからAstroに移行済み
- devenvを使用した開発環境の管理
- GitHub Pagesへの展開を想定