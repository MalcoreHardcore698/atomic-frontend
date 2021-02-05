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
import {
  onProjectCreate,
  onProjectEdit,
  onProjectDelete,
  onProjectLink,
  onProjectScreenshot
} from '../../store/helpers/project'
import { setDocuments } from '../../store/actions/documents'
import { getLabelCategory } from '../../atomic-ui/utils/functions'
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
          options: store?.categories.map((category) => ({
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
          companies: store.companies,
          categories: store.categories,
          statuses: store.statuses,
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
                companies: store.companies,
                categories: store.categories,
                statuses: store.statuses,
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
              <ProjectCard
                key={project.id}
                project={project}
                onChecked={() => {}}
                onScreenshotClick={(_, key) =>
                  recall(onProjectScreenshot, {
                    screenshots: [project.preview, ...project.screenshots],
                    key
                  })()
                }
                onLink={recall(onProjectLink, { id: project.id, user })}
                onAboutMore={recall(onUserAboutMore, { user: project })}
                onDelete={recall(onProjectDelete, {
                  id: project.id,
                  project,
                  auth: user,
                  mutation: queries.DELETE_PROJECT
                })}
                onEdit={recall(onProjectEdit, {
                  id: project.id,
                  companies: store.companies,
                  categories: store.categories,
                  statuses: store.statuses,
                  canEditStatus,
                  mutation: queries.UPDATE_PROJECT,
                  query: queries.GET_USERS,
                  onCompanyInputChange: mutate(queries.GET_USERS, { account: 'ENTITY' })
                })}
                preview
              />
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
  let companies = []
  let categories = []
  let statuses = []

  try {
    const response = await client.query({
      query: queries.GET_META_DASHBOARD_PROJECTS,
      variables: {
        offset: 0,
        limit: LIMIT,
        account: ['ENTITY']
      }
    })

    if (response && response.data) {
      projects = response.data.getProjects
      companies = response.data.getUsers
      categories = response.data.getCategories
      statuses = response.data.getPostStatus
    }
  } catch (err) {
    console.log(err)
  }

  return {
    props: {
      store: {
        projects,
        companies,
        categories,
        statuses
      }
    }
  }
}

export default Projects
