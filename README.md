# React Hooks Sample App

各種 React Hooks のデモを UI から個別に Run/Reset 実行できるサンプル。

## セットアップ

- 要件: Node.js 18+

## 使い方

1. 依存関係のインストール

```sh
npm install
```

2. 開発サーバー起動

```sh
npm run dev
```

3. ビルド

```sh
npm run build
npm run preview
```

## 構成

- Vite + React + TypeScript
- 各 Hook は `src/views/*Demo.tsx` に実装
- 画面カードの Run/Reset で各デモの状態を駆動

## 備考

- useSyncExternalStore のデモは 1 秒間隔の tick ストアを購読します。
- useInsertionEffect デモは style 要素を動的に挿入/削除します。
