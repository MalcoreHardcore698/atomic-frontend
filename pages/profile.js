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
import { Wrap as WrapText } from '../atomic-ui/components/Text'
import Icon from '../atomic-ui/components/Icon'
import templates from '../atomic-ui/components/Table/templates'

import { initializeApollo } from '../apollo'
import { useHelper } from '../hooks/useHelper'
import DefaultLayout from '../layouts/default'
import UserBar from '../components/UserBar'
import FilterBar from '../components/FilterBar'
import SearchBar from '../components/SearchBar'
import ProjectList from '../components/ProjectList'
import Difinition from '../atomic-ui/components/Difinition'
import { Loader } from '../components/Styled'
import { setUserFolder } from '../store/actions/user'
import { setFolder } from '../store/actions/root'
import {
  onUserClientEdit,
  onUserAboutMore,
  onUserFolderAdd,
  onUserFolderDelete
} from '../store/helpers/user'
import queries from '../graphql/queries'
import { profilePages } from '../__mock__'

const TITLE = 'Профиль'

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

const Organizer = styled(Column)`
  width: 265px;
  min-width: 265px;
`

const RemoveTooltip = styled(Tooltip)`
  position: absolute;
  right: 8px;
  z-index: var(--z-11);
  display: none;
`

const CentralAlert = styled(Alert)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-grow: 10;
`

const ListItem = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--input-height-s);
  background: var(--ghost-color-background);
  border-radius: var(--surface-border-radius);
  padding: 8px 10px;
  width: 100%;
  height: auto;
  cursor: pointer;
  transition: all 150ms ease;

  ${WrapText}, h4 {
    color: var(--ghost-color-text);
  }

  ${RemoveTooltip} {
    svg path {
      color: var(--ghost-color-text);
    }
  }

  &:hover {
    ${RemoveTooltip} {
      display: flex;

      svg path {
        stroke: black;
      }
    }

    ${WrapText}, h4 {
      color: black;
    }
  }

  ${({ active }) =>
    active &&
    css`
      color: var(--default-color-accent);
      background: var(--default-color-accent-dim);

      ${RemoveTooltip} {
        svg path {
          stroke: var(--default-color-accent) !important;
        }
      }

      ${WrapText}, h4, p {
        color: var(--default-color-accent);
      }

      &:hover {
        ${WrapText}, h4, p {
          color: var(--default-color-accent);
        }
      }
    `}
`

const Projects = ({ variables, projects }) => (
  <ProjectList variables={variables} initialList={projects} layout />
)

const InProgress = () => {
  const recall = useHelper()
  const { user, folder } = useSelector((state) => ({
    user: state.user,
    folder: state.root.folder
  }))
  const dispatch = useDispatch()

  const defaultFolder = useMemo(() => user?.folders[0], [user])
  const [getProjects, { data, loading, refetch }] = useLazyQuery(queries.GET_PROJECTS_BY_IDS)
  const [customLoading, setCustomLoading] = useState(false)

  const onRefetch = async (item, projects) => {
    if (projects && refetch) {
      setCustomLoading(true)

      if (item) {
        const result = { ...item, projects }
        dispatch(setFolder(result))
        dispatch(setUserFolder(result))
      }

      await refetch({ projects })
      setCustomLoading(false)
    }
  }

  const onFolderClick = (item) => onRefetch(item, item.projects)

  useEffect(() => {
    if (defaultFolder) {
      dispatch(setFolder(defaultFolder))
    }
  }, [defaultFolder, dispatch])

  useEffect(() => {
    if (!refetch && !data && defaultFolder) {
      getProjects({
        variables: { projects: defaultFolder.projects }
      })
    }
  }, [data, refetch, defaultFolder, getProjects])

  return (
    <ContainerInProgress>
      <Organizer>
        {user.folders && user.folders.length > 0 ? (
          <Column>
            {user.folders.map((item) => {
              const length = item.projects.length
              const label =
                length === 1 ? 'проект' : length > 1 && length < 5 ? 'проекта' : 'проектов'

              return (
                <ListItem key={item.id} active={folder && item.id === folder.id}>
                  <Difinition
                    text={item.name}
                    label={`${length} ${label}`}
                    onLink={() => onFolderClick(item)}
                    revert
                  />
                  <RemoveTooltip place={'left'} text={'Удалить'}>
                    <Button
                      size={'xs'}
                      kind={'icon'}
                      type={'button'}
                      disabled={loading}
                      appearance={'clear'}
                      onClick={recall(onUserFolderDelete, {
                        id: item.id,
                        mutation: queries.DELETE_USER_FOLDER,
                        callback: () => onFolderClick(defaultFolder)
                      })}>
                      <Icon size={'xs'} icon={'delete'} stroke={'var(--ghost-color-text)'} />
                    </Button>
                  </RemoveTooltip>
                </ListItem>
              )
            })}
          </Column>
        ) : (
          <Alert style={{ width: '100%', textAlign: 'center' }}>Папок нет</Alert>
        )}
        <CreateButton onClick={recall(onUserFolderAdd, { mutation: queries.ADD_USER_FOLDER })}>
          <span>Новая папка</span>
          <Icon icon={'add'} stroke={'white'} />
        </CreateButton>
      </Organizer>

      {!loading && !customLoading && data && data.getProjectsByIds.length > 0 ? (
        <ProjectList
          initialList={folder ? data.getProjectsByIds : []}
          initialRefetch={(projects) => onRefetch(folder, projects)}
          eliminable
          layout
        />
      ) : loading || customLoading ? (
        <Loader style={{ height: 'auto' }}>
          <Spinner />
        </Loader>
      ) : (
        <CentralAlert>В этой папке нет проектов</CentralAlert>
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
    if (!user) return null
    switch (currentPage.value) {
      case '/projects':
        return <Projects variables={{ author: user.email }} projects={user.projects} />
      case '/liked':
        return <Projects variables={{ rating: user.email }} projects={user.likedProjects} />
      default:
        return <InProgress />
    }
  }, [user, currentPage])

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
            user: user?.email,
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
      query: queries.GET_CATEGORIES
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
