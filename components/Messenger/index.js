import React, { useEffect } from 'react'
import styled, { css } from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { useQuery, useLazyQuery, useMutation } from '@apollo/react-hooks'

import Row from '../../atomic-ui/components/Row'
import Column from '../../atomic-ui/components/Column'
import Member from '../../atomic-ui/components/Member'
import Alert from '../../atomic-ui/components/Alert'
import Spinner from '../../atomic-ui/components/Spinner'

import Search from '../SearchBar'
import { Wrap as WrapForm } from '../Form'
import ChatForm from '../FormChat'
import { setCurrentChat } from '../../store/actions/root'

export const Wrap = styled(Row)`
  height: 100%;
  flex-grow: 1;

  ${WrapForm} {
    width: 100%;
    padding: 0;
  }

  @media only screen and (max-width: 568px) {
    flex-direction: column;
  }

  ${({ appearance }) =>
    appearance === 'default' &&
    css`
      padding: var(--default-gap);
      background: var(--surface-background);
      border: var(--surface-border);
      border-radius: var(--surface-border-radius);
      box-shadow: var(--surface-shadow);
    `}

  ${({ appearance }) =>
    appearance === 'ghost' &&
    css`
      padding: 0;
      border: none;
      background: none;
      border-radius: 0;
      box-shadow: none;
    `}

  ${({ appearance }) =>
    appearance === 'clear' &&
    css`
      padding: 0;
      border: none;
      background: none;
      border-radius: 0;
      box-shadow: none;
    `}
`

export const Chats = styled(Column)`
  grid-gap: 0;
  width: 320px;

  @media only screen and (max-width: 568px) {
    width: 100%;
  }
`

export const Chat = styled(Member)`
  margin: 10px 0 0 0;
  padding: 10px;
  border-radius: var(--surface-border-radius);

  ${({ active }) =>
    active &&
    css`
      background: var(--input-background);
    `}
`

export const Messenger = ({
  queries,
  mutations,
  appearance,
  recipient,
  sender,
  onSubmit,
  onMemberLink,
  ...props
}) => {
  if (!mutations) return null

  const currentChat = useSelector((state) => state.root.chat)
  const dispatch = useDispatch()

  const { data: userChats, loading: userChatsLoading, refetch: getUserChats } = useQuery(
    queries.userChats
  )

  const [
    getChatLazy,
    { data: chat, loading: chatLoading, refetch: getChat, networkStatus }
  ] = useLazyQuery(queries.chat)

  const [addUserChat] = useMutation(mutations.addUserChat)

  useEffect(() => {
    addUserChat({
      variables: { recipient: recipient.email }
    }).then(() => getUserChats())
  }, [addUserChat])

  useEffect(() => {
    if (!currentChat && !userChatsLoading && userChats && userChats.getUserChats) {
      getChatLazy({
        variables: {
          id: userChats.getUserChats.find((userChat) =>
            userChat.chat.members.find((member) => member.name === recipient.name)
          )?.chat.id
        }
      })
    }
  }, [userChats, userChatsLoading])

  useEffect(() => {
    if (!chatLoading && chat && chat.getChat && networkStatus === 7) {
      dispatch(setCurrentChat(chat.getChat))
    }
  }, [chat, chatLoading, networkStatus])

  return (
    <Wrap {...props} appearance={appearance}>
      <Chats>
        <Search appearance={'ghost'} />
        {userChatsLoading && !userChats && <Spinner />}
        {userChats && userChats.getUserChats?.length > 0 ? (
          userChats.getUserChats.map((chat) => (
            <Chat
              key={chat.chat?.id}
              name={chat.chat?.members.filter((member) => member.name !== sender.name)[0].name}
              avatar={
                chat.chat?.members.filter((member) => member.name !== sender.name)[0].avatar
                  ?.path || '/images/avatar-default.png'
              }
              budge={
                (chat.chat?.messages[chat.chat?.messages?.length - 1]?.user.name !== sender.name &&
                  chat.chat?.messages?.reduce(
                    (acc, item) =>
                      acc + (item.type === 'UNREADED' && item.user.name !== sender.name ? 1 : 0),
                    0
                  )) ||
                null
              }
              position={chat.chat?.messages[chat.chat.messages.length - 1]?.text || null}
              onClick={() =>
                chat.chat &&
                getChat &&
                ((currentChat && chat.chat.id !== currentChat.id) || !currentChat) &&
                getChat({ id: chat.chat.id })
              }
              active={currentChat && currentChat.id === chat.chat?.id}
            />
          ))
        ) : (
          <Alert style={{ marginTop: 15 }}>Активные чаты отсутствуют</Alert>
        )}
      </Chats>
      <ChatForm
        mutation={mutations.sendMessage}
        messages={
          currentChat &&
          currentChat.messages.map((message) => ({
            ...message,
            side: sender.name === message.user.name ? 'owner' : 'observer'
          }))
        }
        appearance={'ghost'}
        loading={chatLoading}
        onLink={onMemberLink}
        onSubmit={async (form, action) => {
          await onSubmit(
            form,
            action,
            currentChat.members.find((member) => sender.name !== member.name)
          )
          await getChat({ id: currentChat.id })
        }}
      />
    </Wrap>
  )
}

Messenger.defaultProps = {
  appearance: 'default'
}

export default Messenger
