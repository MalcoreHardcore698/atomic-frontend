import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useRouter } from 'next/router'
import styled, { css } from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { useLazyQuery } from '@apollo/react-hooks'

import Row from '../atomic-ui/components/Row'
import Column from '../atomic-ui/components/Column'
import Switch from '../atomic-ui/components/Switch'
import Alert from '../atomic-ui/components/Alert'
import Icon from '../atomic-ui/components/Icon'
import Difinition from '../atomic-ui/components/Difinition'
import DatePicker from '../atomic-ui/components/DatePicker'
import Select from '../atomic-ui/components/Select'
import Button from '../atomic-ui/components/Button'
import Spinner from '../atomic-ui/components/Spinner'
import Tooltip from '../atomic-ui/components/Tooltip'
import { Wrap as WrapText } from '../atomic-ui/components/Text'
import templates from '../atomic-ui/components/Table/templates'
import { hasAccess } from '../atomic-ui/utils/functions'

import { initializeApollo } from '../apollo'
import { useHelper } from '../hooks/useHelper'
import DefaultLayout from '../layouts/default'
import UserBar from '../components/UserBar'
import FilterBar from '../components/FilterBar'
import SearchBar from '../components/SearchBar'
import ProjectList from '../components/ProjectList'
import ArticleList from '../components/ArticleList'
import { hasResponsibleMember } from '../components/Members'
import { Loader } from '../components/Styled'

import { setUserFolder } from '../store/actions/user'
import { setFolder, setCompanies, setCategories, setStatuses } from '../store/actions/root'
import {
  onUserClientEdit,
  onUserAboutMore,
  onUserFolderAdd,
  onUserFolderDelete,
  onUserMembers,
  onUserLink
} from '../store/helpers/user'
import { onProjectCreate } from '../store/helpers/project'
import { onArticleCreate } from '../store/helpers/article'
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

const Articles = ({ variables }) => <ArticleList variables={variables} layout />

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

const Profile = () => {
  const recall = useHelper()
  const router = useRouter()
  const { user, companies, categories, statuses } = useSelector((state) => ({
    user: state.user,
    companies: state.root.companies,
    categories: state.root.categories,
    statuses: state.root.statuses
  }))
  const dispatch = useDispatch()
  const [date, onChangeDate] = useState()
  const [select, onChangeSelect] = useState()
  const [currentPage, setCurrentPage] = useState(profilePages[0])
  const [visibleFilter, setVisibleFilter] = useState(false)
  const isAdmin = useMemo(() => user?.account === 'ADMIN', [user])

  const [loadCompanies] = useLazyQuery(queries.GET_USERS)
  const [loadCategories] = useLazyQuery(queries.GET_CATEGORIES)
  const [loadStatuses] = useLazyQuery(queries.GET_POST_STATUSES)

  const isProjects = useMemo(() => currentPage.value === '/projects', [currentPage])
  const isArticles = useMemo(() => currentPage.value === '/articles', [currentPage])

  const addProject = async () => {
    const companiesResponse =
      companies?.length === 0 &&
      loadCompanies &&
      (await loadCompanies({ variables: { account: ['ENTITY'] } }))
    const categoriesResponse =
      categories?.length === 0 &&
      loadCategories &&
      (await loadCategories({ variables: { type: 'DIVISION' } }))
    const statusesResponse = statuses?.length === 0 && loadStatuses && (await loadStatuses())

    const companiesResult = companiesResponse?.data?.getUsers
    const categoriesResult = categoriesResponse?.data?.getCategories
    const statusesResult = statusesResponse?.data?.getPostStatus

    if (companiesResult) dispatch(setCompanies(companiesResult))
    if (categoriesResult) dispatch(setCategories(categoriesResult))
    if (statusesResult) dispatch(setStatuses(statusesResult))

    recall(onProjectCreate, {
      companies: companiesResult || companies,
      categories: categoriesResult || categories,
      statuses: statusesResult || statuses,
      mutation: queries.CREATE_PROJECT,
      query: queries.GET_USERS,
      isPurpose: true
    })()
  }

  const addArticle = async () => {
    const categoriesResponse =
      categories?.length === 0 &&
      loadCategories &&
      (await loadCategories({ variables: { type: 'DIVISION' } }))
    const statusesResponse = statuses?.length === 0 && loadStatuses && (await loadStatuses())

    const categoriesResult = categoriesResponse?.data?.getCategories
    const statusesResult = statusesResponse?.data?.getPostStatus

    if (categoriesResult) dispatch(setCategories(categoriesResult))
    if (statusesResult) dispatch(setStatuses(statusesResult))

    recall(onArticleCreate, {
      categories: categoriesResult || categories,
      statuses: statusesResult || statuses,
      mutation: queries.CREATE_ARTICLE,
      isPurpose: true
    })()
  }

  const renderContentPage = useCallback(() => {
    if (!user) return null
    switch (currentPage.value) {
      case '/projects':
        return <Projects variables={{ author: user.email }} projects={user.projects} />
      case '/liked':
        return <Projects variables={{ rating: user.email }} projects={user.likedProjects} />
      case '/articles':
        return <Articles variables={{ author: user.email }} />
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
          onCompanyLink={
            user?.company &&
            recall(onUserLink, {
              id: user?.company?.email,
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
          onMembers={recall(onUserMembers, { id: user?.email, auth: user?.email })}
        />

        <Switch
          defaultValue={currentPage}
          options={profilePages.filter((page) =>
            !hasResponsibleMember(user) ? page.value !== '/articles' : true
          )}
          onChange={(item) => setCurrentPage(item)}
          stretch
        />

        <SearchBar
          buttonCreateText={
            isProjects ? 'Предложить проект' : isArticles ? 'Предложить статью' : ''
          }
          onCreate={
            (isProjects && hasAccess(user, 'PURPOSE_PROJECT') && addProject) ||
            (isArticles && hasAccess(user, 'PURPOSE_ARTICLE') && addArticle)
          }
          onChangeFilter={() => setVisibleFilter(!visibleFilter)}
        />

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
              options={[].map((category) => ({
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
