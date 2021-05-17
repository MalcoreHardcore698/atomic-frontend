import React from 'react'
import styled from 'styled-components'

import Title from '../atomic-ui/components/Title'

import ContentLayout from '../layouts/content'
import UserList from '../components/UserList'
import ArticleList from '../components/ArticleList'
import ProjectSuit from '../components/ProjectSuit'
import { useProject } from '../hooks/useProject'
import { initializeApollo } from '../apollo'
import { COMMON_START_OFFSET, INDEX_LOAD_LIMIT } from '../constants'
import queries from '../graphql/queries'

const TITLE = 'Атомик'

const ASIDE_PROPS = {
  limit: 3,
  startOffset: COMMON_START_OFFSET,
  gridOptions: { length: 'auto-fit', percentage: '1fr' },
  withoutSearch: true,
  withoutMore: true
}

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  grid-gap: var(--default-gap);
  width: 394px;

  @media only screen and (max-width: 1196px) {
    width: auto;
  }
`

const Home = ({ store }) => {
  const methods = useProject()

  return (
    <ContentLayout
      title={TITLE}
      store={store}
      getType={'getProjects'}
      limit={INDEX_LOAD_LIMIT}
      emptyMessage={'Проектов нет'}
      getQuery={queries.GET_PROJECTS}
      startOffset={COMMON_START_OFFSET}
      variables={{ status: 'PUBLISHED' }}
      render={(document) => <ProjectSuit {...methods} project={document} />}
      aside={
        <Aside>
          <Title tag={'h4'}>Авторы</Title>
          <UserList {...ASIDE_PROPS} />

          <Title tag={'h4'}>Новости</Title>
          <ArticleList {...ASIDE_PROPS} layout={'column'} />
        </Aside>
      }
    />
  )
}

export async function getServerSideProps() {
  const client = initializeApollo()

  let scaffold = null

  try {
    const response = await client.query({ query: queries.GET_META_SCAFFOLD })

    if (response && response.data) {
      scaffold = response.data.getDashboardSettings?.scaffold
    }
  } catch (err) {
    console.log(err)
  }

  return {
    props: {
      store: {
        scaffold
      }
    }
  }
}

export default Home
