import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  onUserAboutMore,
  onUserLink,
  onUserMembers,
  onUserEdit,
  onUserCreate
} from '../store/helpers/user'
import { useHelper } from './useHelper'
import { useMutate } from './useMutate'
import queries from '../graphql/queries'

export const useUser = ({ isManage } = {}) => {
  const recall = useHelper()
  const mutate = useMutate()
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const canEditAccount = useMemo(() => user?.account !== 'ADMIN', [user])

  const canEditRole = useMemo(() => user && user?.role?.name === 'ADMIN', [user])

  const hasOwned = useCallback((author) => author?.name === user?.name, [user])

  const onLink = useCallback(
    (author) => {
      const owned = author?.name === user?.name
      recall(onUserLink, {
        id: author?.email,
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
    },
    [user, dispatch, mutate, recall]
  )

  const onChat = useCallback(
    (author) => {
      recall(onChat, {
        sender: user?.email,
        recipient: author.email,
        queries: {
          userChats: queries.GET_USER_CHATS,
          chat: queries.GET_CHAT
        },
        mutations: {
          addUserChat: queries.ADD_USER_CHAT,
          sendMessage: queries.SEND_MESSAGE
        }
      })()
    },
    [user, mutate, dispatch]
  )

  const onMembers = useCallback(
    (author) => {
      recall(onUserMembers, { id: author?.email, auth: user?.email })()
    },
    [user, recall]
  )

  const onAboutMore = useCallback(
    (author) => {
      recall(onUserAboutMore, { user: author })()
    },
    [recall]
  )

  const onCompanyLink = useCallback(
    (author) => {
      recall(onUserLink, {
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
      })()
    },
    [user, recall]
  )

  const onEdit = (author, onAfter) =>
    recall(onUserEdit, {
      user: author.email,
      auth: user?.email,
      canEditAccount,
      canEditRole,
      mutations: {
        del: queries.DELETE_USER,
        update: queries.UPDATE_USER
      },
      onAfter
    })()

  const onCreate = (onAfter) =>
    recall(onUserCreate, {
      canEditRole,
      mutation: queries.CREATE_USER,
      onAfter
    })()

  return {
    user,
    hasOwned,
    onLink,
    onChat,
    onAboutMore,
    onMembers: user?.members?.length > 0 && onMembers,
    onCompanyLink: user?.company && onCompanyLink,
    onEdit: isManage && onEdit,
    onCreate: isManage && onCreate
  }
}
