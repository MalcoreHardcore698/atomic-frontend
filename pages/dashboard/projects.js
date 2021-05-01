import React, { useState, useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Grid from '../../atomic-ui/components/Grid'
import Table from '../../atomic-ui/components/Table'
import templates from '../../atomic-ui/components/Table/templates'

import { initializeApollo } from '../../apollo'
import { useHelper } from '../../hooks/useHelper'
import { useMutate } from '../../hooks/useMutate'
import ContentLayout from '../../layouts/content'
import ProjectCard from '../../components/ProjectCard'
import LazyLoad from '../../components/LazyLoad'
import FadeLoad from '../../components/FadeLoad'
import {
  onProjectCreate,
  onProjectEdit,
  onProjectDelete,
  onProjectLink,
  onProjectAdd,
  onProjectScreenshot
} from '../../store/helpers/project'
import { setDocuments } from '../../store/actions/documents'
import { getLabelCategory } from '../../atomic-ui/utils/functions'
import { setUserFolder, updateUser } from '../../store/actions/user'
import { onUserAboutMore } from '../../store/helpers/user'
import queries from '../../graphql/queries'

const TITLE = 'Проекты'
const START_OFFSET = 12
const LIMIT = 12

const Projects = ({ store }) => {
  const recall = useHelper()
  const mutate = useMutate()
  const { user, documents } = useSelector((state) => ({
    user: state.user,
    documents: state.documents
  }))
  const dispatch = useDispatch()
  const [displayMethod, onChangeDisplayMethod] = useState('grid')
  const canEditStatus = useMemo(() => user && user.role.name === 'ADMIN', [user])

  useEffect(() => {
    dispatch(setDocuments(null))
  }, [])

  return (
    <ContentLayout
      title={TITLE}
      filters={[
        { type: 'DATEPICKER' },
        {
          type: 'SELECT',
          options: [].map((category) => ({
            value: category.id,
            label: getLabelCategory(category.name)
          }))
        }
      ]}
      options={[
        { label: 'Компания', value: 'company' },
        { label: 'Участники', value: 'members' },
        { label: 'Дата публикации', value: 'createdAt' }
      ]}
      handle={{
        icon: 'work',
        buttonCreateText: 'Создать проект',
        onCreate: recall(onProjectCreate, {
          canEditStatus,
          mutation: queries.CREATE_PROJECT,
          query: queries.GET_USERS
        }),
        onChangeDisplayMethod: (item) => onChangeDisplayMethod(item.value)
      }}
      limit={LIMIT}
      startOffset={START_OFFSET}
      bottomScrollOffset={0}
      query={queries.GET_PROJECTS}
      variables={{ status: 'PUBLISHED' }}
      store={{ documents: documents || store.projects }}
      dashboard>
      {({ documents }) =>
        displayMethod === 'list' ? (
          <Table
            data={documents}
            template={templates.project}
            onChecked={() => {}}
            onClick={(project) => recall(onProjectLink, { id: project.id, auth: user })()}
            onDelete={(project) =>
              recall(onProjectDelete, {
                id: project.id,
                project,
                auth: user,
                mutation: queries.DELETE_PROJECT
              })()
            }
            onEdit={(project) =>
              recall(onProjectEdit, {
                id: project.id,
                canEditStatus,
                mutation: queries.UPDATE_PROJECT,
                query: queries.GET_USERS,
                onCompanyInputChange: mutate(queries.GET_USERS, { account: 'ENTITY' })
              })()
            }
            style={{ overflowX: 'auto', width: 'calc(100vw - 290px)' }}
          />
        ) : (
          <Grid>
            {documents.map((project) => (
              <FadeLoad key={project.id}>
                <LazyLoad>
                  <ProjectCard
                    project={project}
                    onChecked={() => {}}
                    onScreenshotClick={(_, key) =>
                      recall(onProjectScreenshot, {
                        screenshots: [project.preview, ...project.screenshots],
                        key
                      })()
                    }
                    onLink={recall(onProjectLink, {
                      id: project.id,
                      auth: user?.email,
                      added: !!user?.folders?.find(
                        (folder) => !!folder?.projects.find((item) => item === project.id)
                      ),
                      liked: !!(project.rating || []).find((item) => item.email === user?.email),
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
                        })
                    })}
                    onAboutMore={recall(onUserAboutMore, { user: project })}
                    onDelete={recall(onProjectDelete, {
                      id: project.id,
                      project,
                      auth: user,
                      mutation: queries.DELETE_PROJECT
                    })}
                    onEdit={recall(onProjectEdit, {
                      id: project.id,
                      canEditStatus,
                      mutation: queries.UPDATE_PROJECT,
                      query: queries.GET_USERS,
                      onCompanyInputChange: mutate(queries.GET_USERS, { account: 'ENTITY' })
                    })}
                    withSocials
                    preview
                  />
                </LazyLoad>
              </FadeLoad>
            ))}
          </Grid>
        )
      }
    </ContentLayout>
  )
}

export async function getServerSideProps() {
  const client = initializeApollo()

  let projects = []

  try {
    const response = await client.query({
      query: queries.GET_PROJECTS,
      variables: {
        offset: 0,
        limit: LIMIT
      }
    })

    if (response && response.data) {
      projects = response.data.getProjects
    }
  } catch (err) {
    console.log(err)
  }

  return {
    props: {
      store: {
        projects
      }
    }
  }
}

export default Projects
