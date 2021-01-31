export const article = {
  preview: '/images/preview-article.jpg',
  title: 'Новый энергетический объект округа Кэрролл',
  author: {
    name: 'ПАО «Газпром»',
    avatar: '/images/avatar-company.png'
  },
  body:
    'Bechtel отвечал за проектирование, закупки, строительство, запуск и ввод в эксплуатацию нового газового парогазового комплекса мощностью 700 мегаватт в Огайо, США и ввод в эксплуатацию нового газового парогазового комплекса мощностью 700 мегаватт в Огайо, США',
  category: 'Строительство',
  comments: [
    {
      id: 0,
      user: {
        avatar: '/images/avatar.png',
        name: 'Анна'
      },
      message: 'Хорошая статья!',
      likes: 10,
      time: '14:15'
    },
    {
      id: 1,
      user: {
        avatar: '/images/avatar.png',
        name: 'Анна'
      },
      message: 'Комментарий',
      time: '14:16'
    },
    {
      id: 2,
      user: {
        avatar: '/images/avatar.png',
        name: 'Анна'
      },
      message: 'Еще один комментарий',
      likes: 2,
      time: '14:19'
    }
  ],
  publishedAt: '25.12.2020',
  createdAt: '18.12.2020'
}

export default article
