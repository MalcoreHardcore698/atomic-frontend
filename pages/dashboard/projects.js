import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import template from '../../atomic-ui/components/Table/templates/project'

import ProjectSuit from '../../components/ProjectSuit'
import ContentLayout from '../../layouts/dashboard/content'
import { setDocuments } from '../../store/actions/documents'
import { useProject } from '../../hooks/useProject'
import { projects as filterConfig } from '../../components/FilterBar/config'
import { COMMON_START_OFFSET, DASHBOARD_LOAD_LIMIT } from '../../constants'
import queries from '../../graphql/queries'

const TITLE = 'Проекты'

const Projects = () => {
  const { onCreate, onEdit, ...methods } = useProject({ isManage: true })
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setDocuments(null))
  }, [])

  return (
    <ContentLayout
      title={TITLE}
      icon={'work'}
      template={template}
      entityType={'project'}
      getType={'getProjects'}
      filterConfig={filterConfig}
      limit={DASHBOARD_LOAD_LIMIT}
      emptyMessage={'Проектов нет'}
      getQuery={queries.GET_PROJECTS}
      buttonCreateText={'Создать проект'}
      deleteEntityMultiText={'проекты'}
      deleteEntitySingleText={'проект'}
      startOffset={COMMON_START_OFFSET}
      deleteQuery={queries.DELETE_PROJECT}
      render={(document) => (
        <ProjectSuit {...methods} project={document} withSocials={false} preview withStatus />
      )}
      onCreate={onCreate}
      onEdit={onEdit}
    />
  )
}

export default Projects
