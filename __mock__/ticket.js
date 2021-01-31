export const ticket = {
  token: 'A13457',
  status: 'В ожидании',
  title: 'Не работает кнопка подписаться',
  author: {
    name: 'Анна',
    avatar: '/images/avatar.png'
  },
  messages: [
    {
      id: 0,
      avatar: '/images/avatar.png',
      side: 'owner',
      name: 'Владислав',
      text: 'Привет! Как дела?',
      time: '18:45',
      unreaded: false
    },
    {
      id: 1,
      avatar: '/images/avatar.png',
      side: 'observer',
      name: 'Анна',
      text: 'Привет! Нормально, у тебя как?',
      time: '18:46',
      unreaded: false
    },
    {
      id: 2,
      avatar: '/images/avatar.png',
      side: 'owner',
      name: 'Анна',
      text: 'Отлично!',
      time: '18:47',
      unreaded: true
    }
  ],
  category: 'Технические трудности',
  createdAt: '19.12.2020'
}

export default ticket
