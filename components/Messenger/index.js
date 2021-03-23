import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { useQuery, useLazyQuery, useMutation } from '@apollo/react-hooks'

import Row from '../../atomic-ui/components/Row'
import Column from '../../atomic-ui/components/Column'
import Member from '../../atomic-ui/components/Member'
import Alert from '../../atomic-ui/components/Alert'
import Search from '../../atomic-ui/components/Search'
import Spinner from '../../atomic-ui/components/Spinner'

import { Loader } from '../Styled'
import { Wrap as WrapForm } from '../Form'
import MessengerChat from '../MessengerChat'
import queries from '../../graphql/queries'

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

export const ChatsSearch = styled(Search)`
  margin-bottom: 10px;
`

export const Chats = styled(Column)`
  grid-gap: 0;
  width: 320px;

  @media only screen and (max-width: 568px) {
    width: 100%;
  }
`

export const Chat = styled(Member)`
  margin: 0;
  padding: 10px 0;
  border-radius: var(--surface-border-radius);
  transition: all 150ms ease;

  ${({ active }) =>
    active &&
    css`
      background: var(--input-background);
      padding: 10px;
    `}
`

export const getUnreadedMessages = (messages, sender) =>
  (messages || []).reduce(
    (acc, item) => acc + (item.type === 'UNREADED' && item.user?.email !== sender ? 1 : 0),
    0
  )

export const getLastMessage = (messages, sender) => {
  const list = messages || []
  const message = list[list.length - 1]
  if (!message) return ''
  return `${message.user?.email === sender ? 'Вы: ' : ''}${message.text}`
}

export const getExtendMessages = (messages, sender) =>
  messages.map((message) => ({
    ...message,
    side: sender === message.user.email ? 'owner' : 'observer'
  }))

export const Messenger = ({ appearance, recipient, sender, onAttach, onMemberLink, ...props }) => {
  const [currentChat, setCurrentChat] = useState(null)
  const [loading, setLoading] = useState(false)
  const [chats, setChats] = useState([])
  const [userChats, setUserChats] = useState([])
  const [ticketChats, setTicketChats] = useState([])

  const [
    getChat,
    { data: chat, loading: loadingChat, error: errorChat, refetch: refetchChat }
  ] = useLazyQuery(queries.GET_CHAT)
  const [
    getTicket,
    { data: ticket, loading: loadingTicket, error: errorTicket, refetch: refetchTicket }
  ] = useLazyQuery(queries.GET_TICKET)

  const {
    data: dataUserChats,
    loading: loadingUserChats,
    error: errorUserChats,
    refetch: getUserChats
  } = useQuery(queries.GET_USER_CHATS)

  const {
    data: dataTicketChats,
    loading: loadingTicketChats,
    error: errorUserTickets,
    refetch: getUserTickets
  } = useQuery(queries.GET_USER_TICKETS)

  const [
    sendMessage,
    { data: dataSendMessage, loading: loadingSendMessage, error: errorSendMessage }
  ] = useMutation(queries.SEND_MESSAGE)
  const [
    sendTicketMessage,
    { data: dataUserSendMessage, loading: loadingUserSendMessage, error: errorUserSendMessage }
  ] = useMutation(queries.SEND_TICKET_MESSAGE)
  const [addUserChat] = useMutation(queries.ADD_USER_CHAT)

  useEffect(() => {
    if (recipient) {
      addUserChat({
        variables: { recipient }
      }).then(() => {
        getUserChats()
        getUserTickets()
      })
    }
  }, [recipient, addUserChat])

  useEffect(() => {
    if (recipient && !currentChat && !loadingUserChats && dataUserChats?.getUserChats) {
      const id = dataUserChats.getUserChats.find((userChat) =>
        userChat.chat.members.find((member) => member.email === recipient)
      )?.chat.id

      if (id) getChat({ variables: { id } })
    }
  }, [recipient, dataUserChats, loadingUserChats])

  useEffect(() => {
    if (!loadingChat && chat?.getChat) {
      setCurrentChat(chat.getChat)
    }
  }, [chat, loadingChat])

  useEffect(() => {
    if (!loadingTicket && ticket?.getTicket) {
      setCurrentChat(ticket.getTicket)
    }
  }, [ticket, loadingTicket])

  useEffect(() => {
    if (!loadingSendMessage && dataSendMessage) {
      setCurrentChat((prev) => ({
        ...prev,
        messages: getExtendMessages(dataSendMessage.sendMessage, sender)
      }))
    }
  }, [sender, dataSendMessage, loadingSendMessage])

  useEffect(() => {
    if (!loadingUserSendMessage && dataUserSendMessage) {
      setCurrentChat((prev) => ({
        ...prev,
        messages: getExtendMessages(dataUserSendMessage.sendTicketMessage, sender)
      }))
    }
  }, [sender, dataUserSendMessage, loadingUserSendMessage])

  useEffect(() => {
    if (!loadingUserChats && dataUserChats?.getUserChats) {
      setUserChats(dataUserChats.getUserChats)
    }
  }, [dataUserChats, loadingUserChats])

  useEffect(() => {
    if (!loadingTicketChats && dataTicketChats?.getUserTickets) {
      setTicketChats(dataTicketChats.getUserTickets)
    }
  }, [dataTicketChats, loadingTicketChats])

  useEffect(() => {
    setChats(userChats.concat(ticketChats))
  }, [userChats, ticketChats])

  return (
    <Wrap {...props} appearance={appearance}>
      <Chats>
        <ChatsSearch appearance={'ghost'} />
        {!loadingChat &&
        !loadingTicket &&
        !loadingUserChats &&
        !loadingTicketChats &&
        !loadingSendMessage &&
        !loadingUserSendMessage &&
        chats.length > 0 ? (
          chats.map((chat) => (
            <Chat
              key={chat.chat?.id || chat.id}
              name={
                chat.chat?.members.filter((member) => member.email !== sender)[0].name ||
                chat.counsellor?.name
              }
              avatar={
                chat.chat?.members.filter((member) => member.email !== sender)[0].avatar?.path ||
                chat.counsellor?.avatar?.path ||
                '/images/avatar-default.png'
              }
              budge={
                (chat.chat?.messages && getUnreadedMessages(chat.chat?.messages, sender)) ||
                (chat.messages && getUnreadedMessages(chat.messages, sender)) ||
                null
              }
              position={
                (chat.chat?.messages && getLastMessage(chat.chat?.messages, sender)) ||
                (chat.messages && getLastMessage(chat.messages, sender)) ||
                null
              }
              onClick={async () => {
                setLoading(true)
                if (chat.chat?.id) {
                  const variables = { id: chat.chat?.id }
                  if (refetchChat) await refetchChat(variables)
                  else await getChat({ variables })
                  setCurrentChat(chat.chat)
                } else {
                  const variables = { id: chat.id }
                  if (refetchTicket) await refetchTicket(variables)
                  else await getTicket({ variables })
                  setCurrentChat(chat)
                }
                setLoading(false)
              }}
              active={currentChat && currentChat.id === (chat.chat?.id || chat.id)}
            />
          ))
        ) : loadingChat ||
          loadingTicket ||
          loadingUserChats ||
          loadingTicketChats ||
          loadingSendMessage ||
          loadingUserSendMessage ? (
          <Loader>
            <Spinner />
          </Loader>
        ) : (
          <Alert style={{ marginTop: 15 }}>Активные чаты отсутствуют</Alert>
        )}
      </Chats>
      <MessengerChat
        chat={
          currentChat && {
            ...currentChat,
            messages: currentChat.messages.map((message) => ({
              ...message,
              side: sender === message.user.email ? 'owner' : 'observer'
            }))
          }
        }
        appearance={'ghost'}
        error={
          errorChat ||
          errorTicket ||
          errorUserChats ||
          errorUserTickets ||
          errorSendMessage ||
          errorUserSendMessage
        }
        loading={
          loading ||
          loadingTicket ||
          loadingChat ||
          loadingUserChats ||
          loadingTicketChats ||
          loadingSendMessage ||
          loadingUserSendMessage
        }
        onLink={onMemberLink}
        onAttach={onAttach}
        onSubmit={(value) => {
          if (currentChat.members) {
            const candidate = currentChat.members.find((member) => member.email !== sender)
            sendMessage({
              variables: {
                sender,
                recipient: recipient || candidate?.email,
                text: value
              }
            })
          } else {
            sendTicketMessage({
              variables: {
                ticket: currentChat.id,
                recipient: currentChat.author?.email,
                text: value,
                isClient: true
              }
            })
          }
        }}
      />
    </Wrap>
  )
}

Messenger.defaultProps = {
  appearance: 'default'
}

export default Messenger
