# Todo List App 開発概要

以下の仕様を満たすように実装する。

- [x] ToDoとしてタイトル、タスクの概要、完了予定日を登録できる
- [x] ToDoの内容を更新できる
- [x] 誤って入力したToDoを削除できる
- [x] ToDoを完了できる
  - [x] 完了したタスクは履歴として残される
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
│   └── components/ #UIパーツ
│
├── hooks/ #hooks
│
├── store/ #状態管理
│   └── modules/ #redux modules
│
├── theme/ #MUI theme設定
│
└── types/ #type
```

# リポジトリを取得する

```bash
git clone https://github.com/naganoyasuaki/todo-challenge.git
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
npm run test
```

# Todo List Appの使い方

## Todoを追加する

<img width="811" alt="スクリーンショット 2024-04-22 16 44 03" src="https://github.com/naganoyasuaki/todo-challenge/assets/1168878/cff58753-fa90-491c-827f-c1d9d10ccdb9">
<img width="808" alt="スクリーンショット 2024-04-22 16 45 32" src="https://github.com/naganoyasuaki/todo-challenge/assets/1168878/11683f95-5bc1-41b1-a3ce-0c503f1376bf">

追加ボタンを押し、追加フォームを表示します。
フォームの内容を入力してAddボタンを押します。

## Todoを更新する

<img width="808" alt="スクリーンショット 2024-04-22 16 46 55" src="https://github.com/naganoyasuaki/todo-challenge/assets/1168878/6ea258a4-a642-4dec-83dc-4da9f02a99d9">

Todoの右にある鉛筆アイコンをクリックして、編集モードにします。
フォームの内容を編集してUpdateボタンを押します。

## Todoを完了する

<img width="808" alt="スクリーンショット 2024-04-22 16 47 45" src="https://github.com/naganoyasuaki/todo-challenge/assets/1168878/0c18ae04-1c27-43c5-b249-d65939fe0a96">

Todoの左端のチェックマークをクリックします。チェックがついたら完了になります。

## Todoを削除する

<img width="809" alt="スクリーンショット 2024-04-22 16 48 14" src="https://github.com/naganoyasuaki/todo-challenge/assets/1168878/8299d26f-90de-4588-bf98-4c55c3c95c84">

Todoの右にあるゴミ箱アイコンをクリックします。

## Todoをフィルタリングする

<img width="809" alt="スクリーンショット 2024-04-22 16 48 30" src="https://github.com/naganoyasuaki/todo-challenge/assets/1168878/4649f731-bc9a-455d-9bf8-c345f093d000">

ヘッダーのラジオボタンを選択します。

- All: すべてのTodoを表示します
- Active: 未完了のTodoを表示します
- Completed: 完了済みのTodoを表示します
