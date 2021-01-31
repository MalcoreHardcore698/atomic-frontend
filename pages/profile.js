import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useRouter } from 'next/router'
import styled, { css } from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { useLazyQuery } from '@apollo/react-hooks'

import Row from '../atomic-ui/components/Row'
import Column from '../atomic-ui/components/Column'
import Switch from '../atomic-ui/components/Switch'
import Alert from '../atomic-ui/components/Alert'
import DatePicker from '../atomic-ui/components/DatePicker'
import Select from '../atomic-ui/components/Select'
import Button from '../atomic-ui/components/Button'
import Spinner from '../atomic-ui/components/Spinner'
import Tooltip from '../atomic-ui/components/Tooltip'
import Text, { Wrap as WrapText } from '../atomic-ui/components/Text'
import Icon from '../atomic-ui/components/Icon'
import templates from '../atomic-ui/components/Table/templates'

import { initializeApollo } from '../apollo'
import { useHelper } from '../hooks/useHelper'
import { useMutate } from '../hooks/useMutate'
import DefaultLayout from '../layouts/default'
import UserBar from '../components/UserBar'
import FilterBar from '../components/FilterBar'
import SearchBar from '../components/SearchBar'
import ProjectCard from '../components/ProjectCard'
import { setFolder } from '../store/actions/root'
import { updateUser } from '../store/actions/user'
import { onProjectLink, onProjectAdd, onProjectScreenshot } from '../store/helpers/project'
import {
  onUserLink,
  onUserClientEdit,
  onUserAboutMore,
  onUserFolderAdd,
  onUserFolderDelete
} from '../store/helpers/user'
import queries from '../graphql/queries'
import { profilePages } from '../__mock__'

const TITLE = 'Профиль'

const Container = styled.aside`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(442px, 1fr));
  grid-gap: var(--default-gap);

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(285px, 1fr));
  }
`

const ContainerInProgress = styled(Row)`
  grid-gap: var(--default-gap);

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const CreateButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 10px;

  span {
    white-space: nowrap;
  }
`

const Orginizer = styled(Column)`
  width: 265px;
`

const RemoveTooltip = styled(Tooltip)`
  position: absolute;
  right: 5px;
  display: none;
`

const ListItem = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--input-height-s);
  cursor: pointer;
  transition: all 150ms ease;

  ${WrapText} {
    display: flex;
    align-items: center;
    border-radius: var(--surface-border-radius);
    background: var(--ghost-color-background);
    width: 100%;
    height: var(--input-height-s);
    padding: 0 10px;
    transition: all 150ms ease;
  }

  &:hover {
    ${RemoveTooltip} {
      display: flex;
    }

    ${WrapText} {
      color: black;
    }
  }

  ${({ active }) =>
    active &&
    css`
      ${WrapText} {
        color: var(--default-color-accent);
        background: var(--default-color-accent-dim);
      }

      &:hover {
        ${WrapText} {
          color: var(--default-color-accent);
        }
      }
    `}
`

const AlertEmpty = styled(Alert)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const Loader = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80px;
`

const Projects = ({ projects }) => {
  const recall = useHelper()
  const mutate = useMutate()
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  if (projects && projects.length === 0) {
    return <Alert style={{ width: '100%', textAlign: 'center' }}>Проектов нет</Alert>
  }

  return (
    <Container>
      {projects &&
        projects.length > 0 &&
        projects.map((project) => (
          <ProjectCard
            owned
            key={project.id}
            project={project}
            liked={!!(user?.likedProjects || []).find((item) => item.id === project.id)}
            onLike={mutate(queries.LIKE_PROJECT, { id: project.id }, (response) =>
              dispatch(updateUser(response.data.likeProject))
            )}
            onLink={recall(onProjectLink, {
              id: project.id,
              auth: user?.email,
              project,
              owned: true
            })}
            onAdd={recall(onProjectAdd, { id: project.id, project })}
            onCompanyLink={
              project.company &&
              recall(onUserLink, { id: project.company?.email, auth: user?.email })
            }
            onScreenshotClick={(_, key) =>
              recall(onProjectScreenshot, {
                screenshots: [project.preview, ...project.screenshots],
                key
              })()
            }
          />
        ))}
    </Container>
  )
}

const InProgress = () => {
  const recall = useHelper()
  const { user, folder } = useSelector((state) => ({
    user: state.user,
    folder: state.root.folder
  }))
  const dispatch = useDispatch()

  const [getProjects, { data, loading, refetch }] = useLazyQuery(queries.GET_PROJECTS_BY_IDS)

  const onFolderClick = async (item) => {
    if (refetch) await refetch({ projects: item.projects.map((project) => project.id) })
    dispatch(setFolder(item))
  }

  useEffect(() => {
    if (!folder && user?.folders && user.folders.length > 0) {
      const defaultFolder = user.folders[0]

      if (defaultFolder.projects.length > 0) {
        getProjects({
          variables: { projects: defaultFolder.projects.map((project) => project.id) }
        })
      }

      dispatch(setFolder(defaultFolder))
    }
  }, [folder, user, dispatch, getProjects])

  return (
    <ContainerInProgress>
      <Orginizer>
        {user.folders && user.folders.length > 0 ? (
          <Column>
            {user.folders.map((item) => (
              <ListItem
                key={item.id}
                active={folder && item.id === folder.id}
                onClick={() => onFolderClick(item)}>
                <Text>{item.name}</Text>

                <RemoveTooltip place={'left'} text={'Удалить'}>
                  <Button
                    type={'button'}
                    kind={'icon'}
                    size={'xs'}
                    disabled={loading}
                    onClick={recall(onUserFolderDelete, {
                      id: item.id,
                      mutation: queries.DELETE_USER_FOLDER
                    })}>
                    <Icon size={'xs'} icon={'delete'} stroke={'white'} />
                  </Button>
                </RemoveTooltip>
              </ListItem>
            ))}
          </Column>
        ) : (
          <Alert style={{ width: '100%', textAlign: 'center' }}>Папок нет</Alert>
        )}
        <CreateButton onClick={recall(onUserFolderAdd, { mutation: queries.ADD_USER_FOLDER })}>
          <span>Новая папка</span>
          <Icon icon={'add'} stroke={'white'} />
        </CreateButton>
      </Orginizer>

      {loading && <Spinner />}

      {data &&
        data.getProjectsByIds.length > 0 &&
        data.getProjectsByIds.map((project) => (
          <ProjectCard
            owned
            key={project.id}
            project={project}
            onLink={recall(onProjectLink, {
              id: project.id,
              project,
              auth: user?.email,
              owned: true
            })}
            onAdd={recall(onProjectAdd, { project })}
            onCompanyLink={
              project.company &&
              recall(onUserLink, { id: project.company?.email, auth: user?.email })
            }
            onScreenshotClick={(_, key) =>
              recall(onProjectScreenshot, {
                screenshots: [project.preview, ...project.screenshots],
                key
              })()
            }
          />
        ))}

      {((data && data.getProjectsByIds.length === 0) || !data) && (
        <AlertEmpty>Выберите папку с проектами</AlertEmpty>
      )}
    </ContainerInProgress>
  )
}

const Profile = ({ categories }) => {
  const recall = useHelper()
  const router = useRouter()
  const user = useSelector((state) => state.user)
  const [date, onChangeDate] = useState()
  const [select, onChangeSelect] = useState()
  const [currentPage, setCurrentPage] = useState(profilePages[0])
  const [visibleFilter, setVisibleFilter] = useState(false)
  const isAdmin = useMemo(() => user?.account === 'ADMIN', [user])

  const renderContentPage = useCallback(() => {
    switch (currentPage.value) {
      case '/projects':
        return <Projects projects={user.projects} />
      case '/liked':
        return <Projects projects={user.likedProjects} />
      default:
        return <InProgress />
    }
  }, [currentPage])

  useEffect(() => {
    if (!user.authenticated) {
      router.push('/auth')
    }
  }, [user])

  if (!user.authenticated) {
    return (
      <Loader>
        <Spinner />
      </Loader>
    )
  }

  return (
    <DefaultLayout title={user.authenticated ? user.name || TITLE : 'Авторизация'}>
      <Column>
        <UserBar
          user={user}
          onEdit={recall(onUserClientEdit, {
            user,
            canEditAccount: !isAdmin,
            mutations: {
              update: queries.UPDATE_CLIENT_USER,
              del: queries.DELETE_USER,
              changePassword: queries.UPDATE_CLIENT_USER
            }
          })}
          onAboutMore={recall(onUserAboutMore, { user })}
        />

        <Switch
          defaultValue={currentPage}
          options={profilePages}
          onChange={(item) => setCurrentPage(item)}
          stretch
        />

        <SearchBar onChangeFilter={() => setVisibleFilter(!visibleFilter)} />

        <FilterBar
          isOpen={visibleFilter}
          filters={[
            <DatePicker
              key={'publishedAt'}
              value={date}
              placeholder={'Дата публикации'}
              onChange={onChangeDate}
              withNavigate
            />,
            <Select
              key={'categories'}
              options={categories.map((category) => ({
                value: category.id,
                label: category.name
              }))}
              placeholder={'Раздел'}
              selected={select}
              onChange={(item) => onChangeSelect(item)}
            />
          ]}
          options={templates.project.map((item, index) => ({
            label: item.header,
            value: index
          }))}
        />

        {renderContentPage()}
      </Column>
    </DefaultLayout>
  )
}

export async function getServerSideProps() {
  const client = initializeApollo()

  let categories = []

  try {
    const response = await client.query({
      query: queries.GET_META_PROFILE
    })

    if (response && response.data) {
      categories = response.data.getCategories
    }
  } catch (err) {
    console.log(err)
  }

  return {
    props: {
      categories
    }
  }
}

export default Profile
