import type { RootState } from '.'

const state: RootState = {
  navigation: {
    canHaveAddButton: true,
    filter: 'all',
  },
  todo: {
    todos: [
      {
        id: 1,
        title: '家賃の引き落とし',
        description: '三菱UFJ銀行',
        dueDate: '2024-04-20',
        completed: true,
      },
      {
        id: 2,
        title: 'ABC病院へ行く',
        description: '',
        dueDate: '2024-05-10',
        completed: false,
      },
      {
        id: 3,
        title: '新しいプロジェクトを開始する',
        description: 'XYZ社',
        dueDate: '2024-05-20',
        completed: false,
      },
      {
        id: 4,
        title: 'プレゼンの準備',
        description: 'SSS社',
        dueDate: '2024-05-15',
        completed: false,
      },
      {
        id: 5,
        title: '帰省の準備',
        description: '新幹線、おみやげ、現金、電話',
        dueDate: '2024-05-20',
        completed: false,
      },
    ],
    editId: null,
  },
}

export default state
