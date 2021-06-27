import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  onProjectAdd,
  onProjectCreate,
  onProjectEdit,
  onProjectLink,
  onProjectRemove,
  onProjectScreenshot
} from '../store/helpers/project'
import { onUserAboutMore, onUserLink } from '../store/helpers/user'
import { setUserFolder, updateUser } from '../store/actions/user'
import { getProjectLinkProps } from './useEntityQuery'
import { useHelper } from './useHelper'
import { useMutate } from './useMutate'
import queries from '../graphql/queries'

export const useProject = ({ isManage } = {}) => {
  const recall = useHelper()
  const mutate = useMutate()
  const { user, folder } = useSelector((state) => ({
    user: state.user,
    folder: state.root.folder
  }))
  const dispatch = useDispatch()

  const canEditStatus = useMemo(() => user && user?.role?.name === 'ADMIN', [user])

  const hasAdded = useCallback(
    (project) =>
      !!user?.folders?.find((folder) => !!folder?.projects.find((item) => item === project.id)),
    [user]
  )

  const hasLiked = useCallback(
    (project) =>
      !!(
        (user.rating || []).find((item) => item.id === project.id) ||
        (project.rating || []).find((item) => item?.email === user?.email)
      ),
    [user]
  )

  const onAdd = useCallback(
    (project) =>
      recall(onProjectAdd, {
        id: project.id,
        folders: user?.folders,
        mutations: {
          addProject: queries.ADD_USER_PROJECT,
          createFolder: queries.ADD_USER_FOLDER
        },
        callback: (item) => {
          const result = { ...item, projects: [...item.projects, project.id] }
          dispatch(setUserFolder(result))
        }
      })(),
    [user, recall, dispatch]
  )

  const onLike = useCallback(
    (project) => {
      if (user?.email) {
        mutate(queries.LIKE_PROJECT, { id: project.id }, (response) =>
          dispatch(
            updateUser({
              rating: response.data.likeProject
            })
          )
        )()
      }
    },
    [user, mutate, dispatch]
  )

  const onLink = useCallback(
    (project) => {
      const owned = user?.projects?.find((candidate) => candidate.id === project.id)
      recall(
        onProjectLink,
        getProjectLinkProps(project.id, user, owned, dispatch, mutate, recall, (item) => {
          const result = { ...item, projects: [...item.projects, project.id] }
          dispatch(setUserFolder(result))
        })
      )()
    },
    [user, dispatch, mutate, recall]
  )

  const onRemove = useCallback(
    (project) =>
      recall(onProjectRemove, {
        id: project.id,
        folder,
        mutation: queries.REMOVE_USER_PROJECT
      })(),
    [user, recall]
  )

  const onAboutMore = useCallback(
    (project) => {
      recall(onUserAboutMore, { user: project })()
    },
    [recall]
  )

  const onCompanyLink = useCallback(
    (project) => {
      recall(onUserLink, {
        id: project.company?.email,
        auth: user?.email,
        recipient: project.author,
        query: queries.GET_USER_CHATS,
        mutation: queries.SEND_MESSAGE
      })()
    },
    [user, recall]
  )

  const onScreenshotClick = useCallback(
    (project, key) => {
      recall(onProjectScreenshot, {
        screenshots: [project.preview, ...project.screenshots],
        key
      })()
    },
    [recall]
  )

  const onEdit = (project, onAfter) =>
    recall(onProjectEdit, {
      id: project.id,
      canEditStatus,
      mutation: queries.UPDATE_PROJECT,
      query: queries.GET_USERS,
      onCompanyInputChange: mutate(queries.GET_USERS, { account: 'ENTITY' }),
      onAfter
    })()

  const onCreate = (onAfter) =>
    recall(onProjectCreate, {
      canEditStatus,
      mutation: queries.CREATE_PROJECT,
      query: queries.GET_USERS,
      onAfter
    })()

  return {
    user,
    hasAdded,
    hasLiked,
    onAdd,
    onLike,
    onLink,
    onRemove,
    onAboutMore,
    onCompanyLink,
    onScreenshotClick,
    onEdit: isManage && onEdit,
    onCreate: isManage && onCreate
  }
}
