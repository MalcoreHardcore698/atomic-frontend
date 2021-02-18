import React from 'react'
import styled from 'styled-components'

import Row from '../../atomic-ui/components/Row'
import Difinition from '../../atomic-ui/components/Difinition'
import Button from '../../atomic-ui/components/Button'
import Icon from '../../atomic-ui/components/Icon'
import Text from '../../atomic-ui/components/Text'
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
  ticket,
  loading,
  onLink,
  onFinish,
  onReport,
  onAttach,
  onSubmit,
  ...props
}) => {
  if (loading) {
    return (
      <Loader>
        <Spinner />
      </Loader>
    )
  }

  if (!ticket) {
    return (
      <Alert appearance={'error'} style={{ width: '100%', textAlign: 'center' }}>
        Упс! Не удалось загрузить информацию об обращении
      </Alert>
    )
  }

  return (
    <Wrap {...props}>
      <Header>
        <Difinition label={'Автор обращения'} text={ticket.author?.name || '-'} />

        <Row>
          {ticket.status !== 'CLOSED' && (
            <Button onClick={onFinish} disabled={!ticket}>
              Закрыть обращение
            </Button>
          )}
          <Button onClick={onReport} kind={'icon'} appearance={'red'} disabled={!ticket}>
            <Icon icon={'flag'} stroke={'white'} />
          </Button>
        </Row>
      </Header>

      <Messages>
        <Meta>
          <Text>Тема: {ticket.title}</Text>
          <Text>{ticket.createdAt}</Text>
        </Meta>

        {ticket && ticket.messages && ticket.messages.length > 0 ? (
          ticket.messages.map((message) => (
            <Message
              key={message.id}
              avatar={message.user?.avatar?.path}
              side={message.side}
              name={message.name}
              text={message.text}
              time={message.time}
              onLink={onLink}
            />
          ))
        ) : (
          <Empty>Выберите обращение</Empty>
        )}
      </Messages>

      <Row>
        <Button kind={'icon'} onSubmit={onAttach}>
          <Icon icon={'attach'} stroke={'white'} />
        </Button>
        <Input placeholder={'Отправьте сообщенение...'} appearance={'ghost'} />
        <Button kind={'icon'} onSubmit={onSubmit}>
          <Icon icon={'send'} stroke={'white'} />
        </Button>
      </Row>
    </Wrap>
  )
}

export default TicketChat
