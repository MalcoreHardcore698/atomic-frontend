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
import {setItem} from "../store/actions/snacks";

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
  const getPerfectID = (parameter) => {
    try {
      if (parameter) {
        return b64DecodeUnicode(parameter)
      }
    }
    catch {
      dispatch(
       setItem({
         type: 'error',
         message: 'Неправильный URL'
       })
      )
    }
    return null
  }

  if (query.article) {
    const id = getPerfectID(query.article)
    if (id) recall(onArticleLink, { id })()
  }

  if (query.category) {
    const id = getPerfectID(query.category)
    if (id) recall(onCategoryLink, { id })()
  }

  if (query.project) {
    const id = getPerfectID(query.project)
    if (id) {
      const owned = user?.projects?.find((candidate) => candidate.id === id)
      recall(onProjectLink, getProjectLinkProps(id, user, owned, dispatch, mutate, recall))()
    }
  }

  if (query.role) {
    const id = getPerfectID(query.role)
    if (id) recall(onRoleLink, { id })()
  }

  if (query.user) {
    const id = getPerfectID(query.user)
    if (id) {
      const owned = id === user?.name
      recall(onUserLink, getUserLinkProps(id, user, owned))()
    }
  }

  if (query.ticket) {
    const id = getPerfectID(query.ticket)
    if (id) recall(onTicketLink, { id, auth: user?.email })()
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
