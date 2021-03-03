import React from 'react'
import { useRouter } from 'next/router'

import { getLabelCategory } from '../atomic-ui/utils/functions'

import { initializeApollo } from '../apollo'
import ContentLayout from '../layouts/content'
import { GridAside as Container } from '../components/Styled'
import ProjectList from '../components/ProjectList'
import queries from '../graphql/queries'

const TITLE = 'Проекты'
const START_OFFSET = 6

const Projects = ({ store }) => {
  const router = useRouter()

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
      query={queries.GET_PROJECTS}
      variables={{ category: router.query.category, status: 'PUBLISHED' }}
      store={{ documents: store?.projects }}>
      {({ documents }) => (
        <Container>
          <ProjectList initialList={documents} layout />
        </Container>
      )}
    </ContentLayout>
  )
}

export async function getServerSideProps({ query }) {
  const client = initializeApollo()

  let projects = []
  let categories = []

  try {
    const response = await client.query({
      query: queries.GET_META_PROJECTS,
      variables: {
        offset: 0,
        limit: START_OFFSET,
        status: 'PUBLISHED',
        category: query.category
      }
    })

    if (response && response.data) {
      projects = response.data.getProjects
      categories = response.data.getCategories
    }
  } catch (err) {
    console.log(err)
  }

  return {
    props: {
      store: {
        projects,
        categories
      }
    }
  }
}

export default Projects
