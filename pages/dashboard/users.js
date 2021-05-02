import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import template from '../../atomic-ui/components/Table/templates/user'

import UserCard from '../../components/UserCard'
import ContentLayout from '../../layouts/dashboard/content'
import { onUserCreate, onUserEdit, onUserLink, onUserAboutMore } from '../../store/helpers/user'
import { setDocuments } from '../../store/actions/documents'
import { useHelper } from '../../hooks/useHelper'
import { onChat } from '../../store/helpers'
import queries from '../../graphql/queries'

const TITLE = 'Пользователи'
const START_OFFSET = 0
const LIMIT = 12

const Users = () => {
  const recall = useHelper()
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const canEditRole = useMemo(() => user && user.role.name === 'ADMIN', [user])

  useEffect(() => {
    dispatch(setDocuments(null))
  }, [])

  return (
    <ContentLayout
      title={TITLE}
      limit={LIMIT}
      icon={'user2'}
      field={'email'}
      template={template}
      startOffset={START_OFFSET}
      emptyMessage={'Пользователей нет'}
      buttonCreateText={'Создать пользователя'}
      getType={'getUsers'}
      getQuery={queries.GET_USERS}
      deleteQuery={queries.DELETE_USER}
      deleteEntityMultiText={'пользователи'}
      deleteEntitySingleText={'пользователь'}
      onLink={(author) => {
        const owned = author.name === user.name
        recall(onUserLink, {
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
        })
      }}
      onEdit={(author) =>
        recall(onUserEdit, {
          user: author.email,
          auth: user?.email,
          canEditRole,
          mutations: {
            update: queries.UPDATE_USER,
            del: queries.DELETE_USER,
            changePassword: queries.UPDATE_USER
          }
        })()
      }
      onCreate={recall(onUserCreate, {
        canEditRole,
        mutation: queries.CREATE_USER
      })}
      render={(document) => (
        <UserCard
          user={document}
          onChat={
            user.email &&
            recall(onChat, {
              id: document.email,
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
          onAboutMore={recall(onUserAboutMore, { user: document })}
          preview
        />
      )}
    />
  )
}

export default Users
