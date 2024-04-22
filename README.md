# Todo List App 開発概要

以下の仕様を満たすように実装する。

- [x] ToDoとしてタイトル、タスクの概要、完了予定日を登録できる
- [x] ToDoの内容を更新できる
- [x] 誤って入力したToDoを削除できる
- [x] ToDoを完了できる
  - [x] [ ] 完了したタスクは履歴として残される
- [ ] ToDoのデータはAPIを用いて管理できること

# 動作環境

- node version 18.17以上
- chrome

# 主な使用技術

| ツール          | 説明                                                    |
| --------------- | ------------------------------------------------------- |
| Typescript      | https://www.typescriptlang.org/docs/handbook/intro.html |
| React v18       | https://react.dev/reference/react                       |
| NextJS v14      | https://nextjs.org/                                     |
| Redux Toolkit   | https://redux-toolkit.js.org/                           |
| MUI             | https://mui.com/                                        |
| React Hook Form | https://react-hook-form.com/                            |

# 構造

```bash
src/
├── app/ #UIコンポーネント
│   │
│   └── components/ #UIパーツ
│
├── hooks/ #hooks
│
├── store/ #状態管理
│   │
│   └── modules/ #redux modules
│
├── theme/ #MUI theme設定
│
└── types/ #type
```

# インストール

```bash
npm install
```

# 実行する

```bash
npm run dev
```

Open [http://localhost:4001](http://localhost:4001) with your browser to see the result.

# テストする

```bash
しばらくお待ち下さい
```

# Todo List Appの使い方

## Todoを追加する
<img width="811" alt="スクリーンショット 2024-04-22 16 44 03" src="https://github.com/naganoyasuaki/todo-challenge/assets/1168878/cff58753-fa90-491c-827f-c1d9d10ccdb9">

追加ボタンを押し、追加フォームを表示します。
フォームの内容を入力してAddボタンを押します。

## Todoを更新する

Todoの右にある鉛筆アイコンをクリックして、編集モードにします。
フォームの内容を編集してUpdateボタンを押します。

## Todoを完了する

Todoの左端のチェックマークをクリックします。チェックがついたら完了になります。

## Todoを削除する

Todoの右にあるゴミ箱アイコンをクリックします。

## Todoをフィルタリングする

ヘッダーのラジオボタンを選択します。

- All: すべてのTodoを表示します
- Active: 未完了のTodoを表示します
- Completed: 完了済みのTodoを表示します
