import React from 'react'
import styled from 'styled-components'

import Row from '../../atomic-ui/components/Row'
import Column from '../../atomic-ui/components/Column'
import Message from '../../atomic-ui/components/Message'
import Input from '../../atomic-ui/components/Input'
import Button from '../../atomic-ui/components/Button'
import Icon from '../../atomic-ui/components/Icon'
import Text from '../../atomic-ui/components/Text'
import Spinner from '../../atomic-ui/components/Spinner'

import Form from '../Form'

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

export const Chat = ({ mutation, messages, appearance, className, onLink, onSubmit }) => {
  return (
    <Form className={className} appearance={appearance} mutation={mutation} onSubmit={onSubmit}>
      {({ register, loading }) => (
        <React.Fragment>
          <Messages>
            {messages &&
              messages.map((message) => (
                <Message
                  key={message.id}
                  avatar={message.user?.avatar?.path}
                  side={message.side}
                  name={message.name}
                  text={message.text}
                  time={message.createdAt}
                  tails={{
                    default: '/parts/tail.svg',
                    owner: '/parts/tail-owner.svg'
                  }}
                  onLink={onLink}
                />
              ))}
            {!messages && !loading && <Empty>Выберите чат</Empty>}
            {loading && <Spinner />}
          </Messages>

          {messages && (
            <Row>
              <Input
                name={'text'}
                placeholder={'Отправьте сообщенение...'}
                inputRef={register({ required: true })}
                loading={loading.toString()}
                appearance={appearance}
                required
              />
              <Button kind={'icon'} type={'submit'}>
                <Icon icon={'send'} stroke={'white'} />
              </Button>
            </Row>
          )}
        </React.Fragment>
      )}
    </Form>
  )
}

export default Chat
