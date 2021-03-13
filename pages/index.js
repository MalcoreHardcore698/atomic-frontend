import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import Title from '../atomic-ui/components/Title'

import ProjectList from '../components/ProjectList'
import ArticleList from '../components/ArticleList'
import UserList from '../components/UserList'
import { useHelper } from '../hooks/useHelper'
import { useMutate } from '../hooks/useMutate'
import ContentLayout from '../layouts/content'
import { updateUser } from '../store/actions/user'
import { onProjectLink, onProjectAdd, onProjectScreenshot } from '../store/helpers/project'
import { onUserAboutMore, onUserLink } from '../store/helpers/user'
import queries from '../graphql/queries'
import { initializeApollo } from '../apollo'

const TITLE = 'Атомик'
const START_OFFSET = 13
const LIMIT = 5

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
  grid-gap: var(--default-gap);
  margin-bottom: 80px;

  @media only screen and (max-width: 1196px) {
    grid-template-columns: 1fr;
  }
`

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
  const recall = useHelper()
  const mutate = useMutate()
  const [search, setSearch] = useState(null)
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const scaffold = useMemo(
    () => ({
      title: store.scaffold.title,
      background: store.scaffold.background.path,
      primary: store.scaffold.primary,
      residues: store.scaffold.residues,
      onLink: (project, owned) =>
        recall(onProjectLink, {
          id: project.id,
          auth: user?.email,
          project,
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
              project,
              folders: user?.folders,
              mutations: {
                addProject: queries.ADD_USER_PROJECT,
                createFolder: queries.ADD_USER_FOLDER
              }
            }),
          owned
        })(),
      onLike:
        user.email &&
        ((project) =>
          mutate(queries.LIKE_PROJECT, { id: project.id }, (response) =>
            dispatch(updateUser(response.data.likeProject))
          )()),
      onAdd:
        user.email &&
        ((project) =>
          recall(onProjectAdd, {
            id: project.id,
            project,
            folders: user?.folders,
            mutations: {
              addProject: queries.ADD_USER_PROJECT,
              createFolder: queries.ADD_USER_FOLDER
            }
          })()),
      onSearch: (value) => setSearch(value),
      onAboutMore: (project) => recall(onUserAboutMore, { user: project }),
      onCompanyLink: (project) => recall(onUserLink, { id: project.company?.email, auth: user })(),
      onScreenshotClick: (project, key) =>
        recall(onProjectScreenshot, {
          screenshots: [project.preview, ...project.screenshots],
          key
        })()
    }),
    []
  )

  return (
    <ContentLayout
      title={TITLE}
      limit={LIMIT}
      research={search}
      scaffold={scaffold}
      startOffset={START_OFFSET}
      query={queries.GET_PROJECTS}
      variables={{ status: 'PUBLISHED' }}
      initialize>
      {({ documents }) => (
        <Container>
          <ProjectList initialList={documents} layout />

          <Aside>
            <Title tag={'h4'}>Авторы</Title>
            <UserList variables={{ offset: 0, limit: 3 }} />

            <Title tag={'h4'}>Новости</Title>
            <ArticleList variables={{ offset: 0, limit: 2 }} />
          </Aside>
        </Container>
      )}
    </ContentLayout>
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
