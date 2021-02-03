import React, { useState, useMemo } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import Column from '../atomic-ui/components/Column'
import Alert from '../atomic-ui/components/Alert'
import DatePicker from '../atomic-ui/components/DatePicker'
import Select from '../atomic-ui/components/Select'

import { initializeApollo } from '../apollo'
import { useHelper } from '../hooks/useHelper'
import { useMutate } from '../hooks/useMutate'
import DefaultLayout from '../layouts/default'
import ProjectCard from '../components/ProjectCard'
import FilterBar from '../components/FilterBar'
import SearchBar from '../components/SearchBar'
import { updateUser } from '../store/actions/user'
import { onProjectLink, onProjectAdd, onProjectScreenshot } from '../store/helpers/project'
import { onUserLink } from '../store/helpers/user'
import queries from '../graphql/queries'
import { filters } from '../__mock__'

const TITLE = 'Проекты'

const Wrap = styled(Column)`
  margin-top: 120px;
  margin-bottom: 80px;

  @media only screen and (max-width: 480px) {
    margin-top: 0;
  }
`

const Container = styled.aside`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(442px, 1fr));
  grid-gap: var(--default-gap);

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(285px, 1fr));
  }
`

const Projects = ({ store, categories }) => {
  const recall = useHelper()
  const mutate = useMutate()
  const router = useRouter()
  const { user, documents } = useSelector((state) => ({
    user: state.user,
    documents: state.documents
  }))
  const dispatch = useDispatch()
  const [date, onChangeDate] = useState()
  const [select, onChangeSelect] = useState()
  const [visibleFilter, setVisibleFilter] = useState(false)

  const projects = useMemo(
    () =>
      (documents || store.projects).filter(
        (project) => project.category.id === router.query.category
      ),
    [documents, store]
  )

  return (
    <DefaultLayout title={TITLE}>
      <Wrap>
        <SearchBar onChangeFilter={() => setVisibleFilter(!visibleFilter)} />

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
          options={filters}
        />

        <Container>
          {projects.length > 0 ? (
            projects.map((project) => {
              const owned = user?.projects?.find((candidate) => candidate.id === project.id)

              if (project.category.id !== router.query.category) return null

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
        </Container>
      </Wrap>
    </DefaultLayout>
  )
}

export async function getServerSideProps() {
  const client = initializeApollo()

  let projects = []
  let categories = []

  try {
    const response = await client.query({
      query: queries.GET_META_PROJECTS,
      variables: {
        status: 'PUBLISHED'
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
      store: { projects },
      categories
    }
  }
}

export default Projects
