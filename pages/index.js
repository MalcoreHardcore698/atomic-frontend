import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import Alert from '../atomic-ui/components/Alert'
import Title from '../atomic-ui/components/Title'

import { initializeApollo } from '../apollo'
import { useHelper } from '../hooks/useHelper'
import { useMutate } from '../hooks/useMutate'
import DefaultLayout from '../layouts/default'
import ProjectCard from '../components/ProjectCard'
import ArticleCard from '../components/ArticleCard'
import UserCard from '../components/UserCard'
import { updateUser } from '../store/actions/user'
import { onProjectLink, onProjectAdd, onProjectScreenshot } from '../store/helpers/project'
import { onArticleLink } from '../store/helpers/article'
import { onUserLink } from '../store/helpers/user'
import { onChat } from '../store/helpers'
import queries from '../graphql/queries'

const TITLE = 'Атомик'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
  grid-gap: var(--default-gap);
  margin-bottom: 80px;

  @media only screen and (max-width: 1196px) {
    grid-template-columns: 1fr;
  }
`

const Projects = styled.aside`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(442px, 1fr));
  grid-gap: var(--default-gap);
  grid-auto-rows: max-content;

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(285px, 1fr));
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
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const { projects, articles, users } = store

  return (
    <DefaultLayout
      title={TITLE}
      scaffold={{
        title: 'Создавай школу будущего с нами',
        background: '/images/main-background.png',
        primary: projects.length > 0 && projects[0],
        residue: projects.length > 4 && projects.slice(1, 3),
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
        onCompanyLink: (project) =>
          recall(onUserLink, { id: project.company?.email, auth: user })(),
        onScreenshotClick: (project, key) =>
          recall(onProjectScreenshot, {
            screenshots: [project.preview, ...project.screenshots],
            key
          })()
      }}>
      <Container>
        <Projects>
          {projects.length > 0 ? (
            projects.map((project) => {
              const owned = user?.projects?.find((candidate) => candidate.id === project.id)

              return (
                <ProjectCard
                  key={project.id}
                  project={project}
                  owned={owned}
                  added={
                    !!user?.folders?.find(
                      (folder) => !!folder?.projects.find((item) => item.id === project.id)
                    )
                  }
                  liked={!!(user?.likedProjects || []).find((item) => item.id === project.id)}
                  onLink={recall(onProjectLink, {
                    id: project.id,
                    auth: user?.email,
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
                  })}
                  onLike={
                    user.email &&
                    mutate(queries.LIKE_PROJECT, { id: project.id }, (response) =>
                      dispatch(updateUser(response.data.likeProject))
                    )
                  }
                  onAdd={
                    user.email &&
                    recall(onProjectAdd, {
                      id: project.id,
                      project,
                      folders: user?.folders,
                      mutations: {
                        addProject: queries.ADD_USER_PROJECT,
                        createFolder: queries.ADD_USER_FOLDER
                      }
                    })
                  }
                  onCompanyLink={recall(onUserLink, {
                    id: project.company?.email,
                    auth: user?.email,
                    recipient: project.author,
                    query: queries.GET_USER_CHATS,
                    mutation: queries.SEND_MESSAGE
                  })}
                  onScreenshotClick={(_, key) =>
                    recall(onProjectScreenshot, {
                      screenshots: [project.preview, ...project.screenshots],
                      key
                    })()
                  }
                />
              )
            })
          ) : (
            <Alert style={{ width: '100%', textAlign: 'center' }}>Проектов нет</Alert>
          )}
        </Projects>

        <Aside>
          <Title tag={'h4'}>Авторы</Title>
          {users.length > 0 ? (
            users.slice(0, 3).map((author) => {
              const owned = author.name === user?.name

              return (
                <UserCard
                  key={author.email}
                  user={author}
                  owned={owned}
                  onChat={
                    user.email &&
                    recall(onChat, {
                      email: author.email,
                      auth: user?.email,
                      queries: {
                        userChats: queries.GET_USER_CHATS,
                        chat: queries.GET_CHAT
                      },
                      mutations: {
                        addUserChat: queries.ADD_USER_CHAT,
                        sendMessage: queries.SEND_MESSAGE
                      }
                    })
                  }
                  onLink={recall(onUserLink, {
                    id: author.email,
                    auth: user?.email,
                    owned,
                    queries: {
                      userChats: queries.GET_USER_CHATS,
                      chat: queries.GET_CHAT
                    },
                    mutations: {
                      addUserChat: queries.ADD_USER_CHAT,
                      sendMessage: queries.SEND_MESSAGE
                    }
                  })}
                  onCompanyLink={recall(onUserLink, {
                    id: author.company?.email,
                    auth: user?.email,
                    queries: {
                      userChats: queries.GET_USER_CHATS,
                      chat: queries.GET_CHAT
                    },
                    mutations: {
                      addUserChat: queries.ADD_USER_CHAT,
                      sendMessage: queries.SEND_MESSAGE
                    }
                  })}
                />
              )
            })
          ) : (
            <Alert style={{ width: '100%', textAlign: 'center' }}>Авторов нет</Alert>
          )}

          <Title tag={'h4'}>Новости</Title>
          {articles.length > 0 ? (
            articles
              .slice(0, 2)
              .map((article) => (
                <ArticleCard
                  key={article.id}
                  layout={'column'}
                  article={article}
                  owned={user?.articles?.find((candidate) => candidate.id === article.id)}
                  onLink={recall(onArticleLink, { id: article.id, auth: user?.email })}
                />
              ))
          ) : (
            <Alert style={{ width: '100%', textAlign: 'center' }}>Новостей нет</Alert>
          )}
        </Aside>
      </Container>
    </DefaultLayout>
  )
}

export const getServerSideProps = async () => {
  const client = initializeApollo()

  let projects = []
  let articles = []
  let users = []

  try {
    const response = await client.query({
      query: queries.GET_META_INDEX,
      variables: {
        status: 'PUBLISHED'
      }
    })

    if (response && response.data) {
      projects = response.data.getProjects
      articles = response.data.getArticles
      users = response.data.getUsers
    }
  } catch (err) {
    console.log(err)
  }

  return {
    props: {
      store: {
        projects,
        articles,
        users
      }
    }
  }
}

export default Home
