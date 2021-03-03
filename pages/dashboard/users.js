import React, { useState, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Grid from '../../atomic-ui/components/Grid'
import Table from '../../atomic-ui/components/Table'
import templates from '../../atomic-ui/components/Table/templates'

import { initializeApollo } from '../../apollo'
import { useHelper } from '../../hooks/useHelper'
import ContentLayout from '../../layouts/content'
import UserCard from '../../components/UserCard'
import LazyLoad from '../../components/LazyLoad'
import FadeLoad from '../../components/FadeLoad'
import {
  onUserCreate,
  onUserEdit,
  onUserDelete,
  onUserLink,
  onUserAboutMore
} from '../../store/helpers/user'
import { setDocuments } from '../../store/actions/documents'
import { onChat } from '../../store/helpers'
import queries from '../../graphql/queries'

const TITLE = 'Пользователи'
const START_OFFSET = 12
const LIMIT = 12

const Users = ({ store }) => {
  const recall = useHelper()
  const { user, documents } = useSelector((state) => ({
    user: state.user,
    documents: state.documents
  }))
  const dispatch = useDispatch()
  const [displayMethod, onChangeDisplayMethod] = useState('grid')
  const canEditRole = useMemo(() => user && user.role.name === 'ADMIN', [user])
  const roles = useMemo(() => store.roles, [store])

  useEffect(() => {
    dispatch(setDocuments(null))
  }, [])

  return (
    <ContentLayout
      title={TITLE}
      filters={[
        { type: 'DATEPICKER', placeholder: 'Дата регистарции' },
        {
          type: 'SELECT',
          placeholder: 'Компания',
          options: []
        }
      ]}
      options={[
        { label: 'Компания', value: 'company' },
        { label: 'Участники', value: 'members' },
        { label: 'Дата регистарции', value: 'createdAt' }
      ]}
      handle={{
        icon: 'user2',
        buttonCreateText: 'Создать пользователя',
        onCreate: recall(onUserCreate, {
          roles,
          canEditRole,
          mutation: queries.CREATE_USER
        }),
        onChangeDisplayMethod: (item) => onChangeDisplayMethod(item.value)
      }}
      limit={LIMIT}
      startOffset={START_OFFSET}
      bottomScrollOffset={0}
      query={queries.GET_USERS}
      store={{ documents: documents || store.users }}
      dashboard>
      {({ documents }) =>
        displayMethod === 'list' ? (
          <Table
            data={documents}
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
        ) : (
          <Grid>
            {documents.map((author) => {
              const owned = author.name === user.name
              return (
                <FadeLoad key={author.email}>
                  <LazyLoad>
                    <UserCard
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
                      onAboutMore={recall(onUserAboutMore, { user: author })}
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
                  </LazyLoad>
                </FadeLoad>
              )
            })}
          </Grid>
        )
      }
    </ContentLayout>
  )
}

export async function getServerSideProps() {
  const client = initializeApollo()

  let users = []
  let roles = []

  try {
    const response = await client.query({
      query: queries.GET_META_DASHBOARD_USERS,
      variables: {
        offset: 0,
        limit: LIMIT
      }
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
      store: {
        users,
        roles
      }
    }
  }
}

export default Users
