import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { useSelector } from 'react-redux'

import Alert from '../../atomic-ui/components/Alert'
import Spinner from '../../atomic-ui/components/Spinner'

import { Loader } from '../Styled'
import LazyLoad from '../LazyLoad'
import UserCard from '../UserCard'
import { useHelper } from '../../hooks/useHelper'
import { onChat } from '../../store/helpers'
import { onUserAboutMore, onUserLink, onUserMembers } from '../../store/helpers/user'
import queries from '../../graphql/queries'

export const UserList = ({ variables, initialList }) => {
  const recall = useHelper()
  const user = useSelector((state) => state.user)
  const [users, setUsers] = useState(initialList || [])

  const { data, loading, error } = initialList
    ? { data: null, loading: false, error: false }
    : useQuery(queries.GET_USERS, { variables })

  useEffect(() => {
    if (!loading && data) {
      setUsers(data.getUsers)
    }
  }, [data, loading])

  useEffect(() => {
    if (initialList?.length > 0) setUsers(initialList)
  }, [initialList])

  return (!loading && data) || users.length > 0 ? (
    users.map((author) => {
      const owned = author.name === user?.name

      return (
        <LazyLoad key={author.email}>
          <UserCard
            user={author}
            owned={owned}
            onChat={
              user.email &&
              recall(onChat, {
                email: author.email,
                auth: user?.email,
                queries: {
                  userChats: queries.GET_USER_CHATS,
                  chat: queries.GET_CHAT
                },
                mutations: {
                  addUserChat: queries.ADD_USER_CHAT,
                  sendMessage: queries.SEND_MESSAGE
                }
              })
            }
            onLink={recall(onUserLink, {
              id: author.email,
              auth: user?.email,
              owned,
              queries: {
                userChats: queries.GET_USER_CHATS,
                chat: queries.GET_CHAT
              },
              mutations: {
                addUserChat: queries.ADD_USER_CHAT,
                sendMessage: queries.SEND_MESSAGE
              }
            })}
            onAboutMore={recall(onUserAboutMore, { user: author })}
            onMembers={recall(onUserMembers, { id: author?.email, auth: user?.email })}
            onCompanyLink={recall(onUserLink, {
              id: author.company?.email,
              auth: user?.email,
              queries: {
                userChats: queries.GET_USER_CHATS,
                chat: queries.GET_CHAT
              },
              mutations: {
                addUserChat: queries.ADD_USER_CHAT,
                sendMessage: queries.SEND_MESSAGE
              }
            })}
          />
        </LazyLoad>
      )
    })
  ) : error ? (
    <Alert appearance={'error'} style={{ width: '100%', textAlign: 'center' }}>
      Не удалось загрузить данные
    </Alert>
  ) : loading ? (
    <Loader>
      <Spinner />
    </Loader>
  ) : (
    <Alert style={{ width: '100%', textAlign: 'center' }}>Авторов нет</Alert>
  )
}

export default UserList
