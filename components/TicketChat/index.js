import React, { useState, useRef } from 'react'
import styled from 'styled-components'

import Row from '../../atomic-ui/components/Row'
import Difinition from '../../atomic-ui/components/Difinition'
import Button from '../../atomic-ui/components/Button'
import Icon from '../../atomic-ui/components/Icon'
import Text from '../../atomic-ui/components/Text'
import DateText from '../../atomic-ui/components/DateText'
import Message from '../../atomic-ui/components/Message'
import Input from '../../atomic-ui/components/Input'
import Column from '../../atomic-ui/components/Column'
import Spinner from '../../atomic-ui/components/Spinner'
import Alert from '../../atomic-ui/components/Alert'

import { Loader } from '../Styled'

export const Wrap = styled(Column)`
  width: 100%;
  flex-grow: 1;
`

export const Header = styled(Row)`
  justify-content: space-between;
  width: 100%;
`

export const Messages = styled(Column)`
  position: relative;
  background: #fbfbfb;
  border-radius: var(--surface-border-radius);
  padding: var(--default-gap);
  padding-top: 55px;
  flex-grow: 1;
`

export const Meta = styled(Row)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  justify-content: space-between;
  padding: 8px var(--default-gap);
  border-radius: var(--surface-border-radius) var(--surface-border-radius) 0 0;
  background: var(--ghost-color-background);

  time {
    font-size: var(--font-size-m);
    font-weight: var(--font-weight-regular);
    color: var(--default-color-text);
  }
`

export const AuthAlert = styled(Alert)`
  width: 100%;
  text-align: center;
`

export const Empty = styled(Text)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-grow: 1;
`

export const TicketChat = ({
  auth,
  ticket,
  loading,
  onLink,
  onFinish,
  // onReport,
  onAttach,
  onSubmit,
  ...props
}) => {
  const [message, setMessage] = useState('')
  const messageRef = useRef(null)
  const isAccess = ticket?.counsellor?.email === auth

  return (
    <Wrap {...props}>
      <Header>
        <Difinition
          label={'Автор обращения'}
          text={ticket?.author?.name && !loading ? ticket.author.name : '-'}
        />

        <Row>
          {ticket?.status !== 'CLOSED' && (
            <Button onClick={onFinish} disabled={!isAccess || loading || !ticket}>
              Закрыть обращение
            </Button>
          )}
          {/*<Button*/}
          {/*  onClick={onReport}*/}
          {/*  kind={'icon'}*/}
          {/*  appearance={'red'}*/}
          {/*  disabled={!isAccess || loading || !ticket}>*/}
          {/*  <Icon icon={'flag'} stroke={'white'} />*/}
          {/*</Button>*/}
        </Row>
      </Header>

      <Messages>
        <Meta>
          <Text>Тема: {ticket?.title && !loading ? ticket.title : '-'}</Text>
          {ticket?.createdAt && !loading ? (
            <DateText
              text={ticket.createdAt}
              options={{
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
              }}
            />
          ) : (
            <Text>-</Text>
          )}
        </Meta>

        {!loading && ticket?.messages?.length > 0 ? (
          (ticket?.messages || []).map((message) => (
            <Message
              key={message.id}
              avatar={message.user?.avatar?.path}
              side={message.user?.email === ticket.counsellor?.email ? 'owner' : 'observer'}
              name={message.user?.name}
              text={message.text}
              time={message.createdAt !== message.updatedAt ? message.updatedAt : message.createdAt}
              tails={{
                default: '/parts/tail.svg',
                owner: '/parts/tail-owner.svg'
              }}
              onLink={() => onLink(message.user)}
            />
          ))
        ) : loading ? (
          <Loader>
            <Spinner />
          </Loader>
        ) : !ticket ? (
          <Alert appearance={'error'} style={{ width: '100%', textAlign: 'center' }}>
            Упс! Не удалось загрузить информацию об обращении
          </Alert>
        ) : (
          <Empty>Выберите обращение</Empty>
        )}
      </Messages>

      {isAccess ? (
        <Row>
          <Button kind={'icon'} disabled={loading || !ticket} onSubmit={onAttach}>
            <Icon icon={'attach'} stroke={'white'} />
          </Button>
          <Input
            ref={messageRef}
            placeholder={'Отправьте сообщенение...'}
            disabled={loading || !ticket}
            appearance={'ghost'}
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
            disabled={loading || !ticket}
            onClick={() => {
              onSubmit(message)
              messageRef.current.value = ''
            }}>
            <Icon icon={'send'} stroke={'white'} />
          </Button>
        </Row>
      ) : loading ? (
        <Loader>
          <Spinner />
        </Loader>
      ) : (
        <AuthAlert>
          Для ответа на это обращение, авторизуйтесь под пользователем {ticket?.counsellor?.name} (
          {ticket?.counsellor?.email})
        </AuthAlert>
      )}
    </Wrap>
  )
}

export default TicketChat
