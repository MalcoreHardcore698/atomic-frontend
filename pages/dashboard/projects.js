import React, { useState, useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Grid from '../../atomic-ui/components/Grid'
import Alert from '../../atomic-ui/components/Alert'
import DatePicker from '../../atomic-ui/components/DatePicker'
import Select from '../../atomic-ui/components/Select'
import Table from '../../atomic-ui/components/Table'
import templates from '../../atomic-ui/components/Table/templates'

import { initializeApollo } from '../../apollo'
import { useHelper } from '../../hooks/useHelper'
import { useMutate } from '../../hooks/useMutate'
import DashboardLayout from '../../layouts/dashboard'
import HandleBar from '../../components/HandleBar'
import FilterBar from '../../components/FilterBar'
import ProjectCard from '../../components/ProjectCard'
import {
  onProjectCreate,
  onProjectEdit,
  onProjectDelete,
  onProjectLink,
  onProjectScreenshot
} from '../../store/helpers/project'
import { setDocuments } from '../../store/actions/documents'
import queries from '../../graphql/queries'

const TITLE = 'Проекты'

const Projects = ({ store, companies, categories, statuses }) => {
  const recall = useHelper()
  const mutate = useMutate()
  const { user, documents } = useSelector((state) => ({
    user: state.user,
    members: state.root.members,
    files: state.root.files,
    screenshots: state.root.screenshots,
    documents: state.documents
  }))
  const dispatch = useDispatch()
  const [date, onChangeDate] = useState()
  const [select, onChangeSelect] = useState()
  const [visibleFilter, setVisibleFilter] = useState(false)
  const [displayMethod, onChangeDisplayMethod] = useState('grid')
  const canEditStatus = useMemo(() => user && user.role.name === 'ADMIN', [user])

  const projects = useMemo(() => documents || store.projects, [documents, store])

  useEffect(() => {
    dispatch(setDocuments(null))
  }, [])

  return (
    <DashboardLayout title={TITLE}>
      <HandleBar
        icon={'work'}
        title={TITLE}
        buttonCreateText={'Создать проект'}
        onCreate={recall(onProjectCreate, {
          companies,
          categories,
          statuses,
          canEditStatus,
          mutation: queries.CREATE_PROJECT,
          query: queries.GET_USERS
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
            : templates.project.map((item, index) => ({
                label: item.header,
                value: index
              }))
        }
      />

      {projects.length === 0 && (
        <Alert style={{ width: '100%', textAlign: 'center' }}>Проектов нет</Alert>
      )}

      {displayMethod === 'list' && (
        <Table
          data={projects}
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
              companies,
              categories,
              statuses,
              canEditStatus,
              mutation: queries.UPDATE_PROJECT,
              query: queries.GET_USERS,
              onCompanyInputChange: mutate(queries.GET_USERS, { account: 'ENTITY' })
            })()
          }
          style={{ overflowX: 'auto', width: 'calc(100vw - 290px)' }}
        />
      )}

      {displayMethod === 'grid' && (
        <Grid>
          {projects.map((project) => (
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
              onDelete={recall(onProjectDelete, {
                id: project.id,
                project,
                auth: user,
                mutation: queries.DELETE_PROJECT
              })}
              onEdit={recall(onProjectEdit, {
                id: project.id,
                companies,
                categories,
                statuses,
                canEditStatus,
                mutation: queries.UPDATE_PROJECT,
                query: queries.GET_USERS,
                onCompanyInputChange: mutate(queries.GET_USERS, { account: 'ENTITY' })
              })}
              preview
            />
          ))}
        </Grid>
      )}
    </DashboardLayout>
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
      store: { projects },
      companies,
      categories,
      statuses
    }
  }
}

export default Projects
