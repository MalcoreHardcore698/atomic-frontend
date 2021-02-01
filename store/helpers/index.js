import React from 'react'
import styled from 'styled-components'
import YouTube from 'react-youtube'

import Column from '../../atomic-ui/components/Column'
import Button from '../../atomic-ui/components/Button'
import Dash from '../../atomic-ui/components/Menu/Dash'
import Text from '../../atomic-ui/components/Text'

import Notifications from '../../components/Notifications'
import Messenger from '../../components/Messenger'
import { setDrawer } from '../actions/drawer'
import { setModal } from '../actions/modal'
import { onUserLink } from './user'

export const Presentation = styled(YouTube)`
  display: flex;
  flex-grow: 1;
  width: 100%;
  height: 80vh;
  border-radius: var(--surface-border-radius);
  overflow: hidden;

  iframe {
    width: 100%;
    height: 100%;
  }
`

export function onMenu(dispatch, props) {
  const { links } = props

  dispatch(
    setDrawer({
      side: 'left',
      half: true,
      content: <Dash links={links} />
    })
  )
}

export function onNotification(dispatch, props) {
  const { notifications } = props

  dispatch(
    setDrawer({
      icon: 'notification',
      title: 'Уведомления',
      content: <Notifications notifications={notifications} appearance={'clear'} />
    })
  )
}

export function onChat(dispatch, props) {
  const { sender, recipient, queries, mutations } = props

  dispatch(
    setDrawer({
      icon: 'chat',
      title: 'Мессенджер',
      content: (
        <Messenger
          queries={queries}
          mutations={mutations}
          recipient={recipient}
          sender={sender}
          appearance={'clear'}
          onMemberLink={() => onUserLink(dispatch, props)}
          onSubmit={async (form, action, recipient) => {
            try {
              const response = await action({
                variables: {
                  recipient: recipient.email,
                  text: form.text
                }
              })
              return response.data.sendMessage
            } catch (err) {
              console.log(err)
            }
          }}
        />
      )
    })
  )
}

export function onFileLink(dispatch) {
  dispatch(
    setModal([
      {
        path: '/',
        title: 'Информация о файле',
        component: () => (
          <Column style={{ padding: '15px' }}>
            <Text>
              Bechtel отвечал за проектирование, закупки, строительство, запуск и ввод в
              эксплуатацию нового газового парогазового комплекса мощностью 700 мегаватт в Огайо,
              США и ввод в эксплуатацию нового газового парогазового комплекса мощностью 700
              мегаватт в Огайо, США
            </Text>
            <Button>Скачать файл</Button>
          </Column>
        )
      }
    ])
  )
}

export function onIndexVideoLink(dispatch, props) {
  const { video } = props

  dispatch(
    setModal(
      [
        {
          path: '/',
          title: '',
          component: () => <Presentation videoId={video} />
        }
      ],
      'l'
    )
  )
}
