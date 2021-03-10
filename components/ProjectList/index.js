import React, { useState, useEffect } from 'react'
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
import { updateUser } from '../../store/actions/user'
import { onUserAboutMore, onUserLink } from '../../store/helpers/user'
import { onProjectAdd, onProjectLink, onProjectScreenshot } from '../../store/helpers/project'
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

export const ProjectList = ({ variables, layout, initialList }) => {
  const recall = useHelper()
  const mutate = useMutate()
  const user = useSelector((state) => state.user)
  const [projects, setProjects] = useState(initialList || [])
  const dispatch = useDispatch()

  const { data, loading, error } = initialList
    ? { data: null, loading: false, error: false }
    : useQuery(queries.GET_PROJECTS, { variables })

  useEffect(() => {
    if (!loading && data) {
      setProjects(data.getProjects)
    }
  }, [data, loading])

  useEffect(() => {
    if (initialList?.length > 0) setProjects(initialList)
  }, [initialList])

  return (
    <Wrap>
      {(!loading && data) || projects.length > 0 ? (
        projects.map((project) => {
          const owned = user?.projects?.find((candidate) => candidate.id === project.id)

          return (
            <LazyLoad key={project.id}>
              <ProjectCard
                project={project}
                layout={layout || 'column'}
                owned={owned}
                added={
                  !!user?.folders?.find(
                    (folder) => !!folder?.projects.find((item) => item.id === project.id)
                  )
                }
                liked={!!(user?.likedProjects || []).find((item) => item.id === project.id)}
                onLink={recall(onProjectLink, {
                  id: project.id,
                  auth: user?.email,
                  liked: !!(user?.likedProjects || []).find((item) => item.id === project.id),
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
                onAdd={
                  user.email &&
                  recall(onProjectAdd, {
                    id: project.id,
                    folders: user?.folders,
                    mutations: {
                      addProject: queries.ADD_USER_PROJECT,
                      createFolder: queries.ADD_USER_FOLDER
                    }
                  })
                }
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
        <Alert style={{ width: '100%', textAlign: 'center' }}>Проектов нет</Alert>
      )}
    </Wrap>
  )
}

export default ProjectList
