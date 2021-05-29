import React from 'react'
import { useRouter } from 'next/router'

import ContentLayout from '../layouts/content'
import ProjectSuit from '../components/ProjectSuit'
import { useProject } from '../hooks/useProject'
import { projects as filterConfig } from '../components/FilterBar/config'
import { COMMON_START_OFFSET, COMMON_LOAD_LIMIT } from '../constants'
import queries from '../graphql/queries'

const TITLE = 'Проекты'

const Projects = () => {
  const router = useRouter()
  const methods = useProject()

  return (
    <ContentLayout
      title={TITLE}
      getType={'getProjects'}
      limit={COMMON_LOAD_LIMIT}
      filterConfig={filterConfig}
      emptyMessage={'Проектов нет'}
      getQuery={queries.GET_PROJECTS}
      startOffsett={COMMON_START_OFFSET}
      variables={{ category: router.query?.c, status: 'PUBLISHED' }}
      render={(document) => <ProjectSuit {...methods} project={document} />}
    />
  )
}

export default Projects
