import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { useQuery } from '@apollo/react-hooks'
import { useDispatch, useSelector } from 'react-redux'

import Alert from '../../atomic-ui/components/Alert'
import Spinner from '../../atomic-ui/components/Spinner'

import { Loader } from '../Styled'
import LazyLoad from '../LazyLoad'
import ProjectCard from '../ProjectCard'
import { useHelper } from '../../hooks/useHelper'
import { useMutate } from '../../hooks/useMutate'
import { setUserFolder, updateUser } from '../../store/actions/user'
import { onUserAboutMore, onUserLink } from '../../store/helpers/user'
import {
  onProjectAdd,
  onProjectRemove,
  onProjectLink,
  onProjectScreenshot
} from '../../store/helpers/project'
import queries from '../../graphql/queries'

export const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(442px, 1fr));
  grid-gap: var(--default-gap);
  grid-auto-rows: max-content;

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(285px, 1fr));
  }
`

export const ProjectList = ({
  variables,
  layout,
  eliminable,
  initialList,
  initialRefetch,
  emptyMessage
}) => {
  const recall = useHelper()
  const mutate = useMutate()
  const { user, folder } = useSelector((state) => ({
    user: state.user,
    folder: state.root.folder
  }))
  const [projects, setProjects] = useState(initialList || [])
  const dispatch = useDispatch()

  const { data, loading, error } = initialList
    ? { data: null, loading: false, error: false }
    : useQuery(queries.GET_PROJECTS, { variables })

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
    [user]
  )

  const onRemove = useCallback(
    (project) =>
      recall(onProjectRemove, {
        id: project.id,
        folder,
        mutation: queries.REMOVE_USER_PROJECT,
        callback: () =>
          initialRefetch &&
          initialRefetch(projects.filter((pr) => pr.id !== project.id).map((pr) => pr.id))
      })(),
    [user]
  )

  useEffect(() => {
    if (!loading && data) {
      setProjects(data.getProjects)
    }
  }, [data, loading])

  useEffect(() => {
    if (!loading && initialList?.length > 0) setProjects(initialList)
  }, [loading, initialList])

  return (
    <Wrap>
      {projects.length > 0 ? (
        projects.map((project) => {
          const owned = user?.projects?.find((candidate) => candidate.id === project.id)

          return (
            <LazyLoad key={project.id}>
              <ProjectCard
                project={project}
                eliminable={eliminable}
                layout={layout || 'column'}
                owned={owned}
                added={
                  !!user?.folders?.find(
                    (folder) => !!folder?.projects.find((item) => item === project.id)
                  )
                }
                liked={!!(project.rating || []).find((item) => item.email === user.email)}
                onLink={recall(onProjectLink, {
                  id: project.id,
                  auth: user?.email,
                  added: !!user?.folders?.find(
                    (folder) => !!folder?.projects.find((item) => item === project.id)
                  ),
                  liked: !!(project.rating || []).find((item) => item.email === user.email),
                  onLike:
                    user.email &&
                    mutate(queries.LIKE_PROJECT, { id: project.id }, (response) =>
                      dispatch(updateUser(response.data.likeProject))
                    ),
                  onAdd:
                    user.email &&
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
                    }),
                  owned
                })}
                onLike={
                  user.email &&
                  mutate(queries.LIKE_PROJECT, { id: project.id }, (response) =>
                    dispatch(updateUser(response.data.likeProject))
                  )
                }
                onAdd={user.email && (() => onAdd(project))}
                onRemove={user.email && (() => onRemove(project))}
                onAboutMore={recall(onUserAboutMore, { user: project })}
                onCompanyLink={recall(onUserLink, {
                  id: project.company?.email,
                  auth: user?.email,
                  recipient: project.author,
                  query: queries.GET_USER_CHATS,
                  mutation: queries.SEND_MESSAGE
                })}
                onScreenshotClick={(_, key) =>
                  recall(onProjectScreenshot, {
                    screenshots: [project.preview, ...project.screenshots],
                    key
                  })()
                }
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
        <Alert style={{ width: '100%', textAlign: 'center' }}>{emptyMessage}</Alert>
      )}
    </Wrap>
  )
}

ProjectList.defaultProps = {
  emptyMessage: 'Проектов нет'
}

export default ProjectList
