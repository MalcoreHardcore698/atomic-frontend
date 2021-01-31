export const chats = [
  {
    id: 0,
    name: 'Владислав',
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
        name: 'Владислав',
        text: 'Отлично!',
        time: '18:47',
        unreaded: true
      }
    ],
    avatar: '/images/avatar.png'
  },
  {
    id: 1,
    name: 'Анна',
    messages: [
      {
        id: 0,
        avatar: '/images/avatar.png',
        side: 'owner',
        name: 'Анна',
        text: 'Привет! Как дела?',
        time: '18:45',
        unreaded: false
      },
      {
        id: 1,
        avatar: '/images/avatar.png',
        side: 'observer',
        name: 'Владислав',
        text: 'Привет! Нормально, у тебя как?',
        time: '18:46',
        unreaded: false
      },
      {
        id: 2,
        avatar: '/images/avatar.png',
        side: 'owner',
        name: 'Анна',
        text: 'Хорошо)',
        time: '18:47',
        unreaded: true
      }
    ],
    avatar: '/images/avatar.png'
  }
]

export default chats
