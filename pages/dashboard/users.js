import React, { useState, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Grid from '../../atomic-ui/components/Grid'
import Alert from '../../atomic-ui/components/Alert'
import DatePicker from '../../atomic-ui/components/DatePicker'
import Select from '../../atomic-ui/components/Select'
import Table from '../../atomic-ui/components/Table'
import templates from '../../atomic-ui/components/Table/templates'

import { initializeApollo } from '../../apollo'
import { useHelper } from '../../hooks/useHelper'
import DashboardLayout from '../../layouts/dashboard'
import HandleBar from '../../components/HandleBar'
import FilterBar from '../../components/FilterBar'
import UserCard from '../../components/ArticleCard'
import { onUserCreate, onUserEdit, onUserDelete, onUserLink } from '../../store/helpers/user'
import { setDocuments } from '../../store/actions/documents'
import { onChat } from '../../store/helpers'
import queries from '../../graphql/queries'
import { categories } from '../../__mock__'

const TITLE = 'Пользователи'

const Users = ({ store }) => {
  const recall = useHelper()
  const { user, documents } = useSelector((state) => ({
    user: state.user,
    documents: state.documents
  }))
  const dispatch = useDispatch()
  const [date, onChangeDate] = useState()
  const [select, onChangeSelect] = useState()
  const [visibleFilter, setVisibleFilter] = useState(false)
  const [displayMethod, onChangeDisplayMethod] = useState('grid')
  const canEditRole = useMemo(() => user && user.role.name === 'ADMIN', [user])

  const users = useMemo(() => documents || store.users, [documents, store])
  const roles = useMemo(() => store.roles, [store])

  useEffect(() => {
    dispatch(setDocuments(null))
  }, [])

  return (
    <DashboardLayout title={TITLE}>
      <HandleBar
        icon={'user2'}
        title={TITLE}
        buttonCreateText={'Создать пользователя'}
        onCreate={recall(onUserCreate, {
          roles,
          canEditRole,
          mutation: queries.CREATE_USER
        })}
        onChangeVisibleFilter={() => setVisibleFilter(!visibleFilter)}
        onChangeDisplayMethod={(item) => onChangeDisplayMethod(item.value)}
      />

      <FilterBar
        isOpen={visibleFilter}
        filters={[
          <DatePicker
            key={0}
            value={date}
            placeholder={'Дата публикации'}
            onChange={onChangeDate}
            withNavigate
          />,
          <Select
            key={1}
            options={categories}
            placeholder={'Раздел'}
            selected={select}
            onChange={(item) => onChangeSelect(item)}
          />
        ]}
        options={
          displayMethod === 'list'
            ? []
            : templates.user.map((item, index) => ({
                label: item.header,
                value: index
              }))
        }
      />

      {users.length === 0 && (
        <Alert style={{ width: '100%', textAlign: 'center' }}>Пользователей нет</Alert>
      )}

      {displayMethod === 'list' && (
        <Table
          data={users}
          template={templates.user}
          onChecked={() => {}}
          onClick={(author) => {
            const owned = author.name === user.name

            return recall(onUserLink, {
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
            })()
          }}
          onDelete={(author) =>
            recall(onUserDelete, {
              id: author.email,
              user: author,
              auth: user?.email,
              mutation: queries.DELETE_USER
            })()
          }
          onEdit={(author) =>
            recall(onUserEdit, {
              user: author.email,
              auth: user?.email,
              roles,
              canEditRole,
              mutations: {
                update: queries.UPDATE_USER,
                del: queries.DELETE_USER,
                changePassword: queries.UPDATE_USER
              }
            })()
          }
          style={{ overflowX: 'auto', width: 'calc(100vw - 290px)' }}
        />
      )}

      {displayMethod === 'grid' && (
        <Grid>
          {(users || []).map((author) => {
            const owned = author.name === user.name

            return (
              <UserCard
                key={author.email}
                user={author}
                onChecked={() => {}}
                onChat={
                  user.email &&
                  recall(onChat, {
                    id: author.email,
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
                onDelete={recall(onUserDelete, {
                  id: author.email,
                  user: author,
                  auth: user?.email,
                  mutation: queries.DELETE_USER
                })}
                onEdit={recall(onUserEdit, {
                  user: author.email,
                  auth: user?.email,
                  roles,
                  canEditRole,
                  mutations: {
                    update: queries.UPDATE_USER,
                    del: queries.DELETE_USER,
                    changePassword: queries.UPDATE_USER
                  }
                })}
                preview
              />
            )
          })}
        </Grid>
      )}
    </DashboardLayout>
  )
}

export async function getServerSideProps() {
  const client = initializeApollo()

  let users = []
  let roles = []

  try {
    const response = await client.query({
      query: queries.GET_META_DASHBOARD_USERS
    })

    if (response && response.data) {
      users = response.data.getUsers
      roles = response.data.getRoles
    }
  } catch (err) {
    console.log(err)
  }

  return {
    props: {
      store: { users, roles }
    }
  }
}

export default Users
