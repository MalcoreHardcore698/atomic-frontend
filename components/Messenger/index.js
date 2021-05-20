import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { useQuery, useLazyQuery, useMutation } from '@apollo/react-hooks'

import Row from '../../atomic-ui/components/Row'
import Column from '../../atomic-ui/components/Column'
import Member, { Content as MemberContent } from '../../atomic-ui/components/Member'
import Alert from '../../atomic-ui/components/Alert'
import Search from '../../atomic-ui/components/Search'
import Spinner from '../../atomic-ui/components/Spinner'
import Divider from '../../atomic-ui/components/Divider'

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

  ${({ noPaddingForPosition }) =>
    noPaddingForPosition &&
    css`
      ${MemberContent} {
        p {
          padding-right: 0;
        }
      }
    `}

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

export const ChatOne = ({
  sender,
  chat,
  currentChat,
  setLoading,
  setCurrentChat,
  getChat,
  getTicket,
  refetchChat,
  refetchTicket
}) => {
  return (
    <Chat
      name={
        chat.chat?.members.filter((member) => member.email !== sender?.email)[0].name || chat.title
      }
      avatar={
        chat.chat?.members.filter((member) => member.email !== sender?.email)[0].avatar?.path ||
        (chat.chat ? '/images/avatar-default.png' : null)
      }
      budge={
        (chat.chat?.messages && getUnreadedMessages(chat.chat?.messages, sender?.email)) || null
      }
      position={
        (chat.chat?.messages && getLastMessage(chat.chat?.messages, sender?.email)) ||
        chat.category?.name ||
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
      noPaddingForPosition={!chat.chat}
    />
  )
}

export const Messenger = ({ appearance, recipient, sender, onAttach, onMemberLink, ...props }) => {
  const [currentChat, setCurrentChat] = useState(null)
  const [filteredUserChats, setFilteredUserChats] = useState(null)
  const [filteredTicketChats, setFilteredTicketChats] = useState(null)
  const [ticketChats, setTicketChats] = useState([])
  const [userChats, setUserChats] = useState([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')

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

  const [readMessages, { loading: loadingReadMessages }] = useMutation(queries.READ_MESSAGES)

  const [
    addUserChat,
    { data: dataAddUserChat, loading: loadingAddUserChat }
  ] = useMutation(queries.ADD_USER_CHAT)

  const onSubmit = (value) => {
    if (value) {
      setFilteredUserChats(
        userChats.filter((userChat) =>
          (userChat?.chat?.members || []).find(
            (member) =>
              member?.name.toUpperCase().includes(value.toUpperCase()) ||
              member?.email.toUpperCase().includes(value.toUpperCase())
          )
        )
      )
      setFilteredTicketChats(
        ticketChats.filter(
          (ticketChat) =>
            ticketChat?.title.toUpperCase().includes(value.toUpperCase()) ||
            ticketChat?.category?.name.toUpperCase().includes(value.toUpperCase())
        )
      )
    } else {
      setFilteredUserChats(null)
      setFilteredTicketChats(null)
    }
    setSearch(value)
  }

  useEffect(() => {
    if (recipient) {
      addUserChat({
        variables: {
          recipient: recipient?.email
        }
      })
    }
  }, [recipient, addUserChat])

  useEffect(() => {
    if (!loadingAddUserChat && dataAddUserChat) {
      getUserChats()
      getUserTickets()
    }
  }, [loadingAddUserChat, dataAddUserChat, getUserChats, getUserTickets])

  useEffect(() => {
    if (recipient && !currentChat && !loadingUserChats && dataUserChats?.getUserChats) {
      const id = dataUserChats.getUserChats.find((userChat) =>
        userChat.chat.members.find((member) => member.email === recipient?.email)
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
        messages: getExtendMessages(dataSendMessage.sendMessage, sender?.email)
      }))
    }
  }, [sender, dataSendMessage, loadingSendMessage])

  useEffect(() => {
    if (!loadingUserSendMessage && dataUserSendMessage) {
      setCurrentChat((prev) => ({
        ...prev,
        messages: getExtendMessages(dataUserSendMessage.sendTicketMessage, sender?.email)
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
    const unreadedMessages = getUnreadedMessages(currentChat?.messages ?? [], sender)
    if (currentChat && unreadedMessages > 0) {
      readMessages({
        variables: {
          id: currentChat.messages
            .filter((message) => message.user?.email !== sender?.email)
            .map((message) => message.id)
        }
      })
    }
  }, [sender, currentChat, readMessages])

  return (
    <Wrap {...props} key={loadingReadMessages} appearance={appearance}>
      <Chats>
        <ChatsSearch appearance={'ghost'} onSubmit={onSubmit} />

        {!loadingChat &&
        !loadingTicket &&
        !loadingUserChats &&
        !loadingTicketChats &&
        !loadingSendMessage &&
        !loadingAddUserChat &&
        !loadingUserSendMessage &&
        (userChats.length > 0 || ticketChats.length > 0) ? (
          <React.Fragment>
            {search &&
              filteredUserChats &&
              filteredTicketChats &&
              filteredUserChats.length === 0 &&
              filteredTicketChats.length === 0 && <Alert>Ничего не найдено</Alert>}

            {((search && filteredUserChats) || (!search && userChats) || []).map((userChat) => (
              <ChatOne
                key={userChat.chat?.id}
                chat={userChat}
                sender={sender}
                currentChat={currentChat}
                setLoading={setLoading}
                setCurrentChat={setCurrentChat}
                getChat={getChat}
                getTicket={getTicket}
                refetchChat={refetchChat}
                refetchTicket={refetchTicket}
              />
            ))}

            {(filteredUserChats || (userChats.length > 0 && !filteredUserChats)) && <Divider />}

            {((search && filteredTicketChats) || (!search && ticketChats) || []).map((ticketChat) => (
              <ChatOne
                key={ticketChat.id}
                chat={ticketChat}
                sender={sender}
                currentChat={currentChat}
                setLoading={setLoading}
                setCurrentChat={setCurrentChat}
                getChat={getChat}
                getTicket={getTicket}
                refetchChat={refetchChat}
                refetchTicket={refetchTicket}
              />
            ))}
          </React.Fragment>
        ) : loadingChat ||
          loadingTicket ||
          loadingUserChats ||
          loadingTicketChats ||
          loadingSendMessage ||
          loadingAddUserChat ||
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
            messages: getExtendMessages(currentChat.messages, sender?.email)
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
          loadingAddUserChat ||
          loadingUserSendMessage
        }
        onLink={onMemberLink}
        onAttach={onAttach}
        onSubmit={(value) => {
          if (currentChat.members) {
            const candidate = currentChat.members.find((member) => member.email !== sender?.email)
            sendMessage({
              variables: {
                sender: sender?.email,
                recipient: recipient?.email || candidate?.email,
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
