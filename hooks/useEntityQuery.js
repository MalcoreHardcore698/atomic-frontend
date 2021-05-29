import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

import { b64DecodeUnicode, b64EncodeUnicode } from '../atomic-ui/utils/functions'

import { useHelper } from './useHelper'
import { useMutate } from './useMutate'
import { onArticleLink } from '../store/helpers/article'
import { onCategoryLink } from '../store/helpers/category'
import { onProjectAdd, onProjectLink } from '../store/helpers/project'
import { onRoleLink } from '../store/helpers/role'
import { onUserLink } from '../store/helpers/user'
import { onTicketLink } from '../store/helpers/ticket'
import { updateUser } from '../store/actions/user'
import queries from '../graphql/queries'

export const getProjectLinkProps = (id, user, owned, dispatch, mutate, recall, callback) => ({
  id,
  auth: user?.email,
  liked: !!(user?.likedProjects || []).find((item) => item.id === id),
  onLike:
    user.email &&
    mutate(queries.LIKE_PROJECT, { id }, (response) =>
      dispatch(updateUser(response.data.likeProject))
    ),
  onAdd:
    user.email &&
    recall(onProjectAdd, {
      id,
      folders: user?.folders,
      mutations: {
        addProject: queries.ADD_USER_PROJECT,
        createFolder: queries.ADD_USER_FOLDER
      },
      callback
    }),
  owned
})

export const getUserLinkProps = (id, user, owned) => ({
  id,
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

export const invokeRecall = (recall, mutate, user, dispatch, query) => {
  if (query.article) {
    const id = b64DecodeUnicode(query.article)
    recall(onArticleLink, { id })()
  }

  if (query.category) {
    const id = b64DecodeUnicode(query.category)
    recall(onCategoryLink, { id })()
  }

  if (query.project) {
    const id = b64DecodeUnicode(query.project)
    const owned = user?.projects?.find((candidate) => candidate.id === id)
    recall(onProjectLink, getProjectLinkProps(id, user, owned, dispatch, mutate, recall))()
  }

  if (query.role) {
    const id = b64DecodeUnicode(query.role)
    recall(onRoleLink, { id })()
  }

  if (query.user) {
    const id = b64DecodeUnicode(query.user)
    const owned = id === user?.name
    recall(onUserLink, getUserLinkProps(id, user, owned))()
  }

  if (query.ticket) {
    const id = b64DecodeUnicode(query.ticket)
    recall(onTicketLink, { id, auth: user?.email })()
  }
}

export const useEntityQuery = () => {
  const recall = useHelper()
  const mutate = useMutate()
  const router = useRouter()

  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const setQuery = async (str, entity, callback) => {
    await router.push(
      {
        pathname: router.pathname,
        query: {
          [entity]: b64EncodeUnicode(str)
        }
      },
      undefined,
      { shallow: true }
    )
    if (callback) callback(str)
  }

  const useDetectQuery = () => {
    useEffect(() => {
      const query = router.query
      if (Object.entries(query).length === 1) {
        invokeRecall(recall, mutate, user, dispatch, query)
      }
    }, [router])
  }

  return { setQuery, useDetectQuery }
}

export default useEntityQuery
