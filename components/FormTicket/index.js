import React from 'react'
import styled from 'styled-components'

import Row from '../../atomic-ui/components/Row'
import Column from '../../atomic-ui/components/Column'
import Message from '../../atomic-ui/components/Message'
import Input from '../../atomic-ui/components/Input'
import Button from '../../atomic-ui/components/Button'
import Icon from '../../atomic-ui/components/Icon'
import Text from '../../atomic-ui/components/Text'
import Difinition from '../../atomic-ui/components/Difinition'

export const Wrap = styled(Column)`
  width: 100%;
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
`

export const Ticket = ({
  ticket,
  appearance,
  onFinish,
  onReport,
  onLink,
  onAttach,
  onSubmit,
  ...props
}) => {
  return (
    <Wrap {...props}>
      {ticket && (
        <Header>
          <Difinition label={'Номер обращения'} text={ticket?.token || '-'} />

          <Row>
            <Button onClick={onFinish} disabled={!ticket}>
              Закрыть обращение
            </Button>
            <Button onClick={onReport} kind={'icon'} appearance={'red'} disabled={!ticket}>
              <Icon icon={'flag'} stroke={'white'} />
            </Button>
          </Row>
        </Header>
      )}

      <Messages>
        {ticket && (
          <Meta>
            <Text>Тема: {ticket.title}</Text>
            <Text>{ticket.createdAt}</Text>
          </Meta>
        )}

        {ticket && ticket.messages && ticket.messages.length > 0 ? (
          ticket.messages.map((message) => (
            <Message
              key={message.id}
              avatar={message.avatar}
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
        <Input placeholder={'Отправьте сообщенение...'} appearance={appearance} />
        <Button kind={'icon'} onSubmit={onSubmit}>
          <Icon icon={'send'} stroke={'white'} />
        </Button>
      </Row>
    </Wrap>
  )
}

export default Ticket
