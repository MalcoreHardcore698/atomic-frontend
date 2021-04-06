import React, { useMemo } from 'react'
import { useRouter } from 'next/router'
import styled, { css } from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import Title from '../atomic-ui/components/Title'

import ProjectList from '../components/ProjectList'
import ArticleList from '../components/ArticleList'
import UserList from '../components/UserList'
import { useHelper } from '../hooks/useHelper'
import { useMutate } from '../hooks/useMutate'
import ContentLayout from '../layouts/content'
import { setUserFolder, updateUser } from '../store/actions/user'
import { onProjectLink, onProjectAdd, onProjectScreenshot } from '../store/helpers/project'
import { onUserAboutMore, onUserLink } from '../store/helpers/user'
import queries from '../graphql/queries'
import { initializeApollo } from '../apollo'

const TITLE = 'Атомик'
const START_OFFSET = 0
const LIMIT = 4

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
  grid-gap: var(--default-gap);
  margin-bottom: 80px;

  ${({ isSearch }) =>
    isSearch &&
    css`
      grid-template-columns: 1fr;
    `}

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
  const router = useRouter()
  const recall = useHelper()
  const mutate = useMutate()
  const { user, search } = useSelector((state) => ({
    user: state.user,
    search: state.root.search
  }))
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
          added: !!user?.folders?.find(
            (folder) => !!folder?.projects.find((item) => item === project.id)
          ),
          liked: !!(project.rating || []).find((item) => item.email === user.email),
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
            folders: user?.folders,
            mutations: {
              addProject: queries.ADD_USER_PROJECT,
              createFolder: queries.ADD_USER_FOLDER
            },
            callback: (item) => {
              const result = { ...item, projects: [...item.projects, project.id] }
              dispatch(setUserFolder(result))
            }
          })()),
      onSearch: (value) =>
        router.push(
          {
            pathname: router.pathname,
            query: {
              search: value
            }
          },
          undefined,
          { shallow: true }
        ),
      onAboutMore: (project) => recall(onUserAboutMore, { user: project }),
      onCompanyLink: (project) => recall(onUserLink, { id: project.company?.email, auth: user })(),
      onScreenshotClick: (project, key) =>
        recall(onProjectScreenshot, {
          screenshots: [project.preview, ...project.screenshots],
          key
        })()
    }),
    [user, store, recall, mutate, dispatch]
  )

  return (
    <ContentLayout
      title={TITLE}
      limit={LIMIT}
      scaffold={scaffold}
      startOffset={START_OFFSET}
      query={queries.GET_PROJECTS}
      variables={{ status: 'PUBLISHED' }}
      initialize>
      {({ documents }) => (
        <Container isSearch={search}>
          <ProjectList initialList={documents} layout />

          {!search && (
            <Aside>
              <Title tag={'h4'}>Авторы</Title>
              <UserList variables={{ offset: 0, limit: 1 }} />

              <Title tag={'h4'}>Новости</Title>
              <ArticleList variables={{ offset: 0, limit: 1 }} />
            </Aside>
          )}
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
