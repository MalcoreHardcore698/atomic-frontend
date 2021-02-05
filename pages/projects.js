import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getLabelCategory } from '../atomic-ui/utils/functions'

import { initializeApollo } from '../apollo'
import { useHelper } from '../hooks/useHelper'
import { useMutate } from '../hooks/useMutate'
import ProjectCard from '../components/ProjectCard'
import { GridAside as Container } from '../components/Styled'
import { updateUser } from '../store/actions/user'
import { onProjectLink, onProjectAdd, onProjectScreenshot } from '../store/helpers/project'
import { onUserAboutMore, onUserLink } from '../store/helpers/user'
import queries from '../graphql/queries'
import ContentLayout from '../layouts/content'
import { useRouter } from 'next/router'

const TITLE = 'Проекты'
const START_OFFSET = 6

const Projects = ({ store }) => {
  const recall = useHelper()
  const mutate = useMutate()
  const router = useRouter()
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

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
          {documents.map((project) => {
            const owned = user?.projects?.find((candidate) => candidate.id === project.id)

            return (
              <ProjectCard
                key={project.id}
                project={project}
                owned={owned}
                liked={!!(user?.likedProjects || []).find((item) => item.id === project.id)}
                onLink={recall(onProjectLink, { id: project.id, auth: user, owned })}
                onLike={
                  user?.email &&
                  mutate(queries.LIKE_PROJECT, { id: project.id }, (response) =>
                    dispatch(updateUser(response.data.likeProject))
                  )
                }
                onAdd={user?.email && recall(onProjectAdd, { id: project.id })}
                onAboutMore={recall(onUserAboutMore, { user: project })}
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
          })}
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
