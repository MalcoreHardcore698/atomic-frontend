import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLazyQuery } from '@apollo/react-hooks'

import Spinner from '../atomic-ui/components/Spinner'
import { getLabelCategory } from '../atomic-ui/utils/functions'

import ContentLayout from '../layouts/content'
import ProjectList from '../components/ProjectList'
import { FixedLoader, GridAside as Container } from '../components/Styled'
import queries from '../graphql/queries'

const TITLE = 'Проекты'
const START_OFFSET = 6

const Projects = () => {
  const router = useRouter()

  const [load, { data, loading }] = useLazyQuery(queries.GET_META_PROJECTS)

  useEffect(() => {
    const page = router.query?.page
    const category = router.query?.c
    if (category) {
      load({
        variables: {
          offset: page ? page * START_OFFSET : 0,
          limit: START_OFFSET,
          status: 'PUBLISHED',
          category
        }
      })
    }
  }, [router])

  if (loading) {
    return (
      <FixedLoader>
        <Spinner />
      </FixedLoader>
    )
  }

  return (
    <ContentLayout
      title={TITLE}
      filters={[
        { type: 'DATEPICKER' },
        {
          type: 'SELECT',
          options: data?.getCategories.map((category) => ({
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
      query={queries.GET_PROJECTS}
      variables={{ category: router.query?.c, status: 'PUBLISHED' }}
      store={{ documents: data?.getProjects }}>
      {({ documents }) => (
        <Container>
          <ProjectList initialList={documents} layout />
        </Container>
      )}
    </ContentLayout>
  )
}

export default Projects
