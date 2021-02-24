import React, { useRef, useState } from 'react'
import styled from 'styled-components'

import Row from '../../atomic-ui/components/Row'
import Column from '../../atomic-ui/components/Column'
import Message from '../../atomic-ui/components/Message'
import Input from '../../atomic-ui/components/Input'
import Button from '../../atomic-ui/components/Button'
import Icon from '../../atomic-ui/components/Icon'
import Text from '../../atomic-ui/components/Text'
import Spinner from '../../atomic-ui/components/Spinner'
import { Loader } from '../Styled'
import Alert from '../../atomic-ui/components/Alert'

export const Wrap = styled(Column)`
  width: 100%;
  flex-grow: 1;
`

export const Messages = styled(Column)`
  background: #fbfbfb;
  border-radius: var(--surface-border-radius);
  padding: var(--default-gap);
  flex-grow: 1;
`

export const Empty = styled(Text)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-grow: 1;
`

export const MessengerChat = ({
  chat,
  error,
  loading,
  appearance,
  className,
  onLink,
  onAttach,
  onSubmit,
  ...props
}) => {
  const [message, setMessage] = useState('')
  const messageRef = useRef(null)

  return (
    <Wrap {...props} className={className}>
      <Messages>
        {!loading && chat?.messages?.length > 0 ? (
          chat.messages.map((item) => (
            <Message
              key={item.id}
              avatar={item.user?.avatar?.path}
              side={item.side}
              name={item.name}
              text={item.text}
              time={item.createdAt}
              tails={{
                default: '/parts/tail.svg',
                owner: '/parts/tail-owner.svg'
              }}
              onLink={onLink}
            />
          ))
        ) : loading ? (
          <Loader>
            <Spinner />
          </Loader>
        ) : error ? (
          <Alert appearance={'error'} style={{ width: '100%', textAlign: 'center' }}>
            Упс! Не удалось загрузить информацию об чате
          </Alert>
        ) : (
          <Empty>{chat?.messages?.length === 0 ? 'История сообщений пуста' : 'Выберите чат'}</Empty>
        )}
      </Messages>

      {chat && (
        <Row>
          <Button kind={'icon'} disabled={loading || !chat} onSubmit={onAttach}>
            <Icon icon={'attach'} stroke={'white'} />
          </Button>
          <Input
            name={'text'}
            ref={messageRef}
            placeholder={'Отправьте сообщенение...'}
            disabled={loading || !chat}
            appearance={appearance}
            onChange={(e) => setMessage(e?.target?.value || '')}
            onKeyDown={(e) => {
              // Pressed ENTER
              if (e.keyCode === 13) {
                onSubmit(message)
                messageRef.current.value = ''
              }
            }}
            tabIndex={-1}
          />
          <Button
            kind={'icon'}
            disabled={loading || !chat}
            onClick={() => {
              onSubmit(message)
              messageRef.current.value = ''
            }}>
            <Icon icon={'send'} stroke={'white'} />
          </Button>
        </Row>
      )}
    </Wrap>
  )
}

export default MessengerChat
